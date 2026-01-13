<template>
  <div class="register-form-wrapper">
    <form @submit.prevent="handleRegister" class="register-form">
      <!-- Full Name -->
      <div class="form-group">
        <label for="firstName" class="form-label">Nombre</label>
        <input
          id="firstName"
          v-model="form.firstName"
          type="text"
          class="form-input"
          placeholder="Tu nombre"
          required
          :disabled="isLoading"
        />
        <span v-if="fieldErrors.firstName" class="error-text">{{ fieldErrors.firstName }}</span>
      </div>

      <!-- Last Name -->
      <div class="form-group">
        <label for="lastName" class="form-label">Apellido</label>
        <input
          id="lastName"
          v-model="form.lastName"
          type="text"
          class="form-input"
          placeholder="Tu apellido"
          required
          :disabled="isLoading"
        />
        <span v-if="fieldErrors.lastName" class="error-text">{{ fieldErrors.lastName }}</span>
      </div>

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
          placeholder="Crea una contraseña fuerte"
          required
          :disabled="isLoading"
        />
        <span v-if="fieldErrors.password" class="error-text">{{ fieldErrors.password }}</span>
      </div>

      <!-- Confirm Password -->
      <div class="form-group">
        <label for="confirmPassword" class="form-label">Confirmar contraseña</label>
        <input
          id="confirmPassword"
          v-model="form.confirmPassword"
          type="password"
          class="form-input"
          placeholder="Confirma tu contraseña"
          required
          :disabled="isLoading"
        />
        <span v-if="fieldErrors.confirmPassword" class="error-text">{{ fieldErrors.confirmPassword }}</span>
      </div>

      <!-- Terms & Conditions -->
      <div class="form-group">
        <label class="checkbox-label">
          <input 
            v-model="form.acceptTerms" 
            type="checkbox" 
            class="checkbox-input"
            required
            :disabled="isLoading"
          />
          <span>
            Acepto los <a href="/terms" target="_blank">Términos de Uso</a> y 
            <a href="/privacy" target="_blank">Política de Privacidad</a>
          </span>
        </label>
        <span v-if="fieldErrors.acceptTerms" class="error-text">{{ fieldErrors.acceptTerms }}</span>
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
        <span v-if="!isLoading">Crear Cuenta</span>
        <span v-else>Creando cuenta...</span>
      </button>
    </form>

    <!-- Sign In Link -->
    <div class="auth-footer">
      ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { register } from '@/services/authService';
import { saveToken, saveUser } from '@/services/storage';

interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const form = ref<RegisterForm>({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
});

const isLoading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const fieldErrors = ref<Record<string, string>>({});

function validateForm(): boolean {
  fieldErrors.value = {};

  if (!form.value.firstName.trim()) {
    fieldErrors.value.firstName = 'El nombre es requerido';
  }
  if (!form.value.lastName.trim()) {
    fieldErrors.value.lastName = 'El apellido es requerido';
  }
  if (!form.value.email.trim()) {
    fieldErrors.value.email = 'El email es requerido';
  }
  if (!form.value.password) {
    fieldErrors.value.password = 'La contraseña es requerida';
  }
  if (form.value.password.length < 6) {
    fieldErrors.value.password = 'La contraseña debe tener al menos 6 caracteres';
  }
  if (form.value.password !== form.value.confirmPassword) {
    fieldErrors.value.confirmPassword = 'Las contraseñas no coinciden';
  }
  if (!form.value.acceptTerms) {
    fieldErrors.value.acceptTerms = 'Debes aceptar los términos y condiciones';
  }

  return Object.keys(fieldErrors.value).length === 0;
}

async function handleRegister() {
  errorMessage.value = '';
  successMessage.value = '';

  if (!validateForm()) {
    return;
  }

  isLoading.value = true;

  try {
    const response = await register({
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password,
    });

    // Save token and user
    saveToken(response.access_token);
    saveUser(response.user);

    successMessage.value = '¡Cuenta creada correctamente! Redirigiendo...';

    // Redirect after 1 second
    setTimeout(() => {
      window.location.href = import.meta.env.BASE_URL + 'profile-view';
    }, 1000);
  } catch (error: any) {
    errorMessage.value = error.message || 'Error al crear la cuenta. Intenta de nuevo.';
    console.error('Register error:', error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
.register-form-wrapper {
  width: 100%;
}

.register-form {
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

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  user-select: none;
}

.checkbox-input {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  cursor: pointer;
  accent-color: var(--primary);
  flex-shrink: 0;
}

.checkbox-input:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.checkbox-label a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}

.checkbox-label a:hover {
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
  .register-form {
    gap: 1rem;
  }
}
</style>
