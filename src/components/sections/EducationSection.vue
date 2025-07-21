<script setup>
import ContentSectionBase from '../shared/ContentSectionBase.vue'
import EducationItem from '../education/EducationItem.vue'

const educationData = [
  {
    degree: "Bachelor of Science in Information Technology",
    year: "2020 - 2025",
    institution: "Ateneo de Davao University",
    location: "Davao City, Philippines",
    description: "Relevant coursework: Data Structures and algorithms, Database Management Systems, Web Development, Network Security, System Analysis and Design, Photography and video editing.",
    achievements: [
      "TVL Academic projects: Chat Supervision Gate Security system",
      "Focused on software development and system analysis",
      "Completed comprehensive capstone project"
    ]
  },
  {
    degree: "Senior High School - TVL Computer System Servicing",
    year: "2018 - 2019",
    institution: "Notre Dame College of Midsayap",
    location: "Midsayap, Philippines",
    description: "Technical-Vocational-Livelihood track specializing in Computer Hardware Servicing, Basic Networking, Software Installation and Maintenance.",
    achievements: [
      "Specialized in computer hardware servicing",
      "Basic networking and software installation training",
      "Maintenance and troubleshooting certification"
    ]
  }
]
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
}
</style>