<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";
import SkillsCategory from "../skills/SkillsCategory.vue";

const skillsCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", proficiency: 85 },
      { name: "TypeScript", proficiency: 75 },
      { name: "MySQL", proficiency: 80 },
    ],
  },
  {
    name: "Frameworks & Runtimes",
    skills: [
      { name: "Vue.js", proficiency: 85 },
      { name: "Next.js", proficiency: 75 },
      { name: "Node.js", proficiency: 80 },
      { name: "Laravel", proficiency: 70 },
    ],
  },
  {
    name: "Databases & ORMs",
    skills: [
      { name: "Firebase", proficiency: 80 },
      { name: "Firestore", proficiency: 78 },
      { name: "Prisma", proficiency: 75 },
    ],
  },
  {
    name: "Developer Tools",
    skills: [
      { name: "Git", proficiency: 85 },
      { name: "GitHub", proficiency: 85 },
      { name: "npm", proficiency: 80 },
    ],
  },
  {
    name: "Software & Design",
    skills: [
      { name: "Microsoft Office", level: "Proficient with Pivot Tables" },
      { name: "Canva", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
      { name: "Arduino IDE", level: "Development Environment" },
    ],
  },
  {
    name: "Hardware & Networking",
    skills: [
      {
        name: "Hardware Troubleshooting",
        level: "Skilled in diagnosing and repairing devices",
      },
      { name: "System Updates & Driver Installation", level: "Experienced" },
      { name: "Network Troubleshooting", level: "Wi-Fi configurations" },
      { name: "Cisco Networking Basics", level: "Certified" },
    ],
  },
  {
    name: "Additional Skills",
    skills: [
      {
        name: "Photography",
        level: "Professional - Creative and artistic ability",
      },
      {
        name: "Technical Proficiency",
        level: "Photo equipment operation (cameras, lenses, lighting)",
      },
      { name: "Adobe Photoshop", level: "Photo editing and composition" },
      { name: "English Communication", level: "Basic communication skills" },
    ],
  },
];

// Group skills for better layout
const topRowSkills = skillsCategories.slice(0, 3);
const middleRowSkills = skillsCategories.slice(3, 4);
const bottomRowSkills = skillsCategories.slice(4, 7);
</script>

<template>
  <ContentSectionBase>
    <section id="skills" class="skills-section">
      <h3>Technical Skills</h3>
      <div class="skills-container">
        <!-- Top Row: Programming, Frameworks, Databases -->
        <div class="skills-row top-row">
          <SkillsCategory
            v-for="category in topRowSkills"
            :key="category.name"
            :category="category"
          />
        </div>

        <!-- Middle Row: Developer Tools (centered) -->
        <div class="skills-row middle-row">
          <SkillsCategory
            v-for="category in middleRowSkills"
            :key="category.name"
            :category="category"
          />
        </div>

        <!-- Bottom Row: Software, Hardware, Additional -->
        <div class="skills-row bottom-row">
          <SkillsCategory
            v-for="category in bottomRowSkills"
            :key="category.name"
            :category="category"
          />
        </div>
      </div>
    </section>
  </ContentSectionBase>
</template>

<style scoped>
.skills-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2rem; /* Added edge-to-edge padding */
}

.skills-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 2.5rem;
  max-width: none; /* Remove max-width for full screen usage */
}

.skills-row {
  display: grid;
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  justify-items: center;
  align-items: stretch;
}

/* Top and Bottom rows: 3 columns */
.top-row,
.bottom-row {
  grid-template-columns: repeat(3, 1fr);
}

/* Middle row: 1 column centered */
.middle-row {
  grid-template-columns: 1fr;
  max-width: 400px;
}

/* Responsive layouts */
@media (min-width: 1400px) {
  .skills-section {
    padding: 0 6rem; /* More padding for very large screens */
  }

  .skills-row {
    gap: 2.5rem;
  }

  .top-row,
  .bottom-row {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .skills-section {
    padding: 0 4rem; /* Increased padding for large screens */
  }

  .skills-row {
    gap: 2.5rem;
  }

  .top-row,
  .bottom-row {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 900px) and (max-width: 1199px) {
  .skills-section {
    padding: 0 2rem; /* Standard padding */
  }

  .top-row,
  .bottom-row {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.8rem;
  }
}

@media (min-width: 768px) and (max-width: 899px) {
  .skills-section {
    padding: 0 1.5rem; /* Reduced padding for tablets */
  }

  .top-row,
  .bottom-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 767px) {
  .skills-section {
    padding: 0 1rem; /* Minimal padding for mobile */
  }

  .skills-container {
    gap: 2rem;
  }

  .top-row,
  .bottom-row,
  .middle-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .middle-row {
    max-width: 100%;
  }
}

/* Card sizing */
.skills-row :deep(.skills-category) {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

/* Skill card hover effect */
.skill-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px) scale(1.02);
  box-shadow:
    0 0 0 2px rgba(139, 92, 246, 0.2),
    0 8px 25px rgba(139, 92, 246, 0.3),
    0 0 15px rgba(139, 92, 246, 0.4);
  border-left-color: #7c3aed;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
