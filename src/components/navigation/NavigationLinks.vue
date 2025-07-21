<script setup>
import { ref } from 'vue'

defineProps({
  activeSection: String
})

const emit = defineEmits(['scroll-to-section'])

const isMobileMenuOpen = ref(false)

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'skills', label: 'Skills' }
]

const handleNavClick = (itemId) => {
  emit('scroll-to-section', itemId)
  isMobileMenuOpen.value = false // Close mobile menu after navigation
}
</script>

<template>
  <div class="nav-links-container">
    <!-- Desktop Navigation -->
    <div class="nav-links desktop-nav">
      <button 
        v-for="item in navItems" 
        :key="item.id"
        :class="['nav-link', { active: activeSection === item.id }]"
        @click="emit('scroll-to-section', item.id)"
        type="button"
      >
        {{ item.label }}
      </button>
    </div>

    <!-- Mobile Menu Button -->
    <button 
      class="mobile-menu-button"
      @click="isMobileMenuOpen = !isMobileMenuOpen"
      type="button"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path v-if="!isMobileMenuOpen" d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path v-else d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>

    <!-- Mobile Navigation Menu -->
    <div v-if="isMobileMenuOpen" class="mobile-nav">
      <button 
        v-for="item in navItems" 
        :key="item.id"
        :class="['nav-link mobile-nav-link', { active: activeSection === item.id }]"
        @click="handleNavClick(item.id)"
        type="button"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.nav-links-container {
  position: relative;
  width: 100%;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.nav-link {
  color: #a1a1aa;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: none;
  border: none;
  font-family: inherit;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  transform: translateX(-50%);
  transition: width 0.3s ease;
  border-radius: 1px;
}

.nav-link:hover,
.nav-link.active {
  color: #fff;
  background: rgba(139, 92, 246, 0.15);
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3),
              0 0 0 1px rgba(139, 92, 246, 0.2);
}

.nav-link:hover::before,
.nav-link.active::before {
  width: 80%;
}

.mobile-menu-button {
  display: none;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #a1a1aa;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  font-family: inherit;
}

.mobile-menu-button:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 1001;
}

.mobile-nav-link {
  padding: 0.75rem 1rem;
  text-align: left;
}

.mobile-nav-link::before {
  display: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-links {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>