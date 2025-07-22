<script setup>
defineProps({
  isDarkMode: Boolean,
});

defineEmits(["toggle-theme"]);
</script>

<template>
  <div class="nav-actions">
    <button
      @click="$emit('toggle-theme')"
      :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    >
      <!-- Sun icon for light mode -->
      <svg
        v-if="!isDarkMode"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zM12 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zM4.22 4.22a1 1 0 0 1 1.42 0l1.42 1.42a1 1 0 0 1-1.42 1.42L4.22 5.64a1 1 0 0 1 0-1.42zM18.36 18.36a1 1 0 0 1 1.42 0l1.42 1.42a1 1 0 0 1-1.42 1.42l-1.42-1.42a1 1 0 0 1 0-1.42zM2 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zM20 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zM5.64 18.36a1 1 0 0 1 0-1.42l1.42-1.42a1 1 0 0 1 1.42 1.42l-1.42 1.42a1 1 0 0 1-1.42 0zM18.36 5.64a1 1 0 0 1 0-1.42l1.42-1.42a1 1 0 0 1 1.42 1.42L19.78 5.64a1 1 0 0 1-1.42 0z"
        />
      </svg>
      <!-- Moon icon for dark mode -->
      <svg
        v-else
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.752-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.nav-actions {
  display: flex;
  gap: 0.5rem;
}

.nav-actions button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #a1a1aa;
  font-size: 14px;
  cursor: pointer;
  /* Optimized for 60fps with slower, more elegant animations */
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: 0.35rem; /* More compact */
  border-radius: 6px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px; /* Fixed compact size */
  height: 32px;
  opacity: 0;
  transform: translateY(10px);
  animation: buttonFadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s
    forwards;
  /* Hardware acceleration for 60fps */
  will-change: transform, background, box-shadow, border-color;
  transform-origin: center;
}

/* Streamlined button fade-in animation - optimized for 60fps */
@keyframes buttonFadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Optimized hover animation - streamlined from 6+ steps to 3 steps */
.nav-actions button:hover {
  animation: navButtonHoverOptimized 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
}

@keyframes navButtonHoverOptimized {
  0% {
    transform: translateY(0) scale(1) rotate(0deg);
    box-shadow: 0 2px 8px rgba(139, 92, 246, 0.15);
  }
  50% {
    transform: translateY(-1px) scale(1.05) rotate(5deg);
    box-shadow: 0 3px 12px rgba(139, 92, 246, 0.2);
  }
  100% {
    transform: translateY(-2px) scale(1.1) rotate(10deg);
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  }
}

/* Optimized return animation - streamlined */
.nav-actions button:not(:hover) {
  animation: navButtonHoverReturn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
}

@keyframes navButtonHoverReturn {
  0% {
    transform: translateY(-2px) scale(1.1) rotate(10deg);
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  }
  50% {
    transform: translateY(-1px) scale(1.05) rotate(5deg);
    box-shadow: 0 3px 10px rgba(139, 92, 246, 0.2);
  }
  100% {
    transform: translateY(0) scale(1) rotate(0deg);
    box-shadow: 0 2px 8px rgba(139, 92, 246, 0.15);
  }
}

/* Optimized icon scale animation - streamlined */
.nav-actions button:hover svg {
  animation: iconScaleOptimized 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
}

@keyframes iconScaleOptimized {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.nav-actions button:not(:hover) svg {
  animation: iconScaleReturn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes iconScaleReturn {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
