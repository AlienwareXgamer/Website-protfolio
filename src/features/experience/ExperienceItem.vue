<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="experience-item">
    <div
      class="experience-header"
      style="flex-direction: column; align-items: center; text-align: center"
    >
      <h4 style="text-align: center">{{ experience.title }}</h4>
      <span class="experience-period" style="text-align: center">{{
        experience.period
      }}</span>
    </div>
    <p class="experience-description">{{ experience.description }}</p>
    <ul v-if="experience.achievements" class="experience-achievements">
      <li v-for="achievement in experience.achievements" :key="achievement">
        {{ achievement }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.experience-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.18); /* Thinner static border */
  border-left: 4px solid #8b5cf6; /* Thinner purple accent */
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.1); /* Gentle inner glow by default */
  transition: all 0.3s ease;
  position: relative;
}

.experience-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.experience-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
  box-shadow:
    0 0 0 2px rgba(139, 92, 246, 0.1),
    /* Gentle inner glow */ 0 0 0 8px rgba(139, 92, 246, 0.22); /* Stronger outer glow on hover */
  border-left-color: #7c3aed;
}

.experience-item:hover::before {
  opacity: 1;
}

.experience-header {
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1.2rem; /* More space below header */
}

.experience-header h4 {
  font-size: clamp(
    1.1rem,
    1.5vw + 1rem,
    1.5rem
  ); /* Slightly smaller than project card */
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  margin: 0 0 0.3rem 0; /* Tighter space below title */
  text-align: center;
}

.experience-period {
  font-size: 0.9rem;
  color: #8b5cf6;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.2rem; /* Tighter space below year */
}

.experience-description {
  margin-top: 0.5rem; /* Less space above description */
  margin-bottom: 1.2rem; /* More space below description */
  color: #d1d5db;
  line-height: 1.7;
  text-align: center;
}

.experience-achievements {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience-achievements li {
  color: #d1d5db;
  margin-bottom: 0.5rem;
  padding-left: 2.2rem; /* More space for icon */
  position: relative;
  display: flex;
  align-items: center;
  min-height: 1.7em;
}

.experience-achievements li::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 9px solid #8b5cf6;
  margin-right: 0.6em;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

/* Responsive */
@media (max-width: 768px) {
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .experience-period {
    white-space: normal;
  }
}
</style>
