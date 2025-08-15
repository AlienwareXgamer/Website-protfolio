<script setup>
defineProps({
  size: {
    type: String,
    default: "large", // 'small' | 'medium' | 'large'
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
});

import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import photoUrl from '@/assets/profile-photo.jpg';

const photoRef = ref(null);

onMounted(() => {
  const el = photoRef.value;
  if (!el) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; // respect user preference
  // Intro pop / fade in
  gsap.from(el, {
    scale: 0.6,
    opacity: 0,
    rotate: -10,
    duration: 1.1,
    ease: 'back.out(1.7)'
  });
  // Subtle breathing shadow / glow loop
  gsap.to(el, {
    boxShadow: '0 28px 58px rgba(139,92,246,0.55)',
    duration: 3.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
});
</script>

<template>
  <div :class="['profile-photo', `photo-${size}`]" ref="photoRef">
    <img
      :src="photoUrl"
      alt="Francis Allen Prado"
      class="profile-image"
      loading="eager"
      decoding="async"
    />
  </div>
</template>

<style scoped>
.profile-photo {
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
  margin: 0 auto 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(139, 92, 246, 0.4);
  border: 4px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease;
  isolation: isolate; /* ensure pseudo elements blend properly */
}

/* Animated ambient glow */
.profile-photo::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 65%),
    radial-gradient(circle at 70% 70%, rgba(139,92,246,0.35), transparent 70%);
  mix-blend-mode: overlay;
  opacity: 0.6;
  animation: glowPulse 8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes glowPulse {
  0%, 100% { transform: scale(1); opacity: 0.55; }
  50% { transform: scale(1.08); opacity: 0.85; }
}

.profile-photo:hover {
  transform: scale(1.05);
  box-shadow: 0 30px 60px rgba(139, 92, 246, 0.5);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 50%;
}

/* Sizes */
.photo-small { width: 80px; height: 80px; }
.photo-medium { width: 120px; height: 120px; }
.photo-large { width: 160px; height: 160px; }

/* Responsive */
@media (max-width: 768px) { .photo-large { width: 140px; height: 140px; } }
@media (max-width: 480px) { .photo-large { width: 120px; height: 120px; } }

/* Reduced motion: remove animations */
@media (prefers-reduced-motion: reduce) {
  .profile-photo::after { animation: none; }
}
</style>
