<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";
import AboutDescription from "../../features/about/AboutDescription.vue";

// Define the data for this section
const aboutDescription =
  "I'm a dedicated <span class='highlight'>Information Technology graduate</span> from Ateneo de Davao University with a passion for building innovative digital solutions. My expertise spans <span class='highlight-tech'>full-stack web development, data analysis, and system administration</span>, with hands-on experience in modern technologies like Vue.js, Node.js, and MySQL.\n\nDuring my internship at <span class='highlight-company'>Globe Telecom</span>, I honed my data analysis skills while contributing to real-world corporate projects. I'm actively involved in the tech community through volunteering with <span class='highlight-community'>Google Developer Groups (GDG) and UI/UX Davao</span>, where I help organize events and mentor fellow developers.\n\nI thrive on solving complex problems, learning emerging technologies, and creating impactful applications that make a difference. Whether it's developing responsive web applications, analyzing data patterns, or troubleshooting network infrastructure, I bring <span class='highlight'>enthusiasm and technical expertise</span> to every project.";
</script>

<template>
  <ContentSectionBase>
    <section id="about">
      <h3>About</h3>
      <AboutDescription :description="aboutDescription" />
      <!-- Removed Call and Location buttons from About section -->
    </section>
  </ContentSectionBase>
</template>

<style scoped>
.about-contact-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}
.contact-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 12px;
  color: #fff;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.08);
}
.contact-btn:hover {
  background: rgba(139, 92, 246, 0.22);
  color: #fff;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.15);
  transform: translateY(-2px);
}
.icon {
  width: 22px;
  height: 22px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
}
.email-icon {
  background-image: url("/src/assets/icons/email.svg");
}
.linkedin-icon {
  background-image: url("/src/assets/icons/linkedin.svg");
}
.phone-icon {
  background-image: url("/src/assets/icons/phone.svg");
}
.github-icon {
  background-image: url("/src/assets/icons/github.svg");
}
</style>
