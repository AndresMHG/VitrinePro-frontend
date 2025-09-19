<template>
  <div class="search-wrapper">
    <div class="search-container">
      <h2 class="search-title">Explore e Conecte-se</h2>
      <p class="search-subtitle">Descubra projetos incríveis, talentos e oportunidades na nossa comunidade</p>

      <!-- Filtros superiores -->
      <div class="search-filters">
        <button class="filter-btn active">Projeto</button>
        <button class="filter-btn">Comunidade</button>
        <button class="filter-btn">Talentos</button>
        <button class="filter-btn">Ferramentas</button>
        <button class="filter-btn">Serviços</button>
      </div>

      <!-- Barra de búsqueda -->
      <div class="search-bar">
        <div class="search-input-wrapper">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input
            type="text"
            placeholder="Encontre oportunidades e talentos"
            class="search-input"
          />
        </div>
        <button class="search-btn">
          <span>Buscar</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- Categorías -->
      <div class="search-categories">
        <h3 class="categories-title">Ou explore por categoria:</h3>
        <div class="categories-grid">
          <button class="category-btn">Tecnologia</button>
          <button class="category-btn">Saúde</button>
          <button class="category-btn">Comercial</button>
          <button class="category-btn">Direito</button>
          <button class="category-btn">Logística</button>
          <button class="category-btn">Engenharia</button>
          <button class="category-btn">Marketing</button>
          <button class="category-btn">RH</button>
          <button class="category-btn">Contábil e Fiscal</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-wrapper {
  display: flex;
  justify-content: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.search-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 8px 0;
  text-align: center;
}

.search-subtitle {
  font-size: 1.1rem;
  color: #64748b;
  margin: 0 0 32px 0;
  text-align: center;
  max-width: 600px;
}

/* Filtros */
.search-filters {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  background: #f1f5f9;
  border: 2px solid transparent;
  color: #475569;
}

.filter-btn:hover {
  background: #e2e8f0;
  transform: translateY(-1px);
}

.filter-btn.active {
  background: #0a66c2;
  color: #fff;
  border-color: #0a66c2;
  box-shadow: 0 4px 12px rgba(10, 102, 194, 0.3);
}

/* Search Bar */
.search-bar {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: 32px;
  gap: 12px;
}

.search-input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  border: 2px solid #e2e8f0;
  border-radius: 50px;
  overflow: hidden;
  background: #fff;
  transition: all 0.3s ease;
}

.search-input-wrapper:focus-within {
  border-color: #0a66c2;
  box-shadow: 0 0 0 3px rgba(10, 102, 194, 0.1);
}

.search-icon {
  margin-left: 16px;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  padding: 16px 20px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #1a202c;
  background: transparent;
}

.search-btn {
  background: linear-gradient(135deg, #0a66c2, #004182);
  color: #fff;
  border: none;
  padding: 16px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(10, 102, 194, 0.3);
}

.search-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(10, 102, 194, 0.4);
}

/* Categories */
.search-categories {
  width: 100%;
}

.categories-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 16px 0;
  text-align: center;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.category-btn {
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #64748b;
}

.category-btn:hover {
  background: #0a66c2;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(10, 102, 194, 0.2);
}

/* Responsive */
@media (max-width: 1024px) {
  .search-container {
    padding: 32px;
    max-width: 900px;
  }
  .search-title {
    font-size: 2.2rem;
  }
  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
}

@media (max-width: 768px) {
  .search-wrapper {
    padding: 40px 15px;
  }
  .search-container {
    padding: 24px 20px;
  }
  .search-title {
    font-size: 2rem;
  }
  .search-subtitle {
    font-size: 1rem;
  }
  .search-bar {
    flex-direction: column;
    gap: 16px;
  }
  .search-input-wrapper {
    width: 100%;
  }
  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}

@media (max-width: 480px) {
  .search-wrapper {
    padding: 30px 10px;
  }
  .search-container {
    padding: 20px 15px;
  }
  .search-title {
    font-size: 1.8rem;
  }
  .search-subtitle {
    font-size: 0.95rem;
  }
  .search-filters {
    gap: 6px;
  }
  .filter-btn {
    padding: 6px 16px;
    font-size: 13px;
  }
  .search-input {
    padding: 14px 18px;
    font-size: 15px;
  }
  .search-btn {
    padding: 14px 20px;
    font-size: 15px;
  }
  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
  }
  .category-btn {
    padding: 10px 14px;
    font-size: 13px;
  }
}
</style>
