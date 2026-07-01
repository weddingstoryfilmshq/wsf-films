"use client";

import { CalendarDays } from "lucide-react";
import { PlannerInput, PlannerPanel } from "./PlannerUI";

type PlannerStepDateProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function PlannerStepDate({
  value,
  onChange,
}: PlannerStepDateProps) {
  return (
    <PlannerPanel
      eyebrow="Wedding date"
      title="When is your wedding celebration?"
      text="Your date helps build the right timeline, coverage and planning flow."
      icon={CalendarDays}
    >
      <PlannerInput
        label="Wedding Date"
        type="date"
        value={value}
        onChange={onChange}
      />
    </PlannerPanel>
  );
}