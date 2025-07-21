<script setup>
import ContentSectionBase from '../shared/ContentSectionBase.vue'
import ProjectCard from '../projects/ProjectCard.vue'

const projects = [
  {
    title: "Fullstack Granville 2 Subdivision | Ateneo Thesis Project Developed (Web-based Homeowner and Guest Tracking System)",
    description: "A comprehensive web-based system for residential subdivision security using RFID and QR Code technology for homeowner and guest tracking.",
    techStack: ["Web Development", "RFID Technology", "QR Code", "Database Management"],
    features: [
      "RFID and QR Code integration for access control",
      "Real-time tracking and monitoring system",
      "Homeowner and guest management interface",
      "Security access logs and reporting",
      "Residential subdivision security enhancement"
    ],
    links: [
      {
        type: "project",
        title: "Thesis Project - Security System"
      }
    ]
  },
  {
    title: "Dormitory Management System | Ateneo System Integration Development Project",
    description: "A web-based dormitory management system for tenants with comprehensive billing, maintenance request, and tenant data management capabilities.",
    techStack: ["Web Development", "Database Management", "System Integration"],
    features: [
      "Tenant case of access management for utilities (water, electricity, wifi)",
      "Maintenance request and repair logging system",
      "Tenant data management and tracking",
      "Billing and payment tracking system",
      "Past and present tenant data logging"
    ],
    links: [
      {
        type: "project",
        title: "System Integration Project"
      }
    ]
  },
  {
    title: "LMS (Lessor Management System)",
    description: "Contributed to the development of an updated lessor management system prototype during internship at Globe Telecom Inc.",
    techStack: ["Data Analysis", "System Development", "Database Management"],
    features: [
      "Lessor data management for Mindanao and Visayas regions",
      "Prototype system development and testing",
      "Data analysis and reporting capabilities",
      "System integration with existing infrastructure",
      "Performance optimization and maintenance"
    ],
    links: [
      {
        type: "internship",
        title: "Globe Telecom Internship Project"
      }
    ]
  }
]
</script>

<template>
  <ContentSectionBase>
    <section id="projects" class="projects-section">
      <h3>Projects</h3>
      <div class="projects-grid">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.title"
          :project="project"
        />
      </div>
    </section>
  </ContentSectionBase>
</template>

<style scoped>
.projects-section {
  width: 100%;
  max-width: 1400px; /* Increased for desktop */
  margin: 0 auto;
  padding: 0 2rem; /* Add padding for better desktop layout */
}

.projects-grid {
  margin-top: 2rem;
  display: grid;
  gap: 2.5rem; /* Increased gap for desktop */
}

/* Desktop-optimized grid layouts */
@media (min-width: 1400px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 3rem;
  }
}

@media (min-width: 1024px) and (max-width: 1399px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 2.5rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>