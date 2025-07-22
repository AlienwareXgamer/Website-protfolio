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
  container.innerHTML = '';
  
  console.log("Creating Meteorit-style starfield...");
  console.log("Container found:", container);
  console.log("Container dimensions:", container.offsetWidth, "x", container.offsetHeight);

  // Create stars exactly like the Meteorit reference
  const totalStars = 100; // Reduced for debugging
  
  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement("div");
    star.className = "star meteorit-star";

    // Random position across entire screen
    const leftPos = Math.random() * 100;
    const topPos = Math.random() * 100;
    star.style.left = leftPos + "%";
    star.style.top = topPos + "%";

    // Make stars more visible for debugging
    star.style.width = "3px";
    star.style.height = "3px";
    star.style.opacity = "1";
    star.style.backgroundColor = "#ffffff";
    star.style.position = "absolute";
    star.style.borderRadius = "50%";
    star.style.zIndex = "10";

    console.log(`Creating star ${i}: left=${leftPos}%, top=${topPos}%`);

    container.appendChild(star);
  }

  console.log(`Created ${totalStars} Meteorit-style stars`);
  console.log("Stars in container:", container.children.length);
  
  // Debug first 3 stars
  for (let i = 0; i < Math.min(3, container.children.length); i++) {
    const star = container.children[i];
    console.log(`Star ${i} styles:`, {
      left: star.style.left,
      top: star.style.top,
      width: star.style.width,
      height: star.style.height,
      opacity: star.style.opacity,
      backgroundColor: star.style.backgroundColor
    });
  }
};
</script>

<template>
  <!-- Static stars (your current working setup) -->
  <div ref="starsContainer" class="stars-container">
    <!-- Stars will be dynamically created here -->
  </div>

  <!-- NEW: Pure CSS animation layer -->
  <div class="animation-layer">
    <!-- Original diagonal shooting stars (top-left to bottom-right) -->
    <div class="shooting-star-3"></div>
    <div class="shooting-star-4"></div>
    <div class="shooting-star-5"></div>
    <div class="shooting-star-6"></div>
    
    <!-- NEW: Top-right to bottom-left shooting stars -->
    <div class="shooting-star-tr-1"></div>
    <div class="shooting-star-tr-2"></div>
    <div class="shooting-star-tr-3"></div>
    
    <!-- NEW: Bottom-left to top-right shooting stars -->
    <div class="shooting-star-bl-1"></div>
    <div class="shooting-star-bl-2"></div>
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
  /* Dark background with subtle nebula-like gradient */
  background: 
    radial-gradient(ellipse at center, rgba(30, 30, 50, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse at 30% 70%, rgba(20, 30, 60, 0.3) 0%, transparent 40%),
    radial-gradient(ellipse at 70% 20%, rgba(40, 20, 50, 0.2) 0%, transparent 35%),
    #0a0a0a;
}

/* Meteorit-style stars - clean and simple */
.star.meteorit-star {
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.6);
  /* Very subtle twinkle animation */
  animation: subtleTwinkle 8s ease-in-out infinite;
  animation-delay: calc(var(--random-delay, 0) * 1s);
}

@keyframes subtleTwinkle {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

/* NEW: Animation layer for shooting stars */
.animation-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 6;
  overflow: hidden;
}

