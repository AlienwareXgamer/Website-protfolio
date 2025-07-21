// Utility functions for common operations
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return false;

  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: "smooth",
  });

  return true;
};

export const isElementInView = (element, threshold = 0.3) => {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  return (
    rect.top < windowHeight * (1 - threshold) &&
    rect.bottom > windowHeight * threshold
  );
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// CSS class utilities
export const createAnimatedClass = (baseClass, modifiers = []) => {
  return [baseClass, ...modifiers].filter(Boolean);
};
