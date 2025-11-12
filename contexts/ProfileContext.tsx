import createContextHook from '@nkzw/create-context-hook';
import { useState, useEffect, useMemo, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  allergies: string[];
  preferences: string[];
}

export interface ScanHistory {
  id: string;
  productName: string;
  date: string;
  hasLactose: boolean;
  imageUri?: string;
}

export interface StatsData {
  totalScans: number;
  streakDays: number;
  lastAccessDate: string;
}

const STORAGE_KEYS = {
  PROFILE: '@lacnutry_profile',
  FAVORITES: '@lacnutry_favorites',
  HISTORY: '@lacnutry_history',
  FIRST_ACCESS: '@lacnutry_first_access',
  QUIZ_COMPLETED: '@lacnutry_quiz_completed',
  SUBSCRIPTION: '@lacnutry_subscription',
  STATS: '@lacnutry_stats',
};

const DEFAULT_PROFILE: UserProfile = {
  name: 'Usuário',
  email: 'usuario@email.com',
  allergies: ['Lactose'],
  preferences: ['Sem Lactose', 'Vegano'],
};

export const [ProfileProvider, useProfile] = createContextHook(() => {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [history, setHistory] = useState<ScanHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstAccess, setIsFirstAccess] = useState(true);
  const [hasCompletedQuiz, setHasCompletedQuiz] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [stats, setStats] = useState<StatsData>({
    totalScans: 0,
    streakDays: 0,
    lastAccessDate: new Date().toISOString(),
  });

  const loadData = useCallback(async () => {
    try {
      const [profileData, favoritesData, historyData, firstAccessData, quizData, subscriptionData, statsData] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.PROFILE),
        AsyncStorage.getItem(STORAGE_KEYS.FAVORITES),
        AsyncStorage.getItem(STORAGE_KEYS.HISTORY),
        AsyncStorage.getItem(STORAGE_KEYS.FIRST_ACCESS),
        AsyncStorage.getItem(STORAGE_KEYS.QUIZ_COMPLETED),
        AsyncStorage.getItem(STORAGE_KEYS.SUBSCRIPTION),
        AsyncStorage.getItem(STORAGE_KEYS.STATS),
      ]);

      if (profileData) {
        setProfile(JSON.parse(profileData));
      }
      if (favoritesData) {
        setFavorites(JSON.parse(favoritesData));
      }
      if (historyData) {
        setHistory(JSON.parse(historyData));
      }
      
      setIsFirstAccess(firstAccessData === null);
      setHasCompletedQuiz(quizData === 'true');
      setHasSubscription(subscriptionData === 'true');
      
      if (statsData) {
        const parsedStats = JSON.parse(statsData);
        const today = new Date().toISOString().split('T')[0];
        const lastAccess = new Date(parsedStats.lastAccessDate).toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        
        let newStreakDays = parsedStats.streakDays;
        
        if (lastAccess === yesterday) {
          newStreakDays = parsedStats.streakDays + 1;
        } else if (lastAccess !== today) {
          newStreakDays = 1;
        }
        
        const updatedStats = {
          ...parsedStats,
          streakDays: newStreakDays,
          lastAccessDate: new Date().toISOString(),
        };
        
        setStats(updatedStats);
        await AsyncStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updatedStats));
      } else {
        const initialStats = {
          totalScans: 0,
          streakDays: 1,
          lastAccessDate: new Date().toISOString(),
        };
        setStats(initialStats);
        await AsyncStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(initialStats));
      }
    } catch (error) {
      console.error('Error loading profile data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const updateProfile = useCallback(async (newProfile: UserProfile) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(newProfile));
      setProfile(newProfile);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }, []);

  const toggleFavorite = useCallback(async (recipeId: string) => {
    console.log('🔄 Toggle favorite called for:', recipeId);
    setFavorites((currentFavorites) => {
      console.log('📋 Current favorites:', currentFavorites);
      const newFavorites = currentFavorites.includes(recipeId)
        ? currentFavorites.filter((id) => id !== recipeId)
        : [...currentFavorites, recipeId];
      
      console.log('✨ New favorites:', newFavorites);
      
      AsyncStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites))
        .then(() => {
          console.log('✅ Favorites saved successfully');
        })
        .catch((error) => {
          console.error('❌ Error toggling favorite:', error);
        });
      
      return newFavorites;
    });
  }, []);

  const addToHistory = useCallback(async (item: ScanHistory) => {
    setHistory((currentHistory) => {
      const newHistory = [item, ...currentHistory.slice(0, 49)];
      AsyncStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(newHistory)).catch((error) => {
        console.error('Error adding to history:', error);
      });
      return newHistory;
    });
    
    setStats((currentStats) => {
      const updatedStats = {
        ...currentStats,
        totalScans: currentStats.totalScans + 1,
        lastAccessDate: new Date().toISOString(),
      };
      AsyncStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updatedStats)).catch((error) => {
        console.error('Error updating stats:', error);
      });
      return updatedStats;
    });
  }, []);

  const clearHistory = useCallback(async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify([]));
      setHistory([]);
    } catch (error) {
      console.error('Error clearing history:', error);
    }
  }, []);

  const isFavorite = useCallback((recipeId: string) => favorites.includes(recipeId), [favorites]);

  const completeQuiz = useCallback(async (name: string, email: string) => {
    try {
      await Promise.all([
        AsyncStorage.setItem(STORAGE_KEYS.FIRST_ACCESS, 'false'),
        AsyncStorage.setItem(STORAGE_KEYS.QUIZ_COMPLETED, 'true'),
      ]);
      
      const updatedProfile = { ...profile, name, email };
      await updateProfile(updatedProfile);
      
      setIsFirstAccess(false);
      setHasCompletedQuiz(true);
      
      console.log('✅ Quiz completado e perfil atualizado');
    } catch (error) {
      console.error('❌ Erro ao completar quiz:', error);
    }
  }, [profile, updateProfile]);

  const completeSubscription = useCallback(async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.SUBSCRIPTION, 'true');
      setHasSubscription(true);
      console.log('✅ Assinatura ativada');
    } catch (error) {
      console.error('❌ Erro ao ativar assinatura:', error);
    }
  }, []);

  return useMemo(() => ({
    profile,
    favorites,
    history,
    isLoading,
    isFirstAccess,
    hasCompletedQuiz,
    hasSubscription,
    stats,
    updateProfile,
    toggleFavorite,
    addToHistory,
    clearHistory,
    isFavorite,
    completeQuiz,
    completeSubscription,
  }), [profile, favorites, history, isLoading, isFirstAccess, hasCompletedQuiz, hasSubscription, stats, updateProfile, toggleFavorite, addToHistory, clearHistory, isFavorite, completeQuiz, completeSubscription]);
});
