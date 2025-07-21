// Composable for handling loading states and errors
import { ref, computed, readonly } from "vue";

export function useAsyncState(asyncFunction, defaultValue = null) {
  const loading = ref(false);
  const error = ref(null);
  const data = ref(defaultValue);

  const execute = async (...args) => {
    loading.value = true;
    error.value = null;

    try {
      const result = await asyncFunction(...args);
      data.value = result;
      return result;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const isReady = computed(() => !loading.value && !error.value);

  return {
    loading: readonly(loading),
    error: readonly(error),
    data: readonly(data),
    execute,
    isReady,
  };
}

// Composable for intersection observer (scroll animations)
export function useIntersectionObserver(options = {}) {
  const target = ref(null);
  const isIntersecting = ref(false);
  const observer = ref(null);

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: "0px",
    ...options,
  };

  const start = () => {
    if (!target.value) return;

    observer.value = new IntersectionObserver(([entry]) => {
      isIntersecting.value = entry.isIntersecting;
    }, defaultOptions);

    observer.value.observe(target.value);
  };

  const stop = () => {
    if (observer.value) {
      observer.value.disconnect();
      observer.value = null;
    }
  };

  return {
    target,
    isIntersecting: readonly(isIntersecting),
    start,
    stop,
  };
}