/* Enhanced 60fps shooting star animations with optimized trails */
.animation-layer::before,
.animation-layer::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background: #ffffff;
  border-radius: 50%;
  /* Enhanced 60fps trails with more segments */
  box-shadow: 
    0 0 10px rgba(255, 255, 255, 1),
    0 0 20px rgba(255, 255, 255, 0.8),
    0 0 30px rgba(255, 255, 255, 0.4),
    -8px -4px 0 0px rgba(255, 255, 255, 0.9),
    -16px -8px 0 -0.5px rgba(255, 255, 255, 0.8),
    -24px -12px 0 -1px rgba(255, 255, 255, 0.7),
    -32px -16px 0 -1px rgba(255, 255, 255, 0.6),
    -40px -20px 0 -1.5px rgba(255, 255, 255, 0.5),
    -48px -24px 0 -1.5px rgba(255, 255, 255, 0.4),
    -56px -28px 0 -2px rgba(255, 255, 255, 0.3),
    -64px -32px 0 -2px rgba(255, 255, 255, 0.25),
    -72px -36px 0 -2.5px rgba(255, 255, 255, 0.2),
    -80px -40px 0 -2.5px rgba(255, 255, 255, 0.15),
    -88px -44px 0 -3px rgba(255, 255, 255, 0.1),
    -96px -48px 0 -3px rgba(255, 255, 255, 0.05);
  opacity: 0;
  /* 60fps optimization */
  will-change: transform, opacity;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.animation-layer::before {
  animation: smoothDiagonalStar1 5s linear infinite;
  animation-delay: 3.2s;
}

.animation-layer::after {
  animation: smoothDiagonalStar2 4.8s linear infinite;
  animation-delay: 7.1s;
}

