<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="hero-identity">
    <h1 class="hero-name">{{ name }}</h1>
    <p class="hero-handle">{{ handle }}</p>
  </div>
</template>

<style scoped>
.hero-identity {
  text-align: center;
  margin-bottom: 1.5rem;
}

.hero-name {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #fff;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #fff, #a1a1aa);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.hero-handle {
  font-size: 1.1rem;
  color: #8b5cf6;
  margin-bottom: 0;
  font-weight: 600;
  opacity: 0.9;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-name {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: 2rem;
  }
}
</style>