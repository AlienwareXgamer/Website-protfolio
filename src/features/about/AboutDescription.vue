<script setup>
defineProps({
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="about-description">
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.about-description p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #d1d5db;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
