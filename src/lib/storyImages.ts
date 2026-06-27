export const storyImages = Array.from(
  { length: 132 },
  (_, index) => index + 1
)
  .filter((number) => number !== 92)
  .map((number) => `/stories/${number}.jpg`);