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
  return (
    <div className="absolute left-4 right-4 top-4 z-30 flex gap-1.5">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25"
        >
          {index < current && (
            <div className="h-full w-full rounded-full bg-white" />
          )}

          {index === current && (
            <div
              key={current}
              className="story-progress-bar h-full rounded-full bg-white"
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