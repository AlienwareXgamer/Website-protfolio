<script setup>
// Simple logo component for navigation
</script>

<template>
  <div class="nav-logo">
    <div class="logo-circle">
      FP
    </div>
  </div>
</template>

<style scoped>
.nav-logo .logo-circle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
}

.nav-logo .logo-circle:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.4),
              0 0 0 2px rgba(139, 92, 246, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Responsive */
@media (max-width: 480px) {
  .nav-logo .logo-circle {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
}
</style>