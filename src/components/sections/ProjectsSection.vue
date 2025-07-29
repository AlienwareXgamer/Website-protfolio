<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";
import ProjectCard from "../../features/projects/ProjectCard.vue";

const projects = [
  {
    title:
      "Fullstack Granville 2 Subdivision | Ateneo Thesis Project Developed (Web-based Homeowner and Guest Tracking System)",
    description:
      "A comprehensive web-based system for residential subdivision security using RFID and QR Code technology for homeowner and guest tracking.",
    techStack: [
      "Web Development",
      "RFID Technology",
      "QR Code",
      "Database Management",
    ],
    features: [
      "RFID and QR Code integration for access control",
      "Real-time tracking and monitoring system",
      "Homeowner and guest management interface",
      "Security access logs and reporting",
      "Residential subdivision security enhancement",
    ],
    links: [
      {
        type: "project",
        title: "Thesis Project - Security System",
      },
    ],
  },
  {
    title:
      "Dormitory Management System | Ateneo System Integration Development Project",
    description:
      "A web-based dormitory management system for tenants with comprehensive billing, maintenance request, and tenant data management capabilities.",
    techStack: ["Web Development", "Database Management", "System Integration"],
    features: [
      "Tenant case of access management for utilities (water, electricity, wifi)",
      "Maintenance request and repair logging system",
      "Tenant data management and tracking",
      "Billing and payment tracking system",
      "Past and present tenant data logging",
    ],
    links: [
      {
        type: "project",
        title: "System Integration Project",
      },
    ],
  },
  {
    title: "LMS (Lessor Management System)",
    description:
      "Contributed to the development of an updated lessor management system prototype during internship at Globe Telecom Inc.",
    techStack: ["Data Analysis", "System Development", "Database Management"],
    features: [
      "Lessor data management for Mindanao and Visayas regions",
      "Prototype system development and testing",
      "Data analysis and reporting capabilities",
      "System integration with existing infrastructure",
      "Performance optimization and maintenance",
    ],
    links: [
      {
        type: "internship",
        title: "Globe Telecom Internship Project",
      },
    ],
  },
];
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
    padding: 0 1rem; /* Minimal padding for mobile */
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
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
