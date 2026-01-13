<template>
  <div class="profile-container">
    <!-- Header -->
    <div class="profile-header">
      <h1>Mi Perfil</h1>
      <button @click="handleLogout" class="btn-logout">Cerrar sesión</button>
    </div>

    <!-- No Auth Message -->
    <div v-if="!isAuthenticated" class="alert alert-warning">
      <p>No estás autenticado. Por favor <a href="/login">inicia sesión</a> para ver tu perfil.</p>
    </div>

    <!-- Loading State -->
    <div v-else-if="isLoading" class="loading">
      <p>Cargando tu perfil...</p>
    </div>

    <!-- User Data -->
    <div v-else-if="user" class="profile-content">
      <!-- User Card -->
      <div class="user-card">
        <div class="user-info">
          <div class="user-avatar">
            {{ getInitials(user.firstName, user.lastName) }}
          </div>
          <div class="user-details">
            <h2>{{ user.firstName }} {{ user.lastName }}</h2>
            <p class="email">{{ user.email }}</p>
            <p class="user-id">ID: {{ user.id }}</p>
          </div>
        </div>
      </div>

      <!-- Access Token Section -->
      <div class="token-section">
        <div class="section-header">
          <h3>Access Token</h3>
          <button @click="toggleTokenVisibility" class="btn-toggle">
            {{ showToken ? 'Ocultar' : 'Mostrar' }}
          </button>
        </div>
        <div class="token-content">
          <div class="token-display" v-if="showToken">
            <code class="token-code">{{ token }}</code>
            <button @click="copyToken" class="btn-copy">
              {{ tokenCopied ? '¡Copiado!' : 'Copiar' }}
            </button>
          </div>
          <div v-else class="token-hidden">
            <p>Token oculto por seguridad</p>
          </div>
        </div>
      </div>

      <!-- User Data Section -->
      <div class="data-section">
        <h3>Información del Usuario</h3>
        <div class="data-grid">
          <div class="data-item">
            <label>Nombre</label>
            <p>{{ user.firstName }}</p>
          </div>
          <div class="data-item">
            <label>Apellido</label>
            <p>{{ user.lastName }}</p>
          </div>
          <div class="data-item">
            <label>Email</label>
            <p>{{ user.email }}</p>
          </div>
          <div class="data-item">
            <label>ID de Usuario</label>
            <p class="code-text">{{ user.id }}</p>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="actions-section">
        <button @click="refreshProfile" class="btn btn-secondary">
          <span v-if="!isRefreshing">Actualizar Perfil</span>
          <span v-else>Actualizando...</span>
        </button>
        <button @click="handleLogout" class="btn btn-danger">Cerrar sesión</button>
      </div>

      <!-- Messages -->
      <div v-if="errorMessage" class="alert alert-error">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" class="alert alert-success">
        {{ successMessage }}
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="errorMessage" class="alert alert-error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { AuthUser } from '@/services/authService';
import { getProfile } from '@/services/authService';
import { getToken, getUser, removeToken, removeUser, isAuthenticated as checkAuth } from '@/services/storage';

const user = ref<AuthUser | null>(null);
const token = ref('');
const isAuthenticated = ref(false);
const isLoading = ref(true);
const isRefreshing = ref(false);
const showToken = ref(false);
const tokenCopied = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

function toggleTokenVisibility(): void {
  showToken.value = !showToken.value;
}

async function copyToken(): Promise<void> {
  try {
    await navigator.clipboard.writeText(token.value);
    tokenCopied.value = true;
    setTimeout(() => {
      tokenCopied.value = false;
    }, 2000);
  } catch (error) {
    errorMessage.value = 'Error al copiar el token';
  }
}

