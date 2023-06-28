import 'react-native-url-polyfill/auto';

import React, { createContext, useContext, useState } from 'react';

import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
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
}

const FirebaseAuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const FirebaseAuthProvider = ({ children }: { children: React.ReactNode }) => {
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
      setUser(response.user);
      setSession(response);
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
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
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <FirebaseAuthContext.Provider
      value={{
        session,
        user,
        isLoading,
        signIn,
        signOut,
        signUpWithEmail,
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
