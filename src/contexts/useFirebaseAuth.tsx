import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Alert } from 'react-native';
import { FIREBASE_AUTH } from '../lib/firebase/config';

interface AuthContextData {
  session: UserCredential | null | undefined;
  user: User | null;
  isLoading: boolean;
  signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void>;
  signOut(): void;
  signUpWithEmail({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void>;
  checkUserSession(): Promise<void>;
}

const FirebaseAuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const FirebaseAuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState<UserCredential | null | undefined>(
    null,
  );

  async function signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      await saveUser(response.user);
      setUser(response.user);
      setSession(response);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro!', 'Não foi possível fazer login.');
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {
    setIsLoading(true);
    try {
      await auth.signOut();
      setUser(null);
      setSession(null);
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro!', 'Não foi possível fazer logout.');
    } finally {
      setIsLoading(false);
    }
  }

  async function signUpWithEmail({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Sucesso!', 'Usuário criado com sucesso!');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro!', 'Não foi possível criar o usuário.');
    } finally {
      setIsLoading(false);
    }
  }

  async function saveUser(user: User) {
    try {
      const jsonUser = JSON.stringify(user);
      await AsyncStorage.setItem('user', jsonUser);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadUser() {
    try {
      const jsonUser = await AsyncStorage.getItem('user');
      if (jsonUser) {
        const user = JSON.parse(jsonUser);
        setUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function checkUserSession() {
    try {
      const userJson = await AsyncStorage.getItem('user');
      const user = userJson ? JSON.parse(userJson) : null;

      if (user && session && user.refreshToken !== session.user.refreshToken) {
        await AsyncStorage.removeItem('user');
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <FirebaseAuthContext.Provider
      value={{
        session,
        user,
        isLoading,
        signIn,
        signOut,
        signUpWithEmail,
        checkUserSession,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};

function useFirebaseAuth() {
  const context = useContext(FirebaseAuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { FirebaseAuthProvider, useFirebaseAuth };
