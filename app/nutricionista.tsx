import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Send } from "lucide-react-native";
import { useRorkAgent, createRorkTool } from "@rork-ai/toolkit-sdk";
import { z } from "zod";
import Colors from "@/constants/colors";

export default function NutritionistScreen() {
  const insets = useSafeAreaInsets();
  const scrollViewRef = useRef<ScrollView>(null);
  const [input, setInput] = useState("");
  
  const { messages, error, sendMessage } = useRorkAgent({
    tools: {
      calculateCalories: createRorkTool({
        description: "Calcular calorias de um alimento ou receita",
        zodSchema: z.object({
          food: z.string().describe("Nome do alimento ou prato"),
          portion: z.string().describe("Porção (ex: 100g, 1 xícara)"),
        }),
        execute(input) {
          console.log("Calculando calorias para:", input);
          const result = {
            calories: Math.floor(Math.random() * 500) + 50,
            protein: Math.floor(Math.random() * 30),
            carbs: Math.floor(Math.random() * 50),
            fat: Math.floor(Math.random() * 20),
          };
          return JSON.stringify(result);
        },
      }),
    },

  });

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Nutricionista IA",
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.primary,
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={[
            styles.messagesContent,
            { paddingBottom: 20 },
          ]}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() =>
            scrollViewRef.current?.scrollToEnd({ animated: true })
          }
        >
          {messages.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateTitle}>
                Olá! 👋 Sou sua nutricionista virtual
              </Text>
              <Text style={styles.emptyStateText}>
                Estou aqui para ajudar com dúvidas sobre dietas sem lactose,
                nutrição e alimentação saudável. Como posso ajudar hoje?
              </Text>
            </View>
          )}

          {messages.map((message) => (
            <View key={message.id} style={styles.messageWrapper}>
              {message.parts.map((part, index) => {
                if (part.type === "text") {
                  return (
                    <View
                      key={`${message.id}-${index}`}
                      style={[
                        styles.messageBubble,
                        message.role === "user"
                          ? styles.userBubble
                          : styles.assistantBubble,
                      ]}
                    >
                      <Text
                        style={[
                          styles.messageText,
                          message.role === "user" && styles.userMessageText,
                        ]}
                      >
                        {part.text}
                      </Text>
                    </View>
                  );
                }

                if (part.type === "tool") {
                  if (part.state === "input-streaming" || part.state === "input-available") {
                    return (
                      <View
                        key={`${message.id}-${index}`}
                        style={styles.toolCallBubble}
                      >
                        <ActivityIndicator size="small" color={Colors.primary} />
                        <Text style={styles.toolCallText}>
                          Calculando informações nutricionais...
                        </Text>
                      </View>
                    );
                  }

                  if (part.state === "output-available") {
                    return (
                      <View
                        key={`${message.id}-${index}`}
                        style={styles.toolResultBubble}
                      >
                        <Text style={styles.toolResultText}>
                          📊 Informação Nutricional:{"\n"}
                          {JSON.stringify(part.output, null, 2)}
                        </Text>
                      </View>
                    );
                  }
                }

                return null;
              })}
            </View>
          ))}

          {error && (
            <View style={styles.errorBubble}>
              <Text style={styles.errorText}>Erro: {error.message}</Text>
            </View>
          )}
        </ScrollView>

        <View style={[styles.inputContainer, { paddingBottom: insets.bottom + 8 }]}>
          <TextInput
            style={styles.input}
            placeholder="Pergunte sobre nutrição..."
            placeholderTextColor={Colors.textSecondary}
            value={input}
            onChangeText={setInput}
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[styles.sendButton, !input.trim() && styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!input.trim()}
          >
            <Send size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
    gap: 12,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: "700" as const,
    color: Colors.text,
    marginBottom: 12,
    textAlign: "center",
  },
  emptyStateText: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  messageWrapper: {
    marginBottom: 12,
  },
  messageBubble: {
    maxWidth: "80%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },
  userBubble: {
    backgroundColor: Colors.primary,
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
  },
  assistantBubble: {
    backgroundColor: Colors.white,
    alignSelf: "flex-start",
    borderBottomLeftRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.text,
  },
  userMessageText: {
    color: Colors.white,
  },
  toolCallBubble: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: "flex-start",
    maxWidth: "80%",
  },
  toolCallText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600" as const,
  },
  toolResultBubble: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: "flex-start",
    maxWidth: "80%",
    marginTop: 4,
  },
  toolResultText: {
    fontSize: 13,
    color: "#2E7D32",
    fontFamily: Platform.OS === "ios" ? "Courier" : "monospace",
  },
  errorBubble: {
    backgroundColor: "#FFEBEE",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: "center",
  },
  errorText: {
    fontSize: 14,
    color: Colors.error,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    gap: 8,
    alignItems: "flex-end",
  },
  input: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    color: Colors.text,
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
});
