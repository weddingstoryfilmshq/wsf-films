"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

import PlannerLogin from "./PlannerLogin";
import PlannerProgress from "./PlannerProgress";
import PlannerStepDate from "./PlannerStepDate";
import PlannerStepLocation from "./PlannerStepLocation";
import PlannerStepVenue from "./PlannerStepVenue";
import PlannerStepGuests from "./PlannerStepGuests";
import PlannerStepCoverage from "./PlannerStepCoverage";
import PlannerStepServices from "./PlannerStepServices";
import PlannerStepBudget from "./PlannerStepBudget";
import PlannerStepStyle from "./PlannerStepStyle";
import PlannerResult from "./PlannerResult";

import {
  initialPlannerData,
  plannerSteps,
  type PlannerData,
} from "./plannerTypes";

export default function PlannerWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState<PlannerData>(initialPlannerData);

  const step = plannerSteps[currentStep];

  const canGoBack = currentStep > 0;
  const isLoginStep = step.key === "login";
  const isResultStep = step.key === "result";
  const canGoNext = !isLoginStep && !isResultStep;

  const update = <K extends keyof PlannerData>(
    key: K,
    value: PlannerData[K]
  ) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const next = () => {
    if (currentStep < plannerSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const back = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleLogin = () => {
    setLoggedIn(true);
    setCurrentStep(1);
  };

  const restartPlanner = () => {
    setData(initialPlannerData);
    setCurrentStep(1);
  };

  const activeStep = useMemo(() => {
    switch (step.key) {
      case "login":
        return <PlannerLogin onContinue={handleLogin} />;

      case "date":
        return (
          <PlannerStepDate
            value={data.weddingDate}
            onChange={(value) => update("weddingDate", value)}
          />
        );

      case "location":
        return (
          <PlannerStepLocation
            country={data.country}
            city={data.city}
            onCountryChange={(value) => update("country", value)}
            onCityChange={(value) => update("city", value)}
          />
        );

      case "venue":
        return (
          <PlannerStepVenue
            value={data.venue}
            onChange={(value) => update("venue", value)}
          />
        );

      case "guests":
        return (
          <PlannerStepGuests
            value={data.guests}
            onChange={(value) => update("guests", value)}
          />
        );

      case "coverage":
        return (
          <PlannerStepCoverage
            value={data.coverage}
            onChange={(value) => update("coverage", value)}
          />
        );

      case "services":
        return (
          <PlannerStepServices
            photography={data.photography}
            videography={data.videography}
            drone={data.drone}
            secondShooter={data.secondShooter}
            contentCreator={data.contentCreator}
            onPhotographyChange={() =>
              update("photography", !data.photography)
            }
            onVideographyChange={() =>
              update("videography", !data.videography)
            }
            onDroneChange={() => update("drone", !data.drone)}
            onSecondShooterChange={() =>
              update("secondShooter", !data.secondShooter)
            }
            onContentCreatorChange={() =>
              update("contentCreator", !data.contentCreator)
            }
          />
        );

      case "budget":
        return (
          <PlannerStepBudget
            value={data.budget}
            onChange={(value) => update("budget", value)}
          />
        );

      case "style":
        return (
          <PlannerStepStyle
            value={data.style}
            onChange={(value) => update("style", value)}
          />
        );

      case "result":
        return <PlannerResult data={data} />;

      default:
        return null;
    }
  }, [step.key, data]);

  return (
    <section className="py-24 lg:py-28">
      <Container>
        <div className="grid gap-8 xl:gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
          <PlannerProgress
            currentStep={currentStep}
            loggedIn={loggedIn}
            onStepChange={setCurrentStep}
          />

          <GlassCard className="self-start p-5 lg:p-6">
            <div className="min-h-[520px] rounded-[1.55rem] border border-[#dfd1bd] bg-[#fbf8f1]/80 p-6 md:p-8 lg:p-10">
              {activeStep}

              {!isLoginStep && (
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#e2d4c1] pt-6">
                  <SecondaryButton
                    onClick={back}
                    disabled={!canGoBack}
                  >
                    Back
                  </SecondaryButton>

                  {canGoNext ? (
                    <PrimaryButton
                      onClick={next}
                      showArrow
                    >
                      Continue
                    </PrimaryButton>
                  ) : (
                    <SecondaryButton onClick={restartPlanner}>
                      Start Again
                    </SecondaryButton>
                  )}
                </div>
              )}
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}