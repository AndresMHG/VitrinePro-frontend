<template>
  <header class="header">
    <div class="logo">
      <svg
        v-if="!isMobile"
        width="210"
        height="56"
        viewBox="0 0 210 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="logo-img"
      >
        <!-- Cuadrado azul con V blanca centrada -->
        <rect x="0" y="8" width="56" height="40" rx="10" fill="#1780d4"/>
        <text
          x="28"
          y="36"
          text-anchor="middle"
          fill="#fff"
          font-size="32"
          font-family="'Segoe UI', Arial, sans-serif"
          font-weight="bold"
          alignment-baseline="middle"
          dominant-baseline="middle"
        >V</text>
        <!-- Texto VitrinePro alineado verticalmente al centro del cuadrado -->
        <text
          x="72"
          y="36"
          fill="#222"
          font-size="32"
          font-family="'Segoe UI', Arial, sans-serif"
          font-weight="500"
          alignment-baseline="middle"
          dominant-baseline="middle"
        >VitrinePro</text>
      </svg>
      <svg
        v-else
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="logo-mobile"
      >
        <rect x="0" y="0" width="40" height="40" rx="8" fill="#1780d4"/>
        <text
          x="20"
          y="26"
          text-anchor="middle"
          fill="#fff"
          font-size="24"
          font-family="'Segoe UI', Arial, sans-serif"
          font-weight="bold"
          alignment-baseline="middle"
          dominant-baseline="middle"
        >V</text>
      </svg>
    </div>
    <div class="login">
      <a href="/login" class="login-text">Iniciar sesión</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(window.innerWidth <= 600);

function handleResize() {
  isMobile.value = window.innerWidth <= 600;
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  font-family: 'Segoe UI', Arial, sans-serif;
}
.logo {
  display: flex;
  align-items: center;
}
.logo-img {
  height: 56px;
  width: auto;
}
.logo-mobile {
  height: 40px;
  width: 40px;
  display: block;
}
.login {
  display: flex;
  align-items: center;
}
.login-text {
  color: #1780d4;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 20px;
  transition: background 0.2s;
}
.login-text:hover {
  background: #e6f0fa;
}
@media (max-width: 600px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }
  .login-text {
    font-size: 1rem;
    padding: 8px 12px;
  }
}
</style>