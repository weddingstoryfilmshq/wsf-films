"use client";

import { Users } from "lucide-react";
import { PlannerInput, PlannerPanel } from "./PlannerUI";

type PlannerStepGuestsProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function PlannerStepGuests({
  value,
  onChange,
}: PlannerStepGuestsProps) {
  return (
    <PlannerPanel
      eyebrow="Guests"
      title="How many guests are you expecting?"
      text="Guest count helps estimate the right team size and coverage."
      icon={Users}
    >
      <PlannerInput
        label="Guest Count"
        type="number"
        placeholder="150"
        value={value}
        onChange={onChange}
      />
    </PlannerPanel>
  );
}