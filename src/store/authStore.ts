import { authService } from "@/auth/authService";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { create } from "zustand";

export type DriverStatus = "NEW" | "ACTIVE" | "SUSPENDED";

export interface DriverIdentity {
  id: string;
  authUid: string;
  email?: string;
  status: DriverStatus;
}

interface AuthState {
  user: DriverIdentity | null;
  loading: boolean;

  bootstrap: () => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  // 🔑 LISTEN to Firebase auth state (THIS FIXES YOUR ISSUE)
  bootstrap: () => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        set({ user: null, loading: false });
        return;
      }

      set({
        user: {
          id: user.uid,
          authUid: user.uid,
          email: user.email ?? undefined,
          status: "NEW",
        },
        loading: false,
      });
    });
  },

  login: async (email, password) => {
    try {
      await authService.signIn(email, password);
      // ⚠️ DO NOT set user here
      // onAuthStateChanged will handle it
    } catch (e) {
      throw e;
    }
  },

  signup: async (email, password) => {
    try {
      await authService.signUp(email, password);
      // ⚠️ DO NOT set user here
      // onAuthStateChanged will handle it
    } catch (e) {
      throw e;
    }
  },

  logout: async () => {
    await authService.signOut();
    set({ user: null });
  },
}));
