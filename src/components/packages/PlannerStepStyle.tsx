"use client";

import { Sparkles } from "lucide-react";
import { PlannerPanel, OptionGrid } from "./PlannerUI";
import { weddingStyleOptions } from "./plannerTypes";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function PlannerStepStyle({
  value,
  onChange,
}: Props) {
  return (
    <PlannerPanel
      eyebrow="Wedding Style"
      title="What style best describes your wedding?"
      text="Choose the creative direction that best reflects your celebration."
      icon={Sparkles}
    >
      <OptionGrid
        options={weddingStyleOptions}
        selected={value}
        onSelect={onChange}
      />
    </PlannerPanel>
  );
}