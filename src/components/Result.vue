<template>
  <section class="results-section">
    <div class="results-grid">
      <div v-for="n in 9" :key="n" class="result-card">
        <!-- Imagen aleatoria -->
        <div class="card-image">
          <img
            :src="`https://picsum.photos/id/${n + 20}/600/400`"
            alt="Projeto Preview"
          />
        </div>

        <!-- Info -->
        <div class="card-info">
          <h3 class="project-title">{{ getRandomProject() }}</h3>
          <p class="creator-name">por {{ getRandomUser() }}</p>

          <div class="card-stats">
            <span class="stat">❤️ {{ 100 + n }}</span>
            <span class="stat">👁️ {{ 500 + n * 30 }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  "Casa Moderna",
  "Portfolio Criativo",
  "Aplicativo Móvel",
  "Loja Virtual",
  "Sistema de Gestão",
  "Blog Minimalista",
  "Dashboard Analytics",
  "Landing Page",
  "Arte Digital"
]

const users = [
  "Ana Silva",
  "Carlos Mendes",
  "Mariana Costa",
  "João Pereira",
  "Lucas Oliveira",
  "Fernanda Lima",
  "Ricardo Santos",
  "Paula Souza",
  "Tiago Gomes"
]

// Funciones para aleatorizar
function getRandomProject() {
  return projects[Math.floor(Math.random() * projects.length)]
}

function getRandomUser() {
  return users[Math.floor(Math.random() * users.length)]
}
</script>

<style scoped>
.results-section {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  padding: 0 12px; /* margen lateral para mobile */
}

.result-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.result-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-info {
  padding: 12px 14px;
}

.project-title {
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  color: #222;
}

.creator-name {
  font-size: 13px;
  color: #666;
  margin: 4px 0 8px;
}

.card-stats {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #444;
}

.card-stats .stat {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
