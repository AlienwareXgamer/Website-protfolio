<script setup>
defineProps({
  experience: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="experience-item">
    <div class="experience-header">
      <h4>{{ experience.title }}</h4>
      <span class="experience-period">{{ experience.period }}</span>
    </div>
    <p class="experience-company">{{ experience.company }}</p>
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
  margin-bottom: 0; /* Remove bottom margin since parent uses gap */
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border-left: 4px solid #8b5cf6;
  transition: all 0.3s ease;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.experience-item::before {
  content: '';
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
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15),
              0 0 15px rgba(139, 92, 246, 0.1),
              0 0 0 1px rgba(139, 92, 246, 0.1);
  border-left-color: #a855f7;
}

.experience-item:hover::before {
  opacity: 1;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.experience-header h4 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.experience-period {
  color: #8b5cf6;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

.experience-company {
  color: #a1a1aa;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.experience-description {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.experience-achievements {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience-achievements li {
  color: #d1d5db;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.experience-achievements li::before {
  content: '▸';
  color: #8b5cf6;
  font-weight: bold;
  position: absolute;
  left: 0;
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