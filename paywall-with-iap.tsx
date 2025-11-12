/**
 * PAYWALL COM INTEGRAÇÃO REAL DE GOOGLE PLAY BILLING
 * 
 * Este arquivo substitui o paywall.tsx atual com integração real
 * 
 * PARA USAR:
 * 1. Renomeie o paywall.tsx atual para paywall-old.tsx
 * 2. Renomeie este arquivo para paywall.tsx
 * 3. Crie as assinaturas no Google Play Console primeiro!
 */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Check,
  Crown,
  Zap,
  Heart,
  TrendingUp,
  Shield,
  Sparkles,
  AlertCircle,
} from "lucide-react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";
import { useProfile } from "@/contexts/ProfileContext";
import * as RNIap from 'react-native-iap';

interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  period: string;
  pricePerMonth: number;
  savings?: string;
  popular?: boolean;
  features: string[];
  productId: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "monthly",
    title: "Mensal",
    subtitle: "Ideal para começar",
    price: 27,
    period: "mês",
    pricePerMonth: 27,
    productId: "com.lactosefree.monthly",
    features: [
      "3 dias grátis de experiência",
      "Acesso ilimitado a todas as receitas",
      "Novos conteúdos semanais",
      "Scanner de produtos",
      "Gerador de receitas com IA",
      "Nutricionista virtual 24/7",
      "Cancelamento a qualquer momento",
    ],
  },
  {
    id: "annual",
    title: "Anual",
    subtitle: "Melhor custo-benefício",
    price: 97,
    period: "ano",
    pricePerMonth: 8.08,
    savings: "Economize R$ 227",
    popular: true,
    productId: "com.lactosefree.annual",
    features: [
      "3 dias grátis de experiência",
      "Todos os benefícios do plano mensal",
      "Suporte prioritário",
      "Acesso antecipado a novos recursos",
      "Planos personalizados",
    ],
  },
];

