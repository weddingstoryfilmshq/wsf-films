"use client";

import { MapPin } from "lucide-react";
import { PlannerInput, PlannerPanel } from "./PlannerUI";

type PlannerStepLocationProps = {
  country: string;
  city: string;
  onCountryChange: (value: string) => void;
  onCityChange: (value: string) => void;
};

export default function PlannerStepLocation({
  country,
  city,
  onCountryChange,
  onCityChange,
}: PlannerStepLocationProps) {
  return (
    <PlannerPanel
      eyebrow="Location"
      title="Where will your wedding take place?"
      text="Add your country and city so the collection can reflect destination coverage."
      icon={MapPin}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <PlannerInput
          label="Country"
          placeholder="Portugal"
          value={country}
          onChange={onCountryChange}
        />

        <PlannerInput
          label="City"
          placeholder="Lisbon"
          value={city}
          onChange={onCityChange}
        />
      </div>
    </PlannerPanel>
  );
}