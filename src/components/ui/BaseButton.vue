<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary", // 'primary' | 'secondary'
    validator: (value) => ["primary", "secondary"].includes(value),
  },
  size: {
    type: String,
    default: "medium", // 'small' | 'medium' | 'large'
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: "",
  },
});

defineEmits(["click"]);
</script>

<template>
  <button
    :class="[
      'base-button',
      `btn-${variant}`,
      `btn-${size}`,
      { 'btn-disabled': disabled },
    ]"
    :disabled="disabled"
    :aria-label="ariaLabel"
    @click="$emit('click')"
    type="button"
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
  /* Optimized for 60fps with slower, more elegant animations */
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Hardware acceleration for 60fps */
  will-change: transform, box-shadow, background;
  transform: translateZ(0);
}

.base-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  /* Slower, more elegant sweep animation */
  transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: left;
}

.base-button:hover::before {
  left: 100%;
}

/* Enhanced hover animations - streamlined for 60fps performance */
.base-button:hover {
  animation: buttonHoverOptimized 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
}

@keyframes buttonHoverOptimized {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-2px) scale(1.01);
  }
  100% {
    transform: translateY(-3px) scale(1.02);
  }
}

/* Return animation when hover ends - streamlined */
.base-button:not(:hover) {
  animation: buttonHoverReturn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
}

@keyframes buttonHoverReturn {
  0% {
    transform: translateY(-3px) scale(1.02);
  }
  50% {
    transform: translateY(-1px) scale(1.01);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  /* Smooth box-shadow transitions */
  transition: box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-primary:hover {
  /* Enhanced multi-layer shadow animation */
  animation: primaryShadowGrow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
}

@keyframes primaryShadowGrow {
  0% {
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  }
  25% {
    box-shadow:
      0 10px 28px rgba(139, 92, 246, 0.32),
      0 2px 8px rgba(139, 92, 246, 0.15);
  }
  50% {
    box-shadow:
      0 11px 30px rgba(139, 92, 246, 0.35),
      0 4px 12px rgba(139, 92, 246, 0.2),
      0 0 10px rgba(139, 92, 246, 0.1);
  }
  75% {
    box-shadow:
      0 12px 33px rgba(139, 92, 246, 0.38),
      0 6px 16px rgba(139, 92, 246, 0.25),
      0 0 15px rgba(139, 92, 246, 0.15),
      0 0 0 1px rgba(139, 92, 246, 0.1);
  }
  100% {
    box-shadow:
      0 12px 35px rgba(139, 92, 246, 0.4),
      0 8px 20px rgba(139, 92, 246, 0.3),
      0 0 20px rgba(139, 92, 246, 0.3),
      0 0 0 1px rgba(139, 92, 246, 0.2);
  }
}

.btn-primary:not(:hover) {
  animation: primaryShadowReturn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
}

@keyframes primaryShadowReturn {
  0% {
    box-shadow:
      0 12px 35px rgba(139, 92, 246, 0.4),
      0 8px 20px rgba(139, 92, 246, 0.3),
      0 0 20px rgba(139, 92, 246, 0.3),
      0 0 0 1px rgba(139, 92, 246, 0.2);
  }
  25% {
    box-shadow:
      0 11px 32px rgba(139, 92, 246, 0.37),
      0 6px 16px rgba(139, 92, 246, 0.25),
      0 0 15px rgba(139, 92, 246, 0.15);
  }
  50% {
    box-shadow:
      0 10px 29px rgba(139, 92, 246, 0.34),
      0 4px 12px rgba(139, 92, 246, 0.2),
      0 0 10px rgba(139, 92, 246, 0.1);
  }
  75% {
    box-shadow:
      0 9px 27px rgba(139, 92, 246, 0.32),
      0 2px 8px rgba(139, 92, 246, 0.15);
  }
  100% {
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  }
}

/* Secondary Button */
.btn-secondary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  /* Smooth box-shadow transitions */
  transition: box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-secondary:hover {
  /* Same enhanced animation as primary */
  animation: primaryShadowGrow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
}

.btn-secondary:not(:hover) {
  animation: primaryShadowReturn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
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
