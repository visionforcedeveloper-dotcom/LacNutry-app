import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  X,
  CheckCircle2,
  Heart,
  Sparkles,
  Star,
  Lightbulb,
  Zap,

} from "lucide-react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";
import { useProfile } from "@/contexts/ProfileContext";
import { trpc } from "@/lib/trpc";

interface QuizQuestion {
  id: number;
  question: string;
  options?: string[];
  explanation?: string;
  motivationalMessage?: string;
  type?: 'multiple-choice' | 'text-input';
  inputPlaceholder?: string;
  inputType?: 'text' | 'email';
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Você costuma sentir desconforto após consumir leite?",
    options: ["Sim, sempre", "Às vezes", "Raramente", "Nunca"],
    explanation: "Compreender seus sintomas é o primeiro passo para uma vida mais saudável!",
  },
  {
    id: 2,
    question: "Qual destes sintomas você experimenta mais?",
    options: ["Gases e inchaço", "Dor abdominal", "Náusea", "Diarreia"],
    explanation: "Identificar seus sintomas nos ajuda a personalizar suas receitas.",
    motivationalMessage: "Estamos aqui para ajudar você a viver sem desconfortos! 💙"
  },
  {
    id: 3,
    question: "Há quanto tempo você tem sintomas de intolerância?",
    options: ["Menos de 6 meses", "6 meses a 1 ano", "1 a 3 anos", "Mais de 3 anos"],
    explanation: "Conhecer seu histórico nos ajuda a entender melhor suas necessidades.",
  },
  {
    id: 4,
    question: "Você já evitou eventos sociais por medo de consumir lactose?",
    options: ["Sim, várias vezes", "Algumas vezes", "Raramente", "Nunca"],
    explanation: "Com as receitas certas, você pode aproveitar qualquer evento sem preocupações.",
  },
  {
    id: 5,
    question: "Qual alternativa ao leite você já experimentou?",
    options: ["Leite de amêndoas", "Leite de coco", "Leite de aveia", "Nenhuma"],
    explanation: "Conhecer suas experiências nos ajuda a recomendar as melhores receitas para você.",
    motivationalMessage: "Vamos te mostrar receitas incríveis com todas essas alternativas! 🌟"
  },
  {
    id: 6,
    question: "Quanto tempo após consumir lactose os sintomas aparecem?",
    options: ["30 minutos a 2 horas", "Imediatamente", "Após 6 horas", "No dia seguinte"],
    explanation: "Essas informações são importantes para personalizar suas recomendações.",
  },
  {
    id: 7,
    question: "Você se sente limitado(a) nas escolhas alimentares?",
    options: ["Sim, muito", "Um pouco", "Raramente", "Não"],
    explanation: "Não se preocupe! Existem milhares de receitas deliciosas sem lactose esperando por você.",
  },
  {
    id: 8,
    question: "Qual nutriente você se preocupa em não consumir o suficiente?",
    options: ["Cálcio", "Proteína", "Vitamina D", "Todos acima"],
    explanation: "Há muitas fontes de nutrientes além dos laticínios! Vamos te mostrar.",
    motivationalMessage: "Temos receitas ricas em todos esses nutrientes! Você não vai perder nada! 💪"
  },
  {
    id: 9,
    question: "Você gosta de cozinhar?",
    options: ["Sim, adoro!", "Sim, mas não tenho muito tempo", "Às vezes", "Prefiro não cozinhar"],
    explanation: "Vamos adaptar nossas sugestões ao seu estilo de vida!",
  },
  {
    id: 10,
    question: "Qual tipo de receita você mais procura?",
    options: ["Doces e sobremesas", "Pratos principais", "Lanches e snacks", "Bebidas"],
    explanation: "Suas preferências nos ajudam a mostrar o conteúdo mais relevante.",
    motivationalMessage: "Cada descoberta é um passo para uma vida mais saudável e feliz! 🎯"
  },
  {
    id: 11,
    question: "Qual é seu nível de experiência com alimentação sem lactose?",
    options: ["Iniciante - acabei de descobrir", "Intermediário - alguns meses", "Avançado - mais de 1 ano", "Expert - vivo sem lactose há anos"],
    explanation: "Vamos personalizar o conteúdo de acordo com sua experiência.",
  },
  {
    id: 12,
    question: "Você lê os rótulos dos alimentos antes de comprar?",
    options: ["Sempre", "Frequentemente", "Às vezes", "Nunca"],
    explanation: "Vamos te ensinar a identificar lactose escondida em produtos inesperados.",
  },
  {
    id: 13,
    question: "Quais substitutos você gostaria de aprender a usar?",
    options: ["Leites vegetais", "Queijos sem lactose", "Manteigas e cremes", "Todos"],
    explanation: "Perfeito! Temos receitas incríveis com todos esses substitutos.",
    motivationalMessage: "Você está quase lá! Continue assim! 🌈"
  },
  {
    id: 14,
    question: "Qual é o seu nome?",
    type: 'text-input' as const,
    inputPlaceholder: "Digite seu nome completo",
    inputType: 'text' as const,
  },
  {
    id: 15,
    question: "Qual é o seu e-mail?",
    type: 'text-input' as const,
    inputPlaceholder: "Digite seu melhor e-mail",
    inputType: 'email' as const,
    motivationalMessage: "Você completou o quiz! Está pronto(a) para transformar sua vida! 🎉"
  },
];

