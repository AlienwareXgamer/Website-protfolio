<script setup>
import NavigationLogo from './navigation/NavigationLogo.vue'
import NavigationLinks from './navigation/NavigationLinks.vue'
import NavigationActions from './navigation/NavigationActions.vue'

defineProps({
  activeSection: String,
  isDarkMode: Boolean
})

defineEmits(['scroll-to-section', 'toggle-theme'])
</script>

<template>
  <nav class="navigation">
    <NavigationLogo />
    
    <NavigationLinks 
      :activeSection="activeSection"
      @scroll-to-section="$emit('scroll-to-section', $event)"
    />
    
    <NavigationActions 
      :isDarkMode="isDarkMode"
      @toggle-theme="$emit('toggle-theme')"
    />
  </nav>
</template>

<style scoped>
.navigation {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
  width: 95%;
  max-width: 1400px; /* Increased for desktop */
  min-width: 320px;
  gap: 3rem; /* More space for desktop */
}

.navigation:hover {
  background: rgba(0, 0, 0, 0.8);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.15),
              0 0 0 1px rgba(139, 92, 246, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateX(-50%) translateY(-2px); /* Subtle lift on hover */
}

/* Desktop-first approach */
@media (min-width: 1200px) {
  .navigation {
    padding: 1.5rem 4rem;
    gap: 4rem;
    max-width: 1600px;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .navigation {
    padding: 1rem 1.5rem;
    width: 90%;
  }
}

@media (max-width: 768px) {
  .navigation {
    padding: 1rem 1.5rem;
    backdrop-filter: blur(15px);
    width: 95%;
    top: 0.5rem;
    justify-content: space-between;
  }
}

@media (max-width: 480px) {
  .navigation {
    padding: 0.8rem 1rem;
  }
}
</style>