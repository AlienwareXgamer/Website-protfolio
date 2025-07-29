<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";
import AboutDescription from "../../features/about/AboutDescription.vue";

// Define the data for this section
const aboutDescription =
  "I'm an entry-level IT professional with foundational experience in <span class='highlight-tech'>data analysis</span> and <span class='highlight-tech'>full-stack web development</span>.\n\nMy hands-on project experience includes managing regional data, prototyping a management system, and developing web applications such as an <span class='highlight'>RFID/QR guest tracker</span> and a <span class='highlight'>dormitory management system</span>.\n\nI am proficient in <span class='highlight-tech'>JavaScript, TypeScript, Vue.js, and Nest.js</span>, with skills in <span class='highlight-tech'>hardware and network troubleshooting</span>. As an active volunteer with local groups like <span class='highlight-community'>UI UX Davao</span> and <span class='highlight-community'>Google Developers Group</span>, I am eager to apply my skills and grow in a professional environment.";
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
