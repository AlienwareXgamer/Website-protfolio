<script setup>
import ContentSectionBase from '../shared/ContentSectionBase.vue'
import AboutDescription from '../about/AboutDescription.vue'
import ContactInfo from '../about/ContactInfo.vue'

// Define the data for this section
const aboutDescription = "A motivated, fresh IT graduate with skills in programming, web development, and hardware maintenance. Experienced in solving complex problems, adapting to new technologies, and working both independently and in teams. Dedicated to contributing to real-world IT projects and enhancing my skills through on-the-job training."

const contactInfo = {
  Location: "Davao Del Sur, Davao City, Roxas Ave.",
  Phone: "+639762404193",
  Email: {
    text: "francisallen148@gmail.com",
    link: "mailto:francisallen148@gmail.com"
  },
  LinkedIn: {
    text: "www.linkedin.com/in/francis-allen-prado",
    link: "https://www.linkedin.com/in/francis-allen-prado",
    external: true
  }
}
</script>

<template>
  <ContentSectionBase>
    <section id="about">
      <h3>About</h3>
      <AboutDescription :description="aboutDescription" />
      <ContactInfo :contactInfo="contactInfo" />
    </section>
  </ContentSectionBase>
</template>

<style scoped>
/* No additional styles needed - handled by child components */
</style>