/* Enhanced trail effects for all shooting stars - 60fps optimized */
.shooting-star-3,
.shooting-star-4,
.shooting-star-5,
.shooting-star-6,
.shooting-star-tr-1,
.shooting-star-tr-2,
.shooting-star-tr-3,
.shooting-star-bl-1,
.shooting-star-bl-2 {
  position: absolute;
  background: #ffffff;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  /* 60fps optimization */
  will-change: transform, opacity;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.shooting-star-3 {
  width: 3px;
  height: 3px;
  box-shadow: 
    0 0 8px rgba(255, 255, 255, 1),
    0 0 16px rgba(255, 255, 255, 0.6),
    -6px -3px 0 0px rgba(255, 255, 255, 0.85),
    -12px -6px 0 -0.5px rgba(255, 255, 255, 0.75),
    -18px -9px 0 -0.5px rgba(255, 255, 255, 0.65),
    -24px -12px 0 -1px rgba(255, 255, 255, 0.55),
    -30px -15px 0 -1px rgba(255, 255, 255, 0.45),
    -36px -18px 0 -1.5px rgba(255, 255, 255, 0.35),
    -42px -21px 0 -1.5px rgba(255, 255, 255, 0.25),
    -48px -24px 0 -2px rgba(255, 255, 255, 0.2),
    -54px -27px 0 -2px rgba(255, 255, 255, 0.15),
    -60px -30px 0 -2px rgba(255, 255, 255, 0.1);
  animation: smoothDiagonalStar3 5.5s linear infinite;
  animation-delay: 9.4s;
}

.shooting-star-4 {
  width: 3px;
  height: 3px;
  box-shadow: 
    0 0 9px rgba(255, 255, 255, 1),
    0 0 18px rgba(255, 255, 255, 0.7),
    -9px -4.5px 0 0px rgba(255, 255, 255, 0.8),
    -18px -9px 0 -0.5px rgba(255, 255, 255, 0.7),
    -27px -13.5px 0 -0.5px rgba(255, 255, 255, 0.6),
    -36px -18px 0 -1px rgba(255, 255, 255, 0.5),
    -45px -22.5px 0 -1px rgba(255, 255, 255, 0.4),
    -54px -27px 0 -1.5px rgba(255, 255, 255, 0.3),
    -63px -31.5px 0 -1.5px rgba(255, 255, 255, 0.25),
    -72px -36px 0 -2px rgba(255, 255, 255, 0.2),
    -81px -40.5px 0 -2px rgba(255, 255, 255, 0.15);
  animation: smoothDiagonalStar4 4.5s linear infinite;
  animation-delay: 1.8s;
}

.shooting-star-5 {
  width: 3px;
  height: 3px;
  box-shadow: 
    0 0 10px rgba(255, 255, 255, 1),
    0 0 20px rgba(255, 255, 255, 0.8),
    -7px -3.5px 0 0px rgba(255, 255, 255, 0.9),
    -14px -7px 0 -0.5px rgba(255, 255, 255, 0.8),
    -21px -10.5px 0 -0.5px rgba(255, 255, 255, 0.7),
    -28px -14px 0 -1px rgba(255, 255, 255, 0.6),
    -35px -17.5px 0 -1px rgba(255, 255, 255, 0.5),
    -42px -21px 0 -1.5px rgba(255, 255, 255, 0.4),
    -49px -24.5px 0 -1.5px rgba(255, 255, 255, 0.35),
    -56px -28px 0 -2px rgba(255, 255, 255, 0.3),
    -63px -31.5px 0 -2px rgba(255, 255, 255, 0.25),
    -70px -35px 0 -2px rgba(255, 255, 255, 0.2);
  animation: smoothDiagonalStar5 6s linear infinite;
  animation-delay: 12.5s;
}

.shooting-star-6 {
  width: 3px;
  height: 3px;
  box-shadow: 
    0 0 7px rgba(255, 255, 255, 0.9),
    0 0 14px rgba(255, 255, 255, 0.6),
    -5px -2.5px 0 0px rgba(255, 255, 255, 0.75),
    -10px -5px 0 -0.5px rgba(255, 255, 255, 0.65),
    -15px -7.5px 0 -0.5px rgba(255, 255, 255, 0.55),
    -20px -10px 0 -1px rgba(255, 255, 255, 0.45),
    -25px -12.5px 0 -1px rgba(255, 255, 255, 0.35),
    -30px -15px 0 -1.5px rgba(255, 255, 255, 0.3),
    -35px -17.5px 0 -1.5px rgba(255, 255, 255, 0.25),
    -40px -20px 0 -1.5px rgba(255, 255, 255, 0.2);
  animation: smoothDiagonalStar6 4.7s linear infinite;
  animation-delay: 8.3s;
}

/* NEW: Top-right to bottom-left shooting stars */
.shooting-star-tr-1 {
  width: 3px;
  height: 3px;
  box-shadow: 
    0 0 6px rgba(255, 255, 255, 0.9),
    0 0 12px rgba(255, 255, 255, 0.6),
    -7.5px -3.75px 0 0px rgba(255, 255, 255, 0.7),
    -15px -7.5px 0 -0.5px rgba(255, 255, 255, 0.6),
    -22.5px -11.25px 0 -0.5px rgba(255, 255, 255, 0.5),
    -30px -15px 0 -1px rgba(255, 255, 255, 0.4),
    -37.5px -18.75px 0 -1px rgba(255, 255, 255, 0.3),
    -45px -22.5px 0 -1.5px rgba(255, 255, 255, 0.25),
    -52.5px -26.25px 0 -1.5px rgba(255, 255, 255, 0.2),
    -60px -30px 0 -2px rgba(255, 255, 255, 0.15);
  animation: smoothTrParallelStar1 6.5s linear infinite;
  animation-delay: 2.7s;
}

.shooting-star-tr-2 {
  width: 2px;
  height: 2px;
  box-shadow: 
    0 0 5px rgba(255, 255, 255, 0.85),
    0 0 10px rgba(255, 255, 255, 0.5),
    -6px -3px 0 0px rgba(255, 255, 255, 0.6),
    -12px -6px 0 -0.5px rgba(255, 255, 255, 0.5),
    -18px -9px 0 -0.5px rgba(255, 255, 255, 0.4),
    -24px -12px 0 -1px rgba(255, 255, 255, 0.3),
    -30px -15px 0 -1px rgba(255, 255, 255, 0.25),
    -36px -18px 0 -1px rgba(255, 255, 255, 0.2);
  animation: smoothTrParallelStar2 5.8s linear infinite;
  animation-delay: 6.9s;
}

.shooting-star-tr-3 {
  width: 2px;
  height: 2px;
  box-shadow: 
    0 0 4px rgba(255, 255, 255, 0.8),
    0 0 8px rgba(255, 255, 255, 0.4),
    -5px -2.5px 0 0px rgba(255, 255, 255, 0.55),
    -10px -5px 0 -0.5px rgba(255, 255, 255, 0.45),
    -15px -7.5px 0 -0.5px rgba(255, 255, 255, 0.35),
    -20px -10px 0 -1px rgba(255, 255, 255, 0.25),
    -25px -12.5px 0 -1px rgba(255, 255, 255, 0.2),
    -30px -15px 0 -1px rgba(255, 255, 255, 0.15);
  animation: smoothTrParallelStar3 7s linear infinite;
  animation-delay: 11.3s;
}

/* Enhanced trails for bottom-left stars - trails should point UP-LEFT (opposite to movement) */
.shooting-star-bl-1 {
  width: 2px;
  height: 2px;
  box-shadow: 
    0 0 5px rgba(255, 255, 255, 0.8),
    0 0 10px rgba(255, 255, 255, 0.5),
    -4px -2px 0 0px rgba(255, 255, 255, 0.6),
    -8px -4px 0 -0.5px rgba(255, 255, 255, 0.5),
    -12px -6px 0 -0.5px rgba(255, 255, 255, 0.4),
    -16px -8px 0 -1px rgba(255, 255, 255, 0.3),
    -20px -10px 0 -1px rgba(255, 255, 255, 0.25),
    -24px -12px 0 -1px rgba(255, 255, 255, 0.2);
  animation: smoothBlParallelStar1 6.2s linear infinite;
  animation-delay: 4.1s;
}

.shooting-star-bl-2 {
  width: 2px;
  height: 2px;
  box-shadow: 
    0 0 4px rgba(255, 255, 255, 0.75),
    0 0 8px rgba(255, 255, 255, 0.4),
    -3px -1.5px 0 0px rgba(255, 255, 255, 0.5),
    -6px -3px 0 -0.5px rgba(255, 255, 255, 0.4),
    -9px -4.5px 0 -0.5px rgba(255, 255, 255, 0.35),
    -12px -6px 0 -1px rgba(255, 255, 255, 0.3),
    -15px -7.5px 0 -1px rgba(255, 255, 255, 0.25),
    -18px -9px 0 -1px rgba(255, 255, 255, 0.15);
  animation: smoothBlParallelStar2 5.5s linear infinite;
  animation-delay: 8.7s;
}

/* All shooting stars follow the same diagonal angle but start from different Y positions */

/* Original diagonal animations (top-left to bottom-right) - slower speeds */
@keyframes diagonalStar1 {
  0% {
    transform: translate(-100px, -100px);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(100vw + 100px), calc(100vh + 0px));
    opacity: 0;
  }
}

