"use client";

import { Star } from "lucide-react";
import { OptionGrid, PlannerPanel } from "./PlannerUI";
import { budgetOptions } from "./plannerTypes";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function PlannerStepBudget({ value, onChange }: Props) {
  return (
    <PlannerPanel
      eyebrow="Investment"
      title="What investment range feels comfortable?"
      text="This helps recommend a collection that matches your expectations."
      icon={Star}
    >
      <OptionGrid
        options={budgetOptions}
        selected={value}
        onSelect={onChange}
      />
    </PlannerPanel>
  );
}