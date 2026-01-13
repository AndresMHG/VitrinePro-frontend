# ⚙️ Configuración Recomendada del Proyecto

## 📋 Checklist de Setup Inicial

- [x] Estructura de carpetas creada
- [x] Componentes base implementados
- [x] Estilos globales configurados
- [x] Variables CSS definidas
- [x] Data tipada con TypeScript
- [ ] ESLint configurado (opcional)
- [ ] Prettier configurado (opcional)
- [ ] Pre-commit hooks (opcional)

## 🔧 Configuraciones Sugeridas

### 1. ESLint (Linting - Detección de errores)

```bash
npm install -D eslint eslint-plugin-astro
```

`.eslintrc.json`:
```json
{
  "extends": ["plugin:astro/recommended"],
  "parser": "astro-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "rules": {
    "astro/no-unused-css-selector": "warn",
    "astro/no-unused-define-vars": "warn"
  }
}
```

### 2. Prettier (Formateo de código)

```bash
npm install -D prettier
```

`.prettierrc.json`:
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "printWidth": 80,
  "astroAllowShorthand": true
}
```

`.prettierignore`:
```
node_modules
dist
docs
.astro
package-lock.json
```

### 3. Pre-commit Hooks (Husky)

```bash
npm install -D husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npm run lint && npm run format"
```

`.lintstagedrc`:
```json
{
  "*.{astro,js,ts}": ["eslint --fix", "prettier --write"],
  "*.css": ["prettier --write"]
}
```

### 4. Scripts en package.json

Agregar a `package.json`:
```json
{
  "scripts": {
    "dev": "astro dev --port 3001",
    "build": "astro build",
    "preview": "astro preview",
    "lint": "eslint src/ --ext .astro,.js,.ts",
    "format": "prettier --write 'src/**/*.{astro,js,ts,css}'",
    "type-check": "astro check"
  }
}
```

## 📱 Breakpoints Recomendados

```css
/* Mobile first */
/* Base: < 480px */

@media (min-width: 480px) {
  /* Small tablets */
}

@media (min-width: 768px) {
  /* Tablets and larger */
}

@media (min-width: 1024px) {
  /* Desktops */
}

@media (min-width: 1280px) {
  /* Large desktops */
}
```

## 🎨 Paleta de Colores

Basada en el actual:
```css
/* Primarios */
--primary: #0a66c2;
--primary-light: #d9e8f5;
--primary-dark: #004182;

/* Secundarios */
--secondary: #6b7280;
--secondary-light: #d1d5db;
--secondary-dark: #374151;

/* Estados */
--success: #10b981;
--warning: #f59e0b;
--danger: #ef4444;
--info: #3b82f6;

/* Neutrals */
--white: #ffffff;
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
--black: #000000;
```

## 🔤 Tipografía

```css
/* Familia de fuentes */
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'Courier New', monospace;

/* Tamaños */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */

/* Pesos */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

## 🎯 Optimizaciones Recomendadas

### 1. Image Optimization
```astro
<!-- ❌ Evitar -->
<img src="image.jpg" />

<!-- ✅ Usar -->
<img src={img} alt="Descripción" loading="lazy" width="800" height="600" />
```

### 2. Code Splitting
```astro
<!-- ❌ Evitar -->
import BigComponent from './BigComponent.astro';

<!-- ✅ Usar -->
<BigComponent client:idle />  <!-- Se carga cuando el navegador está inactivo -->
```

### 3. CSS Crítico
Asegurate que los estilos críticos estén en `global.css` para que se carguen de inmediato.

## 📊 Performance Targets

- ✅ Lighthouse Performance: > 90
- ✅ Lighthouse Accessibility: > 95
- ✅ Lighthouse Best Practices: > 90
- ✅ Lighthouse SEO: > 90

## 🔐 Seguridad

### Recomendaciones
1. Nunca expongas datos sensibles en el frontend
2. Valida siempre en el servidor
3. Escapa HTML cuando sea necesario
4. Usa HTTPS en producción

## 📚 Archivos de Configuración

### `astro.config.mjs`
```javascript
export default defineConfig({
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter"
    }]
  },
  integrations: [vue()],
  output: 'static',
  outDir: './docs',
  base: '/VitrinePro-frontend/',
});
```

### `tsconfig.json`
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "resolveJsonModule": true,
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@data/*": ["src/data/*"],
      "@styles/*": ["src/styles/*"]
    }
  }
}
```

Luego puedes usar imports cortos:
```astro
import Button from '@components/common/Button.astro';
import { profileData } from '@data/profile';
```

## 🚀 Deploy Checklist

- [ ] Eslint sin errores: `npm run lint`
- [ ] TypeScript sin errores: `npm run type-check`
- [ ] Build sin errores: `npm run build`
- [ ] Imágenes optimizadas
- [ ] Todos los enlaces funcionan
- [ ] Meta tags correctos
- [ ] Sitemap.xml configurado
- [ ] robots.txt configurado
- [ ] Analytics integrado
- [ ] Error tracking integrado

## 📈 Monitoreo en Producción

```javascript
// src/pages/monitoring.ts
export function trackEvent(eventName, data) {
  // Enviar a Google Analytics, Sentry, etc
  console.log(`Event: ${eventName}`, data);
}
```

## 🔄 Proceso de Desarrollo Recomendado

1. **Crear rama**: `git checkout -b feature/new-component`
2. **Desarrollar**: Hacer cambios
3. **Formatear**: `npm run format`
4. **Lintear**: `npm run lint`
5. **Testear**: Probar manualmente en 3 tamaños
6. **Commit**: `git commit -m "feat: nueva funcionalidad"`
7. **Push**: `git push origin feature/new-component`
8. **PR**: Crear pull request
9. **Revisar**: Code review
10. **Merge**: Merge a main

## 📞 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Build
npm run build            # Compilar para producción
npm run preview          # Previsualizar build

# Calidad
npm run lint             # Verificar errores
npm run format           # Formatear código
npm run type-check       # Verificar tipos

# Limpiar
npm run clean            # Limpiar dist/
```

## 🎯 Roadmap Futuro

- [ ] Agregar pruebas automatizadas (Vitest)
- [ ] Agregar Storybook
- [ ] Migrar a Tailwind (opcional)
- [ ] Agregar temas oscuro/claro
- [ ] Internacionalización (i18n)
- [ ] CMS integration
- [ ] Analytics avanzado

---

**Siguiendo esta configuración, tu proyecto será profesional y mantenible a largo plazo.**
