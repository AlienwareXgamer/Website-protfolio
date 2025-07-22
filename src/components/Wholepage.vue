<script setup>
import { onMounted, ref } from "vue";

const starsContainer = ref(null);

onMounted(() => {
  createStars();
});

const createStars = () => {
  const container = starsContainer.value;
  if (!container) {
    console.error("Stars container not found!");
    return;
  }

  // Clear any existing stars first
  container.innerHTML = "";

  console.log("Creating optimized starfield...");

  // Create fewer, more optimized stars for better performance
  const totalStars = 50; // Reduced from 100 for better performance

  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement("div");
    star.className = "star meteorit-star";

    // Random position across entire screen
    const leftPos = Math.random() * 100;
    const topPos = Math.random() * 100;
    star.style.left = leftPos + "%";
    star.style.top = topPos + "%";

    // Optimized star styling
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.opacity = "0.8";
    star.style.backgroundColor = "#ffffff";
    star.style.position = "absolute";
    star.style.borderRadius = "50%";
    star.style.zIndex = "10";

    // Add random animation delay for variety
    star.style.setProperty("--random-delay", Math.random());

    container.appendChild(star);
  }

  console.log(`Created ${totalStars} optimized stars`);
};
</script>

<template>
  <!-- Optimized static stars -->
  <div ref="starsContainer" class="stars-container">
    <!-- Stars will be dynamically created here -->
  </div>

  <!-- Optimized shooting star animation layer -->
  <div class="animation-layer">
    <!-- Single streamlined shooting star system -->
  </div>
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
  .animation-layer::before,
  .animation-layer::after {
    box-shadow:
      0 0 4px rgba(255, 255, 255, 0.8),
      -8px -4px 0 rgba(255, 255, 255, 0.4),
      -16px -8px 0 rgba(255, 255, 255, 0.2);
  }
}
</style>
