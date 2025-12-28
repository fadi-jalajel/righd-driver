// FirebaseAuthProvider.ts

import {
    createUserWithEmailAndPassword,
    signOut as firebaseSignOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
  
  import { auth } from "@/lib/firebase";
import { AuthProvider, AuthUser } from "./AuthProvider";
  
  export class FirebaseAuthProvider implements AuthProvider {
    async signUp(email: string, password: string): Promise<AuthUser> {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      return {
        uid: result.user.uid,
        email: result.user.email ?? undefined,
      };
    }
  
    async signIn(email: string, password: string): Promise<AuthUser> {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      return {
        uid: result.user.uid,
        email: result.user.email ?? undefined,
      };
    }
  
    async signOut(): Promise<void> {
      await firebaseSignOut(auth);
    }
  
    getCurrentUser(): AuthUser | null {
      const user = auth.currentUser;
      if (!user) return null;
  
      return {
        uid: user.uid,
        email: user.email ?? undefined,
      };
    }
  }
  