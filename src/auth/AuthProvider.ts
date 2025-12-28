// AuthProvider.ts

/**
 * AuthUser = the minimal identity returned by ANY auth system
 * (Firebase today, something else tomorrow)
 */
export interface AuthUser {
    uid: string;
    email?: string;
    phone?: string;
  }
  
  /**
   * AuthProvider = contract that ANY auth provider must follow
   */
  export interface AuthProvider {
    signUp(email: string, password: string): Promise<AuthUser>;
    signIn(email: string, password: string): Promise<AuthUser>;
    signOut(): Promise<void>;
    getCurrentUser(): AuthUser | null;
  }
  