@keyframes diagonalStar2 {
  0% {
    transform: translate(-100px, 10vh);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  88% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(100vw + 100px), calc(100vh + 10vh));
    opacity: 0;
  }
}

@keyframes diagonalStar3 {
  0% {
    transform: translate(-100px, 25vh);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(100vw + 100px), calc(100vh + 25vh));
    opacity: 0;
  }
}

@keyframes diagonalStar4 {
  0% {
    transform: translate(-100px, 40vh);
    opacity: 0;
  }
  18% {
    opacity: 1;
  }
  82% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(100vw + 100px), calc(100vh + 40vh));
    opacity: 0;
  }
}

@keyframes diagonalStar5 {
  0% {
    transform: translate(-100px, 15vh);
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  92% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(100vw + 100px), calc(100vh + 15vh));
    opacity: 0;
  }
}

@keyframes diagonalStar6 {
  0% {
    transform: translate(-100px, 5vh);
    opacity: 0;
  }
  16% {
    opacity: 1;
  }
  84% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(100vw + 100px), calc(100vh + 5vh));
    opacity: 0;
  }
}

/* NEW: Parallel animations - all stars move top-left to bottom-right direction */

/* Stars starting from top-right area but moving in same diagonal direction */
@keyframes trParallelStar1 {
  0% {
    transform: translate(calc(80vw), -50px); /* Start from top-right area */
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  92% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(100vw + 200px), calc(50vh)); /* Move diagonally down-right */
    opacity: 0;
  }
}