const motivationalScreens = [
  {
    index: 3,
    title: "Você Não Está Sozinho(a)!",
    message: "65% da população mundial tem algum grau de intolerância à lactose. Você faz parte de uma comunidade enorme!",
    icon: Heart,
    gradient: [Colors.primary, Colors.primaryDark] as readonly [string, string],
  },
  {
    index: 7,
    title: "Liberdade Alimentar",
    message: "Com o LacNutry, você terá acesso a centenas de receitas deliciosas sem lactose. Sem limitações, só possibilidades!",
    icon: Sparkles,
    gradient: ["#F39C12", "#E67E22"] as readonly [string, string],
  },
  {
    index: 11,
    title: "Saúde e Bem-Estar",
    message: "Eliminar a lactose pode melhorar sua digestão, energia e qualidade de vida. Você está no caminho certo!",
    icon: Zap,
    gradient: ["#2ECC71", "#27AE60"] as readonly [string, string],
  },
  {
    index: 14,
    title: "Quase Lá!",
    message: "Você já conhece mais sobre intolerância à lactose do que a maioria das pessoas. Continue brilhando!",
    icon: Star,
    gradient: ["#9B59B6", "#8E44AD"] as readonly [string, string],
  },
];

export default function QuizLactoseScreen() {
  const insets = useSafeAreaInsets();
  const { completeQuiz } = useProfile();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);


  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score] = useState(0);
  const [showMotivational, setShowMotivational] = useState(false);
  const [motivationalIndex, setMotivationalIndex] = useState(0);
  const [textInputValue, setTextInputValue] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  
  const fadeAnim = useState(new Animated.Value(0))[0];
  const scaleAnim = useState(new Animated.Value(0.8))[0];
  const progressAnim = useState(new Animated.Value(0))[0];

  const animateEntry = useCallback(() => {
    fadeAnim.setValue(0);
    scaleAnim.setValue(0.8);
    
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  useEffect(() => {
    animateEntry();
  }, [currentQuestion, showMotivational, animateEntry]);

  useEffect(() => {
    const newProgress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    Animated.timing(progressAnim, {
      toValue: newProgress,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [currentQuestion, progressAnim]);

  const saveQuizMutation = trpc.user.saveQuiz.useMutation();

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    const question = quizQuestions[currentQuestion];
    setAnswers(prev => ({ ...prev, [question.id.toString()]: answerIndex }));
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    const motivationalScreen = motivationalScreens.find(m => m.index === nextQuestion);
    
    if (motivationalScreen) {
      setShowMotivational(true);
      setMotivationalIndex(motivationalScreens.indexOf(motivationalScreen));
    } else if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      handleQuizComplete();
    }
  };

  const handleTextInputSubmit = () => {
    if (!textInputValue.trim()) return;
    
    const question = quizQuestions[currentQuestion];
    const trimmedValue = textInputValue.trim();
    
    if (question.id === 14) {
      setUserName(trimmedValue);
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      setTextInputValue('');
    } else if (question.id === 15) {
      if (question.inputType === 'email' && !isValidEmail(trimmedValue)) {
        alert('Por favor, insira um e-mail válido.');
        return;
      }
      setUserEmail(trimmedValue);
      handleQuizCompleteWithEmail(trimmedValue);
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleQuizCompleteWithEmail = async (email: string) => {
    console.log('📡 Iniciando salvamento do quiz...');
    console.log('📝 Dados:', { userName, email, answersCount: Object.keys(answers).length, score });
    
    try {
      const result = await saveQuizMutation.mutateAsync({
        name: userName,
        email: email,
        answers,
        score,
      });
      
      console.log('✅ Quiz salvo no backend:', result);
    } catch (error: any) {
      console.log('⚠️ Não foi possível salvar no backend (continuando localmente):', error?.message);
    }
    
    await completeQuiz(userName, email);
    setQuizCompleted(true);
  };

  const handleQuizComplete = async () => {
    await handleQuizCompleteWithEmail(userEmail);
  };

  const handleMotivationalContinue = () => {
    setShowMotivational(false);
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
  };



  if (showMotivational) {
    const motivational = motivationalScreens[motivationalIndex];
    const IconComponent = motivational.icon;

    return (
      <View style={styles.container}>
        <LinearGradient
          colors={motivational.gradient}
          style={styles.motivationalContainer}
        >
          <TouchableOpacity
            style={styles.skipButton}
            onPress={handleMotivationalContinue}
          >
            <Text style={styles.skipText}>Pular</Text>
          </TouchableOpacity>

          <Animated.View
            style={[
              styles.motivationalContent,
              {
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }],
              },
            ]}
          >
            <View style={styles.motivationalIconContainer}>
              <IconComponent color={Colors.white} size={80} />
            </View>

            <Text style={styles.motivationalTitle}>{motivational.title}</Text>
            <Text style={styles.motivationalMessage}>{motivational.message}</Text>

            <View style={styles.motivationalProgress}>
              <Text style={styles.motivationalProgressText}>
                {currentQuestion + 1} de {quizQuestions.length} perguntas
              </Text>
            </View>

            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleMotivationalContinue}
            >
              <Text style={styles.continueButtonText}>Continuar</Text>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
      </View>
    );
  }

  if (quizCompleted) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[Colors.primary, Colors.primaryDark]}
          style={styles.resultContainer}
        >
          <TouchableOpacity
            style={styles.closeButtonResult}
            onPress={() => router.back()}
          >
            <X color={Colors.white} size={24} />
          </TouchableOpacity>

          <ScrollView
            contentContainerStyle={styles.resultScrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Animated.View
              style={[
                styles.resultContent,
                {
                  opacity: fadeAnim,
                  transform: [{ scale: scaleAnim }],
                },
              ]}
            >
              <View style={styles.resultTrophyContainer}>
                <Text style={styles.resultEmoji}>🎉</Text>
              </View>

              <Text style={styles.resultTitle}>Parabéns, {userName}!</Text>
              <Text style={styles.resultSubtitle}>Você completou o questionário!</Text>

              <View style={styles.resultMotivationalCard}>
                <Sparkles color={Colors.primary} size={24} />
                <Text style={styles.resultMotivationalText}>
                  Agora você está pronto(a) para explorar todas as receitas deliciosas sem lactose que preparamos para você!
                </Text>
              </View>

              <TouchableOpacity
                style={styles.resultContinueButton}
                onPress={() => router.replace('/(tabs)')}
              >
                <Text style={styles.resultContinueButtonText}>Continuar</Text>
              </TouchableOpacity>
            </Animated.View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }

  const question = quizQuestions[currentQuestion];
  const isTextInputQuestion = question.type === 'text-input';

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
          <X color={Colors.text} size={24} />
        </TouchableOpacity>
        
        <View style={styles.headerProgress}>
          <Text style={styles.headerProgressText}>
            {currentQuestion + 1}/{quizQuestions.length}
          </Text>
        </View>

        <View style={{ width: 40 }} />
      </View>

      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progressAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>

      <ScrollView 
        style={styles.content} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            styles.questionContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <View style={styles.questionBadge}>
            <Lightbulb color={Colors.primary} size={16} />
            <Text style={styles.questionBadgeText}>Questão {currentQuestion + 1}</Text>
          </View>

          <Text style={styles.questionText}>{question.question}</Text>
        </Animated.View>

        {isTextInputQuestion ? (
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={question.inputPlaceholder}
              placeholderTextColor={Colors.textSecondary}
              value={textInputValue}
              onChangeText={setTextInputValue}
              keyboardType={question.inputType === 'email' ? 'email-address' : 'default'}
              autoCapitalize={question.inputType === 'email' ? 'none' : 'words'}
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={handleTextInputSubmit}
            />
            <TouchableOpacity
              style={[
                styles.textInputButton,
                !textInputValue.trim() && styles.textInputButtonDisabled
              ]}
              onPress={handleTextInputSubmit}
              disabled={!textInputValue.trim()}
            >
              <Text style={styles.textInputButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.optionsContainer}>
            {question.options?.map((option, index) => {
              const isSelected = selectedAnswer === index;
  
              let backgroundColor = Colors.white;
              let borderColor = Colors.border;
  
              if (isSelected) {
                backgroundColor = Colors.primaryLight;
                borderColor = Colors.primary;
              }
  
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    { backgroundColor, borderColor },
                  ]}
                  onPress={() => handleAnswerSelect(index)}
                  activeOpacity={0.7}
                >
                  <View style={styles.optionContent}>
                    <View
                      style={[
                        styles.optionIndicator,
                        { borderColor: isSelected ? Colors.primary : Colors.border },
                        isSelected && { backgroundColor: Colors.primary },
                      ]}
                    >
                      {isSelected && (
                        <CheckCircle2 color={Colors.white} size={16} />
                      )}
                    </View>
                    <Text style={[styles.optionText, { color: Colors.text }]}>
                      {option}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {selectedAnswer !== null && (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNextQuestion}
              activeOpacity={0.8}
            >
              <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
            </TouchableOpacity>
          )}
          </>
        )}

        {selectedAnswer !== null && !isTextInputQuestion && question.explanation && (
          <Animated.View
            style={[
              styles.explanationCard,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            <View style={styles.explanationHeader}>
              <Lightbulb color={Colors.primary} size={24} />
              <Text style={styles.explanationTitle}>Explicação</Text>
            </View>
            <Text style={styles.explanationText}>{question.explanation}</Text>
            
            {question.motivationalMessage && (
              <View style={styles.explanationMotivational}>
                <Heart color={Colors.primary} size={20} />
                <Text style={styles.explanationMotivationalText}>
                  {question.motivationalMessage}
                </Text>
              </View>
            )}
          </Animated.View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: Colors.background,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.backgroundSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerProgress: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  headerProgressText: {
    fontSize: 15,
    fontWeight: "700" as const,
    color: Colors.primary,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFF4E6",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  scoreText: {
    fontSize: 15,
    fontWeight: "700" as const,
    color: Colors.warning,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: Colors.border,
  },
  progressBar: {
    height: "100%",
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  questionContainer: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 24,
    marginTop: 20,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  questionBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  questionBadgeText: {
    fontSize: 13,
    fontWeight: "600" as const,
    color: Colors.primary,
  },
  questionText: {
    fontSize: 22,
    fontWeight: "700" as const,
    color: Colors.text,
    lineHeight: 32,
  },
  optionsContainer: {
    gap: 16,
    marginBottom: 16,
  },
  optionButton: {
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  optionIndicator: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500" as const,
    flex: 1,
    lineHeight: 22,
  },
  explanationCard: {
    marginTop: 24,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  explanationHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  explanationTitle: {
    fontSize: 18,
    fontWeight: "700" as const,
    color: Colors.text,
  },
  explanationText: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  explanationMotivational: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 16,
    padding: 16,
    backgroundColor: Colors.primaryLight,
    borderRadius: 16,
  },
  explanationMotivationalText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600" as const,
    color: Colors.primary,
    lineHeight: 20,
  },
  motivationalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  skipButton: {
    position: "absolute",
    top: 60,
    right: 20,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  skipText: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: Colors.white,
  },
  motivationalContent: {
    alignItems: "center",
  },
  motivationalIconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  motivationalTitle: {
    fontSize: 32,
    fontWeight: "700" as const,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 16,
  },
  motivationalMessage: {
    fontSize: 18,
    color: Colors.white,
    textAlign: "center",
    lineHeight: 26,
    opacity: 0.95,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  motivationalProgress: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 32,
  },
  motivationalProgressText: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: Colors.white,
  },
  continueButton: {
    backgroundColor: Colors.white,
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  continueButtonText: {
    fontSize: 17,
    fontWeight: "700" as const,
    color: Colors.primary,
  },
  resultContainer: {
    flex: 1,
  },
  closeButtonResult: {
    position: "absolute",
    top: 60,
    right: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  resultScrollContent: {
    flexGrow: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  resultContent: {
    alignItems: "center",
  },
  resultTrophyContainer: {
    marginBottom: 24,
  },
  resultEmoji: {
    fontSize: 100,
  },
  resultTitle: {
    fontSize: 36,
    fontWeight: "700" as const,
    color: Colors.white,
    marginBottom: 8,
  },
  resultSubtitle: {
    fontSize: 18,
    color: Colors.white,
    opacity: 0.9,
    marginBottom: 32,
  },
  resultScoreContainer: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 24,
    padding: 24,
    width: "100%",
    marginBottom: 24,
  },
  resultScoreLabel: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: Colors.white,
    opacity: 0.8,
    marginBottom: 8,
  },
  resultScore: {
    fontSize: 56,
    fontWeight: "700" as const,
    color: Colors.white,
    marginBottom: 16,
  },
  resultScoreBar: {
    width: "100%",
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  resultScoreBarFill: {
    height: "100%",
    backgroundColor: Colors.white,
  },
  resultScorePercentage: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: Colors.white,
  },
  resultMessage: {
    fontSize: 18,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 26,
  },
  resultStatsContainer: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
    marginBottom: 24,
  },
  resultStatCard: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  resultStatValue: {
    fontSize: 28,
    fontWeight: "700" as const,
    color: Colors.white,
    marginTop: 12,
    marginBottom: 4,
  },
  resultStatLabel: {
    fontSize: 13,
    color: Colors.white,
    opacity: 0.8,
  },
  resultMotivationalCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    width: "100%",
  },
  resultMotivationalText: {
    flex: 1,
    fontSize: 15,
    color: Colors.text,
    lineHeight: 22,
  },
  resultExploreButton: {
    backgroundColor: Colors.white,
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 30,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
    width: "100%",
    alignItems: "center",
  },
  resultExploreButtonText: {
    fontSize: 17,
    fontWeight: "700" as const,
    color: Colors.primary,
  },
  resultHomeButton: {
    paddingVertical: 12,
  },
  resultHomeButtonText: {
    fontSize: 15,
    fontWeight: "600" as const,
    color: Colors.white,
  },
  textInputContainer: {
    gap: 20,
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    fontSize: 16,
    color: Colors.text,
    borderWidth: 2,
    borderColor: Colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  textInputButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  textInputButtonDisabled: {
    backgroundColor: Colors.border,
    opacity: 0.5,
  },
  textInputButtonText: {
    fontSize: 17,
    fontWeight: "700" as const,
    color: Colors.white,
  },
  resultContinueButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: Colors.white,
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 30,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  resultContinueButtonText: {
    fontSize: 18,
    fontWeight: "700" as const,
    color: Colors.primary,
  },
  nextButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 30,
    alignItems: "center" as const,
    marginTop: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  nextButtonText: {
    fontSize: 17,
    fontWeight: "700" as const,
    color: Colors.white,
  },
});
