// Project configuration and constants
export const PERSONAL_INFO = {
  name: "Francis Allen Prado",
  handle: "@francis_allen_dev",
  email: "francisallen148@gmail.com",
  location: "Davao Del Sur, Davao City, Roxas Ave.",
  phone: "+639762404193",
};

export const SOCIAL_LINKS = {
  linkedin: {
    url: "https://www.linkedin.com/in/francis-allen-prado",
    text: "www.linkedin.com/in/francis-allen-prado",
  },
  github: {
    url: "https://github.com/AlienwareXgamer",
    text: "GitHub Profile",
  },
  twitter: {
    url: "https://twitter.com/francis_allen_dev",
    text: "Twitter Profile",
  },
  email: {
    url: "mailto:francisallen148@gmail.com",
    text: "francisallen148@gmail.com",
  },
};

export const NAVIGATION_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "leadership", label: "Leadership" },
  { id: "skills", label: "Skills" },
];

export const ANIMATION_CONFIG = {
  scrollOffset: 80, // Navigation height offset
  scrollBehavior: "smooth",
  throttleDelay: 50,
  transitionDuration: "0.3s",
  hoverTransform: "translateY(-3px)",
};

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  large: 1200,
  xlarge: 1400,
};
