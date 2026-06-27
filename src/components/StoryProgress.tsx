"use client";

type Props = {
  total: number;
  current: number;
  duration?: number;
};

export default function StoryProgress({
  total,
  current,
  duration = 5000,
}: Props) {

  // Show only 8 bars like Instagram
  const VISIBLE = 8;

  const start = Math.max(
    0,
    Math.min(
      current - Math.floor(VISIBLE / 2),
      Math.max(total - VISIBLE, 0)
    )
  );

  const end = Math.min(start + VISIBLE, total);

  const visibleStories = [];

  for (let i = start; i < end; i++) {
    visibleStories.push(i);
  }

  return (
    <div className="absolute left-5 right-5 top-7 z-40 flex gap-1.5">

      {visibleStories.map((index) => (

        <div
          key={index}
          className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30"
        >

          {index < current && (
            <div className="h-full w-full bg-white" />
          )}

          {index === current && (
            <div
              key={current}
              className="story-progress-bar h-full bg-white"
              style={
                {
                  "--story-duration": `${duration}ms`,
                } as React.CSSProperties
              }
            />
          )}

        </div>

      ))}

    </div>
  );
}