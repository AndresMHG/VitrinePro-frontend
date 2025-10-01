<template>
  <div v-if="isVisible" class="project-modal" :data-index="currentProjectIndex">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <!-- Navigation Arrows -->
      <button
        class="modal-nav modal-nav-prev"
        :class="{ 'hidden': currentProjectIndex <= 0 }"
        @click="navigateProject('prev')"
        data-direction="prev"
      >
        <span class="nav-arrow">‹</span>
      </button>
      <button
        class="modal-nav modal-nav-next"
        :class="{ 'hidden': currentProjectIndex >= projects.length - 1 }"
        @click="navigateProject('next')"
        data-direction="next"
      >
        <span class="nav-arrow">›</span>
      </button>

      <button class="modal-close" @click="closeModal">&times;</button>
      <button class="modal-expand" @click="expandModal" title="Expandir para página completa">
        <span class="expand-icon">⛶</span>
      </button>

      <div class="modal-header">
        <div class="modal-category">{{ currentProject.category }}</div>
        <h1 class="modal-title">{{ currentProject.title }}</h1>
        <p class="modal-subtitle">{{ currentProject.subtitle }}</p>
      </div>

      <div class="modal-gallery">
        <img :src="currentProject.images[0]" :alt="currentProject.title" loading="lazy">
      </div>

      <div class="modal-body">
        <div class="modal-description">
          <h3>Descripción del Proyecto</h3>
          <p v-html="currentProject.description"></p>

          <h3>Solución Implementada</h3>
          <p v-html="currentProject.solution || currentProject.description"></p>

          <h3>Resultados Obtenidos</h3>
          <p v-html="currentProject.results || 'Resultados destacados del proyecto.'"></p>

          <h3>Características Principales</h3>
          <ul>
            <li v-for="feature in currentProject.features" :key="feature">{{ feature }}</li>
          </ul>

          <h3>Anexos</h3>
          <div class="attachments-section">
            <p class="attachments-disclaimer">
              <strong>⚠️ Importante:</strong> Los anexos pueden contener información confidencial.
              Asegúrese de que tiene permisos para compartir esta información.
              No nos responsabilizamos por el uso indebido de información confidencial.
            </p>
            <div v-for="attachment in currentProject.attachments" :key="attachment.name" class="attachment-item">
              <span class="attachment-icon">{{ attachment.icon }}</span>
              <a href="#" class="attachment-link">{{ attachment.name }}</a>
            </div>
          </div>
        </div>

        <div class="modal-tags">
          <h4>Tags del Proyecto</h4>
          <div class="tags-container">
            <span v-for="tag in currentProject.tags" :key="tag" class="tag-pill">{{ tag }}</span>
          </div>
        </div>

        <div class="modal-details">
          <div class="detail-item">
            <span class="detail-label">Tecnologías:</span>
            <div class="detail-tech">
              <span v-for="tech in currentProject.tech" :key="tech" class="tech-pill">{{ tech }}</span>
            </div>
          </div>
          <div class="detail-item">
            <span class="detail-label">Duración:</span>
            <span class="detail-value">{{ currentProject.duration }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Equipo:</span>
            <span class="detail-value">{{ currentProject.team }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Estado:</span>
            <span class="detail-value status-completed">{{ currentProject.status }}</span>
          </div>
        </div>

        <div class="modal-share">
          <h4>Compartir Proyecto</h4>
          <div class="share-buttons">
            <button class="share-btn linkedin" @click="shareProject('linkedin')" data-platform="linkedin" title="Compartir en LinkedIn">
              <span class="share-icon">💼</span>
            </button>
            <button class="share-btn instagram" @click="shareProject('instagram')" data-platform="instagram" title="Compartir en Instagram">
              <span class="share-icon">📷</span>
            </button>
            <button class="share-btn whatsapp" @click="shareProject('whatsapp')" data-platform="whatsapp" title="Compartir en WhatsApp">
              <span class="share-icon">💬</span>
            </button>
            <button class="share-btn pdf" @click="generatePDF" data-platform="pdf" title="Generar PDF">
              <span class="share-icon">📄</span>
            </button>
          </div>
        </div>

        <div class="modal-actions">
          <a :href="currentProject.link" class="modal-link primary">
            <span>Ver Proyecto Completo</span>
            <span class="link-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  projects: {
    type: Array,
    default: () => []
  },
  initialProjectIndex: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['close', 'navigate']);

const currentProjectIndex = ref(props.initialProjectIndex);

const currentProject = computed(() => {
  return props.projects[currentProjectIndex.value] || {};
});

const closeModal = () => {
  emit('close');
};

const navigateProject = (direction) => {
  if (direction === 'prev' && currentProjectIndex.value > 0) {
    currentProjectIndex.value--;
  } else if (direction === 'next' && currentProjectIndex.value < props.projects.length - 1) {
    currentProjectIndex.value++;
  }
  emit('navigate', currentProjectIndex.value);
};

const expandModal = () => {
  if (currentProject.value.link) {
    window.open(currentProject.value.link, '_blank');
  }
};

const shareProject = (platform) => {
  const title = currentProject.value.title || 'Proyecto';
  const url = window.location.href;
  const text = `Mira este proyecto increíble: ${title}`;

  let shareUrl = '';

  switch (platform) {
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      break;
    case 'instagram':
      navigator.clipboard.writeText(`${text} ${url}`).then(() => {
        alert('Enlace copiado al portapapeles. Puedes pegarlo en Instagram.');
      });
      return;
    case 'whatsapp':
      shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
      break;
  }

  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
};

