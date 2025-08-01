<script setup>
defineProps({
  education: {
    type: Object,
    required: true,
  },
});

// Check if this is an Ateneo entry
const isAteneo = (institution) => {
  return institution && institution.toLowerCase().includes("ateneo");
};
</script>

<template>
  <div
    class="education-item"
    :class="{ 'ateneo-glow': isAteneo(education.institution) }"
  >
    <div class="education-header">
      <h4>{{ education.degree }}</h4>
      <span class="education-year">{{ education.year }}</span>
    </div>
    <p class="education-institution">{{ education.institution }}</p>
    <p v-if="education.location" class="education-location">
      {{ education.location }}
    </p>
    <p v-if="education.description" class="education-description">
      {{ education.description }}
    </p>
    <ul v-if="education.achievements" class="education-achievements">
      <li v-for="achievement in education.achievements" :key="achievement">
        <span class="triangle-icon-left">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="2,2 10,6 2,10"
              :fill="isAteneo(education.institution) ? '#3b82f6' : '#22c55e'"
            />
          </svg>
        </span>
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid #22c55e;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 2s ease-out forwards;
}

.education-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), transparent);
  opacity: 0;
  transition: all 0.4s ease;
  pointer-events: none;
}

.education-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    0 8px 25px rgba(34, 197, 94, 0.15),
    0 0 15px rgba(34, 197, 94, 0.1),
    0 0 0 1px rgba(34, 197, 94, 0.1);
  border-left-color: #16a34a;
}

.education-item:hover::before {
  opacity: 1;
}

.education-item:hover * {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.education-item.ateneo-glow {
  border-left-color: #3b82f6;
  background: rgba(59, 130, 246, 0.03);
}

.education-item.ateneo-glow::before {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent);
  opacity: 0;
}

.education-item.ateneo-glow:hover {
  background: rgba(59, 130, 246, 0.08);
  box-shadow:
    0 8px 25px rgba(59, 130, 246, 0.15),
    0 0 15px rgba(59, 130, 246, 0.1),
    0 0 0 1px rgba(59, 130, 246, 0.1);
  border-left-color: #2563eb;
  transform: translateY(-4px) scale(1.05);
}

.education-item.ateneo-glow:hover::before {
  opacity: 1;
}

.education-item.ateneo-glow:hover * {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.education-item.ateneo-glow .education-year {
  color: #60a5fa;
}

.education-item.ateneo-glow .education-header h4 {
  color: #fff;
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

.education-item:nth-child(1) { animation-delay: 0.2s; }
.education-item:nth-child(2) { animation-delay: 0.4s; }

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.education-achievements li {
  color: #d1d5db;
  margin-bottom: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-left: 1.8em; /* Reserve space for icon inside card */
}
.education-achievements li .triangle-icon-left {
  position: absolute;
  left: 0.5em; /* Just inside card, left of text */
  top: 50%;
  transform: translateY(-50%);
  margin-right: 0.6em;
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
