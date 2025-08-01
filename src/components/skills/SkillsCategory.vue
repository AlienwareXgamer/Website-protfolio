<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
});

const getIconUrl = (icon) => {
  if (!icon) return "";
  // Fix for Vite static asset handling
  try {
    return new URL(`../../assets/logos/${icon}`, import.meta.url).href;
  } catch (error) {
    console.warn(`Could not load icon: ${icon}`);
    return "";
  }
};
</script>

<template>
  <div class="skills-category">
    <h4>{{ category.name }}</h4>
    <div class="skills-list">
      <div
        v-for="skill in category.skills"
        :key="skill.name"
        class="skill-item"
      >
        <div class="skill-info">
          <span class="skill-name">{{ skill.name }}</span>
          <div class="skill-adornments">
            <img
              v-if="skill.icon"
              :src="getIconUrl(skill.icon)"
              :alt="`${skill.name} icon`"
              class="skill-icon"
            />
            <span v-if="skill.level" class="skill-level">{{
              skill.level
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-category {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 2s ease-out forwards;
}

.skills-category::before {
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

.skills-category:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px) scale(1.05);
  box-shadow:
    0 8px 25px rgba(139, 92, 246, 0.15),
    0 0 15px rgba(139, 92, 246, 0.1),
    0 0 0 1px rgba(139, 92, 246, 0.1);
  transform-origin: center;
}

.skills-category:hover::before {
  opacity: 1;
}

.skills-category:hover h4,
.skills-category:hover .skills-list {
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

.skills-category:nth-child(1) { animation-delay: 0.2s; }
.skills-category:nth-child(2) { animation-delay: 0.4s; }
.skills-category:nth-child(3) { animation-delay: 0.6s; }
.skills-category:nth-child(4) { animation-delay: 0.8s; }
.skills-category:nth-child(5) { animation-delay: 1.0s; }
.skills-category:nth-child(6) { animation-delay: 1.2s; }
.skills-category:nth-child(7) { animation-delay: 1.4s; }

.skills-category h4 {
  color: #fff;
  margin-bottom: 1.5rem;
  margin-top: 0;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.3);
  flex-shrink: 0;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  justify-content: flex-start;
}

.skill-item {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

.skill-item:hover {
  background: rgba(139, 92, 246, 0.1);
  transform: translateX(4px);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  min-height: 2.5rem;
}

.skill-name {
  color: #d1d5db;
  font-weight: 500;
  font-size: 0.95rem;
  text-align: left;
  flex: 1;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.skill-adornments {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.skill-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.8;
}

.skill-level {
  color: #8b5cf6;
  font-size: 0.75rem;
  font-weight: 600;
  background: rgba(139, 92, 246, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(139, 92, 246, 0.3);
  text-align: center;
  flex-shrink: 0;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .skills-category {
    padding: 1.5rem;
  }

  .skills-category h4 {
    font-size: 1.2rem;
    margin-bottom: 1.25rem;
  }

  .skill-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .skill-level {
    max-width: 100%;
    align-self: flex-start;
  }
}

@media (max-width: 480px) {
  .skills-category {
    padding: 1.25rem;
  }

  .skills-category h4 {
    font-size: 1.1rem;
  }

  .skill-name {
    font-size: 0.9rem;
  }

  .skill-level {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }
}
</style>