@keyframes trParallelStar2 {
  0% {
    transform: translate(calc(70vw), -80px); /* Start from top-right area */
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(100vw + 150px), calc(40vh)); /* Move diagonally down-right */
    opacity: 0;
  }
}

@keyframes trParallelStar3 {
  0% {
    transform: translate(calc(85vw), -30px); /* Start from top-right area */
    opacity: 0;
  }
  7% {
    opacity: 1;
  }
  93% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(100vw + 180px), calc(45vh)); /* Move diagonally down-right */
    opacity: 0;
  }
}

/* Stars starting from bottom-left area but moving in same diagonal direction */
@keyframes blParallelStar1 {
  0% {
    transform: translate(-150px, calc(60vh)); /* Start from bottom-left area */
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  88% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(40vw), calc(100vh + 100px)); /* Move diagonally down-right */
    opacity: 0;
  }
}

@keyframes blParallelStar2 {
  0% {
    transform: translate(-120px, calc(70vh)); /* Start from bottom-left area */
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(35vw), calc(100vh + 80px)); /* Move diagonally down-right */
    opacity: 0;
  }
}

/* 60fps optimized keyframe animations with smoother interpolation */

/* Enhanced smooth diagonal animations */
@keyframes smoothDiagonalStar1 {
  0% {
    transform: translate3d(-100px, -100px, 0) scale(0.8);
    opacity: 0;
  }
  5% {
    transform: translate3d(-80px, -80px, 0) scale(0.9);
    opacity: 0.3;
  }
  15% {
    transform: translate3d(-50px, -50px, 0) scale(1);
    opacity: 1;
  }
  85% {
    transform: translate3d(calc(100vw - 50px), calc(100vh - 50px), 0) scale(1);
    opacity: 1;
  }
  95% {
    transform: translate3d(calc(100vw + 50px), calc(100vh + 50px), 0) scale(0.9);
    opacity: 0.3;
  }
  100% {
    transform: translate3d(calc(100vw + 100px), calc(100vh + 100px), 0) scale(0.8);
    opacity: 0;
  }
}

@keyframes smoothDiagonalStar2 {
  0% {
    transform: translate3d(-100px, 10vh, 0) scale(0.8);
    opacity: 0;
  }
  5% {
    transform: translate3d(-75px, calc(10vh + 25px), 0) scale(0.9);
    opacity: 0.4;
  }
  12% {
    transform: translate3d(-40px, calc(10vh + 60px), 0) scale(1);
    opacity: 1;
  }
  88% {
    transform: translate3d(calc(100vw - 40px), calc(100vh + 10vh - 60px), 0) scale(1);
    opacity: 1;
  }
  95% {
    transform: translate3d(calc(100vw + 40px), calc(100vh + 10vh - 25px), 0) scale(0.9);
    opacity: 0.4;
  }
  100% {
    transform: translate3d(calc(100vw + 100px), calc(100vh + 10vh), 0) scale(0.8);
    opacity: 0;
  }
}

@keyframes smoothDiagonalStar3 {
  0% {
    transform: translate3d(-100px, 25vh, 0) scale(0.7);
    opacity: 0;
  }
  6% {
    transform: translate3d(-70px, calc(25vh + 30px), 0) scale(0.85);
    opacity: 0.5;
  }
  10% {
    transform: translate3d(-35px, calc(25vh + 70px), 0) scale(1);
    opacity: 1;
  }
  90% {
    transform: translate3d(calc(100vw - 35px), calc(100vh + 25vh - 70px), 0) scale(1);
    opacity: 1;
  }
  94% {
    transform: translate3d(calc(100vw + 35px), calc(100vh + 25vh - 30px), 0) scale(0.85);
    opacity: 0.5;
  }
  100% {
    transform: translate3d(calc(100vw + 100px), calc(100vh + 25vh), 0) scale(0.7);
    opacity: 0;
  }
}

