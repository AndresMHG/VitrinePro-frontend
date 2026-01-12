export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Example {
  id: string;
  name: string;
  role: string;
  avatar: string;
  link: string;
}

export const indexData = {
  hero: {
    title: 'Crea tu vitrine profesional',
    subtitle: 'Destaca tus experiencias, proyectos y habilidades',
    cta: 'Comenzar'
  },

  problems: [
    {
      id: '1',
      icon: '🚀',
      title: 'Participación en Proyectos e Iniciativas',
      description: 'Sabe aquellas iniciativas que destacan sus habilidades con herramientas, trabajo en equipos, generaron resultados.'
    },
    {
      id: '2',
      icon: '📚',
      title: 'Publicación de artículos científicos',
      description: 'Aquel estudio relevante, que agrega en sus habilidades, no deben quedarse afuera.'
    },
    {
      id: '3',
      icon: '🎤',
      title: 'Participación en Eventos/Charlas',
      description: 'Aquel estudio relevante, que agrega en sus habilidades, no deben quedarse afuera.'
    }
  ],

  benefits: [
    {
      id: '1',
      icon: '📁',
      title: 'Centraliza tus experiencias',
      description: 'Muy común dejar toda la experiencia adquirida almacenadas en documentos, hojas de cálculo o en nuestras memorias'
    },
    {
      id: '2',
      icon: '⚡',
      title: 'Rápido y Fácil',
      description: 'Crea tu vitrine en minutos sin conocimiento técnico'
    },
    {
      id: '3',
      icon: '🔗',
      title: 'Comparte TODO',
      description: 'Comparte tu vitrine completa o un proyecto específico.'
    },
    {
      id: '4',
      icon: '🔒',
      title: 'Seguro y Confiable',
      description: 'Tus datos protegidos con tecnología de punta'
    },
    {
      id: '5',
      icon: '🌐',
      title: 'Acceso Global',
      description: 'Sé encontrado por clientes de todo el mundo'
    },
    {
      id: '6',
      icon: '📊',
      title: 'Analytics',
      description: 'Acompaña visitas e interacciones en tu vitrine'
    },
    {
      id: '7',
      icon: '💸',
      title: 'Gratis',
      description: 'Crea tu cuenta 100% gratuita sin sorpresas al final!'
    },
    {
      id: '8',
      icon: '♾️',
      title: 'Sin límite',
      description: 'Usa tu vitrine para colocar tus registros relevantes, sin precisar vínculo a una empresa o línea de tiempo!'
    }
  ],

  examples: [
    {
      id: '1',
      name: 'João Silva',
      role: 'Desenvolvedor Full Stack',
      avatar: 'https://picsum.photos/id/237/80/80',
      link: '/VitrinePro-frontend/profile'
    },
    {
      id: '2',
      name: 'Maria Santos',
      role: 'Designer UX/UI',
      avatar: 'https://picsum.photos/id/47/80/80',
      link: '/VitrinePro-frontend/profile'
    },
    {
      id: '3',
      name: 'Carlos Oliveira',
      role: 'Data Scientist',
      avatar: 'https://picsum.photos/id/65/80/80',
      link: '/VitrinePro-frontend/profile'
    }
  ]
};
