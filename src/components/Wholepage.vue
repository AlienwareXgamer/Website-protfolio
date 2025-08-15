<script setup>
import { computed } from 'vue';

const STAR_COUNT = 50;
const stars = computed(() => Array.from({ length: STAR_COUNT }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 4,
  scale: 0.8 + Math.random() * 0.6
})));
</script>

<template>
  <div class="stars-container">
    <div
      v-for="star in stars"
      :key="star.id"
      class="star meteorit-star"
      :style="{ left: star.left + '%', top: star.top + '%', animationDelay: star.delay + 's', transform: 'scale(' + star.scale + ')' }"
    />
  </div>
  <div class="animation-layer" />
</template>

<style scoped>
.stars-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
  overflow: hidden;
  /* Optimized background gradient */
  background:
    radial-gradient(
      ellipse at center,
      rgba(30, 30, 50, 0.3) 0%,
      transparent 40%
    ),
    radial-gradient(
      ellipse at 30% 70%,
      rgba(20, 30, 60, 0.2) 0%,
      transparent 30%
    ),
    #0a0a0a;
}

/* Optimized star twinkle animation */
.star.meteorit-star {
  background: #ffffff;
  border-radius: 50%;
  /* Simplified box-shadow for better performance */
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.6);
  /* Streamlined twinkle animation */
  animation: optimizedTwinkle 8s ease-in-out infinite;
  animation-delay: calc(var(--random-delay) * 4s);
  /* 60fps optimization */
  will-change: opacity, transform;
}

@keyframes optimizedTwinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* Optimized shooting star animation layer */
.animation-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 6;
  overflow: hidden;
  /* 60fps optimization */
  will-change: transform;
}

/* Streamlined shooting star system using pseudo-elements */
.animation-layer::before,
.animation-layer::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 3px;
  background: #ffffff;
  border-radius: 50%;
  /* Optimized trail effect - simplified from 40+ shadows to 5 key shadows */
  box-shadow:
    0 0 8px rgba(255, 255, 255, 0.9),
    -6px -3px 0 rgba(255, 255, 255, 0.7),
    -12px -6px 0 rgba(255, 255, 255, 0.5),
    -18px -9px 0 rgba(255, 255, 255, 0.3),
    -24px -12px 0 rgba(255, 255, 255, 0.1);
  opacity: 0;
  /* 60fps optimization */
  will-change: transform, opacity;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.animation-layer::before {
  animation: streamlinedShootingStar 6s linear infinite;
  animation-delay: 1s;
}

.animation-layer::after {
  animation: streamlinedShootingStar 8s linear infinite;
  animation-delay: 4s;
  transform: translateX(50vw) translateY(20vh); /* Offset second star */
}

/* Additional shooting stars using generated content */
.animation-layer {
  background-image:
    radial-gradient(2px 2px at 20px 30px, #fff, transparent),
    radial-gradient(2px 2px at 40px 70px, #fff, transparent),
    radial-gradient(1px 1px at 90px 40px, #fff, transparent),
    radial-gradient(1px 1px at 130px 80px, #fff, transparent),
    radial-gradient(2px 2px at 160px 30px, #fff, transparent);
  background-repeat: repeat;
  background-size:
    200px 100px,
    300px 150px,
    250px 120px,
    350px 180px,
    400px 200px;
  animation: parallaxStars 20s linear infinite;
}

/* Streamlined shooting star keyframes - simplified from 8+ steps to 3 steps */
@keyframes streamlinedShootingStar {
  0% {
    transform: translate3d(-100px, -100px, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate3d(calc(100vw + 100px), calc(100vh + 100px), 0);
    opacity: 0;
  }
}

/* Parallax star movement for depth */
@keyframes parallaxStars {
  0% {
    background-position:
      0 0,
      0 0,
      0 0,
      0 0,
      0 0;
  }
  100% {
    background-position:
      -200px -100px,
      -300px -150px,
      -250px -120px,
      -350px -180px,
      -400px -200px;
  }
}

/* Media query for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .star.meteorit-star {
    animation: none;
    opacity: 0.5;
  }

  .animation-layer::before,
  .animation-layer::after {
    animation: none;
    opacity: 0;
  }

  .animation-layer {
    animation: none;
  }
}

/* Performance optimization for lower-end devices */
@media (max-width: 768px) {
  .stars-container {
    /* Reduce star count and complexity on mobile */
    background-image:
      radial-gradient(2px 2px at 20px 30px, #fff, transparent),
      radial-gradient(
        2px 2px at 40px 70px,
        rgba(255, 255, 255, 0.8),
        transparent
      ),
      radial-gradient(1px 1px at 90px 40px, #fff, transparent),
      radial-gradient(
        1px 1px at 130px 80px,
        rgba(255, 255, 255, 0.6),
        transparent
      ),
      radial-gradient(2px 2px at 160px 30px, #fff, transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    animation: parallaxStars 120s linear infinite; /* Slower animation */
  }

  .star {
    /* Reduce individual star animations on mobile */
    animation-duration: 8s; /* Slower */
    animation-timing-function: ease-out;
  }

  .star.meteorit-star {
    /* Simpler meteorite animation */
    animation: meteoriteSimple 6s ease-out infinite;
  }

  /* Disable complex animations on very small screens */
  @media (max-width: 480px) {
    .star.meteorit-star {
      display: none; /* Hide meteorites on very small screens */
    }

    .animation-layer::before,
    .animation-layer::after {
      display: none; /* Hide complex layers */
    }
  }
}

/* Simplified meteorite animation for mobile */
@keyframes meteoriteSimple {
  0% {
    transform: translate3d(-100px, -100px, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate3d(300px, 300px, 0);
    opacity: 0;
  }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
  .stars-container {
    /* Further reduce effects on touch-only devices */
    background-size: 150px 75px;
    animation-duration: 180s; /* Even slower */
  }

  .star {
    /* Minimal star animation on touch devices */
    animation-duration: 12s;
  }
}

/* Landscape mobile optimizations */
@media (max-width: 768px) and (orientation: landscape) {
  .stars-container {
    background-size: 250px 125px;
    animation-duration: 100s;
  }
}
</style>
