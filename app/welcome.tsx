import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowRight } from "lucide-react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();

  const handleStartQuiz = () => {
    router.replace("/quiz-lactose");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.primary, Colors.primaryDark]}
        style={styles.gradient}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingTop: insets.top + 40, paddingBottom: insets.bottom + 40 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Bem-vindo ao LacNutry!</Text>
            <Text style={styles.subtitle}>
              Sua jornada para uma vida sem lactose começa aqui
            </Text>

            <Image
              source={{
                uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/mz7odnadmopgcvst3ck83",
              }}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.ctaContainer}>
              <Text style={styles.ctaText}>
                Vamos conhecer você melhor para personalizar sua experiência!
              </Text>

              <TouchableOpacity
                style={styles.ctaButton}
                onPress={handleStartQuiz}
                activeOpacity={0.8}
              >
                <Text style={styles.ctaButtonText}>Iniciar Quiz</Text>
                <ArrowRight color={Colors.primary} size={24} />
              </TouchableOpacity>

              <Text style={styles.disclaimerText}>
                Leva apenas 3 minutos • 15 perguntas rápidas
              </Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700" as const,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 12,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.white,
    textAlign: "center",
    opacity: 0.9,
    lineHeight: 26,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 24,
    marginBottom: 48,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  ctaContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 8,
  },
  ctaText: {
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 24,
    opacity: 0.95,
  },
  ctaButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: Colors.white,
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 30,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "700" as const,
    color: Colors.primary,
  },
  disclaimerText: {
    fontSize: 13,
    color: Colors.white,
    opacity: 0.8,
    marginTop: 16,
    textAlign: "center",
  },
});
