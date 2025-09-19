<template>
  <section class="results-section">
    <div class="results-container">
      <h2 class="results-title">Projetos em Destaque</h2>
      <p class="results-subtitle">Descubra trabalhos incríveis da nossa comunidade</p>

      <div class="results-grid">
        <div v-for="n in 9" :key="n" class="result-card">
          <!-- Imagen aleatoria -->
          <div class="card-image">
            <img
              :src="`https://picsum.photos/id/${n + 20}/600/400`"
              alt="Projeto Preview"
            />
            <div class="card-overlay">
              <button class="view-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.45801 12C3.73201 7.943 7.52301 5 12.001 5C16.479 5 20.269 7.943 21.543 12C20.269 16.057 16.479 19 12.001 19C7.52301 19 3.73201 16.057 2.45801 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Ver Projeto
              </button>
            </div>
          </div>

          <!-- Info -->
          <div class="card-info">
            <div class="card-header">
              <h3 class="project-title">{{ getRandomProject() }}</h3>
              <div class="rating">
                <span class="star">⭐</span>
                <span class="rating-value">{{ (4.2 + Math.random() * 0.8).toFixed(1) }}</span>
              </div>
            </div>
            <p class="creator-name">por {{ getRandomUser() }}</p>
            <div class="project-tags">
              <span class="tag">{{ getRandomCategory() }}</span>
              <span class="tag">{{ getRandomCategory() }}</span>
            </div>

            <div class="card-stats">
              <span class="stat">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0614 3.41708C18.4 3.14052 17.6955 2.99817 16.985 2.99817C16.2745 2.99817 15.57 3.14052 14.9086 3.41708C14.2472 3.69364 13.6408 4.099 13.13 4.61L12 5.74L10.87 4.61C9.83932 3.57831 8.44239 2.99858 7.005 2.99858C5.56761 2.99858 4.17068 3.57831 3.14 4.61C2.10932 5.64069 1.52959 7.03762 1.52959 8.475C1.52959 9.91239 2.10932 11.3093 3.14 12.34L4.27 13.47L12 21.2L19.73 13.47L20.86 12.34C21.371 11.8292 21.7764 11.2228 22.0529 10.5614C22.3295 9.9 22.4718 9.19552 22.4718 8.485C22.4718 7.77448 22.3295 7.07001 22.0529 6.4086C21.7764 5.7472 21.371 5.14081 20.86 4.63001L20.84 4.61Z" fill="currentColor"/>
                </svg>
                {{ 100 + n }}
              </span>
              <span class="stat">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ 500 + n * 30 }}
              </span>
            </div>
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

const categories = [
  "Design",
  "Desenvolvimento",
  "Marketing",
  "Fotografia",
  "Ilustração",
  "UX/UI",
  "Mobile",
  "Web",
  "Branding"
]

// Funciones para aleatorizar
function getRandomProject() {
  return projects[Math.floor(Math.random() * projects.length)]
}

function getRandomUser() {
  return users[Math.floor(Math.random() * users.length)]
}

function getRandomCategory() {
  return categories[Math.floor(Math.random() * categories.length)]
}
</script>

<style scoped>
.results-section {
  display: flex;
  justify-content: center;
  padding: 80px 20px;
  background: #f8fafc;
}

.results-container {
  width: 100%;
  max-width: 1200px;
}

.results-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  text-align: center;
  margin: 0 0 8px 0;
}

.results-subtitle {
  font-size: 1.1rem;
  color: #64748b;
  text-align: center;
  margin: 0 0 48px 0;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  width: 100%;
}

.result-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.result-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.result-card:hover .card-image img {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.result-card:hover .card-overlay {
  opacity: 1;
}

.view-btn {
  background: #fff;
  color: #1a202c;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.view-btn:hover {
  background: #0a66c2;
  color: #fff;
}

.card-info {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.project-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #1a202c;
  flex: 1;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fef3c7;
  padding: 4px 8px;
  border-radius: 12px;
}

.rating-value {
  font-size: 14px;
  font-weight: 600;
  color: #d97706;
}

.creator-name {
  font-size: 14px;
  color: #64748b;
  margin: 0 0 12px 0;
}

.project-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  background: #f1f5f9;
  color: #475569;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.card-stats {
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #64748b;
}

.card-stats .stat {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Responsive */
@media (max-width: 1024px) {
  .results-container {
    max-width: 1000px;
  }
  .results-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 28px;
  }
  .results-section {
    padding: 70px 20px;
  }
}

@media (max-width: 768px) {
  .results-section {
    padding: 40px 20px;
  }
  .results-title {
    font-size: 2rem;
  }
  .results-subtitle {
    font-size: 1rem;
  }
  .results-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .result-card {
    border-radius: 12px;
  }
  .card-info {
    padding: 16px;
  }
  .project-title {
    font-size: 16px;
  }
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .results-section {
    padding: 30px 15px;
  }
  .results-title {
    font-size: 1.8rem;
  }
  .results-subtitle {
    font-size: 0.95rem;
    margin-bottom: 32px;
  }
  .results-grid {
    gap: 20px;
  }
  .result-card {
    border-radius: 10px;
  }
  .card-image img {
    height: 180px;
  }
  .card-info {
    padding: 14px;
  }
  .project-title {
    font-size: 15px;
  }
  .creator-name {
    font-size: 13px;
  }
  .project-tags {
    gap: 6px;
  }
  .tag {
    padding: 3px 10px;
    font-size: 11px;
  }
  .card-stats {
    gap: 16px;
    font-size: 13px;
  }
  .view-btn {
    padding: 10px 18px;
    font-size: 13px;
  }
}
</style>
