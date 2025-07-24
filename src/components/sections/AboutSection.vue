<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";
import AboutDescription from "../../features/about/AboutDescription.vue";
import ContactInfo from "../../features/about/ContactInfo.vue";

// Define the data for this section
const aboutDescription =
  "I'm a dedicated <span class='highlight'>Information Technology graduate</span> from Ateneo de Davao University with a passion for building innovative digital solutions. My expertise spans <span class='highlight-tech'>full-stack web development, data analysis, and system administration</span>, with hands-on experience in modern technologies like Vue.js, Node.js, and MySQL.\n\nDuring my internship at <span class='highlight-company'>Globe Telecom</span>, I honed my data analysis skills while contributing to real-world corporate projects. I'm actively involved in the tech community through volunteering with <span class='highlight-community'>Google Developer Groups (GDG) and UI/UX Davao</span>, where I help organize events and mentor fellow developers.\n\nI thrive on solving complex problems, learning emerging technologies, and creating impactful applications that make a difference. Whether it's developing responsive web applications, analyzing data patterns, or troubleshooting network infrastructure, I bring <span class='highlight'>enthusiasm and technical expertise</span> to every project.";

const contactInfo = {
  Location: "Davao Del Sur, Davao City, Roxas Ave.",
  Phone: "+639762404193",
  Email: {
    text: "francisallen148@gmail.com",
    link: "mailto:francisallen148@gmail.com",
  },
  LinkedIn: {
    text: "www.linkedin.com/in/francis-allen-prado",
    link: "https://www.linkedin.com/in/francis-allen-prado",
    external: true,
  },
};
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
