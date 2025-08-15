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
.about-description { text-align:center; padding:1.5rem 2rem; }
.about-description .paragraph {
  font-size:1.15rem; line-height:1.7; color:var(--color-text-secondary); margin-bottom:1.8rem; width:100%; margin-left:auto; margin-right:auto; font-weight:300; letter-spacing:.01em;
}
.about-description .paragraph:last-child { margin-bottom:0; }
/* Unified highlight styles via accent token */
.about-description :deep(.highlight),
.about-description :deep(.highlight-tech),
.about-description :deep(.highlight-company),
.about-description :deep(.highlight-community) { color:var(--color-text-accent); font-weight:500; background:none; }
/* Remove explicit body.light-mode overrides (tokens handle) */
/* Optional gradient utility retained */
.about-description .paragraph.purple-gradient { background:linear-gradient(135deg,#d8b4fe 0%,#c084fc 35%,#a855f7 70%,#8b5cf6 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
@media (max-width:768px){ .about-description { padding:1rem; } .about-description .paragraph { font-size:1rem; margin-bottom:1.5rem; line-height:1.6; } }
@media (min-width:1200px){ .about-description { padding:1.5rem 4rem; } .about-description .paragraph { font-size:1.2rem; } }
@media (min-width:1440px){ .about-description { padding:1.5rem 6rem; } .about-description .paragraph { font-size:1.3rem; } }
</style>
