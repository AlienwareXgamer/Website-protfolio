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
  padding: 1.5rem 2rem; /* Added horizontal padding for edge-to-edge feel */
}

.about-description .paragraph {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #d1d5db;
  margin-bottom: 1.8rem;
  max-width: none; /* Remove max-width to allow full screen width */
  width: 100%; /* Full width */
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
  .about-description {
    padding: 1rem; /* Reduced mobile padding for more space */
  }

  .about-description .paragraph {
    font-size: 1rem;
    max-width: none; /* Full width on mobile */
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
}

@media (min-width: 1200px) {
  .about-description {
    padding: 1.5rem 4rem; /* Increased padding for large screens */
  }

  .about-description .paragraph {
    max-width: none; /* Full width on large screens */
    font-size: 1.2rem;
  }
}

@media (min-width: 1440px) {
  .about-description {
    padding: 1.5rem 6rem; /* More padding for very large screens */
  }

  .about-description .paragraph {
    font-size: 1.3rem; /* Slightly larger for better readability */
  }
}
</style>
