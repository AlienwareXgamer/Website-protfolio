<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";
import ExperienceItem from "../../features/experience/ExperienceItem.vue";

const experiences = [
  {
    title: "Professional Photographer",
    period: "September 2017 - Present",
    company: "Freelance",
    description:
      "Versed and skilled in multiple genres of photography, including portraits, event, and product photography.",
    achievements: [
      "Managed client relationships, ensuring satisfaction and repeat business",
      "Edited and retouched photos using Adobe Photoshop and Lightroom",
      "Conducted photo shoots in various settings, demonstrating adaptability and creativity",
    ],
  },
  {
    title: "Data Analyst - Lessor Management System",
    period: "January 2025 - May 2025",
    company: "Globe Telecom Inc. (Davao) Internship",
    description:
      "Managed lessor data for assigned locations, primarily in the Mindanao and Visayas regions.",
    achievements: [
      "Contributed to the making of the prototype updated lessor management system",
      "Assembled, troubleshooted, and maintained computers",
      "Provided technical assistance and resolved hardware and software issues",
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
  max-width: 1200px;
  margin: 0 auto;
  display: block; /* Ensure the section displays */
  min-height: auto; /* Allow natural height */
}

.experience-list {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}
</style>
