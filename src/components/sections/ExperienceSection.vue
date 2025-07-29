<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";
import ExperienceItem from "../../features/experience/ExperienceItem.vue";

const experiences = [
  {
    title: "Data Analyst - Lessor Management System",
    period: "January 2025 - May 2025",
    company: "Globe Telecom Inc. (Davao) Internship",
    description:
      "Managed lessor data for assigned locations, primarily in the Mindanao and Visayas regions.",
    achievements: [
      "Contributed to the making of the prototype updated lessor management system",
      "Performed data analysis and reporting for lessor management",
      "Collaborated with the development team on system improvements",
    ],
  },
  {
    title: "Computer Shop Assistant",
    period: "2018 August - 2019 March",
    company: "KJA Computer Accessories (Internship)",
    description:
      "Provided technical support and maintained computer systems and accessories.",
    achievements: [
      "Provided technical support to users for hardware and software issues",
      "Ensured optimal performance of systems through regular maintenance and updates",
      "Assisted customers with computer-related inquiries and troubleshooting",
    ],
  },
  {
    title: "CSS Support Assistant",
    period: "2016 August - 2017 July",
    company: "KJA Computer Accessories (Internship)",
    description:
      "Supported the development team in coding and testing software applications.",
    achievements: [
      "Supported the development team in coding and testing software applications",
      "Conducted network setup and maintenance",
      "Provided technical assistance to users and resolved system issues",
    ],
  },
];
</script>

<template>
  <ContentSectionBase>
    <section id="experience" class="experience-section">
      <h3>Experience</h3>
      <div class="experience-list">
        <ExperienceItem
          v-for="experience in experiences"
          :key="experience.title + experience.period"
          :experience="experience"
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

.experience-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1.5px solid rgba(139, 92, 246, 0.22); /* Static border for card */
  border-left: 6px solid #8b5cf6; /* Purple accent for experience */
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.08);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
}

.experience-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px) scale(1.02); /* Slight scaling effect */
  box-shadow:
    0 0 0 2px rgba(139, 92, 246, 0.2),
    /* Inner glow */ 0 8px 25px rgba(139, 92, 246, 0.3),
    /* Outer glow */ 0 0 15px rgba(139, 92, 246, 0.4); /* Gradient-like glow */
  border-left-color: #7c3aed; /* Slightly brighter accent */
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smooth transition */
}
</style>
