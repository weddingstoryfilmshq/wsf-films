"use client";

import { Film } from "lucide-react";
import { OptionGrid, PlannerPanel } from "./PlannerUI";
import { coverageOptions } from "./plannerTypes";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function PlannerStepCoverage({ value, onChange }: Props) {
  return (
    <PlannerPanel
      eyebrow="Coverage"
      title="How much coverage do you need?"
      text="Choose the coverage that feels closest to your wedding day."
      icon={Film}
    >
      <OptionGrid
        options={coverageOptions}
        selected={value}
        onSelect={onChange}
      />
    </PlannerPanel>
  );
}