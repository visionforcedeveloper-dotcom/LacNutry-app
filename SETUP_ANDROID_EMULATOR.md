# 📱 Como Configurar Emulador Android

## Erro que você está vendo:
```
CommandError: No Android connected device found, and no emulators could be started automatically.
```

## ✅ Solução 1: Usar Expo Go (RÁPIDO - para testar sem billing)

```bash
# No terminal, execute:
npm start
# ou
bunx expo start
```

Então:
1. Baixe **Expo Go** no seu celular (Google Play Store)
2. Escaneie o QR Code
3. App abrirá no Expo Go

⚠️ **Limitação:** Billing/IAP NÃO funciona no Expo Go!

---

## 🎯 Solução 2: Instalar Android Studio + Emulador

### Passo 1: Instalar Android Studio

1. Baixe: https://developer.android.com/studio
2. Execute o instalador
3. Siga o wizard de instalação
4. ✅ Marque: "Android Virtual Device"

### Passo 2: Configurar SDK

1. Abra Android Studio
2. Vá em: **Tools → SDK Manager**
3. Em **SDK Platforms**, instale:
   - ✅ Android 13 (Tiramisu) - API 33
   - ✅ Android 12 (S) - API 31
   
4. Em **SDK Tools**, instale:
   - ✅ Android SDK Build-Tools
   - ✅ Android SDK Platform-Tools
   - ✅ Android Emulator
   - ✅ Intel x86 Emulator Accelerator (HAXM)

### Passo 3: Configurar Variáveis de Ambiente

1. Pressione **Windows + R** → digite `sysdm.cpl` → Enter
2. Vá em **Avançado → Variáveis de Ambiente**
3. Em **Variáveis do Sistema**, clique em **Novo**:

**Nome:** `ANDROID_HOME`
**Valor:** `C:\Users\joaov\AppData\Local\Android\Sdk`

4. Edite a variável **Path** e adicione:
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\emulator`
   - `%ANDROID_HOME%\tools`
   - `%ANDROID_HOME%\tools\bin`

5. Clique OK em tudo

### Passo 4: Criar Emulador (AVD)

1. No Android Studio, vá em: **Tools → Device Manager**
2. Clique em **Create Device**
3. Escolha um dispositivo: **Pixel 5** (recomendado)
4. Clique **Next**
5. Escolha uma imagem: **Tiramisu (API 33)**
6. Se não instalou, clique em **Download** ao lado
7. Clique **Next** → **Finish**

### Passo 5: Iniciar Emulador

**Opção A - Pelo Android Studio:**
1. Abra **Device Manager**
2. Clique no ▶️ ao lado do seu emulador

**Opção B - Pelo Terminal:**
```bash
# Listar emuladores disponíveis
emulator -list-avds

# Iniciar o emulador
emulator -avd Pixel_5_API_33
```

### Passo 6: Verificar Conexão

```bash
# No PowerShell, execute:
adb devices
```

Deve mostrar algo como:
```
List of devices attached
emulator-5554   device
```

### Passo 7: Rodar o App

```bash
# Agora sim você pode rodar:
npx expo run:android
```

---

## 🚀 Solução 3: Usar seu celular físico

### Habilitar Modo Desenvolvedor:

1. Vá em **Configurações → Sobre o telefone**
2. Toque 7 vezes em **Número da versão**
3. Volte e entre em **Opções do desenvolvedor**
4. Ative:
   - ✅ **Opções do desenvolvedor**
   - ✅ **Depuração USB**

### Conectar ao PC:

1. Conecte o celular no PC via USB
2. No celular, autorize a depuração USB
3. No terminal:
```bash
adb devices
```

4. Deve aparecer seu dispositivo

5. Agora rode:
```bash
npx expo run:android
```

---

## 🔍 Verificar se está tudo OK:

```bash
# Verificar se Android SDK está instalado
where adb

# Verificar dispositivos
adb devices

# Verificar variável de ambiente
echo %ANDROID_HOME%
```

---

## ⚡ Solução 4: EAS Build (Para testar billing real)

Para testar **Google Play Billing**, você precisa de um build assinado:

```bash
# Instalar EAS CLI
npm install -g eas-cli

# Fazer login
eas login

# Configurar projeto
eas build:configure

# Criar build para Android (APK para teste)
eas build --platform android --profile preview

# Ou AAB para publicar
eas build --platform android --profile production
```

O EAS vai:
1. Fazer build na nuvem
2. Gerar um APK/AAB
3. Você baixa e instala no celular

---

## 📝 Resumo dos Comandos

```bash
# Para desenvolvimento (sem billing)
npm start  # Usa Expo Go

# Para build nativo local (precisa de emulador/device)
npx expo run:android

# Para build na nuvem (recomendado para billing)
eas build --platform android --profile preview
```

---

## ❓ Qual opção escolher?

| Opção | Quando usar | Suporta Billing? |
|-------|-------------|------------------|
| Expo Go | Desenvolvimento rápido | ❌ Não |
| Emulador | Desenvolvimento completo | ⚠️ Limitado |
| Device físico | Testes reais | ✅ Sim (em modo dev) |
| EAS Build | Produção/Teste final | ✅ Sim |

---

## 🎯 Recomendação:

1. **Agora (desenvolvimento):** Use `npm start` + Expo Go
2. **Quando precisar testar billing:** Use EAS Build
3. **Para produção:** Use EAS Build + Google Play Console

---

## 🆘 Problemas Comuns:

### "adb not found"
```bash
# Adicione às variáveis de ambiente:
C:\Users\joaov\AppData\Local\Android\Sdk\platform-tools
```

### "emulator: ERROR: x86 emulation currently requires hardware acceleration!"
- Instale HAXM: `C:\Users\joaov\AppData\Local\Android\Sdk\extras\intel\Hardware_Accelerated_Execution_Manager\intelhaxm-android.exe`

### Emulador muito lento
- Use uma imagem x86/x86_64 (não ARM)
- Aloque mais RAM nas configurações do AVD
- Habilite "Graphics: Hardware" nas configurações

---

## 📚 Links Úteis:

- [Expo - Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [Android Developer - USB Debugging](https://developer.android.com/studio/run/device.html)

