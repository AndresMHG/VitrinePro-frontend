# 📚 Mejores Prácticas - VitrinePro

## ✨ Convenciones y Estándares

### 1. Nomenclatura de Carpetas
```
components/
├── common/      ← Componentes pequeños y reutilizables
├── profile/     ← Componentes específicos de dominio
└── sections/    ← Secciones grandes reutilizables
```

### 2. Nomenclatura de Archivos
- **Componentes**: PascalCase (Button.astro, ProfileCard.astro)
- **Páginas**: kebab-case (profile.astro, my-profile.astro)
- **Datos**: camelCase (profileData.ts, userData.ts)
- **Estilos**: kebab-case (global.css, variables.css)

### 3. Estructura de Componentes

```astro
---
// 1. Imports
import OtherComponent from '../other/Component.astro';

// 2. Types/Interfaces
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
  class?: string;
}

// 3. Props destructuring
const { title, variant = 'primary', class: className = '' } = Astro.props;

// 4. Logic/Computations
const buttonClass = `btn btn--${variant}`;
---

<!-- 5. Template -->
<button class={buttonClass}>
  {title}
</button>

<!-- 6. Styles -->
<style>
  .btn {
    /* estilos */
  }
</style>
```

### 4. Props Comunes

Todos los componentes deben aceptar `class` para flexibilidad:

```astro
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
  class?: string;        // ← Siempre incluir
}

const { title, variant = 'primary', class: className = '' } = Astro.props;
```

Uso:
```astro
<Button class="mt-4 mb-2">Haz click</Button>
```

### 5. Estilos

#### Para variables globales:
```css
/* En variables.css */
:root {
  --primary: #0a66c2;
  --space-md: 1rem;
}
```

#### Para estilos de componentes:
```astro
<style>
  .button {
    color: var(--primary);
    padding: var(--space-md);
  }
</style>

<!-- Con propiedades dinámicas -->
<style define:vars={{ bgColor }}>
  .box {
    background: var(--bgColor);
  }
</style>
```

#### Para estilos globales del componente:
```astro
<style is:global>
  /* Aplica a todo el proyecto */
</style>
```

### 6. Organización de Props

```astro
---
interface Props {
  // Requeridas primero
  id: string;
  title: string;
  
  // Opcionales con valores por defecto
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  
  // Siempre al final
  class?: string;
}

const {
  id,
  title,
  variant = 'primary',
  size = 'md',
  disabled = false,
  class: className = ''
} = Astro.props;
---
```

### 7. Atributos Accesibles

Siempre incluir:
- `aria-label` en iconos
- `alt` en imágenes
- `label` en inputs
- `title` en tooltips

```astro
<img src="..." alt="Descripción útil" />
<button aria-label="Cerrar">×</button>
<a href="..." title="Ir a...">Link</a>
```

### 8. Responsive Design

```css
/* Mobile first */
.component {
  /* Base - mobile */
  font-size: 1rem;
}

@media (min-width: 768px) {
  .component {
    /* Tablet and up */
    font-size: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .component {
    /* Desktop and up */
    font-size: 1.5rem;
  }
}
```

### 9. Transiciones y Animaciones

Siempre usar variables CSS:
```css
transition: all var(--transition-base);  /* 0.2s ease-in-out */
transition: transform var(--transition-slow);  /* 0.4s */
```

### 10. Importaciones en Páginas

```astro
---
// 1. Imports de framework
import Layout from '../layouts/Layout.astro';

// 2. Imports de componentes (order: layout, common, specific)
import Header from '../components/Header.astro';
import Button from '../components/common/Button.astro';
import ProfileCard from '../components/profile/ProfileCard.astro';

// 3. Imports de data
import { profileData } from '../data/profile';

// 4. Imports de types/utils
import type { Profile } from '../types/profile';
---
```

## 🎯 Patrones Comunes

### Componente con Slot

```astro
---
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<div class="card">
  <h3>{title}</h3>
  <slot />  <!-- ← Contenido personalizado -->
</div>
```

Uso:
```astro
<Card title="Mi tarjeta">
  <p>Contenido personalizado</p>
</Card>
```

### Componente Condicional

```astro
---
interface Props {
  show?: boolean;
}

const { show = true } = Astro.props;
---

{show && (
  <div class="alert">
    Esto solo aparece si show es true
  </div>
)}
```

### Componente con Múltiples Slots

```astro
<div class="card">
  <slot name="header" />
  <slot />  <!-- default slot -->
  <slot name="footer" />
</div>
```

Uso:
```astro
<Card>
  <div slot="header">Encabezado</div>
  <p>Contenido principal</p>
  <div slot="footer">Pie de página</div>
</Card>
```

### Props Opcionales del Mismo Tipo

```astro
---
interface Props {
  primary?: string;
  secondary?: string;
  tertiary?: string;
}

const colors = {
  primary: props.primary || 'blue',
  secondary: props.secondary || 'gray',
  tertiary: props.tertiary || 'white'
};
---
```

## 🔍 Type Safety

### Siempre tipear Props:

```astro
---
// ❌ Evitar
const props = Astro.props;

// ✅ Correcto
interface Props {
  id: string;
  items: Array<{ id: string; name: string }>;
  size?: 'sm' | 'md' | 'lg';
}

const { id, items, size = 'md' } = Astro.props;
---
```

### Crear tipos reutilizables:

```typescript
// src/types/common.ts
export type Variant = 'primary' | 'secondary' | 'ghost';
export type Size = 'sm' | 'md' | 'lg';
export type Theme = 'light' | 'dark';

// En el componente
import type { Variant, Size } from '../types/common';

interface Props {
  variant?: Variant;
  size?: Size;
}
```

## 📋 Checklist para Nuevos Componentes

- [ ] ✅ Interfaces/Types definidas
- [ ] ✅ Props bien estructuradas y tipadas
- [ ] ✅ `class` prop incluida para flexibilidad
- [ ] ✅ Atributos accesibles (aria-*, alt, etc)
- [ ] ✅ Estilos responsive (mobile-first)
- [ ] ✅ Variables CSS usadas correctamente
- [ ] ✅ Comentarios en lógica compleja
- [ ] ✅ Tested en múltiples resoluciones

## 🚫 Antipatrones a Evitar

```astro
<!-- ❌ NO: Estilos inline -->
<button style={{ color: 'blue', padding: '10px' }}>
  Click
</button>

<!-- ✅ SÍ: Usar clases -->
<button class="button">Click</button>

---

<!-- ❌ NO: Componentes enormes -->
<Component>
  <!-- 500 líneas de HTML/CSS/JS -->
</Component>

<!-- ✅ SÍ: Dividir en sub-componentes -->
<Component>
  <ComponentHeader />
  <ComponentContent />
  <ComponentFooter />
</Component>

---

<!-- ❌ NO: Lógica compleja en el template -->
{items.filter(i => i.status === 'active' && i.date > today).map(i => (...))}

<!-- ✅ SÍ: Preparar en la sección de scripts -->
{filteredItems.map(i => (...))}
```

---

**Siguiendo estas prácticas, tu código será:**
- 🎨 Consistente
- 🔧 Mantenible
- ♻️ Reutilizable
- 📱 Responsive
- ♿ Accesible
- 🚀 Performante
