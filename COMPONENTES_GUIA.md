# 📦 Guía de Componentes - VitrinePro Refactorizado

## Estructura del Proyecto

```
src/
├── styles/
│   ├── global.css       # Estilos globales y resets
│   └── variables.css    # Variables CSS (colores, espacios, etc)
├── components/
│   ├── common/          # Componentes reutilizables
│   │   ├── Button.astro
│   │   ├── Avatar.astro
│   │   ├── Badge.astro
│   │   ├── Card.astro
│   │   └── SocialLink.astro
│   ├── profile/         # Componentes específicos de perfil
│   │   ├── ProfileLayout.astro
│   │   ├── ProfileCover.astro
│   │   ├── ProfileSidebar.astro
│   │   ├── ProfileTabs.astro
│   │   └── ProjectGrid.astro
│   ├── sections/        # Secciones reutilizables (en construcción)
│   └── ...
├── data/
│   └── profile.ts       # Datos tipados del perfil
├── layouts/
│   └── Layout.astro     # Layout principal con estilos globales
└── pages/
    └── profile.astro    # Página limpia y simple
```

## 🎨 Componentes Comunes (Common)

### Button
Botón reutilizable con múltiples variantes.

```astro
---
import Button from '../components/common/Button.astro';
---

<!-- Primary button -->
<Button variant="primary" size="md">Haz click</Button>

<!-- Secondary button -->
<Button variant="secondary">Mensaje</Button>

<!-- Ghost button -->
<Button variant="ghost">Cancelar</Button>

<!-- Como enlace -->
<Button href="/profile" variant="primary">Ir a perfil</Button>

<!-- Propiedades -->
<!-- variant: 'primary' | 'secondary' | 'ghost' -->
<!-- size: 'sm' | 'md' | 'lg' -->
<!-- fullWidth: boolean -->
<!-- disabled: boolean -->
<!-- href: string (opcional) -->
<!-- type: 'button' | 'submit' | 'reset' -->
```

### Avatar
Imagen de perfil con estado opcional.

```astro
---
import Avatar from '../components/common/Avatar.astro';
---

<!-- Avatar básico -->
<Avatar 
  src="https://..." 
  alt="Usuario"
  size="md"
/>

<!-- Con badge PRO -->
<Avatar 
  src="https://..."
  alt="Usuario"
  size="lg"
  status="pro"
/>

<!-- Propiedades -->
<!-- src: string (URL) -->
<!-- alt: string (texto alternativo) -->
<!-- size: 'sm' | 'md' | 'lg' -->
<!-- status: 'pro' | 'verified' | 'online' -->
```

### Badge
Etiqueta o insignia para destacar estado.

```astro
---
import Badge from '../components/common/Badge.astro';
---

<Badge label="PRO" variant="primary" size="md" />
<Badge label="Verificado" variant="success" />
<Badge label="Nuevo" variant="warning" />

<!-- Propiedades -->
<!-- label: string (texto) -->
<!-- variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' -->
<!-- size: 'sm' | 'md' | 'lg' -->
```

### Card
Contenedor con estilos predefinidos.

```astro
---
import Card from '../components/common/Card.astro';
---

<Card variant="default">
  <div class="card-content">
    <!-- Tu contenido aquí -->
  </div>
</Card>

<!-- Propiedades -->
<!-- variant: 'default' (con sombra) | 'outlined' (solo borde) -->
```

### SocialLink
Enlace social con iconos.

```astro
---
import SocialLink from '../components/common/SocialLink.astro';
---

<SocialLink href="#" label="Facebook" icon="facebook" />
<SocialLink href="#" label="Instagram" icon="instagram" />
<SocialLink href="#" label="LinkedIn" icon="linkedin" />
<SocialLink href="#" label="GitHub" icon="github" />

<!-- Propiedades -->
<!-- href: string -->
<!-- label: string (para accesibilidad) -->
<!-- icon: 'facebook' | 'instagram' | 'linkedin' | 'github' -->
```

## 🎯 Componentes de Perfil (Profile)

### ProfileLayout
Layout principal del perfil con fondo gradiente.

```astro
---
import ProfileLayout from '../components/profile/ProfileLayout.astro';
---

<ProfileLayout>
  <!-- Tu contenido -->
</ProfileLayout>
```

