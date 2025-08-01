<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";
import EducationItem from "../../features/education/EducationItem.vue";

const educationData = [
  {
    degree: "Bachelor of Science in Information Technology",
    year: "2020 - 2025",
    institution: "Ateneo de Davao University",
    location: "Davao City, Philippines",
    description:
      "Relevant coursework: Data Structures and algorithms, Database Management Systems, Web Development, Network Security, System Analysis and Design, Photography and video editing.",
    achievements: [
      "TVL Academic projects: Chat Supervision Gate Security system",
      "Focused on software development and system analysis",
      "Completed comprehensive capstone project",
    ],
  },
  {
    degree: "Senior High School - TVL Computer System Servicing",
    year: "2018 - 2019",
    institution: "Notre Dame College of Midsayap",
    location: "Midsayap, Philippines",
    description:
      "Technical-Vocational-Livelihood track specializing in Computer Hardware Servicing, Basic Networking, Software Installation and Maintenance.",
    achievements: [
      "Specialized in computer hardware servicing",
      "Basic networking and software installation training",
      "Maintenance and troubleshooting certification",
    ],
  },
];
</script>

<template>
  <ContentSectionBase>
    <section id="education">
      <h3>Education</h3>
      <div class="education-list">
        <EducationItem
          v-for="education in educationData"
          :key="education.degree + education.year"
          :education="education"
        />
      </div>
    </section>
  </ContentSectionBase>
</template>

<style scoped>
.education-list {
  margin-top: 2rem;
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
}

/* Mobile responsive improvements */
@media (max-width: 1024px) {
  .education-list {
    grid-template-columns: 1fr; /* Single column on tablets and below */
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .education-list {
    margin-top: 1.5rem;
    gap: 1.5rem;
  }

  /* Mobile-optimized education cards */
  .education-list :deep(.education-item) {
    padding: 1.25rem;
    border-radius: 12px;
    min-height: auto;
  }

  .education-list :deep(.education-header) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .education-list :deep(.education-header h4) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .education-list :deep(.education-year) {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
    white-space: normal;
  }

  .education-list :deep(.education-institution) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  .education-list :deep(.education-location) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .education-list :deep(.education-description) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .education-list :deep(.education-achievements) {
    text-align: left;
  }

  .education-list :deep(.education-achievements li) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
  }

  /* Touch-friendly interactions */
  .education-list :deep(.education-item) {
    -webkit-tap-highlight-color: rgba(34, 197, 94, 0.2);
    touch-action: manipulation;
  }
}

@media (max-width: 480px) {
  .education-list {
    gap: 1.25rem;
  }

  .education-list :deep(.education-item) {
    padding: 1rem;
  }

  .education-list :deep(.education-header h4) {
    font-size: 1rem;
  }

  .education-list :deep(.education-year) {
    font-size: 0.8rem;
  }

  .education-list :deep(.education-institution) {
    font-size: 0.9rem;
  }

  .education-list :deep(.education-location) {
    font-size: 0.8rem;
  }

  .education-list :deep(.education-description) {
    font-size: 0.9rem;
  }

  .education-list :deep(.education-achievements li) {
    font-size: 0.85rem;
  }
}

/* Performance optimizations for mobile */
@media (max-width: 768px) {
  .education-list :deep(.education-item) {
    /* Reduce complex effects on mobile */
    backdrop-filter: blur(8px);
    transition: all 0.2s ease;
  }

  /* Disable hover effects on touch devices */
  @media (hover: none) and (pointer: coarse) {
    .education-list :deep(.education-item:hover) {
      transform: none;
    }
  }
}
</style>
