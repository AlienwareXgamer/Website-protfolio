<script setup>
import { computed } from "vue";

const props = defineProps({
  description: {
    type: String,
    required: true,
  },
});

// Split description into paragraphs
const paragraphs = computed(() => {
  return props.description.split("\n\n").filter((p) => p.trim());
});
</script>

<template>
  <div class="about-description">
    <div
      v-for="(paragraph, index) in paragraphs"
      :key="index"
      class="paragraph"
      v-html="paragraph"
    />
  </div>
</template>

<style scoped>
.about-description {
  text-align: center;
  padding: 2rem 0;
}

.about-description .paragraph {
  font-size: 1.15rem;
  line-height: 1.9;
  color: #d1d5db;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  letter-spacing: 0.01em;
}

.about-description .paragraph:last-child {
  margin-bottom: 0;
}

/* Highlight styles */
.about-description :deep(.highlight) {
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}

.about-description :deep(.highlight-tech) {
  background: linear-gradient(135deg, #10b981, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}

.about-description :deep(.highlight-company) {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}

.about-description :deep(.highlight-community) {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}

/* Light mode overrides */
body.light-mode .about-description .paragraph {
  color: #374151;
}

/* Responsive */
@media (max-width: 768px) {
  .about-description .paragraph {
    font-size: 1rem;
    max-width: 90%;
  }
}
</style>
