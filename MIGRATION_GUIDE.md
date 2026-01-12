# 🔄 Guía de Migración de Páginas

Este documento explica cómo migrar las páginas existentes al nuevo sistema de componentes.

## 📋 Estado Actual

| Página | Estado | Refactorizada |
|--------|--------|---------------|
| `profile.astro` | ✅ Nueva versión limpia | Sí |
| `index.astro` | ⏳ Pendiente | No |
| `login.astro` | ⏳ Pendiente | Ejemplo: `login-refactored.astro` |
| `cadastro.astro` | ⏳ Pendiente | Ejemplo: `cadastro-refactored.astro` |
| `recuperar-senha.astro` | ⏳ Pendiente | No |

## 🎯 Pasos para Migrar una Página

### Paso 1: Identificar componentes
Revisar la página actual e identificar:
- Secciones grandes (hero, feature, etc)
- Componentes reutilizables (cards, buttons, inputs)
- Estilos que pueden centralizarse

### Paso 2: Extraer datos
Crear archivo en `src/data/` con los datos tipados:

```typescript
// src/data/index.ts
export const indexData = {
  hero: {
    title: 'Destaca tu experiencia',
    description: 'Crea tu vitrine profesional'
  },
  features: [
    { id: '1', icon: '🚀', title: 'Rápido', description: '...' },
    // más features...
  ],
  benefits: [...]
};
```

### Paso 3: Usar componentes existentes
Importar y usar los componentes que ya existen:

```astro
---
import SectionHeader from '../components/sections/SectionHeader.astro';
import FeaturesGrid from '../components/sections/FeaturesGrid.astro';
import CTASection from '../components/sections/CTASection.astro';
import { indexData } from '../data/index';
---

<SectionHeader heading={indexData.hero.title} />
<FeaturesGrid items={indexData.features} cols={3} />
<CTASection title="Comienza ahora" buttonHref="/signup" />
```

### Paso 4: Crear componentes necesarios
Si faltan componentes específicos, crearlos en:
- `components/sections/` para secciones grandes
- `components/common/` para componentes pequeños y reutilizables

### Paso 5: Migrar estilos
- Mover estilos globales a `styles/variables.css`
- Usar clases de utilidad
- Eliminar estilos inline

### Paso 6: Testar responsividad
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 📝 Checklist de Migración

- [ ] Datos extraídos a `src/data/`
- [ ] Importaciones organizadas y limpias
- [ ] Componentes comunes reutilizados
- [ ] Componentes nuevos creados si es necesario
- [ ] Estilos centralizados
- [ ] Sin estilos duplicados
- [ ] Responsive en todas las resoluciones
- [ ] Accesibilidad verificada (alt, aria-*, labels)
- [ ] Sin console.log ni errores
- [ ] Página refactorizada y funcional

## 🔧 Ejemplo Completo: index.astro

### Antes (Actual)
```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import CtaSection from '../components/CtaSection.astro';
import Footer from '../components/Footer.astro';
import StickyCtaSection from '../components/StickyCtaSection.astro';
---

<Layout>
  <Header />
  <StickyCtaSection />
  <main class="main-content">
    <CtaSection />
    
    <section class="problems-section">
      <div class="container">
        <h2 class="section-title">Destaque suas experiências</h2>
        <div class="problems-grid">
          <div class="problem-card">
            <div class="problem-icon">🚀</div>
            <h3>Participación en Proyectos...</h3>
            <p>Descripción largo...</p>
          </div>
          <!-- Muchas más cards copiadas -->
        </div>
      </div>
    </section>
    
    <!-- 500+ líneas más de HTML/CSS/JS -->
  </main>
  <Footer />
</Layout>

<style>
/* Enormes bloques de CSS inline */
</style>
```

### Después (Nueva versión)
```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

// Componentes
import SectionHeader from '../components/sections/SectionHeader.astro';
import FeaturesGrid from '../components/sections/FeaturesGrid.astro';
import CTASection from '../components/sections/CTASection.astro';
import StickyCtaSection from '../components/StickyCtaSection.astro';

// Data
import { indexData } from '../data/index';
---

<Layout title="Inicio">
  <Header />
  <StickyCtaSection />
  <main class="main-content">
    <CTASection {...indexData.hero} />
    
    <section class="features-section">
      <div class="container">
        <SectionHeader 
          heading={indexData.problemsTitle}
          subheading={indexData.problemsSubtitle}
        />
        <FeaturesGrid items={indexData.problems} cols={3} />
      </div>
    </section>

    <section class="benefits-section">
      <div class="container">
        <SectionHeader 
          heading={indexData.benefitsTitle}
          subheading={indexData.benefitsSubtitle}
        />
        <FeaturesGrid items={indexData.benefits} cols={3} />
      </div>
    </section>
  </main>
  <Footer />
</Layout>

<style>
  .features-section,
  .benefits-section {
    padding: var(--space-xl) 0;
  }
</style>
```

## 📦 Estructura de Data Tipada

```typescript
// src/data/index.ts
export interface Hero {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const indexData = {
  hero: {
    title: '...',
    description: '...',
    buttonText: 'Comenzar',
    buttonHref: '/signup'
  } as Hero,
  
  problems: [
    {
      id: '1',
      icon: '🚀',
      title: 'Proyectos',
      description: '...'
    }
    // más...
  ] as Feature[]
};
```

## 🚫 Antipatrones en Migración

```astro
<!-- ❌ NO: Copiar HTML de la página anterior -->
<div class="problem-card">
  <div class="problem-icon">🚀</div>
  <h3>Titulo</h3>
  <p>Descripción</p>
</div>

<!-- ✅ SÍ: Usar componentes -->
<FeaturesGrid items={problems} cols={3} />

---

<!-- ❌ NO: Dejar estilos en la página -->
<style>
  .problem-card { /* 50 líneas */ }
  .section-title { /* 30 líneas */ }
  /* etc... */
</style>

<!-- ✅ SÍ: Centralizar en variables.css o componentes -->
```

## ✅ Orden Recomendado de Migración

1. **Páginas simples primero**: `recuperar-senha.astro`, `profile.astro` ✅
2. **Páginas con formularios**: `login.astro`, `cadastro.astro` 
3. **Páginas complejas**: `index.astro`

## 🎨 Reutilización de Componentes por Página

| Componente | index | login | cadastro | profile | recuperar |
|-----------|-------|-------|----------|---------|-----------|
| Button | ✅ | ✅ | ✅ | ✅ | ✅ |
| SectionHeader | ✅ | - | - | ✅ | - |
| FeaturesGrid | ✅ | - | - | ✅ | - |
| CTASection | ✅ | - | - | - | ✅ |
| FormInput | - | ✅ | ✅ | - | ✅ |
| AuthCard | - | ✅ | ✅ | - | ✅ |
| Avatar | - | - | - | ✅ | - |

## 🔍 Validación Post-Migración

```bash
# 1. Sin console.log o errores
# 2. Sin estilos duplicados
# 3. Responsive (probar en 3 tamaños)
# 4. Accesible (devtools)
# 5. Performance OK (lighthouse)
```

## 📞 Ayuda

Si encuentras problemas durante la migración:
1. Revisar `COMPONENTES_GUIA.md` para ejemplos
2. Revisar `BEST_PRACTICES.md` para patrones
3. Ver ejemplo en `login-refactored.astro` o `cadastro-refactored.astro`

---

**¡Usa esta guía para mantener tu proyecto limpio y profesional!**
