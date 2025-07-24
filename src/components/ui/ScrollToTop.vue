<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);
const scrollThreshold = 300;

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Transition name="scroll-top">
    <button
      v-if="isVisible"
      class="scroll-to-top"
      @click="scrollToTop"
      aria-label="Scroll to top"
      type="button"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 14l5-5 5 5z" />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
  backdrop-filter: blur(10px);

  /* Optimized for 60fps - use transform and opacity only */
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease-out;
  will-change: transform;
  transform: translateZ(0); /* Force hardware acceleration */
}

.scroll-to-top:hover {
  /* Simplified hover animation - hardware accelerated */
  transform: translateZ(0) translateY(-4px) scale(1.08);
  box-shadow: 0 16px 40px rgba(139, 92, 246, 0.6);
}

.scroll-to-top:active {
  transform: translateZ(0) translateY(-2px) scale(1.04);
  transition: transform 0.1s ease-out;
}

.scroll-to-top svg {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}

.scroll-to-top:hover svg {
  transform: translateY(-2px);
}

/* Optimized enter/leave transitions */
.scroll-top-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scroll-top-leave-active {
  transition: all 0.3s ease-in;
}

.scroll-top-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .scroll-to-top {
    width: 45px;
    height: 45px;
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .scroll-to-top:hover {
    transform: translateZ(0) translateY(-3px) scale(1.06);
  }
}
</style>
