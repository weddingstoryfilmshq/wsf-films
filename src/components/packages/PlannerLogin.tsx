"use client";

import { Apple, ArrowRight, Sparkles } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";

type PlannerLoginProps = {
  onContinue: () => void;
};

export default function PlannerLogin({
  onContinue,
}: PlannerLoginProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[#dfd1bd] bg-[#fbf8f1]/85 p-6 shadow-[0_30px_90px_rgba(64,43,20,.10)] backdrop-blur-2xl sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.95),transparent_36%),radial-gradient(circle_at_90%_10%,rgba(180,140,90,.14),transparent_30%)]" />

      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ddceb8] bg-white/65 text-[#21180f]">
          <Sparkles size={22} />
        </div>

        <p className="mt-8 text-[11px] uppercase tracking-[0.35em] text-[#8a7358]">
          FREE ACCESS
        </p>

        <h2
          className="mt-4 text-4xl font-light tracking-[-0.045em] text-[#21180f] sm:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Create your private wedding planning space.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#6d5a45]">
          Continue with a simple one-click experience before entering your
          wedding details. Your planner will later sync across all your
          devices.
        </p>

        <div className="mt-10 grid gap-4">
          <LoginButton
            icon={<FcGoogle size={22} />}
            title="Continue with Google"
            subtitle="Fast and secure sign in."
            onClick={onContinue}
          />

          <LoginButton
            icon={<Apple size={22} />}
            title="Continue with Apple"
            subtitle="Private and seamless access."
            onClick={onContinue}
          />

          <PrimaryButton
            onClick={onContinue}
            showArrow
            className="w-full justify-between px-6 py-5"
          >
            <div className="text-left">
              <span className="block text-sm font-medium">
                Continue Free
              </span>

              <span className="mt-1 block text-sm text-white/70">
                No password required for now.
              </span>
            </div>
          </PrimaryButton>
        </div>

        <p className="mt-8 text-sm leading-7 text-[#8b775f]">
          Google and Apple authentication will be connected with Supabase in
          the next phase.
        </p>
      </div>
    </section>
  );
}

type LoginButtonProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
};

function LoginButton({
  icon,
  title,
  subtitle,
  onClick,
}: LoginButtonProps) {
  return (
    <Card className="rounded-3xl p-0 hover:translate-y-0">
      <button
        type="button"
        onClick={onClick}
        className="group flex w-full items-center justify-between px-5 py-5"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e7d9c5] bg-[#fbf8f1]">
            {icon}
          </div>

          <div className="text-left">
            <p className="text-sm font-medium text-[#21180f]">
              {title}
            </p>

            <p className="mt-1 text-sm text-[#74614b]">
              {subtitle}
            </p>
          </div>
        </div>

        <ArrowRight
          size={18}
          className="text-[#21180f] transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </Card>
  );
}