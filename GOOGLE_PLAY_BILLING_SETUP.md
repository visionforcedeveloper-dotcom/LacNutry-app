# 📱 Guia de Integração Google Play Billing

## ✅ Status Atual da Logo
A logo foi **removida com sucesso** da tela de welcome/onboarding.

---

## 📊 Status Atual do Google Play Billing

### ❌ O que está FALTANDO:

1. **Nenhuma dependência de billing instalada**
   - O projeto NÃO possui bibliotecas de pagamento in-app
   - O código atual no `paywall.tsx` apenas simula compras

2. **Configurações ausentes:**
   - ❌ Arquivo `eas.json` não existe
   - ❌ Nenhuma configuração de Product IDs real
   - ❌ Sem integração com Google Play Billing Library

---

## 🚀 Como Integrar com Google Play Console

### **Passo 1: Instalar Dependência de Billing**

Você tem 2 opções principais:

#### Opção A: react-native-iap (Recomendado)
```bash
bun add react-native-iap
npx expo prebuild
```

#### Opção B: expo-in-app-purchases
```bash
bunx expo install expo-in-app-purchases
```

#### Opção C: RevenueCat (Mais completo - pago)
```bash
bun add react-native-purchases
```

---

### **Passo 2: Configurar Product IDs no Google Play Console**

1. Acesse: [Google Play Console](https://play.google.com/console)
2. Selecione seu app (precisa ter o app publicado/em teste interno)
3. Vá em: **Monetização → Produtos → Assinaturas**
4. Crie os produtos:

**Produto Mensal:**
- Product ID: `com.lactosefree.monthly` (já está no código)
- Preço: R$ 27,00
- Período: 1 mês
- Trial: 3 dias grátis

**Produto Anual:**
- Product ID: `com.lactosefree.annual` (já está no código)
- Preço: R$ 97,00
- Período: 1 ano
- Trial: 3 dias grátis

---

### **Passo 3: Criar arquivo `eas.json`**

Na raiz do projeto, crie o arquivo:

```json
{
  "cli": {
    "version": ">= 13.2.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "aab"
      }
    }
  },
  "submit": {
    "production": {
      "android": {
        "serviceAccountKeyPath": "./google-play-service-account.json",
        "track": "internal"
      }
    }
  }
}
```

---

### **Passo 4: Configurar Service Account do Google Play**

1. Acesse: [Google Cloud Console](https://console.cloud.google.com)
2. Crie um Service Account
3. Baixe o arquivo JSON
4. Salve como `google-play-service-account.json` (não commite!)
5. Adicione ao `.gitignore`:
```
google-play-service-account.json
```

---

### **Passo 5: Atualizar app.json**

Adicione ao `app.json`:

```json
{
  "expo": {
    "android": {
      "googleServicesFile": "./google-services.json",
      "config": {
        "googleMaps": {
          "apiKey": "SEU_API_KEY"
        }
      },
      "versionCode": 1
    }
  }
}
```

---

### **Passo 6: Atualizar paywall.tsx**

O arquivo `paywall.tsx` atual apenas **simula** compras. Você precisará integrar com a biblioteca escolhida.

**Exemplo com react-native-iap:**

```typescript
import * as RNIap from 'react-native-iap';

// No useEffect
useEffect(() => {
  initializeIAP();
}, []);

const initializeIAP = async () => {
  try {
    await RNIap.initConnection();
    const products = await RNIap.getSubscriptions({
      skus: ['com.lactosefree.monthly', 'com.lactosefree.annual']
    });
    console.log('Produtos disponíveis:', products);
  } catch (err) {
    console.warn(err);
  }
};

const handleSubscribe = async (productId: string) => {
  try {
    await RNIap.requestSubscription({
      sku: productId,
      ...(Platform.OS === 'android' && {
        subscriptionOffers: [
          { sku: productId, offerToken: 'base-plan-token' }
        ]
      })
    });
  } catch (err) {
    console.warn(err);
  }
};
```

---

## 📝 Checklist de Integração

- [ ] Instalar biblioteca de billing
- [ ] Criar produtos no Google Play Console
- [ ] Configurar Service Account
- [ ] Criar arquivo `eas.json`
- [ ] Atualizar código do `paywall.tsx`
- [ ] Testar em modo interno
- [ ] Configurar webhooks para validação server-side
- [ ] Implementar restore purchases
- [ ] Adicionar tratamento de erros

---

## 🔒 Segurança

**IMPORTANTE:** Para produção, você DEVE:

1. ✅ Validar compras no servidor (backend)
2. ✅ Usar Google Play Developer API
3. ✅ Implementar webhook para notificações
4. ✅ Nunca confiar apenas no cliente

**Exemplo de validação server-side:**
```typescript
// backend/trpc/routes/subscriptions/verify-purchase/route.ts
import { google } from 'googleapis';

export async function verifyPurchase(purchaseToken: string, productId: string) {
  const androidPublisher = google.androidpublisher('v3');
  
  const result = await androidPublisher.purchases.subscriptions.get({
    packageName: 'app.rork.lacnutry_app',
    subscriptionId: productId,
    token: purchaseToken
  });
  
  return result.data;
}
```

---

## 📚 Documentação Oficial

- [Google Play Billing](https://developer.android.com/google/play/billing)
- [react-native-iap](https://github.com/dooboolab-community/react-native-iap)
- [Expo EAS Build](https://docs.expo.dev/build/introduction/)
- [Google Play Developer API](https://developers.google.com/android-publisher)

---

## 💡 Resumo

**SITUAÇÃO ATUAL:** 
- ❌ Nenhuma integração real com Google Play Billing
- ✅ UI do paywall pronta
- ✅ Product IDs definidos no código
- ❌ Apenas simulação de compras

**PRÓXIMOS PASSOS:**
1. Instalar `react-native-iap`
2. Criar produtos no Google Play Console
3. Configurar EAS Build
4. Implementar integração real no código
5. Testar com usuários de teste interno

**TEMPO ESTIMADO:** 2-4 horas de desenvolvimento + tempo de aprovação do Google (1-3 dias)