@keyframes smoothDiagonalStar4 {
  0% {
    transform: translate3d(-100px, 40vh, 0) scale(0.75);
    opacity: 0;
  }
  8% {
    transform: translate3d(-65px, calc(40vh + 35px), 0) scale(0.9);
    opacity: 0.6;
  }
  18% {
    transform: translate3d(-25px, calc(40vh + 85px), 0) scale(1);
    opacity: 1;
  }
  82% {
    transform: translate3d(calc(100vw - 25px), calc(100vh + 40vh - 85px), 0) scale(1);
    opacity: 1;
  }
  92% {
    transform: translate3d(calc(100vw + 25px), calc(100vh + 40vh - 35px), 0) scale(0.9);
    opacity: 0.6;
  }
  100% {
    transform: translate3d(calc(100vw + 100px), calc(100vh + 40vh), 0) scale(0.75);
    opacity: 0;
  }
}

@keyframes smoothDiagonalStar5 {
  0% {
    transform: translate3d(-100px, 15vh, 0) scale(0.8);
    opacity: 0;
  }
  4% {
    transform: translate3d(-80px, calc(15vh + 20px), 0) scale(0.9);
    opacity: 0.3;
  }
  8% {
    transform: translate3d(-45px, calc(15vh + 55px), 0) scale(1);
    opacity: 1;
  }
  92% {
    transform: translate3d(calc(100vw - 45px), calc(100vh + 15vh - 55px), 0) scale(1);
    opacity: 1;
  }
  96% {
    transform: translate3d(calc(100vw + 45px), calc(100vh + 15vh - 20px), 0) scale(0.9);
    opacity: 0.3;
  }
  100% {
    transform: translate3d(calc(100vw + 100px), calc(100vh + 15vh), 0) scale(0.8);
    opacity: 0;
  }
}

@keyframes smoothDiagonalStar6 {
  0% {
    transform: translate3d(-100px, 5vh, 0) scale(0.85);
    opacity: 0;
  }
  7% {
    transform: translate3d(-70px, calc(5vh + 30px), 0) scale(0.95);
    opacity: 0.4;
  }
  16% {
    transform: translate3d(-30px, calc(5vh + 70px), 0) scale(1);
    opacity: 1;
  }
  84% {
    transform: translate3d(calc(100vw - 30px), calc(100vh + 5vh - 70px), 0) scale(1);
    opacity: 1;
  }
  93% {
    transform: translate3d(calc(100vw + 30px), calc(100vh + 5vh - 30px), 0) scale(0.95);
    opacity: 0.4;
  }
  100% {
    transform: translate3d(calc(100vw + 100px), calc(100vh + 5vh), 0) scale(0.85);
    opacity: 0;
  }
}

/* Smooth parallel animations for top-right stars */
@keyframes smoothTrParallelStar1 {
  0% {
    transform: translate3d(calc(80vw), -50px, 0) scale(0.7);
    opacity: 0;
  }
  4% {
    transform: translate3d(calc(80vw + 20px), calc(-50px + 20px), 0) scale(0.85);
    opacity: 0.5;
  }
  8% {
    transform: translate3d(calc(80vw + 50px), calc(-50px + 50px), 0) scale(1);
    opacity: 1;
  }
  92% {
    transform: translate3d(calc(80vw + 350px), calc(-50px + 350px), 0) scale(1);
    opacity: 1;
  }
  96% {
    transform: translate3d(calc(80vw + 380px), calc(-50px + 380px), 0) scale(0.85);
    opacity: 0.5;
  }
  100% {
    transform: translate3d(calc(80vw + 400px), calc(-50px + 400px), 0) scale(0.7);
    opacity: 0;
  }
}

