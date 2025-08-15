<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";
import ExperienceItem from "../../features/experience/ExperienceItem.vue";
import { EXPERIENCES } from "@/data/experiences.js";

const experiences = EXPERIENCES;
</script>

<template>
  <ContentSectionBase>
    <section id="experience" class="experience-section">
      <h3>Experience</h3>
      <div class="experience-list">
        <ExperienceItem
          v-for="(experience, idx) in experiences"
          :key="experience.title + experience.period"
          :experience="experience"
          :index="idx"
        />
      </div>
    </section>
  </ContentSectionBase>
</template>

<style scoped>
.experience-section {
  width: 100%;
  max-width: 1800px; /* Increased max-width to fill more horizontal space */
  margin: 0 auto;
  display: block;
  min-height: auto;
  padding: 0 3rem; /* Add horizontal padding for edge-to-edge look */
}

.experience-list {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
  gap: 2.5rem;
  justify-items: stretch;
  align-items: stretch;
  width: 100%;
  max-width: 100%; /* Allow grid to use full section width */
  margin-left: auto;
  margin-right: auto;
}

/* Mobile responsive improvements */
@media (max-width: 1024px) {
  .experience-section {
    padding: 0 2rem;
  }

  .experience-list {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row on tablets */
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .experience-section {
    padding: 0 0.75rem; /* Minimal padding for mobile */
  }

  .experience-list {
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  /* Mobile-optimized experience cards */
  .experience-list :deep(.experience-item) {
    padding: 1.25rem;
    border-radius: 12px;
    min-height: auto;
  }

  .experience-list :deep(.experience-header) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 1rem;
  }

  .experience-list :deep(.experience-header h4) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .experience-list :deep(.experience-period) {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
    white-space: normal;
  }

  .experience-list :deep(.experience-company) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .experience-list :deep(.experience-description) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: left;
  }

  .experience-list :deep(.experience-achievements) {
    text-align: left;
  }

  .experience-list :deep(.experience-achievements li) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
  }

  /* Touch-friendly interactions */
  .experience-list :deep(.experience-item) {
    -webkit-tap-highlight-color: rgba(139, 92, 246, 0.2);
    touch-action: manipulation;
  }
}

@media (max-width: 480px) {
  .experience-section {
    padding: 0 0.5rem;
  }

  .experience-list {
    gap: 1.25rem;
  }

  .experience-list :deep(.experience-item) {
    padding: 1rem;
  }

  .experience-list :deep(.experience-header h4) {
    font-size: 1rem;
  }

  .experience-list :deep(.experience-period) {
    font-size: 0.8rem;
  }

  .experience-list :deep(.experience-description) {
    font-size: 0.9rem;
  }

  .experience-list :deep(.experience-achievements li) {
    font-size: 0.85rem;
  }
}

/* Landscape mode optimizations for mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .experience-section {
    padding: 0 1rem;
  }

  .experience-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .experience-list :deep(.experience-item) {
    padding: 1rem;
  }
}

/* Performance optimizations for mobile */
@media (max-width: 768px) {
  .experience-list :deep(.experience-item) {
    /* Reduce complex effects on mobile */
    backdrop-filter: blur(8px);
    transition: all 0.2s ease;
  }

  /* Disable hover effects on touch devices */
  @media (hover: none) and (pointer: coarse) {
    .experience-list :deep(.experience-item:hover) {
      transform: none;
    }
  }
}
</style>
