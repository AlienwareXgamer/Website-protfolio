<script setup>
// Remove NavigationLogo import since we're removing the FP logo
import NavigationLinks from "./navigation/NavigationLinks.vue";
import NavigationActions from "./navigation/NavigationActions.vue";

defineProps({
  activeSection: String,
  isDarkMode: Boolean,
});

defineEmits(["scroll-to-section", "toggle-theme"]);
</script>

<template>
  <nav class="navigation">
    <!-- Removed NavigationLogo component -->

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
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Changed from space-between to center since we removed the logo */
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.2); /* Much more transparent when not hovered */
  backdrop-filter: blur(15px); /* Reduced blur for more transparency */
  border: 1px solid rgba(255, 255, 255, 0.05); /* Very transparent border */
  border-radius: 12px;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 85%;
  max-width: 1000px;
  min-width: 300px;
  gap: 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.02); /* Much lighter shadow */
  animation: navSlideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes navSlideDown {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.navigation:hover {
  background: rgba(0, 0, 0, 0.9); /* Solid background on hover */
  backdrop-filter: blur(30px); /* Increased blur on hover */
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow:
    0 8px 35px rgba(139, 92, 246, 0.25),
    0 0 0 1px rgba(139, 92, 246, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transform: translateX(-50%) translateY(-2px) scale(1.02);
}

/* Desktop optimizations - ultra compact */
@media (min-width: 1200px) {
  .navigation {
    padding: 0.6rem 1.25rem;
    gap: 1.25rem;
    max-width: 1100px;
  }
}

@media (min-width: 1024px) and (max-width: 1199px) {
  .navigation {
    padding: 0.55rem 1.125rem;
    gap: 1.125rem;
    width: 82%;
  }
}

/* Responsive - maintaining compactness */
@media (max-width: 1023px) {
  .navigation {
    padding: 0.5rem 1rem;
    width: 88%;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .navigation {
    padding: 0.45rem 0.8rem;
    backdrop-filter: blur(
      15px
    ); /* Less blur on mobile for better transparency */
    background: rgba(0, 0, 0, 0.3); /* More transparent on mobile */
    width: 92%;
    top: 0.3rem;
    justify-content: space-between;
    gap: 0.8rem;
  }

  .navigation:hover {
    background: rgba(0, 0, 0, 0.85); /* Less opaque on mobile hover */
    backdrop-filter: blur(25px);
  }
}

@media (max-width: 480px) {
  .navigation {
    padding: 0.4rem 0.6rem;
    gap: 0.6rem;
    top: 0.2rem;
    min-width: 280px;
  }
}
</style>
