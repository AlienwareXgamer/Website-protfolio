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

.education-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px) scale(1.02);
  box-shadow:
    0 0 0 2px rgba(59, 130, 246, 0.2),
    0 8px 25px rgba(59, 130, 246, 0.3),
    0 0 15px rgba(59, 130, 246, 0.4);
  border-left-color: #2563eb;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.education-item:nth-child(2):hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px) scale(1.02);
  box-shadow:
    0 0 0 2px rgba(34, 197, 94, 0.2),
    0 8px 25px rgba(34, 197, 94, 0.3),
    0 0 15px rgba(34, 197, 94, 0.4);
  border-left-color: #22c55e;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