@keyframes smoothTrParallelStar2 {
  0% {
    transform: translate3d(calc(70vw), -80px, 0) scale(0.6);
    opacity: 0;
  }
  5% {
    transform: translate3d(calc(70vw + 25px), calc(-80px + 25px), 0) scale(0.8);
    opacity: 0.4;
  }
  10% {
    transform: translate3d(calc(70vw + 60px), calc(-80px + 60px), 0) scale(1);
    opacity: 1;
  }
  90% {
    transform: translate3d(calc(70vw + 300px), calc(-80px + 300px), 0) scale(1);
    opacity: 1;
  }
  95% {
    transform: translate3d(calc(70vw + 335px), calc(-80px + 335px), 0) scale(0.8);
    opacity: 0.4;
  }
  100% {
    transform: translate3d(calc(70vw + 360px), calc(-80px + 360px), 0) scale(0.6);
    opacity: 0;
  }
}

@keyframes smoothTrParallelStar3 {
  0% {
    transform: translate3d(calc(85vw), -30px, 0) scale(0.65);
    opacity: 0;
  }
  3.5% {
    transform: translate3d(calc(85vw + 17px), calc(-30px + 17px), 0) scale(0.8);
    opacity: 0.3;
  }
  7% {
    transform: translate3d(calc(85vw + 42px), calc(-30px + 42px), 0) scale(1);
    opacity: 1;
  }
  93% {
    transform: translate3d(calc(85vw + 258px), calc(-30px + 258px), 0) scale(1);
    opacity: 1;
  }
  96.5% {
    transform: translate3d(calc(85vw + 281px), calc(-30px + 281px), 0) scale(0.8);
    opacity: 0.3;
  }
  100% {
    transform: translate3d(calc(85vw + 300px), calc(-30px + 300px), 0) scale(0.65);
    opacity: 0;
  }
}

/* Smooth parallel animations for bottom-left stars */
@keyframes smoothBlParallelStar1 {
  0% {
    transform: translate3d(-150px, calc(60vh), 0) scale(0.6);
    opacity: 0;
  }
  6% {
    transform: translate3d(calc(-150px + 30px), calc(60vh + 30px), 0) scale(0.8);
    opacity: 0.5;
  }
  12% {
    transform: translate3d(calc(-150px + 72px), calc(60vh + 72px), 0) scale(1);
    opacity: 1;
  }
  88% {
    transform: translate3d(calc(-150px + 264px), calc(60vh + 264px), 0) scale(1);
    opacity: 1;
  }
  94% {
    transform: translate3d(calc(-150px + 294px), calc(60vh + 294px), 0) scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: translate3d(calc(-150px + 320px), calc(60vh + 320px), 0) scale(0.6);
    opacity: 0;
  }
}

@keyframes smoothBlParallelStar2 {
  0% {
    transform: translate3d(-120px, calc(70vh), 0) scale(0.65);
    opacity: 0;
  }
  7.5% {
    transform: translate3d(calc(-120px + 37px), calc(70vh + 37px), 0) scale(0.8);
    opacity: 0.4;
  }
  15% {
    transform: translate3d(calc(-120px + 75px), calc(70vh + 75px), 0) scale(1);
    opacity: 1;
  }
  85% {
    transform: translate3d(calc(-120px + 225px), calc(70vh + 225px), 0) scale(1);
    opacity: 1;
  }
  92.5% {
    transform: translate3d(calc(-120px + 262px), calc(70vh + 262px), 0) scale(0.8);
    opacity: 0.4;
  }
  100% {
    transform: translate3d(calc(-120px + 280px), calc(70vh + 280px), 0) scale(0.65);
    opacity: 0;
  }
}
</style>
