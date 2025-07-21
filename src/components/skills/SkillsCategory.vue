<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="skills-category">
    <h4>{{ category.name }}</h4>
    <div class="skills-list">
      <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
        <div class="skill-info">
          <span class="skill-name">{{ skill.name }}</span>
          <span v-if="skill.level" class="skill-level">{{ skill.level }}</span>
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
  transition: all 0.3s ease;
  height: 100%;
}

.skills-category:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15),
              0 0 0 1px rgba(139, 92, 246, 0.1);
}

.skills-category h4 {
  color: #fff;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.3);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  transition: all 0.3s ease;
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
}

.skill-name {
  color: #d1d5db;
  font-weight: 500;
  font-size: 0.95rem;
  text-align: left;
  flex: 1;
}

.skill-level {
  color: #8b5cf6;
  font-size: 0.85rem;
  font-weight: 600;
  background: rgba(139, 92, 246, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  border: 1px solid rgba(139, 92, 246, 0.3);
  text-align: right;
  white-space: nowrap;
  margin-left: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .skills-category {
    padding: 1.5rem;
  }
  
  .skills-category h4 {
    font-size: 1.2rem;
  }
}
</style>