<script setup>
import ContentSectionBase from "../shared/ContentSectionBase.vue";

const leadershipData = [
  {
    title: "UACTLY Your Path to Being the Exact Fit at Work",
    organization: "UI UX Davao Organization Volunteer",
    period: "2024 - Present",
    description:
      "Volunteered for multiple events, including workshops and professional development sessions.",
    achievements: [
      "2025 May UXACTLY Your Path to Being the Exact Fit at Work",
      "2025 March UXD Women Who Design",
      "2025 February UXD Project Management",
      "2024 February Web Accessibility Workshop",
      "2024 August Level up your Prototypes in Figma",
    ],
  },
  {
    title: "Google Developers Davao Professional Photographer",
    organization: "Google Developers Davao Volunteer",
    period: "November 2023",
    description:
      "For dedicated volunteer service and instrumental role in the seamless execution of Google I/O Extended Demo.",
    achievements: [
      "Captured high-quality images for Google Developer events",
      "Provided sales support promptly for professional purposes",
      "Collaborated with event organizers to ensure all photography needs were met",
    ],
  },
  {
    title: "IT Week 2025 (SysDev Committee Member)",
    organization: "Ateneo de Davao University",
    period: "2025",
    description:
      "In recognition of invaluable contributions as SysDev Committee Member during IT Week 2025.",
    achievements: [
      "Contributed to system development initiatives during IT Week",
      "Collaborated with fellow committee members on technical projects",
    ],
  },
  {
    title: "DevFest Davao 2023",
    organization: "Google I/O Extended Davao 2024 | 2023",
    period: "2023",
    description:
      "For dedicated volunteer service and instrumental role in the seamless execution of Google I/O Extended Demo.",
    achievements: [
      "Provided volunteer service for Google DevFest Davao 2023",
      "Contributed significantly to the success of DevFest Davao 2023",
    ],
  },
  {
    title: "CS Alumni Connect Talk/Workshop Series",
    organization: "Ateneo Sui Generis Leadership Online Hub",
    period: "2021 - 2020",
    description:
      "For participation in the 'Dissecting the Full-Stack: Front-end Development' Talk/Workshop and active participation during the Ateneo Sui Generis Leadership Online Hub 2020.",
    achievements: [
      "Participated in Full-Stack development workshop series",
      "Active engagement in leadership development programs",
    ],
  },
];

const certifications = [
  {
    name: "Certified Cisco Networking Basics",
    issuer: "Cisco",
    year: "Certified",
    credentialId: "Cisco-NB-2024",
  },
  {
    name: "Technical Skills Development",
    issuer: "Various Organizations",
    year: "2020-2025",
    credentialId: "Multi-Cert",
  },
];
</script>

<template>
  <ContentSectionBase>
    <section id="leadership">
      <h3>Leadership & Certifications</h3>

      <div class="leadership-content">
        <div class="leadership-section">
          <h4>Leadership Experience</h4>
          <div class="leadership-list">
            <div
              v-for="item in leadershipData"
              :key="item.title"
              class="leadership-item"
            >
              <div class="leadership-header">
                <h5>{{ item.title }}</h5>
                <span class="leadership-period">{{ item.period }}</span>
              </div>
              <p class="leadership-organization">{{ item.organization }}</p>
              <p class="leadership-description">{{ item.description }}</p>
              <ul class="leadership-achievements">
                <li v-for="achievement in item.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="certifications-section">
          <h4>Certifications</h4>
          <div class="certifications-grid">
            <div
              v-for="cert in certifications"
              :key="cert.name"
              class="certification-card"
            >
              <h5>{{ cert.name }}</h5>
              <p class="cert-issuer">{{ cert.issuer }}</p>
              <div class="cert-details">
                <span class="cert-year">{{ cert.year }}</span>
                <span class="cert-id">ID: {{ cert.credentialId }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ContentSectionBase>
</template>

<style scoped>
.leadership-content {
  margin-top: 2rem;
  display: grid;
  gap: 3rem;
}

.leadership-section h4,
.certifications-section h4 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.3);
}

/* Leadership Items */
.leadership-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.leadership-item {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid #f59e0b;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 2s ease-out forwards;
}

.leadership-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.leadership-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    0 8px 25px rgba(245, 158, 11, 0.15),
    0 0 15px rgba(245, 158, 11, 0.1),
    0 0 0 1px rgba(245, 158, 11, 0.1);
  border-left-color: #d97706;
  transform-origin: center;
}

