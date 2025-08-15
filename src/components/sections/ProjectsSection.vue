<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";
import ProjectCard from "../../features/projects/ProjectCard.vue";
import { projects } from "../../data/projects.js";
</script>

<template>
  <ContentSectionBase>
    <section id="projects" class="projects-section">
      <h3>Projects</h3>
      <div class="projects-grid">
        <ProjectCard
          v-for="(project, idx) in projects"
          :key="project.title"
          :project="project"
          :index="idx"
        />
      </div>
    </section>
  </ContentSectionBase>
</template>

<style scoped>
.projects-section {
  width: 100%;
  max-width: none; /* Remove max-width for full screen usage */
  margin: 0 auto;
  padding: 0 2rem; /* Edge-to-edge padding */
}

.projects-grid {
  margin-top: 2.5rem;
  display: grid;
  gap: 3.5rem; /* Increased gap for more separation */
  grid-template-columns: repeat(
    auto-fit,
    minmax(620px, 1fr)
  ); /* Match card size */
  justify-items: center;
  align-items: stretch;
}

/* Desktop-optimized grid layouts */
@media (min-width: 1400px) {
  .projects-section {
    padding: 0 6rem; /* More padding for very large screens */
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 3rem;
  }
}

@media (min-width: 1024px) and (max-width: 1399px) {
  .projects-section {
    padding: 0 4rem; /* Increased padding for large screens */
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 2.5rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .projects-section {
    padding: 0 2rem; /* Standard padding for tablets */
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 767px) {
  .projects-section {
    padding: 0 0.5rem; /* Reduced padding for more content space */
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.125rem; /* Tighter gap for mobile */
    margin-top: 1.5rem;
  }

  /* Enhanced mobile-optimized project cards */
  .projects-grid :deep(.project-card) {
    max-width: 100%;
    margin: 0;
    padding: 1.25rem; /* Optimized mobile padding */
    border-radius: 14px;
    min-height: auto;
  }

  .projects-grid :deep(.project-header) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .projects-grid :deep(.project-title) {
    font-size: 1.25rem; /* Readable but compact */
    line-height: 1.2;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  .projects-grid :deep(.project-description) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: left;
  }

  .projects-grid :deep(.project-tech-stack) {
    margin-bottom: 1.25rem;
    padding: 1rem 0;
  }

  .projects-grid :deep(.tech-tags) {
    gap: 0.5rem;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .projects-grid :deep(.tech-tag) {
    font-size: 0.8rem;
    padding: 0.4rem 0.7rem;
    min-height: 32px;
    border-radius: 6px;
    min-width: 80px;
    text-align: center;
  }

  .projects-grid :deep(.project-features) {
    margin-bottom: 1.25rem;
  }

  .projects-grid :deep(.project-features h5) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  .projects-grid :deep(.project-features li) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.375rem;
  }

  .projects-grid :deep(.project-links) {
    gap: 0.75rem;
    justify-content: flex-start;
  }

  .projects-grid :deep(.project-link) {
    width: 40px;
    height: 40px;
    min-width: 44px; /* Touch-friendly */
    min-height: 44px;
    border-radius: 10px;
  }

  /* Touch-friendly interactions */
  .projects-grid :deep(.project-card),
  .projects-grid :deep(.project-link),
  .projects-grid :deep(.tech-tag) {
    -webkit-tap-highlight-color: rgba(139, 92, 246, 0.2);
    touch-action: manipulation;
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: 0 0.375rem; /* Minimal padding for small screens */
  }

  .projects-grid {
    gap: 1rem;
  }

  .projects-grid :deep(.project-card) {
    padding: 1rem;
  }

  .projects-grid :deep(.project-title) {
    font-size: 1.1rem;
  }

  .projects-grid :deep(.project-description) {
    font-size: 0.9rem;
  }

  .projects-grid :deep(.tech-tag) {
    font-size: 0.75rem;
    padding: 0.375rem 0.6rem;
    min-width: 70px;
  }

  .projects-grid :deep(.project-features h5) {
    font-size: 0.95rem;
  }

  .projects-grid :deep(.project-features li) {
    font-size: 0.85rem;
  }

  .projects-grid :deep(.project-link) {
    width: 36px;
    height: 36px;
    min-width: 44px;
    min-height: 44px;
  }
}

/* Ultra-small screens (narrow phones) */
@media (max-width: 320px) {
  .projects-section {
    padding: 0 0.25rem;
  }

  .projects-grid :deep(.project-card) {
    padding: 0.875rem;
  }

  .projects-grid :deep(.project-title) {
    font-size: 1rem;
  }

  .projects-grid :deep(.project-description) {
    font-size: 0.85rem;
  }

  .projects-grid :deep(.tech-tag) {
    font-size: 0.7rem;
    padding: 0.35rem 0.5rem;
    min-width: 60px;
  }
}

/* Enhanced landscape mode optimizations for mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .projects-section {
    padding: 0 0.75rem;
  }

  .projects-grid :deep(.project-card) {
    padding: 1rem;
  }

  .projects-grid :deep(.project-header) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .projects-grid :deep(.project-title) {
    font-size: 1.15rem;
  }
}

.project-card {
  max-width: 620px;
  margin: 0 auto;
  margin-bottom: 3.5rem; /* Add more space between cards */
  padding: 3rem;
  border-radius: 20px;
  background: rgba(30, 30, 40, 0.88);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    box-shadow 0.3s,
    transform 0.3s;
  height: 100%;
}

.project-header {
  margin-bottom: 1.2rem; /* Reduced space below header before description */
}

.project-title {
  font-size: clamp(
    1.3rem,
    2vw + 1.1rem,
    2.2rem
  ); /* Dynamically adjusts based on screen size */
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.7rem; /* Reduced space below title for better grouping */
  letter-spacing: 0.01em;
  text-align: left;
}

.project-description {
  font-size: 1.1rem;
  color: #d1d5db;
  font-weight: 400;
  margin-bottom: 2rem;
  text-align: left;
  line-height: 1.7;
}

.project-tech-stack {
  margin-bottom: 2rem;
  padding: 1.2rem 0;
  border-top: 1px solid rgba(139, 92, 246, 0.12);
  border-bottom: 1px solid rgba(139, 92, 246, 0.12);
  background: rgba(139, 92, 246, 0.06);
}

.project-tech-tag {
  min-width: 120px;
  text-align: center;
  margin-bottom: 1.2rem;
  border-radius: 12px;
  background: rgba(139, 92, 246, 0.12);
  color: #8b5cf6;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 1.1rem;
  border: 1px solid rgba(139, 92, 246, 0.25);
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.08);
  transition:
    background 0.2s,
    color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 600px) {
  .project-tech-tag {
    min-width: 80px;
    font-size: 0.95rem;
    padding: 0.4rem 0.7rem;
  }
}

.project-features {
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: left;
}

.project-features h5 {
  font-size: 1.15rem;
  font-weight: 600;
  color: #8b5cf6;
  margin-bottom: 1rem;
}

.project-features ul {
  padding-left: 1.5rem;
  margin-bottom: 0;
}

.project-features li {
  font-size: 1rem;
  color: #d1d5db;
  margin-bottom: 0.7rem;
  line-height: 1.6;
}

/* Hover effect for project cards */
.project-card:hover {
  box-shadow:
    0 0 0 2px rgba(139, 92, 246, 0.2),
    /* Inner glow */ 0 12px 40px rgba(139, 92, 246, 0.3),
    /* Outer glow */ 0 0 20px rgba(139, 92, 246, 0.4); /* Gradient-like glow */
  transform: translateY(-6px) scale(1.03); /* Slightly increased scaling */
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smooth transition */
}
</style>
