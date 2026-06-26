export const fadeUp = {
  initial: {
    opacity: 0,
    y: 24,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export const fade = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
  },

  transition: {
    duration: 1,
  },
};