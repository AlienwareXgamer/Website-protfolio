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
  padding: 3rem 2rem; /* Reduced from 4rem to minimize vertical dead space */
  padding-top: 8rem; /* Increased from 6rem to provide more space for navigation */
  color: #d5d5db;
  position: relative;
  box-sizing: border-box;
  display: block;
  min-height: auto;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.content-section-base > :deep(*) {
  max-width: 1800px; /* Increased max-width for more horizontal space */
  width: 100%; /* Use full width of parent */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  display: block;
  padding-left: 2vw; /* Add gentle left padding */
  padding-right: 2vw; /* Add gentle right padding */
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
  margin-bottom: 2rem; /* Reduced from 2.5rem */
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
    padding: 2.5rem 2rem; /* Reduced padding */
    padding-top: 5rem; /* Reduced top padding */
  }
}

@media (max-width: 768px) {
  .content-section-base {
    padding: 2rem 1.5rem; /* Optimized mobile padding */
    padding-top: 4.5rem; /* Reduced mobile top padding */
  }

  .content-section-base :deep(h3) {
    font-size: 2rem;
    margin-bottom: 1.5rem; /* Reduced margin */
    margin-top: 0;
  }
}

@media (max-width: 480px) {
  .content-section-base {
    padding: 1.5rem 1rem; /* Further reduced for small screens */
    padding-top: 4rem;
  }

  .content-section-base :deep(h3) {
    font-size: 1.8rem;
    margin-bottom: 1.25rem;
    margin-top: 0;
  }
}

@media (min-width: 1440px) {
  .content-section-base {
    padding: 4rem 3rem; /* Better use of large screen space */
    padding-top: 7rem;
  }
}
</style>
