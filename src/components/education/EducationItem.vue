<script setup>
defineProps({
  education: {
    type: Object,
    required: true
  }
})

// Check if this is an Ateneo entry
const isAteneo = (institution) => {
  return institution && institution.toLowerCase().includes('ateneo')
}
</script>

<template>
  <div class="education-item" :class="{ 'ateneo-glow': isAteneo(education.institution) }">
    <div class="education-header">
      <h4>{{ education.degree }}</h4>
      <span class="education-year">{{ education.year }}</span>
    </div>
    <p class="education-institution">{{ education.institution }}</p>
    <p v-if="education.location" class="education-location">{{ education.location }}</p>
    <p v-if="education.description" class="education-description">{{ education.description }}</p>
    <ul v-if="education.achievements" class="education-achievements">
      <li v-for="achievement in education.achievements" :key="achievement">
        {{ achievement }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.education-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border-left: 4px solid #22c55e;
  transition: all 0.3s ease;
  position: relative;
}

.education-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.education-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(34, 197, 94, 0.15),
              0 0 15px rgba(34, 197, 94, 0.1),
              0 0 0 1px rgba(34, 197, 94, 0.1);
  border-left-color: #16a34a;
}

.education-item:hover::before {
  opacity: 1;
}

.education-item.ateneo-glow {
  border-left-color: #3b82f6;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.15),
              0 0 40px rgba(59, 130, 246, 0.1),
              inset 0 0 0 1px rgba(59, 130, 246, 0.2);
  animation: ateneoPulse 3s ease-in-out infinite alternate;
}

.education-item.ateneo-glow::before {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), transparent);
  opacity: 1;
}

.education-item.ateneo-glow:hover {
  background: rgba(59, 130, 246, 0.12);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25),
              0 0 30px rgba(59, 130, 246, 0.2),
              0 0 60px rgba(59, 130, 246, 0.1),
              0 0 0 1px rgba(59, 130, 246, 0.3);
  border-left-color: #2563eb;
  transform: translateY(-3px);
}

.education-item.ateneo-glow .education-year {
  color: #60a5fa;
  text-shadow: 0 0 8px rgba(96, 165, 250, 0.5);
}

.education-item.ateneo-glow .education-header h4 {
  color: #dbeafe;
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
}

@keyframes ateneoPulse {
  0% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.15),
                0 0 40px rgba(59, 130, 246, 0.1),
                inset 0 0 0 1px rgba(59, 130, 246, 0.2);
  }
  100% {
    box-shadow: 0 0 25px rgba(59, 130, 246, 0.2),
                0 0 50px rgba(59, 130, 246, 0.15),
                inset 0 0 0 1px rgba(59, 130, 246, 0.25);
  }
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.education-header h4 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.education-year {
  color: #22c55e;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

.education-institution {
  color: #a1a1aa;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.education-location {
  color: #9ca3af;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-style: italic;
}

.education-description {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.education-achievements {
  list-style: none;
  padding: 0;
  margin: 0;
}

.education-achievements li {
  color: #d1d5db;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.education-achievements li::before {
  content: '🎓';
  position: absolute;
  left: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .education-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .education-year {
    white-space: normal;
  }
}
</style>