const generatePDF = async () => {
  try {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`;
    const title = currentProject.value.title || 'Proyecto';
    const description = currentProject.value.description || '';

    const pdfContent = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">${title}</h1>
        <p style="color: #667eea; font-weight: bold;">${currentProject.value.category || ''}</p>

        <div style="margin: 30px 0;">
          <h2 style="color: #333;">Descripción del Proyecto</h2>
          <p style="line-height: 1.6;">${description}</p>
        </div>

        <div style="text-align: center; margin: 40px 0;">
          <img src="${qrCodeUrl}" alt="QR Code" style="max-width: 150px;" />
          <p style="margin-top: 10px; color: #666; font-size: 12px;">Escanea para ver el proyecto completo</p>
        </div>

        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
          Generado por VitrinePro - ${new Date().toLocaleDateString()}
        </div>
      </div>
    `;

    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('Archivo HTML generado. Puedes convertirlo a PDF usando un navegador o herramienta online.');
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error al generar el archivo. Inténtalo de nuevo.');
  }
};

// Keyboard navigation
const handleKeydown = (e) => {
  if (!props.isVisible) return;

  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'ArrowLeft') {
    navigateProject('prev');
  } else if (e.key === 'ArrowRight') {
    navigateProject('next');
  }
};

watch(() => props.initialProjectIndex, (newIndex) => {
  currentProjectIndex.value = newIndex;
});

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Modal Styles */
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
}

.modal-content {
  position: relative;
  background: #fff;
  border-radius: 20px;
  max-width: 900px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  z-index: 1001;
}

/* Navigation */
.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-nav:hover {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.modal-nav-prev {
  left: -25px;
}

.modal-nav-next {
  right: -25px;
}

.modal-nav.hidden {
  display: none;
}

.nav-arrow {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: bold;
}

/* Controls */
.modal-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  color: #666;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-close:hover {
  background: #f0f0f0;
  transform: scale(1.1);
}

.modal-expand {
  position: absolute;
  top: 2rem;
  right: 5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-expand:hover {
  transform: scale(1.1);
  background: var(--gradient-bg);
}

.modal-expand:hover .expand-icon {
  color: #fff;
}

.expand-icon {
  font-size: 1.2rem;
  color: var(--primary-color);
  transition: color 0.3s ease;
}

/* Header */
.modal-header {
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.modal-category {
  display: inline-block;
  background: var(--gradient-bg);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
}

.modal-subtitle {
  font-size: 1.1rem;
  color: #64748b;
  margin: 0;
}

/* Gallery */
.modal-gallery {
  padding: 0 2rem;
}

.modal-gallery img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
}

/* Body */
.modal-body {
  padding: 2rem;
}

/* Description */
.modal-description h3 {
  color: #1a202c;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
}

.modal-description h3:first-child {
  margin-top: 0;
}

.modal-description p {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.modal-description ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.modal-description li {
  margin-bottom: 0.5rem;
  color: #4b5563;
}

/* Attachments */
.attachments-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.attachments-disclaimer {
  background: rgba(255, 193, 7, 0.1);
  border: 1px solid rgba(255, 193, 7, 0.3);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #856404;
}

.attachment-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.attachment-item:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateX(5px);
}

.attachment-icon {
  font-size: 1.2rem;
}

.attachment-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.attachment-link:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

/* Tags */
.modal-tags {
  margin-bottom: 2rem;
}

.modal-tags h4 {
  color: #1a202c;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-pill {
  background: rgba(102, 126, 234, 0.1);
  color: var(--primary-color);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

/* Details */
.modal-details {
  margin-bottom: 2rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.detail-label {
  font-weight: 600;
  color: #374151;
  min-width: 120px;
}

.detail-value {
  color: #4b5563;
  text-align: right;
}

.detail-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-end;
}

.detail-tech .tech-pill {
  background: rgba(102, 126, 234, 0.1);
  color: var(--primary-color);
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-completed {
  color: #10b981 !important;
  font-weight: 600;
}

.status-completed::before {
  content: "● ";
  color: #10b981;
}

/* Share */
.modal-share {
  margin-bottom: 2rem;
}

.modal-share h4 {
  color: #1a202c;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.share-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.share-btn.linkedin {
  background: linear-gradient(135deg, #0077b5, #005885);
}

.share-btn.instagram {
  background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.share-btn.whatsapp {
  background: linear-gradient(135deg, #25d366, #128c7e);
}

.share-btn.pdf {
  background: linear-gradient(135deg, #dc3545, #c82333);
}

.share-icon {
  font-size: 1.2rem;
}

/* Actions */
.modal-actions {
  text-align: center;
}

.modal-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--gradient-bg);
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.modal-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
}

.link-icon {
  transition: transform 0.3s ease;
}

.modal-link:hover .link-icon {
  transform: translateX(3px);
}

/* Responsive */
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    max-height: 95vh;
  }

  .modal-nav {
    width: 40px;
    height: 40px;
  }

  .modal-nav-prev {
    left: -20px;
  }

  .modal-nav-next {
    right: -20px;
  }

  .modal-close,
  .modal-expand {
    width: 40px;
    height: 40px;
    top: 1rem;
  }

  .modal-expand {
    right: 4rem;
  }

  .modal-header {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .modal-gallery img {
    height: 200px;
  }
}
</style>