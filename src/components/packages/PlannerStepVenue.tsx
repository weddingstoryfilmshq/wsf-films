"use client";

import { Landmark } from "lucide-react";
import { PlannerInput, PlannerPanel } from "./PlannerUI";

type PlannerStepVenueProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function PlannerStepVenue({
  value,
  onChange,
}: PlannerStepVenueProps) {
  return (
    <PlannerPanel
      eyebrow="Venue"
      title="Tell us about your venue."
      text="A palace, hotel, beach, villa or private estate can change the storytelling needs."
      icon={Landmark}
    >
      <PlannerInput
        label="Venue"
        placeholder="Venue name or style"
        value={value}
        onChange={onChange}
      />
    </PlannerPanel>
  );
}