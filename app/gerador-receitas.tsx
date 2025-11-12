import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Sparkles } from "lucide-react-native";
import { generateText } from "@rork-ai/toolkit-sdk";
import Colors from "@/constants/colors";

export default function RecipeGeneratorScreen() {
  const insets = useSafeAreaInsets();
  const [ingredients, setIngredients] = useState("");
  const [preferences, setPreferences] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!ingredients.trim()) {
      alert("Por favor, informe os ingredientes disponíveis");
      return;
    }

    try {
      setIsGenerating(true);
      const response = await generateText({
        messages: [
          {
            role: "user",
            content: `Crie uma receita sem lactose usando os seguintes ingredientes: ${ingredients}.\n\n${preferences ? `Preferências adicionais: ${preferences}` : ""}\n\nForneça uma receita completa com:\n- Nome da receita\n- Tempo de preparo\n- Ingredientes detalhados\n- Modo de preparo passo a passo\n- Dicas extras\n\nFormate de forma clara e organizada.`,
          },
        ],
      });

      setGeneratedRecipe(response);
    } catch (error) {
      console.error("Erro ao gerar receita:", error);
      alert("Erro ao gerar receita. Tente novamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setIngredients("");
    setPreferences("");
    setGeneratedRecipe(null);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Gerador de Receitas",
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.primary,
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView
          style={styles.content}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: insets.bottom + 20 },
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {!generatedRecipe ? (
            <>
              <View style={styles.header}>
                <View style={styles.iconContainer}>
                  <Sparkles size={32} color={Colors.primary} />
                </View>
                <Text style={styles.headerTitle}>
                  Crie Receitas Personalizadas
                </Text>
                <Text style={styles.headerSubtitle}>
                  Informe os ingredientes que você tem e deixe a IA criar uma
                  receita incrível sem lactose
                </Text>
              </View>

              <View style={styles.inputSection}>
                <Text style={styles.label}>Ingredientes Disponíveis *</Text>
                <TextInput
                  style={styles.textArea}
                  placeholder="Ex: frango, batata, cenoura, azeite..."
                  placeholderTextColor={Colors.textSecondary}
                  value={ingredients}
                  onChangeText={setIngredients}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                />
              </View>

              <View style={styles.inputSection}>
                <Text style={styles.label}>Preferências (opcional)</Text>
                <TextInput
                  style={styles.textArea}
                  placeholder="Ex: vegano, sem glúten, com legumes, picante..."
                  placeholderTextColor={Colors.textSecondary}
                  value={preferences}
                  onChangeText={setPreferences}
                  multiline
                  numberOfLines={3}
                  textAlignVertical="top"
                />
              </View>

              <TouchableOpacity
                style={[
                  styles.generateButton,
                  isGenerating && styles.generateButtonDisabled,
                ]}
                onPress={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <ActivityIndicator color={Colors.white} />
                    <Text style={styles.generateButtonText}>Gerando...</Text>
                  </>
                ) : (
                  <>
                    <Sparkles size={20} color={Colors.white} />
                    <Text style={styles.generateButtonText}>Gerar Receita</Text>
                  </>
                )}
              </TouchableOpacity>
            </>
          ) : (
            <View style={styles.resultContainer}>
              <View style={styles.resultCard}>
                <Text style={styles.recipeText}>{generatedRecipe}</Text>
              </View>

              <TouchableOpacity
                style={styles.newRecipeButton}
                onPress={handleReset}
              >
                <Sparkles size={20} color={Colors.primary} />
                <Text style={styles.newRecipeButtonText}>
                  Gerar Nova Receita
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700" as const,
    color: Colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.textSecondary,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: Colors.text,
    marginBottom: 8,
  },
  textArea: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    color: Colors.text,
    minHeight: 100,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  generateButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 12,
  },
  generateButtonDisabled: {
    opacity: 0.6,
  },
  generateButtonText: {
    fontSize: 16,
    fontWeight: "700" as const,
    color: Colors.white,
  },
  resultContainer: {
    gap: 16,
  },
  resultCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  recipeText: {
    fontSize: 15,
    lineHeight: 24,
    color: Colors.text,
  },
  newRecipeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: Colors.white,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  newRecipeButtonText: {
    fontSize: 16,
    fontWeight: "700" as const,
    color: Colors.primary,
  },
});
