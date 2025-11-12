/**
 * EXEMPLO DE INTEGRAÇÃO COM GOOGLE PLAY BILLING
 * 
 * Este arquivo mostra como integrar o react-native-iap no paywall.tsx
 * 
 * INSTALAÇÃO:
 * bun add react-native-iap
 * npx expo prebuild
 * npx expo run:android
 */

import React, { useState, useEffect } from "react";
import { Platform, Alert } from "react-native";
import * as RNIap from 'react-native-iap';

// Product IDs que já estão definidos no seu paywall.tsx
const PRODUCT_IDS = {
  MONTHLY: 'com.lactosefree.monthly',
  ANNUAL: 'com.lactosefree.annual'
};

// Tipos
interface Subscription {
  productId: string;
  title: string;
  description: string;
  price: string;
  currency: string;
  localizedPrice: string;
}

export default function BillingIntegrationExample() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // 1. INICIALIZAR CONEXÃO COM BILLING
  useEffect(() => {
    initializeIAP();
    
    // Cleanup ao desmontar
    return () => {
      RNIap.endConnection();
    };
  }, []);

  const initializeIAP = async () => {
    try {
      console.log('🔧 Inicializando IAP...');
      
      // Conectar ao billing
      await RNIap.initConnection();
      console.log('✅ IAP conectado');
      
      // Buscar produtos disponíveis
      await loadProducts();
      
      // Configurar listeners de compras
      setupPurchaseListeners();
      
      setIsInitialized(true);
    } catch (error) {
      console.error('❌ Erro ao inicializar IAP:', error);
      Alert.alert(
        'Erro',
        'Não foi possível conectar com a loja. Tente novamente mais tarde.'
      );
    }
  };

  // 2. CARREGAR PRODUTOS DA LOJA
  const loadProducts = async () => {
    try {
      console.log('📦 Carregando produtos...');
      
      const products = await RNIap.getSubscriptions({
        skus: [PRODUCT_IDS.MONTHLY, PRODUCT_IDS.ANNUAL]
      });
      
      console.log('✅ Produtos carregados:', products);
      setSubscriptions(products as Subscription[]);
      
    } catch (error) {
      console.error('❌ Erro ao carregar produtos:', error);
    }
  };

  // 3. CONFIGURAR LISTENERS DE COMPRAS
  const setupPurchaseListeners = () => {
    // Listener para atualizações de compras
    const purchaseUpdateSubscription = RNIap.purchaseUpdatedListener(
      async (purchase) => {
        console.log('🔔 Compra atualizada:', purchase);
        
        try {
          // Verificar o recibo
          const receipt = purchase.transactionReceipt;
          
          if (receipt) {
            // IMPORTANTE: Validar no servidor!
            await validatePurchaseOnServer(purchase);
            
            // Finalizar a transação
            if (Platform.OS === 'android') {
              await RNIap.acknowledgePurchaseAndroid({
                token: purchase.purchaseToken!,
                developerPayload: purchase.developerPayloadAndroid
              });
            } else {
              await RNIap.finishTransaction({
                purchase,
                isConsumable: false
              });
            }
            
            console.log('✅ Compra finalizada com sucesso');
            
            // Atualizar o estado do usuário
            await handleSuccessfulPurchase(purchase);
          }
        } catch (error) {
          console.error('❌ Erro ao processar compra:', error);
        }
      }
    );

    // Listener para erros
    const purchaseErrorSubscription = RNIap.purchaseErrorListener(
      (error) => {
        console.warn('⚠️ Erro na compra:', error);
        
        if (error.code !== 'E_USER_CANCELLED') {
          Alert.alert(
            'Erro na compra',
            'Não foi possível processar sua assinatura. Tente novamente.'
          );
        }
        
        setIsProcessing(false);
      }
    );

    // Cleanup
    return () => {
      purchaseUpdateSubscription.remove();
      purchaseErrorSubscription.remove();
    };
  };

  // 4. INICIAR COMPRA
  const handleSubscribe = async (productId: string) => {
    if (!isInitialized) {
      Alert.alert('Erro', 'Sistema de pagamento não inicializado');
      return;
    }

    setIsProcessing(true);

    try {
      console.log('💳 Iniciando compra:', productId);

      if (Platform.OS === 'android') {
        // Android - Precisa do offer token
        const offers = await RNIap.getSubscriptions({
          skus: [productId]
        });
        
        const product = offers.find(p => p.productId === productId);
        
        if (!product) {
          throw new Error('Produto não encontrado');
        }

        // Para Android 12+ (Billing 5.0+)
        await RNIap.requestSubscription({
          sku: productId,
          subscriptionOffers: [
            {
              sku: productId,
              offerToken: product.subscriptionOfferDetails?.[0]?.offerToken || ''
            }
          ]
        });
      } else {
        // iOS
        await RNIap.requestSubscription({
          sku: productId
        });
      }

      console.log('✅ Solicitação de compra enviada');
      
    } catch (error: any) {
      console.error('❌ Erro ao iniciar compra:', error);
      
      if (error.code !== 'E_USER_CANCELLED') {
        Alert.alert(
          'Erro',
          'Não foi possível iniciar a compra. Tente novamente.'
        );
      }
      
      setIsProcessing(false);
    }
  };

  // 5. VALIDAR COMPRA NO SERVIDOR (CRÍTICO!)
  const validatePurchaseOnServer = async (purchase: any) => {
    try {
      console.log('🔒 Validando compra no servidor...');
      
      // Chamar seu backend TRPC
      const response = await fetch('/api/trpc/subscriptions.verifyPurchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: Platform.OS,
          productId: purchase.productId,
          purchaseToken: purchase.purchaseToken,
          transactionReceipt: purchase.transactionReceipt,
          transactionId: purchase.transactionId,
        }),
      });

      const data = await response.json();
      
      if (!data.success) {
        throw new Error('Validação falhou no servidor');
      }
      
      console.log('✅ Compra validada no servidor');
      return true;
      
    } catch (error) {
      console.error('❌ Erro na validação:', error);
      throw error;
    }
  };

  // 6. PROCESSAR SUCESSO
  const handleSuccessfulPurchase = async (purchase: any) => {
    try {
      // Atualizar contexto do usuário
      // completeSubscription(); // Seu método do ProfileContext
      
      Alert.alert(
        '🎉 Assinatura Ativada!',
        'Bem-vindo ao LacNutry Premium! Aproveite todos os recursos.',
        [
          {
            text: 'Começar',
            onPress: () => {
              // router.replace('/(tabs)');
            }
          }
        ]
      );
      
    } catch (error) {
      console.error('❌ Erro ao processar sucesso:', error);
    }
  };

  // 7. RESTAURAR COMPRAS
  const handleRestorePurchases = async () => {
    try {
      console.log('🔄 Restaurando compras...');
      setIsProcessing(true);

      const purchases = await RNIap.getAvailablePurchases();
      
      if (purchases.length === 0) {
        Alert.alert(
          'Sem compras',
          'Nenhuma assinatura ativa foi encontrada nesta conta.'
        );
        return;
      }

      console.log('✅ Compras encontradas:', purchases);
      
      // Validar cada compra no servidor
      for (const purchase of purchases) {
        await validatePurchaseOnServer(purchase);
        await handleSuccessfulPurchase(purchase);
      }

      Alert.alert(
        '✅ Restaurado!',
        'Suas compras foram restauradas com sucesso.'
      );
      
    } catch (error) {
      console.error('❌ Erro ao restaurar:', error);
      Alert.alert(
        'Erro',
        'Não foi possível restaurar suas compras. Tente novamente.'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  // 8. VERIFICAR ASSINATURA ATIVA
  const checkActiveSubscription = async () => {
    try {
      const purchases = await RNIap.getAvailablePurchases();
      
      // Verificar se há assinatura ativa
      const hasActiveSubscription = purchases.some(purchase => {
        const isSubscription = [PRODUCT_IDS.MONTHLY, PRODUCT_IDS.ANNUAL]
          .includes(purchase.productId);
        return isSubscription;
      });

      return hasActiveSubscription;
      
    } catch (error) {
      console.error('❌ Erro ao verificar assinatura:', error);
      return false;
    }
  };

  return {
    subscriptions,
    isProcessing,
    isInitialized,
    handleSubscribe,
    handleRestorePurchases,
    checkActiveSubscription,
  };
}

/**
 * COMO USAR NO SEU PAYWALL.TSX:
 * 
 * 1. Importe o hook:
 *    import { BillingIntegrationExample } from './BILLING_INTEGRATION_EXAMPLE';
 * 
 * 2. Use no componente:
 *    const { subscriptions, handleSubscribe, isProcessing } = BillingIntegrationExample();
 * 
 * 3. Substitua o handleSubscribe atual pelo novo
 * 
 * 4. Adicione botão de restaurar compras:
 *    <TouchableOpacity onPress={handleRestorePurchases}>
 *      <Text>Restaurar Compras</Text>
 *    </TouchableOpacity>
 */

/**
 * BACKEND - VALIDAÇÃO NO SERVIDOR (routes/subscriptions/verify-purchase/route.ts)
 */
/*
import { z } from 'zod';
import { publicProcedure, router } from '../../trpc';
import { google } from 'googleapis';

export const subscriptionsRouter = router({
  verifyPurchase: publicProcedure
    .input(
      z.object({
        platform: z.enum(['android', 'ios']),
        productId: z.string(),
        purchaseToken: z.string(),
        transactionReceipt: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      if (input.platform === 'android') {
        // Validar no Google Play
        const androidPublisher = google.androidpublisher('v3');
        
        const result = await androidPublisher.purchases.subscriptions.get({
          packageName: 'app.rork.lacnutry_app',
          subscriptionId: input.productId,
          token: input.purchaseToken,
        });
        
        // Verificar se está ativa
        const isValid = result.data.expiryTimeMillis && 
                       parseInt(result.data.expiryTimeMillis) > Date.now();
        
        return { success: isValid, data: result.data };
        
      } else {
        // Validar no App Store (iOS)
        // Implementar validação com Apple
      }
    }),
});
*/