.leadership-item:hover::before {
  opacity: 1;
}

.leadership-item:hover .leadership-header,
.leadership-item:hover .leadership-organization,
.leadership-item:hover .leadership-description,
.leadership-item:hover .leadership-achievements {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.leadership-item:nth-child(1) { animation-delay: 0.1s; }
.leadership-item:nth-child(2) { animation-delay: 0.2s; }
.leadership-item:nth-child(3) { animation-delay: 0.3s; }
.leadership-item:nth-child(4) { animation-delay: 0.4s; }
.leadership-item:nth-child(5) { animation-delay: 0.5s; }

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

/* Certifications */
.certifications-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.certification-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid #8b5cf6;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 2s ease-out forwards;
}

.certification-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.certification-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    0 8px 25px rgba(139, 92, 246, 0.15),
    0 0 15px rgba(139, 92, 246, 0.1),
    0 0 0 1px rgba(139, 92, 246, 0.1);
  border-left-color: #7c3aed;
  transform-origin: center;
}

.certification-card:hover::before {
  opacity: 1;
}

.certification-card:hover h5,
.certification-card:hover .cert-issuer,
.certification-card:hover .cert-details {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.certification-card:nth-child(1) { animation-delay: 0.6s; }
.certification-card:nth-child(2) { animation-delay: 0.7s; }

/* Responsive */
@media (min-width: 1024px) {
  .leadership-content {
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
  }
}

/* Mobile responsive improvements */
@media (max-width: 1024px) {
  .leadership-content {
    grid-template-columns: 1fr; /* Single column on tablets and below */
    gap: 2.5rem;
  }

  .certifications-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .leadership-content {
    margin-top: 1.5rem;
    gap: 2rem;
  }

  .leadership-section h4,
  .certifications-section h4 {
    font-size: 1.4rem;
    margin-bottom: 1.25rem;
    text-align: center;
  }

  /* Mobile-optimized leadership items */
  .leadership-item {
    padding: 1.25rem;
    border-radius: 12px;
    margin-bottom: 1.25rem;
  }

  .leadership-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .leadership-header h5 {
    font-size: 1.1rem;
    line-height: 1.3;
  }

  .leadership-period {
    font-size: 0.85rem;
    white-space: normal;
  }

  .leadership-organization {
    font-size: 0.95rem;
    margin-bottom: 0.875rem;
  }

  .leadership-description {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .leadership-achievements li {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
  }

  /* Mobile-optimized certifications */
  .certifications-grid {
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 1.25rem;
  }

  .certification-card {
    padding: 1.25rem;
    border-radius: 12px;
  }

  .certification-card h5 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .cert-issuer {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }

  .cert-details {
    flex-direction: column;
    text-align: center;
    gap: 0.375rem;
  }

  .cert-year,
  .cert-id {
    font-size: 0.85rem;
  }

  /* Touch-friendly interactions */
  .leadership-item,
  .certification-card {
    -webkit-tap-highlight-color: rgba(139, 92, 246, 0.2);
    touch-action: manipulation;
  }
}

@media (max-width: 480px) {
  .leadership-content {
    gap: 1.5rem;
  }

  .leadership-section h4,
  .certifications-section h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .leadership-item {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .leadership-header h5 {
    font-size: 1rem;
  }

  .leadership-period {
    font-size: 0.8rem;
  }

  .leadership-organization {
    font-size: 0.9rem;
  }

  .leadership-description {
    font-size: 0.9rem;
  }

  .leadership-achievements li {
    font-size: 0.85rem;
  }

  .certification-card {
    padding: 1rem;
  }

  .certification-card h5 {
    font-size: 1rem;
  }

  .cert-issuer {
    font-size: 0.9rem;
  }

  .cert-year,
  .cert-id {
    font-size: 0.8rem;
  }
}

/* Performance optimizations for mobile */
@media (max-width: 768px) {
  .leadership-item,
  .certification-card {
    /* Reduce complex effects on mobile */
    backdrop-filter: blur(8px);
    transition: all 0.2s ease;
  }

  /* Disable hover effects on touch devices */
  @media (hover: none) and (pointer: coarse) {
    .leadership-item:hover,
    .certification-card:hover {
      transform: none;
    }
  }
}
</style>
