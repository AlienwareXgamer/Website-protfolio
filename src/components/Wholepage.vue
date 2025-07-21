<script setup>
import { onMounted, ref } from "vue";

const starsContainer = ref(null);

onMounted(() => {
  createStars();
});

const createStars = () => {
  const container = starsContainer.value;
  if (!container) return;

  // Create different types of stars with much more variety
  const starTypes = [
    // Dense field of tiny stationary twinkling stars
    { count: 400, size: 0.5, opacity: 0.9, speed: 10, stationary: true },
    { count: 350, size: 1, opacity: 0.8, speed: 15, stationary: true },
    { count: 250, size: 1.5, opacity: 0.7, speed: 20, stationary: true },
    { count: 200, size: 2, opacity: 0.6, speed: 25, stationary: true },
    { count: 150, size: 2.5, opacity: 0.5, speed: 30, stationary: true },
    { count: 100, size: 3, opacity: 0.4, speed: 35, stationary: true },
    { count: 75, size: 3.5, opacity: 0.3, speed: 40, stationary: true },

    // Moving/floating stars of various sizes
    { count: 120, size: 0.5, opacity: 0.8, speed: 45, stationary: false },
    { count: 100, size: 1, opacity: 0.7, speed: 50, stationary: false },
    { count: 80, size: 1.5, opacity: 0.6, speed: 55, stationary: false },
    { count: 60, size: 2, opacity: 0.5, speed: 60, stationary: false },
    { count: 40, size: 2.5, opacity: 0.4, speed: 65, stationary: false },
    { count: 30, size: 3, opacity: 0.3, speed: 70, stationary: false },

    // Slow drifting larger stars
    { count: 20, size: 4, opacity: 0.2, speed: 80, stationary: false },
    { count: 15, size: 4.5, opacity: 0.15, speed: 90, stationary: false },
    { count: 10, size: 5, opacity: 0.1, speed: 100, stationary: false },
  ];

  starTypes.forEach((type) => {
    for (let i = 0; i < type.count; i++) {
      const star = document.createElement("div");
      star.className = type.stationary ? "star stationary" : "star moving";

      // Random position
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";

      // Star properties
      star.style.width = type.size + "px";
      star.style.height = type.size + "px";
      star.style.opacity = Math.random() * type.opacity;

      // Animation duration with more variety
      star.style.animationDuration = type.speed + Math.random() * 40 + "s";
      star.style.animationDelay = Math.random() * 60 + "s";

      // For moving stars, add random movement direction
      if (!type.stationary) {
        const moveX = (Math.random() - 0.5) * 300;
        const moveY = (Math.random() - 0.5) * 300;
        star.style.setProperty("--moveX", moveX + "px");
        star.style.setProperty("--moveY", moveY + "px");
      }

      container.appendChild(star);
    }
  });
};
</script>

<template>
  <div ref="starsContainer" class="stars-container">
    <!-- Stars will be dynamically created here -->
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
  z-index: 1;
  overflow: hidden;
}

.star {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  animation: twinkle linear infinite;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* Different star colors for variety */
.star:nth-child(3n) {
  background: #8b5cf6;
  box-shadow: 0 0 6px rgba(139, 92, 246, 0.8);
}

.star:nth-child(5n) {
  background: #6366f1;
  box-shadow: 0 0 6px rgba(99, 102, 241, 0.8);
}

.star:nth-child(7n) {
  background: #a855f7;
  box-shadow: 0 0 6px rgba(168, 85, 247, 0.8);
}

/* Shooting stars */
.stars-container::before,
.stars-container::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 2px;
  background: linear-gradient(45deg, #fff, transparent);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  animation: shoot 8s linear infinite;
}

.stars-container::before {
  top: 20%;
  left: 10%;
  animation-delay: 2s;
}

.stars-container::after {
  top: 60%;
  left: 80%;
  animation-delay: 6s;
  animation-duration: 12s;
}

@keyframes shoot {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  10% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  90% {
    transform: translate(200px, 100px) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(300px, 150px) scale(0);
    opacity: 0;
  }
}

/* Additional animations for moving stars */
.moving {
  animation-name: twinkle, move;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(var(--moveX), var(--moveY));
  }
}
</style>
