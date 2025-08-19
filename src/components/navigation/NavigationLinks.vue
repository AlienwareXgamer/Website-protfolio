<script setup>
import { ref } from "vue";
import { NAVIGATION_ITEMS } from "../../core/constants/constants.js";

defineProps({ activeSection: String });
const emit = defineEmits(["scroll-to-section"]);
const isMobileMenuOpen = ref(false);

const handleNavClick = (itemId) => {
  emit("scroll-to-section", itemId);
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <div class="nav-links-container">
    <div class="nav-links desktop-nav" role="menubar">
      <button
        v-for="item in NAVIGATION_ITEMS"
        :key="item.id"
        :class="['nav-link', { active: activeSection === item.id }]"
        @click="handleNavClick(item.id)"
        type="button"
        :aria-current="activeSection === item.id ? 'page' : undefined"
        role="menuitem"
      >
        {{ item.label }}
      </button>
    </div>

    <button
      class="mobile-menu-button"
      @click="isMobileMenuOpen = !isMobileMenuOpen"
      type="button"
      :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
      :aria-expanded="isMobileMenuOpen.toString()"
      aria-controls="primary-mobile-menu"
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

    <div
      class="mobile-nav"
      :class="{ active: isMobileMenuOpen }"
      v-show="isMobileMenuOpen"
      id="primary-mobile-menu"
      role="menu"
    >
      <button
        v-for="item in NAVIGATION_ITEMS"
        :key="item.id"
        :class="['nav-link mobile-nav-link', { active: activeSection === item.id }]"
        @click="handleNavClick(item.id)"
        type="button"
        :aria-current="activeSection === item.id ? 'page' : undefined"
        role="menuitem"
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
  font-size: var(--fs-sm);
  line-height: var(--lh-tight);
  min-height: 44px; /* touch target */
  display: inline-flex;
  align-items: center;
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
  outline: none; /* kept to neutralize UA outline; global focus-visible handles ring */
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

/* Remove custom focus-visible box-shadow to use unified token ring */
.nav-link:focus-visible {
  box-shadow: none;
  background: rgba(139, 92, 246, 0.25);
  color: #fff;
}

/* Remove any active state borders */
.nav-link:active {
  outline: none;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

/* Reduced motion: disable entrance animation & transform scaling */
@media (prefers-reduced-motion: reduce) {
  .nav-link { animation: none !important; transform: none !important; }
  .nav-link:hover, .nav-link.active { transform: none !important; }
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
  -webkit-backdrop-filter: blur(10px);
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
  -webkit-backdrop-filter: blur(25px);
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

.mobile-nav-link:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px rgba(139,92,246,0.6), var(--shadow-focus);
  background: rgba(139,92,246,0.25);
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
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #a1a1aa;
    padding: 0.75rem;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 44px;
    min-height: 44px;
    -webkit-tap-highlight-color: rgba(139, 92, 246, 0.3);
    touch-action: manipulation;
  }

  .mobile-menu-button:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    transform: translateY(-1px);
  }

  .mobile-menu-button:active {
    transform: scale(0.98);
  }

  /* Mobile navigation overlay */
  .mobile-nav {
    position: fixed;
    top: calc(env(safe-area-inset-top, 0px) + 4.5rem); /* account for notch + nav height */
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    width: 90%;
    max-width: 340px;
    background: rgba(0, 0, 0, 0.95);
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;
    z-index: 1100; /* above nav */
    padding: 1.5rem 1.25rem 1.25rem;
    box-shadow: 0 18px 50px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.25);
    opacity: 0;
    visibility: hidden;
    transition: opacity .3s ease, transform .35s cubic-bezier(.4,0,.2,1), visibility .3s;
    will-change: transform, opacity;
    overflow-y: auto;
    max-height: calc(100dvh - (env(safe-area-inset-top, 0px) + 6rem));
    scrollbar-width: none;
  }
  .mobile-nav::-webkit-scrollbar { display: none; }
  .mobile-nav.active {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
  /* Improve tap targets inside mobile menu */
  .mobile-nav-link { min-height: 48px; font-size: 15px; }
}

@media (max-width: 480px) {
  .mobile-menu-button {
    padding: 0.6rem;
    min-width: 44px;
    min-height: 44px;
  }

  .mobile-nav {
    width: 95%;
    max-width: 300px;
    padding: 1.25rem;
    top: 5rem;
  }

  .mobile-nav-link {
    padding: 0.875rem 1rem;
    font-size: 15px;
    min-height: 48px;
  }
}

/* Light mode mobile menu */
body.light-mode .mobile-menu-button {
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  color: #6b7280;
}

body.light-mode .mobile-menu-button:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.4);
  color: #1f2937;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
}

body.light-mode .mobile-nav {
  background: rgba(255, 255, 255, 0.98);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(139, 92, 246, 0.15);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.15);
}

body.light-mode .mobile-nav-link {
  color: #4b5563;
}

body.light-mode .mobile-nav-link:hover,
body.light-mode .mobile-nav-link.active {
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.2);
  color: #1f2937;
}

body.light-mode .mobile-overlay {
  background: rgba(0, 0, 0, 0.3);
}

@media (prefers-reduced-motion: reduce) {
  .nav-link { animation: none; transform: none; }
}
</style>