### ProfileCover
Imagen de portada del perfil.

```astro
---
import ProfileCover from '../components/profile/ProfileCover.astro';
---

<ProfileCover coverImage="https://..." />
```

### ProfileSidebar
Barra lateral con información del usuario.

```astro
---
import ProfileSidebar from '../components/profile/ProfileSidebar.astro';

const user = {
  name: 'Janyne Azevedo',
  avatar: 'https://...',
  status: 'pro',
  bio: ['Bio line 1', 'Bio line 2'],
  website: 'example.com',
  social: [
    { platform: 'Facebook', url: '#' },
    { platform: 'Instagram', url: '#' }
  ]
};
---

<ProfileSidebar user={user} />
```

### ProfileTabs
Tabs para filtrar contenido.

```astro
---
import ProfileTabs from '../components/profile/ProfileTabs.astro';

const tabs = [
  { id: 'all', label: 'Todos' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'articles', label: 'Artículos' }
];
---

<ProfileTabs tabs={tabs} activeTab="all" />
```

### ProjectGrid
Grid de proyectos/trabajos.

```astro
---
import ProjectGrid from '../components/profile/ProjectGrid.astro';

const projects = [
  {
    id: '1',
    src: 'https://...',
    alt: 'Titulo',
    title: 'Mi Proyecto',
    author: 'Nombre',
    likes: 10,
    views: 50,
    category: 'proyectos',
    featured: true
  }
  // más proyectos...
];
---

<ProjectGrid projects={projects} />
```

## 📊 Variables CSS (Variables)

Todos los componentes usan variables CSS centralizadas:

```css
/* Colores */
--primary: #0a66c2;
--primary-dark: #004182;
--gradient: linear-gradient(135deg, var(--primary), var(--primary-dark));

/* Fondos */
--bg-white: #ffffff;
--bg-light: #f8fafc;
--bg-lighter: #eef2f7;
--bg-muted: #f5f7fa;

/* Textos */
--text-primary: #111827;
--text-secondary: #6b7280;
--text-tertiary: #64748b;
--text-muted: #475569;

/* Espaciado */
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */

/* Radio de bordes */
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-full: 9999px;

/* Transiciones */
--transition-fast: 0.15s ease-in-out;
--transition-base: 0.2s ease-in-out;
--transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

## 📝 Ejemplo Completo: Página Profile

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

// Componentes
import ProfileLayout from '../components/profile/ProfileLayout.astro';
import ProfileCover from '../components/profile/ProfileCover.astro';
import ProfileSidebar from '../components/profile/ProfileSidebar.astro';
import ProfileTabs from '../components/profile/ProfileTabs.astro';
import ProjectGrid from '../components/profile/ProjectGrid.astro';

// Data
import { profileData } from '../data/profile';
---

<Layout>
  <Header />
  <ProfileLayout>
    <ProfileCover />
    <div class="container profile-wrap">
      <ProfileSidebar user={profileData.user} />
      <section class="profile-content">
        <ProfileTabs tabs={profileData.tabs} />
        <ProjectGrid projects={profileData.projects} />
      </section>
    </div>
  </ProfileLayout>
  <Footer />
</Layout>

<style>
  /* Solo estilos específicos de la página */
</style>

<script>
  // Script específico de la página
</script>
```

## 🚀 Ventajas del Nuevo Diseño

✅ **Componentes reutilizables** - Usa los mismos componentes en diferentes páginas  
✅ **Estilos centralizados** - Variables CSS en un solo lugar  
✅ **Código limpio** - Las páginas son pequeñas y fáciles de leer  
✅ **Fácil de mantener** - Cambios globales sin modificar múltiples archivos  
✅ **Escalable** - Agrega nuevos componentes sin afectar los existentes  
✅ **TypeScript** - Tipado automático en los datos  

## 📌 Próximos Pasos

1. Aplicar el mismo patrón a `index.astro`, `login.astro`, `cadastro.astro`, etc.
2. Crear componentes para formularios reutilizables
3. Crear componentes de secciones comunes (CTA, Newsletter, etc.)
4. Organizar mejor los estilos con más carpetas temáticas
5. Considerar usar Tailwind CSS si necesitas más velocidad

---

**¿Necesitas ayuda para refactorizar otras páginas o crear nuevos componentes?**
