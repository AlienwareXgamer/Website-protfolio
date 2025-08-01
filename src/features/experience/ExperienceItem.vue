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
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 3px solid #8b5cf6;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 2s ease-out forwards;
}

.experience-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent);
  opacity: 0;
  transition: all 0.4s ease;
  pointer-events: none;
}

.experience-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    0 8px 25px rgba(139, 92, 246, 0.15),
    0 0 15px rgba(139, 92, 246, 0.1),
    0 0 0 1px rgba(139, 92, 246, 0.1);
  border-left-color: #7c3aed;
  transform-origin: center;
}

.experience-item:hover::before {
  opacity: 1;
}

.experience-item:hover .experience-header,
.experience-item:hover .experience-description,
.experience-item:hover .experience-achievements {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.experience-item:nth-child(1) { animation-delay: 0.2s; }
.experience-item:nth-child(2) { animation-delay: 0.4s; }
.experience-item:nth-child(3) { animation-delay: 0.6s; }
.experience-item:nth-child(4) { animation-delay: 0.8s; }

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
