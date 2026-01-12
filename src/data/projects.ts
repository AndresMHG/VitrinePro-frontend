export interface Project {
  id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
  tech: string[];
  duration: string;
  team: string;
  link: string;
}

export const projectsData: Record<string, Project> = {
  'ecommerce': {
    id: 'ecommerce',
    category: 'Proyectos de Ejemplo',
    title: 'Refactor de Plataforma E-commerce',
    images: [
      'https://picsum.photos/id/20/800/600',
      'https://picsum.photos/id/21/800/600',
      'https://picsum.photos/id/22/800/600'
    ],
    description: `
      <h3>Desafío</h3>
      <p>La plataforma e-commerce heredada tenía problemas significativos de rendimiento, con tiempos de carga superiores a 8 segundos y caídas frecuentes durante horas pico. La arquitectura monolítica dificultaba la escalabilidad y el mantenimiento.</p>

      <h3>Solución</h3>
      <p>Se implementó un refactor completo usando arquitectura de microservicios con React para el frontend y Node.js para el backend. Se integraron servicios AWS para escalabilidad e implementaron estrategias avanzadas de caché.</p>

      <h3>Resultados</h3>
      <p>Se logró una mejora del 300% en tiempos de carga, se redujeron costos de servidor en un 40% y se aumentaron tasas de conversión en un 25%. La plataforma ahora maneja 10x más tráfico sin degradación de rendimiento.</p>

      <h3>Características Clave</h3>
      <ul>
        <li>Gestión de inventario en tiempo real</li>
        <li>Búsqueda avanzada con recomendaciones impulsadas por IA</li>
        <li>Soporte multiidioma</li>
        <li>Puertas de pago integradas</li>
        <li>Diseño responsive para móviles</li>
      </ul>
    `,
    tech: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Redis'],
    duration: '6 meses',
    team: '8 desarrolladores',
    link: 'https://example-ecommerce.com'
  },
  'mobile': {
    id: 'mobile',
    category: 'Proyectos de Ejemplo',
    title: 'Desarrollo de Aplicación Móvil',
    images: [
      'https://picsum.photos/id/25/800/600',
      'https://picsum.photos/id/26/800/600',
      'https://picsum.photos/id/27/800/600'
    ],
    description: `
      <h3>Descripción del Proyecto</h3>
      <p>Se desarrolló una aplicación móvil integral para que profesionales de la salud gestionen registros de pacientes, citas y documentación médica sobre la marcha.</p>

      <h3>Implementación Técnica</h3>
      <p>Construido con React Native para compatibilidad multiplataforma. Se implementó arquitectura offline-first con sincronización en tiempo real cuando se restaura la conectividad. Se integró con sistemas hospitalarios existentes a través de API seguras.</p>

      <h3>Logros Clave</h3>
      <p>Se lanzó 2 meses antes de lo previsto con retroalimentación excepcional del usuario. La aplicación logró una calificación de 4.8 estrellas en las tiendas iOS y Android, con más de 50,000 descargas en el primer año.</p>

      <h3>Características Implementadas</h3>
      <ul>
        <li>Cifrado seguro de datos del paciente</li>
        <li>Modo sin conexión con sincronización de datos</li>
        <li>Notas médicas de voz a texto</li>
        <li>Programación de citas con integración de calendario</li>
        <li>Protocolos de contacto de emergencia</li>
      </ul>
    `,
    tech: ['React Native', 'Express.js', 'MongoDB', 'Socket.io'],
    duration: '5 meses',
    team: '6 desarrolladores',
    link: 'https://example-healthapp.com'
  },
  'security': {
    id: 'security',
    category: 'Proyectos de Ejemplo',
    title: 'Auditoría de Seguridad y Mejoras',
    images: [
      'https://picsum.photos/id/30/800/600',
      'https://picsum.photos/id/31/800/600',
      'https://picsum.photos/id/32/800/600'
    ],
    description: `
      <h3>Evaluación de Seguridad</h3>
      <p>Se realizó una auditoría exhaustiva de seguridad de la plataforma web de una institución financiera importante, identificando 47 vulnerabilidades críticas y 120 problemas de riesgo medio en toda su infraestructura.</p>

      <h3>Estrategia de Implementación</h3>
      <p>Se desarrolló y ejecutó un plan integral de remediación que incluía endurecimiento de código, mejoras de infraestructura e implementación de monitoreo de seguridad. Todos los cambios se implementaron en fases para minimizar la interrupción del negocio.</p>

      <h3>Impacto Logrado</h3>
      <p>Se remediaron todas las vulnerabilidades críticas en 3 meses. Se implementó monitoreo 24/7 con detección automatizada de amenazas. Reducción del 95% en incidentes de seguridad durante el siguiente período de auditoría.</p>

      <h3>Tecnologías Implementadas</h3>
      <ul>
        <li>Análisis SAST/DAST</li>
        <li>WAF (Web Application Firewall)</li>
        <li>Encriptación end-to-end</li>
        <li>Autenticación multifactor</li>
        <li>Conformidad GDPR/LGPD</li>
      </ul>
    `,
    tech: ['Spring Boot', 'AWS Security', 'Kubernetes', 'HashiCorp Vault'],
    duration: '4 meses',
    team: '5 especialistas en seguridad',
    link: 'https://example-security.com'
  },
  'architecture': {
    id: 'architecture',
    category: 'Proyectos de Ejemplo',
    title: 'Modernización de Arquitectura',
    images: [
      'https://picsum.photos/id/35/800/600',
      'https://picsum.photos/id/36/800/600',
      'https://picsum.photos/id/37/800/600'
    ],
    description: `
      <h3>Contexto</h3>
      <p>Sistema empresarial legacy con arquitectura monolítica que limitaba la escala y velocidad de innovación.</p>

      <h3>Transformación</h3>
      <p>Migración a arquitectura de microservicios con contenedorización e implementación en Kubernetes.</p>

      <h3>Resultados</h3>
      <p>Tiempo de despliegue reducido del 90%, escalabilidad horizontal mejorada y ciclos de desarrollo más rápidos.</p>

      <h3>Stack Técnico</h3>
      <ul>
        <li>Kubernetes para orquestación</li>
        <li>Docker para contenedorización</li>
        <li>Prometheus para monitoreo</li>
        <li>ELK Stack para logging</li>
        <li>GitOps para CI/CD</li>
      </ul>
    `,
    tech: ['Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'GitLab CI'],
    duration: '7 meses',
    team: '10 ingenieros de DevOps',
    link: 'https://example-architecture.com'
  },
  'ux-design': {
    id: 'ux-design',
    category: 'Proyectos de Ejemplo',
    title: 'Rediseño de Experiencia de Usuario',
    images: [
      'https://picsum.photos/id/40/800/600',
      'https://picsum.photos/id/41/800/600',
      'https://picsum.photos/id/42/800/600'
    ],
    description: `
      <h3>Análisis</h3>
      <p>La interfaz de usuario anterior tenía baja tasa de adopción y frecuentes quejas de usabilidad.</p>

      <h3>Proceso de Diseño</h3>
      <p>Se realizaron pruebas de usuario exhaustivas, entrevistas y análisis de comportamiento. Creación de wireframes y prototipos interactivos con validación del usuario.</p>

      <h3>Implementación</h3>
      <p>Se rediseñó completamente la interfaz con un enfoque centrado en el usuario, resultando en una mejora del 60% en satisfacción de usuarios y reducción del 45% en tiempo de tarea.</p>

      <h3>Mejoras Principales</h3>
      <ul>
        <li>Interfaz simplificada e intuitiva</li>
        <li>Accesibilidad mejorada (WCAG AA)</li>
        <li>Sistema de diseño consistente</li>
        <li>Animaciones y transiciones suaves</li>
        <li>Diseño completamente responsivo</li>
      </ul>
    `,
    tech: ['Figma', 'React', 'CSS-in-JS', 'Storybook'],
    duration: '5 meses',
    team: '3 diseñadores + 4 desarrolladores',
    link: 'https://example-uxdesign.com'
  },
  'ai-ml': {
    id: 'ai-ml',
    category: 'Proyectos de Ejemplo',
    title: 'Implementación de IA/Machine Learning',
    images: [
      'https://picsum.photos/id/45/800/600',
      'https://picsum.photos/id/46/800/600',
      'https://picsum.photos/id/47/800/600'
    ],
    description: `
      <h3>Objetivo</h3>
      <p>Implementar modelo de ML para predicción de comportamiento del cliente y personalización de recomendaciones.</p>

      <h3>Desarrollo del Modelo</h3>
      <p>Se entrenaron múltiples modelos usando datos históricos, se implementó validación cruzada y se optimizó el rendimiento. Integración en tiempo real con la plataforma de producción.</p>

      <h3>Resultados</h3>
      <p>Precisión del modelo: 94%, aumento en conversiones del 35%, mejora en satisfacción de usuarios del 42%.</p>

      <h3>Tecnologías Utilizadas</h3>
      <ul>
        <li>Python para desarrollo</li>
        <li>TensorFlow/PyTorch para ML</li>
        <li>Pandas para análisis de datos</li>
        <li>FastAPI para APIs de ML</li>
        <li>MLflow para versionado de modelos</li>
      </ul>
    `,
    tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Docker'],
    duration: '6 meses',
    team: '3 científicos de datos + 2 ML engineers',
    link: 'https://example-aiml.com'
  }
};

export function getProject(id: string): Project | undefined {
  return projectsData[id];
}

export function getAllProjects(): Project[] {
  return Object.values(projectsData);
}

export function getProjectIds(): string[] {
  return Object.keys(projectsData);
}
