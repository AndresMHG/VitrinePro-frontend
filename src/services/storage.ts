import type { AuthUser } from './authService';

const STORAGE_TOKEN_KEY = 'auth_token';
const STORAGE_USER_KEY = 'auth_user';

/**
 * Guarda el token de acceso en localStorage
 */
export function saveToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_TOKEN_KEY, token);
  }
}

/**
 * Obtiene el token de acceso desde localStorage
 */
export function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_TOKEN_KEY);
  }
  return null;
}

/**
 * Elimina el token de acceso
 */
export function removeToken(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_TOKEN_KEY);
  }
}

/**
 * Guarda los datos del usuario en localStorage
 */
export function saveUser(user: AuthUser): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
  }
}

/**
 * Obtiene los datos del usuario desde localStorage
 */
export function getUser(): AuthUser | null {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem(STORAGE_USER_KEY);
    return user ? JSON.parse(user) : null;
  }
  return null;
}

/**
 * Elimina los datos del usuario
 */
export function removeUser(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_USER_KEY);
  }
}

/**
 * Limpia toda la información de autenticación
 */
export function clearAuth(): void {
  removeToken();
  removeUser();
}

/**
 * Verifica si el usuario está autenticado
 */
export function isAuthenticated(): boolean {
  return getToken() !== null;
}
