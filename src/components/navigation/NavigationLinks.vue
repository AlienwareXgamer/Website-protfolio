<script setup>
import { ref } from "vue";
import { NAVIGATION_ITEMS } from "../../core/constants/constants.js";

defineProps({
  activeSection: String,
});

const emit = defineEmits(["scroll-to-section"]);

const isMobileMenuOpen = ref(false);

const handleNavClick = (itemId) => {
  emit("scroll-to-section", itemId);
  isMobileMenuOpen.value = false; // Close mobile menu after navigation
};
</script>

<template>
  <div class="nav-links-container">
    <!-- Desktop Navigation -->
    <div class="nav-links desktop-nav">
      <button
        v-for="item in NAVIGATION_ITEMS"
        :key="item.id"
        :class="['nav-link', { active: activeSection === item.id }]"
        @click="handleNavClick(item.id)"
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
      :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path
          v-if="!isMobileMenuOpen"
          d="M4 6h16M4 12h16M4 18h16"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          v-else
          d="M18 6L6 18M6 6l12 12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <!-- Mobile Navigation Menu -->
    <div v-if="isMobileMenuOpen" class="mobile-nav">
      <button
        v-for="item in NAVIGATION_ITEMS"
        :key="item.id"
        :class="[
          'nav-link mobile-nav-link',
          { active: activeSection === item.id },
        ]"
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
  gap: 0.875rem; /* Even tighter spacing */
  justify-content: center;
  align-items: center;
  width: 100%;
}

.nav-link {
  color: #a1a1aa;
  text-decoration: none;
  font-size: 13px; /* Smaller text */
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  padding: 0.3rem 0.6rem; /* More compact padding */
  border-radius: 6px;
  background: none;
  border: none;
  font-family: inherit;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(10px);
  animation: linkFadeIn 0.5s ease-out forwards;
  /* Remove default focus outline and borders */
  outline: none;
  box-shadow: none;
}

.nav-link:nth-child(1) {
  animation-delay: 0.1s;
}
.nav-link:nth-child(2) {
  animation-delay: 0.15s;
}
.nav-link:nth-child(3) {
  animation-delay: 0.2s;
}
.nav-link:nth-child(4) {
  animation-delay: 0.25s;
}
.nav-link:nth-child(5) {
  animation-delay: 0.3s;
}
.nav-link:nth-child(6) {
  animation-delay: 0.35s;
}
.nav-link:nth-child(7) {
  animation-delay: 0.4s;
}

@keyframes linkFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-link::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  transform: translateX(-50%);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 1px;
}

.nav-link:hover,
.nav-link.active {
  color: #fff;
  background: rgba(139, 92, 246, 0.2);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  transform: translateY(-1px) scale(1.05);
}

.nav-link:hover::before,
.nav-link.active::before {
  width: 85%;
}

/* Remove focus outline specifically */
.nav-link:focus {
  outline: none;
  box-shadow: none;
}

/* Remove any active state borders */
.nav-link:active {
  outline: none;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

.mobile-menu-button {
  display: none;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #a1a1aa;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.35rem;
  border-radius: 6px;
  backdrop-filter: blur(10px);
  font-family: inherit;
  width: 32px;
  height: 32px;
}

.mobile-menu-button:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(139, 92, 246, 0.4);
  transform: scale(1.1) rotate(5deg);
}

.mobile-nav {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  z-index: 1001;
  animation: mobileMenuSlide 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: top center;
}

@keyframes mobileMenuSlide {
  0% {
    opacity: 0;
    transform: translateY(-10px) scaleY(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
}

.mobile-nav-link {
  padding: 0.6rem 0.8rem;
  text-align: left;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover {
  background: rgba(139, 92, 246, 0.15);
  transform: translateX(4px);
}

.mobile-nav-link::before {
  display: none;
}

/* Responsive optimizations */
@media (max-width: 1200px) {
  .nav-links {
    gap: 0.75rem;
  }

  .nav-link {
    font-size: 12px;
    padding: 0.25rem 0.5rem;
  }
}

@media (max-width: 1024px) {
  .nav-links {
    gap: 0.625rem;
  }

  .nav-link {
    padding: 0.225rem 0.45rem;
    font-size: 11px;
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
