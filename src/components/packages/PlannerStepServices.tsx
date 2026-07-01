"use client";

import { Video } from "lucide-react";
import { PlannerPanel, ToggleCard } from "./PlannerUI";

type Props = {
  photography: boolean;
  videography: boolean;
  drone: boolean;
  secondShooter: boolean;
  contentCreator: boolean;
  onPhotographyChange: () => void;
  onVideographyChange: () => void;
  onDroneChange: () => void;
  onSecondShooterChange: () => void;
  onContentCreatorChange: () => void;
};

export default function PlannerStepServices({
  photography,
  videography,
  drone,
  secondShooter,
  contentCreator,
  onPhotographyChange,
  onVideographyChange,
  onDroneChange,
  onSecondShooterChange,
  onContentCreatorChange,
}: Props) {
  return (
    <PlannerPanel
      eyebrow="Services"
      title="What would you like included?"
      text="Select the services that matter for your celebration."
      icon={Video}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <ToggleCard
          title="Photography"
          checked={photography}
          onClick={onPhotographyChange}
        />

        <ToggleCard
          title="Videography"
          checked={videography}
          onClick={onVideographyChange}
        />

        <ToggleCard title="Drone" checked={drone} onClick={onDroneChange} />

        <ToggleCard
          title="Second Shooter"
          checked={secondShooter}
          onClick={onSecondShooterChange}
        />

        <ToggleCard
          title="Content Creator"
          checked={contentCreator}
          onClick={onContentCreatorChange}
        />
      </div>
    </PlannerPanel>
  );
}