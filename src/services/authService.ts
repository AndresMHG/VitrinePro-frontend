// Types
export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  message: string;
  access_token: string;
  user: AuthUser;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

// API Service
const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3000';

/**
 * Registra un nuevo usuario
 */
export async function register(payload: RegisterPayload): Promise<AuthResponse> {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // Intentar parsear como JSON, si no es válido usar un mensaje genérico
      let errorMessage = 'Error al registrar usuario';
      try {
        const error = await response.json();
        errorMessage = error.message || errorMessage;
      } catch {
        errorMessage = `Error ${response.status}: ${response.statusText}. Verifica que el servidor esté corriendo en ${API_URL}`;
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en register:', error);
    throw error;
  }
}

/**
 * Inicia sesión con email y contraseña
 */
export async function login(payload: LoginPayload): Promise<AuthResponse> {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // Intentar parsear como JSON, si no es válido usar un mensaje genérico
      let errorMessage = 'Error al iniciar sesión';
      try {
        const error = await response.json();
        errorMessage = error.message || errorMessage;
      } catch {
        errorMessage = `Error ${response.status}: ${response.statusText}. Verifica que el servidor esté corriendo en ${API_URL}`;
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
}

/**
 * Obtiene el perfil del usuario (requiere token)
 */
export async function getProfile(token: string): Promise<{ message: string; user: AuthUser }> {
  try {
    const response = await fetch(`${API_URL}/auth/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // Intentar parsear como JSON, si no es válido usar un mensaje genérico
      let errorMessage = 'Error al obtener perfil';
      try {
        const error = await response.json();
        errorMessage = error.message || errorMessage;
      } catch {
        if (response.status === 404) {
          errorMessage = `Error 404: El endpoint /auth/profile no existe en ${API_URL}`;
        } else {
          errorMessage = `Error ${response.status}: ${response.statusText}`;
        }
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en getProfile:', error);
    throw error;
  }
}
