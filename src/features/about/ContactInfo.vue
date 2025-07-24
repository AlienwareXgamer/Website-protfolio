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
  padding: 2rem;
  border-radius: 16px;
  margin-top: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
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
  margin-bottom: 0.75rem;
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
</style>
