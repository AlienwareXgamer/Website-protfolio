<script setup>
// No props needed - social links are static
</script>

<template>
  <div class="social-icons">
    <a
      href="https://www.linkedin.com/in/francis-allen-prado"
      target="_blank"
      class="social-icon linkedin"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    </a>
    <a
      href="https://github.com/AlienwareXgamer"
      target="_blank"
      class="social-icon github"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      </svg>
    </a>
    <a href="mailto:francisallen148@gmail.com" class="social-icon email">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.25L12 9.958l9.114-6.137h1.25c.904 0 1.636.732 1.636 1.636z"
        />
      </svg>
    </a>
    <a
      href="https://twitter.com/francis_allen_dev"
      target="_blank"
      class="social-icon twitter"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        />
      </svg>
    </a>
  </div>
</template>

<style scoped>
.social-icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #a1a1aa;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-icon:hover {
  transform: translateY(-3px);
  box-shadow:
    0 8px 25px rgba(139, 92, 246, 0.3),
    0 0 20px rgba(139, 92, 246, 0.2),
    0 0 0 1px rgba(139, 92, 246, 0.1);
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
}

.social-icon.linkedin:hover {
  background: #0077b5;
  border-color: #0077b5;
  color: #fff;
  box-shadow:
    0 8px 25px rgba(0, 119, 181, 0.4),
    0 0 20px rgba(0, 119, 181, 0.3);
}

.social-icon.github:hover {
  background: #333;
  border-color: #333;
  color: #fff;
  box-shadow:
    0 8px 25px rgba(51, 51, 51, 0.4),
    0 0 20px rgba(51, 51, 51, 0.3);
}

.social-icon.email:hover {
  background: #ea4335;
  border-color: #ea4335;
  color: #fff;
  box-shadow:
    0 8px 25px rgba(234, 67, 53, 0.4),
    0 0 20px rgba(234, 67, 53, 0.3);
}

.social-icon.twitter:hover {
  background: #1da1f2;
  border-color: #1da1f2;
  color: #fff;
  box-shadow:
    0 8px 25px rgba(29, 161, 242, 0.4),
    0 0 20px rgba(29, 161, 242, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .social-icons {
    gap: 1.5rem;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
