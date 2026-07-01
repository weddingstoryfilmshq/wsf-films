"use client";

import GlassCard from "@/components/ui/GlassCard";

import { plannerSteps } from "./plannerTypes";

type PlannerProgressProps = {
  currentStep: number;
  loggedIn: boolean;
  onStepChange: (step: number) => void;
};

export default function PlannerProgress({
  currentStep,
  loggedIn,
  onStepChange,
}: PlannerProgressProps) {
  const progress = Math.round(
    ((currentStep + 1) / plannerSteps.length) * 100
  );

  return (
    <div className="lg:sticky lg:top-28">
      <GlassCard className="p-5">
        <div className="rounded-[1.6rem] border border-[#dfd1bd] bg-[#fbf8f1]/75 p-6">
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8a7358]">
              Planner Progress
            </p>

            <p className="text-sm font-medium text-[#5f4d3b]">
              {progress}%
            </p>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#e6d8c6]">
            <div
              className="h-full rounded-full bg-[#21180f] transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {plannerSteps.map((step, index) => {
              const active = index === currentStep;
              const completed = index < currentStep;
              const available = loggedIn || index === 0;

              return (
                <button
                  key={step.key}
                  type="button"
                  disabled={!available}
                  onClick={() => onStepChange(index)}
                  className={`rounded-2xl border px-3 py-4 text-left transition-all duration-300 ${
                    active
                      ? "border-[#21180f] bg-[#21180f] text-white"
                      : completed
                      ? "border-[#d9c7aa] bg-white text-[#21180f]"
                      : "border-[#e6d9c8] bg-white/40 text-[#8d7a63]"
                  } ${
                    !available
                      ? "cursor-not-allowed opacity-60"
                      : "hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(33,24,15,.08)]"
                  }`}
                >
                  <span className="block text-[11px] opacity-70">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mt-1 block text-xs font-medium">
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-[#e6d8c6] bg-white/70 p-5 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8a7358]">
              Current Step
            </p>

            <h3
              className="mt-3 text-2xl font-light text-[#21180f]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {plannerSteps[currentStep].label}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6d5a45]">
              Complete each section to receive your recommended Wedding Story
              Films collection.
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}