async function loadProfile(): Promise<void> {
  try {
    isLoading.value = true;
    errorMessage.value = '';

    // Esperar a que el DOM esté listo (solo en cliente)
    if (typeof window === 'undefined') {
      isLoading.value = false;
      return;
    }

    // Check if authenticated
    if (!checkAuth()) {
      isAuthenticated.value = false;
      isLoading.value = false;
      return;
    }

    isAuthenticated.value = true;

    // Get token and user from storage
    const storedToken = getToken();
    const storedUser = getUser();

    if (!storedToken || !storedUser) {
      isAuthenticated.value = false;
      isLoading.value = false;
      return;
    }

    // Try to fetch latest profile from API
    try {
      const response = await getProfile(storedToken);
      user.value = response.user;
      token.value = storedToken;
    } catch (error: any) {
      // If API fails, use stored data
      user.value = storedUser;
      token.value = storedToken;
      errorMessage.value = 'Información del perfil cargada desde caché';
      console.log('Error al obtener perfil del API, usando datos en caché');
    }
  } catch (error: any) {
    console.error('Error loading profile:', error);
    errorMessage.value = 'Error al cargar el perfil';
  } finally {
    isLoading.value = false;
  }
}

async function refreshProfile(): Promise<void> {
  try {
    isRefreshing.value = true;
    errorMessage.value = '';
    successMessage.value = '';

    const storedToken = getToken();
    if (!storedToken) {
      isAuthenticated.value = false;
      return;
    }

    const response = await getProfile(storedToken);
    user.value = response.user;
    successMessage.value = 'Perfil actualizado correctamente';
  } catch (error: any) {
    errorMessage.value = 'Error al actualizar el perfil';
  } finally {
    isRefreshing.value = false;
  }
}

function handleLogout(): void {
  removeToken();
  removeUser();
  window.location.href = import.meta.env.BASE_URL + 'login';
}

onMounted(() => {
  loadProfile();
});
</script>

<style scoped>
.profile-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
}

.profile-header h1 {
  font-size: 2rem;
  color: var(--text-primary);
  margin: 0;
}

.btn-logout {
  padding: 0.5rem 1rem;
  background-color: #dc2626;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-logout:hover {
  background-color: #991b1b;
  transform: translateY(-1px);
}

.alert {
  padding: 1.25rem;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.alert-warning {
  background-color: #fef3c7;
  color: #92400e;
  border: 1px solid #fcd34d;
}

.alert-warning a {
  color: #d97706;
  text-decoration: none;
  font-weight: 600;
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

.loading {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
}

.profile-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* User Card */
.user-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.user-details h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: var(--text-primary);
}

.email {
  color: var(--text-secondary);
  margin: 0.25rem 0;
}

.user-id {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 0.5rem 0 0 0;
  font-family: monospace;
}

/* Token Section */
.token-section {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.section-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.btn-toggle {
  padding: 0.5rem 1rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-toggle:hover {
  opacity: 0.9;
}

.token-content {
  background: var(--bg-primary);
  border: 1px dashed var(--border-color);
  border-radius: 0.5rem;
  padding: 1rem;
}

.token-display {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.token-code {
  background: #1f2937;
  color: #10b981;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  font-family: monospace;
  font-size: 0.85rem;
  word-break: break-all;
  margin: 0;
}

.btn-copy {
  padding: 0.5rem 1rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;
}

.btn-copy:hover {
  background-color: #059669;
  transform: translateY(-1px);
}

.token-hidden {
  text-align: center;
  padding: 1rem;
  color: var(--text-secondary);
}

/* Data Section */
.data-section {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
}

.data-section h3 {
  margin: 0 0 1.5rem 0;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.data-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.data-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.data-item label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.data-item p {
  margin: 0;
  font-size: 1rem;
  color: var(--text-primary);
}

.code-text {
  font-family: monospace;
  font-size: 0.9rem;
}

/* Actions Section */
.actions-section {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary {
  background-color: var(--border-color);
  color: var(--text-primary);
}

.btn-secondary:hover {
  opacity: 0.8;
  transform: translateY(-1px);
}

.btn-danger {
  background-color: #dc2626;
  color: white;
}

.btn-danger:hover {
  background-color: #991b1b;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .profile-container {
    padding: 1rem;
  }

  .profile-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .user-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .data-grid {
    grid-template-columns: 1fr;
  }

  .actions-section {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
