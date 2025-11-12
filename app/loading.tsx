import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Sparkles, Heart, ChefHat } from "lucide-react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

export default function LoadingScreen() {
  const insets = useSafeAreaInsets();
  const [progress] = useState(new Animated.Value(0));
  const [fadeAnim] = useState(new Animated.Value(0));
  const [currentMessage, setCurrentMessage] = useState(0);

  const loadingMessages = [
    "Analisando suas respostas...",
    "Preparando receitas personalizadas...",
    "Configurando seu perfil...",
    "Quase pronto!",
  ];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.timing(progress, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 750);

    const timeout = setTimeout(() => {
      router.replace("/paywall");
    }, 3000);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(timeout);
    };
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.primary, Colors.primaryDark]}
        style={styles.gradient}
      >
        <Animated.View
          style={[
            styles.content,
            {
              paddingTop: insets.top + 40,
              paddingBottom: insets.bottom + 40,
              opacity: fadeAnim,
            },
          ]}
        >
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <ChefHat color={Colors.primary} size={64} />
            </View>
            <View style={[styles.iconCircleSmall, styles.iconCircle1]}>
              <Sparkles color={Colors.white} size={24} />
            </View>
            <View style={[styles.iconCircleSmall, styles.iconCircle2]}>
              <Heart color={Colors.white} size={24} />
            </View>
          </View>

          <Text style={styles.title}>Preparando sua experiência</Text>
          <Text style={styles.subtitle}>
            Estamos personalizando tudo para você!
          </Text>

          <View style={styles.progressContainer}>
            <View style={styles.progressBarBackground}>
              <Animated.View
                style={[
                  styles.progressBar,
                  {
                    width: progressWidth,
                  },
                ]}
              />
            </View>
          </View>

          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              {loadingMessages[currentMessage]}
            </Text>
          </View>

          <View style={styles.factsContainer}>
            <Text style={styles.factsTitle}>Você sabia?</Text>
            <Text style={styles.factsText}>
              70% da população mundial tem algum grau de intolerância à
              lactose. Você não está sozinho(a)!
            </Text>
          </View>
        </Animated.View>
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
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  iconContainer: {
    position: "relative",
    width: 160,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  iconCircleSmall: {
    position: "absolute",
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle1: {
    top: 0,
    right: 0,
  },
  iconCircle2: {
    bottom: 0,
    left: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: "700" as const,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
    opacity: 0.9,
    marginBottom: 48,
  },
  progressContainer: {
    width: "100%",
    marginBottom: 32,
  },
  progressBarBackground: {
    width: "100%",
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: Colors.white,
    borderRadius: 4,
  },
  messageContainer: {
    minHeight: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  messageText: {
    fontSize: 17,
    fontWeight: "600" as const,
    color: Colors.white,
    textAlign: "center",
  },
  factsContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 20,
    padding: 24,
    width: "100%",
  },
  factsTitle: {
    fontSize: 18,
    fontWeight: "700" as const,
    color: Colors.white,
    marginBottom: 8,
  },
  factsText: {
    fontSize: 15,
    color: Colors.white,
    opacity: 0.95,
    lineHeight: 22,
  },
});
