<script setup>
defineProps({
  contactInfo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="contact-info">
    <div v-for="(value, key) in contactInfo" :key="key" class="contact-item">
      <strong>{{ key }}:</strong>
      <a
        v-if="value && typeof value === 'object' && value.link"
        :href="value.link"
        :target="value.external ? '_blank' : '_self'"
      >
        {{ value.text }}
      </a>
      <span v-else>{{ value }}</span>
    </div>
  </div>
</template>

<style scoped>
.contact-info {
  background: rgba(255, 255, 255, 0.08);
  padding: 1.5rem 2rem; /* Added horizontal padding for edge-to-edge feel */
  border-radius: 16px;
  margin-top: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  max-width: none; /* Remove max-width for full screen usage */
  width: 100%; /* Full width */
  margin-left: auto;
  margin-right: auto;
}

.contact-info:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow:
    0 8px 25px rgba(139, 92, 246, 0.15),
    0 0 0 1px rgba(139, 92, 246, 0.1);
  transform: translateY(-2px);
}

.contact-item {
  margin-bottom: 0.6rem; /* Reduced from 0.75rem */
  font-size: 1.1rem;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-item a {
  color: #8b5cf6;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-item a:hover {
  color: #a855f7;
  text-decoration: underline;
}

.contact-item strong {
  color: #fff;
}

.contact-item span {
  color: #d1d5db;
}

/* Light mode specific styling for contact info text */
body.light-mode .contact-item span {
  color: #374151 !important;
}

body.light-mode .contact-item strong {
  color: #1f2937 !important;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .contact-info {
    padding: 1.25rem 1rem; /* Reduced mobile padding for more space */
    margin-top: 1.25rem;
    max-width: none; /* Full width on mobile */
  }

  .contact-item {
    font-size: 1rem;
    margin-bottom: 0.5rem; /* Tighter mobile spacing */
  }
}

@media (min-width: 1200px) {
  .contact-info {
    max-width: none; /* Full width on large screens */
    padding: 1.75rem 4rem; /* Increased horizontal padding */
  }

  .contact-item {
    font-size: 1.15rem; /* Slightly larger for better readability */
  }
}

@media (min-width: 1440px) {
  .contact-info {
    padding: 1.75rem 6rem; /* More padding for very large screens */
  }

  .contact-item {
    font-size: 1.2rem; /* Larger text for better readability */
  }
}
</style>
