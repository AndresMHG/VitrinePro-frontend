<template>
  <div class="search-wrapper">
    <h2 class="search-title">Encontre oportunidades e talentos</h2>
    <div class="search-container">
      <input
        type="text"
        class="search-input"
        placeholder="Buscar..."
      />
      <button class="search-btn">Buscar</button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.search-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
}

.search-title {
  margin-bottom: 16px;
  text-align: center;
  color: #222;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
  font-size: clamp(2rem, 5vw, 2.5rem);
}

.search-container {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(60,60,67,0.07);
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.search-input {
  flex: 1 1 0;
  min-width: 120px;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 6px;
  background: #f2f2f7;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
}

.search-btn {
  flex: 0 0 auto;
  width: 120px;
  padding: 10px 0;
  border: none;
  border-radius: 6px;
  background: #007aff;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.search-btn:hover {
  background: #005bb5;
}

@media (max-width: 900px) {
  .search-wrapper {
    min-width: 0;
    max-width: 100%;
    padding: 0 8px;
  }
  .search-container {
    padding: 12px;
    gap: 8px;
    flex-direction: column;
  }
  .search-btn {
    width: 100%;
    margin-top: 8px;
  }
}
</style>