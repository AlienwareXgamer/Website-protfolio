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
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.scroll-to-top:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.5);
}

.scroll-to-top:focus-visible {
  outline: 2px solid rgba(139, 92, 246, 0.8);
  outline-offset: 2px;
}

.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-top-enter-from,
.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
  }
}
</style>
