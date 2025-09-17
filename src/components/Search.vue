<template>
  <div class="search-wrapper">
    <div class="search-section-container">
      <!-- Filtros superiores -->
      <div class="search-section-filters">
        <button class="category-item active">Projeto</button>
        <button class="category-item">Comunidade</button>
        <button class="category-item">Talentos</button>
        <button class="category-item">Ferramentas</button>
        <button class="category-item">Serviços</button>
      </div>

      <!-- Barra de búsqueda -->
      <div class="search-section-input">
        <input
        type="text"
        placeholder="Encontre oportunidades e talentos"
        class="search-input"
        />
        <button class="search-button">Buscar</button>
      </div>

      <!-- Categorías inferiores -->
      <div class="search-section-category">
        <button class="category-item">Tecnologia</button>
        <button class="category-item">Saúde</button>
        <button class="category-item">Comercial</button>
        <button class="category-item">Direito</button>
        <button class="category-item">Logística</button>
        <button class="category-item">Engenharia</button>
        <button class="category-item">Marketing</button>
        <button class="category-item">RH</button>
        <button class="category-item">Contábil e Fiscal</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.search-section-container {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 800px;
  max-width: 1200px;
  padding: 0 20px;
}

/* Filtros superiores */
.search-section-filters {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.category-item {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
  background: #f8f8f8;
  border: none;
  color: #444;
}

.category-item:hover {
  background: #eaeaea;
}

.category-item.active {
  background: #0a66c2;
  color: #fff;
  font-weight: 600;
}

/* Input de búsqueda */
.search-section-input {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 16px;
  background: #fff;
}

.search-input {
  flex: 1;
  padding: 12px 16px;
  border: none;
  outline: none;
  font-size: 14px;
  color: #333;
}

.search-button {
  background: #0a66c2;
  color: #fff;
  border: none;
  padding: 0 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 100%;
}

.search-button:hover {
  background: #004182;
}

.search-section-category {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.search-section-category .category-item {
  background: #ffffff;
  color: #666;
  font-size: 12px;
  padding: 6px 14px;
}
</style>
