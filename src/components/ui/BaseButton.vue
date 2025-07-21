<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', // 'primary' | 'secondary'
  },
  size: {
    type: String,
    default: 'medium', // 'small' | 'medium' | 'large'
  }
})

defineEmits(['click'])
</script>

<template>
  <button 
    :class="[
      'base-button', 
      `btn-${variant}`, 
      `btn-${size}`
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.base-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.base-button:hover::before {
  left: 100%;
}

/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4),
              0 0 20px rgba(139, 92, 246, 0.3),
              0 0 0 1px rgba(139, 92, 246, 0.2);
}

/* Secondary Button */
.btn-secondary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
}

.btn-secondary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4),
              0 0 20px rgba(139, 92, 246, 0.3),
              0 0 0 1px rgba(139, 92, 246, 0.2);
}

/* Sizes */
.btn-small {
  padding: 0.75rem 1.5rem;
  font-size: 14px;
}

.btn-medium {
  padding: 1rem 2rem;
  font-size: 15px;
}

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .btn-medium,
  .btn-large {
    width: 100%;
    max-width: 280px;
    font-size: 1rem;
    padding: 1rem 2rem;
  }
}
</style>