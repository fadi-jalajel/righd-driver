// authService.ts

import { AuthProvider } from "./AuthProvider";
import { FirebaseAuthProvider } from "./FirebaseAuthProvider";

/**
 * Swap providers here in the future
 */
const provider: AuthProvider = new FirebaseAuthProvider();

export const authService = {
  signUp: provider.signUp.bind(provider),
  signIn: provider.signIn.bind(provider),
  signOut: provider.signOut.bind(provider),
  getCurrentUser: provider.getCurrentUser.bind(provider),
};
