<script setup>
import Icon from "../../components/ui/Icon.vue";

defineProps({
  project: {
    type: Object,
    required: true,
    validator: (project) => {
      return (
        project &&
        typeof project.title === "string" &&
        typeof project.description === "string" &&
        Array.isArray(project.techStack) &&
        Array.isArray(project.features)
      );
    },
  },
  index: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="project-card" :style="{ animationDelay: (0.2 + index * 0.2) + 's' }">
    <div class="project-header">
      <h4>{{ project.title }}</h4>
      <div class="project-links" v-if="project.links && project.links.length">
        <template v-for="link in project.links" :key="link.type">
          <a
            v-if="link.url"
            :href="link.url"
            target="_blank"
            :class="`project-link ${link.type}`"
            :title="link.title"
          >
            <Icon :name="link.type" size="16" />
          </a>
          <span
            v-else
            :class="`project-link ${link.type} disabled`"
            :title="link.title + ' (no external link provided)'"
            aria-disabled="true"
          >
            <Icon :name="link.type" size="16" />
          </span>
        </template>
      </div>
    </div>

    <p class="project-description">{{ project.description }}</p>

    <div class="project-tech-stack" v-if="project.techStack">
      <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
        {{ tech }}
      </span>
    </div>

    <div class="project-features" v-if="project.features">
      <h5>Key Features:</h5>
      <ul>
        <li v-for="feature in project.features" :key="feature">
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  margin-bottom: 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  padding-top: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 2s ease-out forwards;
}

.project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent);
  opacity: 0;
  transition: all 0.4s ease;
  pointer-events: none;
}

.project-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    0 8px 25px rgba(139, 92, 246, 0.15),
    0 0 15px rgba(139, 92, 246, 0.1),
    0 0 0 1px rgba(139, 92, 246, 0.1);
  transform-origin: center;
}

.project-card:hover::before {
  opacity: 1;
}

.project-card:hover .project-header,
.project-card:hover .project-description,
.project-card:hover .project-tech-stack,
.project-card:hover .project-features {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card.disabled { cursor: not-allowed; }
.project-link.disabled { opacity: 0.5; pointer-events: none; }

.project-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem; /* Reduced space below header */
}

.project-header h4 {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 0.5rem 0; /* 2 spaces below title */
  font-size: clamp(1.3rem, 2vw + 1.1rem, 2.2rem);
  font-weight: 700;
  color: white;
  line-height: 1.3;
  text-align: center;
}

.project-links {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.4);
  color: white;
  transform: scale(1.1);
}

.project-link.github:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.project-link.demo:hover {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.4);
}

.project-description {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.08rem;
  line-height: 1.7;
  margin-bottom: 0.5rem; /* 2 spaces below description */
  text-align: left;
  padding-bottom: 0.5rem;
}

.project-tech-stack {
  position: static;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem 1.2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem; /* Space below tags, above title */
  width: 100%;
  max-width: 95%;
  z-index: 2;
}

.tech-tag {
  min-width: 80px;
  max-width: 220px;
  width: auto;
  text-align: center;
  margin-bottom: 0.7rem;
  border-radius: 16px;
  background: rgba(139, 92, 246, 0.08); /* Less transparent */
  color: #8b5cf6; /* Purple text */
  font-weight: 600;
  font-size: clamp(0.85rem, 2vw, 1.05rem);
  padding: 0.4rem 0.9rem;
  border: 1px solid rgba(139, 92, 246, 0.25);
  box-shadow: none;
  position: relative;
}

.tech-tag:hover {
  background: rgba(139, 92, 246, 0.18);
  color: #fff;
  box-shadow: 0 0 8px 2px rgba(139, 92, 246, 0.18);
  z-index: 1;
}

.project-features {
  margin-top: 0.2rem; /* Minimal space above features */
  padding-top: 0.2rem;
  text-align: left;
}

.project-features h5 {
  font-size: 1.13rem;
  font-weight: 600;
  color: #8b5cf6;
  margin-bottom: 0.5rem; /* Minimal space below features title */
}

.project-features ul {
  margin: 0;
  padding-left: 1.2rem;
  list-style: none;
}

.project-features li {
  position: relative;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin-bottom: 0.2rem; /* Minimal space between feature items */
  font-size: 1rem;
}

.project-features li::before {
  content: "→";
  position: absolute;
  left: -1.2rem;
  color: #8b5cf6;
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-card {
    padding: 1.5rem;
  }

  .project-header {
    flex-direction: column;
    gap: 1rem;
  }

  .project-header h4 {
    margin-right: 0;
    font-size: 1.3rem;
  }

  .project-links {
    align-self: flex-start;
  }

  .project-link {
    width: 36px;
    height: 36px;
  }
}

@media (min-width: 1200px) {
  .project-card {
    padding: 2.5rem;
  }

  .project-header h4 {
    font-size: 1.6rem;
  }

  .project-description {
    font-size: 1.1rem;
  }
}
</style>
