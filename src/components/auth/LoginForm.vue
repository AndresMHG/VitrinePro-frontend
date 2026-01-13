<template>
  <div class="login-form-wrapper">
    <form @submit.prevent="handleLogin" class="login-form">
      <!-- Email -->
      <div class="form-group">
        <label for="email" class="form-label">E-mail</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="form-input"
          placeholder="tu@email.com"
          required
          :disabled="isLoading"
        />
        <span v-if="fieldErrors.email" class="error-text">{{ fieldErrors.email }}</span>
      </div>

      <!-- Password -->
      <div class="form-group">
        <label for="password" class="form-label">Contraseña</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          class="form-input"
          placeholder="Tu contraseña"
          required
          :disabled="isLoading"
        />
        <span v-if="fieldErrors.password" class="error-text">{{ fieldErrors.password }}</span>
      </div>

      <!-- Remember Me & Forgot Password -->
      <div class="form-options">
        <label class="checkbox-label">
          <input 
            v-model="form.remember" 
            type="checkbox" 
            class="checkbox-input"
            :disabled="isLoading"
          />
          <span>Recuérdame</span>
        </label>
        <a href="/recuperar-senha" class="forgot-link">¿Olvidaste tu contraseña?</a>
      </div>

      <!-- Error Alert -->
      <div v-if="errorMessage" class="alert alert-error">
        {{ errorMessage }}
      </div>

      <!-- Success Alert -->
      <div v-if="successMessage" class="alert alert-success">
        {{ successMessage }}
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary btn-full" :disabled="isLoading">
        <span v-if="!isLoading">Entrar</span>
        <span v-else>Iniciando sesión...</span>
      </button>
    </form>

    <!-- Sign Up Link -->
    <div class="auth-footer">
      ¿No tienes cuenta? <a href="/cadastro">Crea una ahora</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { login } from '@/services/authService';
import { saveToken, saveUser } from '@/services/storage';

interface LoginForm {
  email: string;
  password: string;
  remember: boolean;
}

const form = ref<LoginForm>({
  email: '',
  password: '',
  remember: false,
});

const isLoading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const fieldErrors = ref<Record<string, string>>({});

async function handleLogin() {
  // Reset messages
  errorMessage.value = '';
  successMessage.value = '';
  fieldErrors.value = {};

  // Validate
  if (!form.value.email) {
    fieldErrors.value.email = 'El email es requerido';
  }
  if (!form.value.password) {
    fieldErrors.value.password = 'La contraseña es requerida';
  }

  if (Object.keys(fieldErrors.value).length > 0) {
    return;
  }

  isLoading.value = true;

  try {
    const response = await login({
      email: form.value.email,
      password: form.value.password,
    });

    // Save token and user
    saveToken(response.access_token);
    saveUser(response.user);

    successMessage.value = '¡Iniciaste sesión correctamente!';

    // Redirect after 1 second
    setTimeout(() => {
      window.location.href = import.meta.env.BASE_URL + 'profile-view';
    }, 1000);
  } catch (error: any) {
    errorMessage.value = error.message || 'Error al iniciar sesión. Intenta de nuevo.';
    console.error('Login error:', error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
.login-form-wrapper {
  width: 100%;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-input {
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  font-size: 1rem;
  color: var(--text-primary);
  background-color: var(--bg-secondary);
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-text {
  font-size: 0.85rem;
  color: #dc2626;
  margin-top: 0.25rem;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  user-select: none;
}

.checkbox-input {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: var(--primary);
}

.checkbox-input:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.forgot-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.forgot-link:hover {
  text-decoration: underline;
}

.alert {
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.alert-error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
}

.alert-success {
  background-color: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 172, 254, 0.4);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-full {
  width: 100%;
}

.auth-footer {
  text-align: center;
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-top: 1.5rem;
}

.auth-footer a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.auth-footer a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .form-options {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .login-form {
    gap: 1rem;
  }
}
</style>