export default function PaywallScreen() {
  const insets = useSafeAreaInsets();
  const { completeSubscription, profile } = useProfile();
  const [selectedPlan, setSelectedPlan] = useState<string>("annual");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [billingError, setBillingError] = useState<string | null>(null);
  const [availableProducts, setAvailableProducts] = useState<any[]>([]);
  
  const scaleAnim = useState(new Animated.Value(1))[0];

  // Inicializar IAP
  useEffect(() => {
    initializeBilling();
    
    return () => {
      RNIap.endConnection();
    };
  }, []);

  const initializeBilling = async () => {
    try {
      console.log("🔧 Inicializando Google Play Billing...");
      
      if (Platform.OS === "android") {
        // Conectar ao billing
        await RNIap.initConnection();
        console.log("✅ Conexão estabelecida");
        
        // Buscar produtos
        const productIds = pricingPlans.map(plan => plan.productId);
        const products = await RNIap.getSubscriptions({ skus: productIds });
        
        console.log("📦 Produtos disponíveis:", products);
        setAvailableProducts(products);
        
        // Configurar listeners
        setupPurchaseListeners();
        
        setBillingError(null);
      } else {
        console.log("🌐 Plataforma não Android - usando simulação");
      }
    } catch (error: any) {
      console.error("❌ Erro ao inicializar billing:", error);
      setBillingError("Não foi possível conectar com a loja. Tente novamente.");
    } finally {
      setIsInitializing(false);
    }
  };

  const setupPurchaseListeners = () => {
    // Listener para atualizações de compras
    const purchaseUpdateSubscription = RNIap.purchaseUpdatedListener(
      async (purchase) => {
        console.log("🔔 Compra atualizada:", purchase);
        
        try {
          const receipt = purchase.transactionReceipt;
          
          if (receipt) {
            // Validar compra (em produção, faça isso no servidor!)
            console.log("✅ Compra recebida, processando...");
            
            // Finalizar transação
            if (Platform.OS === 'android') {
              await RNIap.acknowledgePurchaseAndroid({
                token: purchase.purchaseToken!,
              });
            } else {
              await RNIap.finishTransaction({ purchase, isConsumable: false });
            }
            
            console.log("✅ Transação finalizada");
            
            // Ativar assinatura
            await completeSubscription();
            
            Alert.alert(
              "🎉 Assinatura Ativada!",
              "Bem-vindo ao LacNutry Premium!",
              [{ text: "Começar", onPress: () => router.replace("/(tabs)") }]
            );
          }
        } catch (error) {
          console.error("❌ Erro ao processar compra:", error);
          setBillingError("Erro ao processar compra");
        } finally {
          setIsProcessing(false);
        }
      }
    );

    // Listener para erros
    const purchaseErrorSubscription = RNIap.purchaseErrorListener(
      (error) => {
        console.warn("⚠️ Erro na compra:", error);
        
        if (error.code !== 'E_USER_CANCELLED') {
          Alert.alert(
            "Erro na compra",
            "Não foi possível processar sua assinatura. Tente novamente."
          );
          setBillingError(error.message);
        }
        
        setIsProcessing(false);
      }
    );

    return () => {
      purchaseUpdateSubscription.remove();
      purchaseErrorSubscription.remove();
    };
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleSubscribe = async (planId: string) => {
    setIsProcessing(true);
    setBillingError(null);
    
    try {
      const plan = pricingPlans.find(p => p.id === planId);
      
      if (!plan) {
        throw new Error("Plano não encontrado");
      }

      console.log(`💳 Iniciando compra: ${plan.title}`);
      console.log(`📦 Product ID: ${plan.productId}`);
      
      if (Platform.OS === "android") {
        // Buscar o produto
        const products = await RNIap.getSubscriptions({
          skus: [plan.productId]
        });
        
        const product = products.find(p => p.productId === plan.productId);
        
        if (!product) {
          throw new Error("Produto não encontrado na Google Play Store. Verifique se criou as assinaturas no Console.");
        }

        console.log("📱 Produto encontrado:", product);
        
        // Iniciar compra
        await RNIap.requestSubscription({
          sku: plan.productId,
          ...(product.subscriptionOfferDetails && {
            subscriptionOffers: [
              {
                sku: plan.productId,
                offerToken: product.subscriptionOfferDetails[0]?.offerToken || ''
              }
            ]
          })
        });
        
        console.log("✅ Solicitação de compra enviada");
        
      } else {
        // Simulação para outras plataformas
        console.log("🌐 Simulando compra para desenvolvimento");
        await new Promise(resolve => setTimeout(resolve, 1500));
        await completeSubscription();
        router.replace("/(tabs)");
      }
    } catch (error: any) {
      console.error("❌ Erro ao processar compra:", error);
      
      let errorMessage = "Não foi possível processar sua assinatura.";
      
      if (error.message.includes("não encontrado")) {
        errorMessage = "⚠️ Assinatura não encontrada. Você criou os produtos no Google Play Console?";
      }
      
      setBillingError(errorMessage);
      
      Alert.alert("Erro na compra", errorMessage, [{ text: "OK" }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRestorePurchases = async () => {
    try {
      console.log("🔄 Restaurando compras...");
      setIsProcessing(true);

      const purchases = await RNIap.getAvailablePurchases();
      
      if (purchases.length === 0) {
        Alert.alert(
          "Sem compras",
          "Nenhuma assinatura ativa foi encontrada nesta conta."
        );
        return;
      }

      console.log("✅ Compras encontradas:", purchases);
      
      await completeSubscription();
      
      Alert.alert(
        "✅ Restaurado!",
        "Suas compras foram restauradas com sucesso."
      );
      
    } catch (error) {
      console.error("❌ Erro ao restaurar:", error);
      Alert.alert(
        "Erro",
        "Não foi possível restaurar suas compras. Tente novamente."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  if (isInitializing) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Carregando opções de pagamento...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top }]}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={[Colors.primary, Colors.primaryDark]}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <View style={styles.crownContainer}>
              <Crown color={Colors.white} size={48} />
            </View>
            <Text style={styles.headerTitle}>Bem-vindo, {profile.name}!</Text>
            <Text style={styles.headerSubtitle}>
              Escolha seu plano e comece sua jornada sem lactose agora mesmo!
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.benefitsContainer}>
          <Text style={styles.benefitsTitle}>O que você vai conquistar:</Text>
          
          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <View style={styles.benefitIconContainer}>
                <Zap color={Colors.primary} size={24} />
              </View>
              <View style={styles.benefitTextContainer}>
                <Text style={styles.benefitItemTitle}>Receitas Ilimitadas</Text>
                <Text style={styles.benefitItemText}>
                  Acesso completo ao nosso catálogo de receitas sem lactose
                </Text>
              </View>
            </View>

            <View style={styles.benefitItem}>
              <View style={styles.benefitIconContainer}>
                <Heart color={Colors.primary} size={24} />
              </View>
              <View style={styles.benefitTextContainer}>
                <Text style={styles.benefitItemTitle}>Vida Sem Desconforto</Text>
                <Text style={styles.benefitItemText}>
                  Diga adeus aos sintomas e viva com mais liberdade
                </Text>
              </View>
            </View>

            <View style={styles.benefitItem}>
              <View style={styles.benefitIconContainer}>
                <TrendingUp color={Colors.primary} size={24} />
              </View>
              <View style={styles.benefitTextContainer}>
                <Text style={styles.benefitItemTitle}>Suporte Inteligente</Text>
                <Text style={styles.benefitItemText}>
                  IA personalizada para suas necessidades nutricionais
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.plansContainer}>
          {pricingPlans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            
            return (
              <TouchableOpacity
                key={plan.id}
                style={[
                  styles.planCard,
                  isSelected && styles.planCardSelected,
                  plan.popular && styles.planCardPopular,
                ]}
                onPress={() => handlePlanSelect(plan.id)}
                activeOpacity={0.9}
              >
                {plan.popular && (
                  <View style={styles.popularBadge}>
                    <Sparkles color={Colors.white} size={14} />
                    <Text style={styles.popularBadgeText}>MAIS POPULAR</Text>
                  </View>
                )}

                <View style={styles.planHeader}>
                  <View>
                    <Text style={[styles.planTitle, isSelected && styles.planTitleSelected]}>
                      {plan.title}
                    </Text>
                    <Text style={[styles.planSubtitle, isSelected && styles.planSubtitleSelected]}>
                      {plan.subtitle}
                    </Text>
                  </View>
                  
                  <View style={[styles.planCheckbox, isSelected && styles.planCheckboxSelected]}>
                    {isSelected && <Check color={Colors.white} size={20} />}
                  </View>
                </View>

                <View style={styles.planPricing}>
                  <View style={styles.planPriceRow}>
                    <Text style={[styles.planPrice, isSelected && styles.planPriceSelected]}>
                      R$ {plan.price}
                    </Text>
                    <Text style={[styles.planPeriod, isSelected && styles.planPeriodSelected]}>
                      /{plan.period}
                    </Text>
                  </View>
                  
                  {plan.savings && (
                    <View style={styles.savingsBadge}>
                      <Text style={styles.savingsText}>{plan.savings}</Text>
                    </View>
                  )}
                  
                  <Text style={[styles.planPerMonth, isSelected && styles.planPerMonthSelected]}>
                    R$ {plan.pricePerMonth.toFixed(2)}/mês
                  </Text>
                </View>

                <View style={styles.planFeatures}>
                  {plan.features.map((feature, index) => (
                    <View key={index} style={styles.planFeature}>
                      <Check color={isSelected ? Colors.primary : Colors.success} size={18} />
                      <Text style={[styles.planFeatureText, isSelected && styles.planFeatureTextSelected]}>
                        {feature}
                      </Text>
                    </View>
                  ))}
                </View>

                <TouchableOpacity
                  style={[styles.planSubscribeButton, isProcessing && styles.planSubscribeButtonDisabled]}
                  onPress={() => handleSubscribe(plan.id)}
                  disabled={isProcessing}
                >
                  <LinearGradient
                    colors={[Colors.primary, Colors.primaryDark]}
                    style={styles.planSubscribeButtonGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text style={styles.planSubscribeButtonText}>
                      {isProcessing ? "Processando..." : `Assinar ${plan.title}`}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.guaranteeContainer}>
          <Shield color={Colors.success} size={32} />
          <View style={styles.guaranteeTextContainer}>
            <Text style={styles.guaranteeTitle}>Garantia de 7 dias</Text>
            <Text style={styles.guaranteeText}>
              Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas.
            </Text>
          </View>
        </View>

        {billingError && (
          <View style={styles.errorContainer}>
            <AlertCircle color={Colors.error} size={20} />
            <Text style={styles.errorText}>{billingError}</Text>
          </View>
        )}

        <TouchableOpacity 
          style={styles.restoreButton}
          onPress={handleRestorePurchases}
          disabled={isProcessing}
        >
          <Text style={styles.restoreButtonText}>Restaurar Compras</Text>
        </TouchableOpacity>

        <Text style={styles.footerDisclaimer}>
          Ao assinar, você concorda com nossos Termos de Uso e Política de Privacidade
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 16,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 32,
    marginBottom: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerContent: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  crownContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700" as const,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
    opacity: 0.9,
    lineHeight: 22,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  benefitsContainer: {
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  benefitsTitle: {
    fontSize: 20,
    fontWeight: "700" as const,
    color: Colors.text,
    marginBottom: 16,
  },
  benefitsList: {
    gap: 16,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
  },
  benefitIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  benefitTextContainer: {
    flex: 1,
  },
  benefitItemTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: Colors.text,
    marginBottom: 4,
  },
  benefitItemText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  plansContainer: {
    gap: 16,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  planCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    borderWidth: 2,
    borderColor: Colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  planCardSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  planCardPopular: {
    borderColor: Colors.primary,
  },
  popularBadge: {
    position: "absolute",
    top: -12,
    right: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  popularBadgeText: {
    fontSize: 11,
    fontWeight: "700" as const,
    color: Colors.white,
    letterSpacing: 0.5,
  },
  planHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: "700" as const,
    color: Colors.text,
    marginBottom: 4,
  },
  planTitleSelected: {
    color: Colors.primary,
  },
  planSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  planSubtitleSelected: {
    color: Colors.primary,
  },
  planCheckbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  planCheckboxSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  planPricing: {
    marginBottom: 20,
  },
  planPriceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 8,
  },
  planPrice: {
    fontSize: 40,
    fontWeight: "700" as const,
    color: Colors.text,
  },
  planPriceSelected: {
    color: Colors.primary,
  },
  planPeriod: {
    fontSize: 18,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  planPeriodSelected: {
    color: Colors.primary,
  },
  savingsBadge: {
    backgroundColor: Colors.success,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  savingsText: {
    fontSize: 13,
    fontWeight: "600" as const,
    color: Colors.white,
  },
  planPerMonth: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  planPerMonthSelected: {
    color: Colors.primary,
    fontWeight: "600" as const,
  },
  planFeatures: {
    gap: 12,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  planFeature: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  planFeatureText: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },
  planFeatureTextSelected: {
    fontWeight: "500" as const,
  },
  guaranteeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: Colors.successLight,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.success,
    marginHorizontal: 20,
    marginBottom: 24,
  },
  guaranteeTextContainer: {
    flex: 1,
  },
  guaranteeTitle: {
    fontSize: 16,
    fontWeight: "700" as const,
    color: Colors.text,
    marginBottom: 4,
  },
  guaranteeText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: Colors.errorLight,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.error,
    marginTop: 16,
    marginHorizontal: 20,
  },
  errorText: {
    flex: 1,
    fontSize: 14,
    color: Colors.error,
    fontWeight: "600" as const,
  },
  planSubscribeButton: {
    borderRadius: 24,
    overflow: "hidden",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  planSubscribeButtonDisabled: {
    opacity: 0.6,
  },
  planSubscribeButtonGradient: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  planSubscribeButtonText: {
    fontSize: 16,
    fontWeight: "700" as const,
    color: Colors.white,
  },
  restoreButton: {
    alignItems: "center",
    paddingVertical: 16,
    marginHorizontal: 20,
    marginTop: 16,
  },
  restoreButtonText: {
    fontSize: 15,
    fontWeight: "600" as const,
    color: Colors.primary,
  },
  footerDisclaimer: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 16,
    marginTop: 24,
    marginHorizontal: 20,
    paddingBottom: 20,
  },
});

