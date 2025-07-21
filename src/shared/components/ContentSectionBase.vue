<script setup>
// This is a base component for shared section styling
</script>

<template>
  <div class="content-section-base">
    <slot />
  </div>
</template>

<style scoped>
.content-section-base {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 4rem 2rem; /* Simplified padding */
  padding-top: 8rem; /* Add extra top padding to account for navigation bar */
  color: #d5d5db;
  position: relative;
  box-sizing: border-box;
  display: block; /* Changed from flex to block for better content flow */
  min-height: auto; /* Allow natural content height */
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.content-section-base > :deep(*) {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  display: block; /* Ensure child elements display properly */
}

.content-section-base::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  border-radius: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: -1;
  transition: all 0.3s ease;
}

.content-section-base:hover::before {
  background: transparent;
  border-top-color: rgba(139, 92, 246, 0.2);
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.1);
}

.content-section-base :deep(h3) {
  color: #fff;
  margin-bottom: 2.5rem;
  margin-top: 0; /* Remove top margin since we now have padding-top */
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #fff, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: block; /* Ensure headings display */
}

.content-section-base :deep(h3)::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 2px;
}

/* Responsive */
@media (max-width: 1024px) {
  .content-section-base {
    padding: 3rem 2rem;
    padding-top: 7rem; /* Adjust for smaller screens */
  }
}

@media (max-width: 768px) {
  .content-section-base {
    padding: 2.5rem 1.5rem;
    padding-top: 6rem; /* Adjust for mobile */
  }

  .content-section-base :deep(h3) {
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-top: 0;
  }
}

@media (max-width: 480px) {
  .content-section-base {
    padding: 2rem 1rem;
    padding-top: 5.5rem; /* Adjust for very small screens */
  }

  .content-section-base :deep(h3) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
  }
}

@media (min-width: 1440px) {
  .content-section-base {
    padding: 5rem 2rem;
    padding-top: 9rem; /* Extra space for larger screens */
  }
}
</style>
