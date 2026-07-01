"use client";

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const methods = [
  {
    icon: MapPin,
    title: "Our Studio",
    value: "Rua Alexandre Prista, Qta das Rodas Anexo D",
    description: "2750-013 Cascais, Portugal",
    href: "https://maps.google.com/?q=38.72943,-9.450785",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+351 920 606 421",
    description: "Monday – Sunday",
    href: "tel:+351920606421",
  },
  {
    icon: Mail,
    title: "Email",
    value: "portugalweddingfilms@gmail.com",
    description: "Typically within 24 hours",
    href: "mailto:portugalweddingfilms@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Start A Conversation",
    description: "Fastest way to reach us",
    href: "https://api.whatsapp.com/message/W2GEPK5TIT35B1?autoload=1&app_absent=0",
  },
];

const socials = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/weddingstoryfilmsportugal/",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/weddingstoryfilmsportugal",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "https://www.youtube.com/@weddingstoryfilmspt",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@weddingstoryfilms",
  },
];

export default function ContactMethods() {
  return (
    <section className="py-16 lg:py-18">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Contact Information"
            title="We're Always Happy To Chat"
            description="Whether you're ready to book or simply exploring ideas, we'd love to hear about your celebration."
          />
        </FadeUp>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {methods.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp
                key={item.title}
                delay={index * 0.08}
              >
                <a
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel="noreferrer"
                  className="block h-full"
                >
                  <Card className="group flex h-full cursor-pointer flex-col p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#21180f] text-white transition-transform duration-300 group-hover:scale-105">
                      <Icon size={24} />
                    </div>

                    <h3
                      className="mt-6 text-xl font-light text-[#21180f]"
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 break-words font-medium text-[#21180f]">
                      {item.value}
                    </p>

                    <p className="mt-2 leading-7 text-[#6d5b48]">
                      {item.description}
                    </p>
                  </Card>
                </a>
              </FadeUp>
            );
          })}
        </div>

        {/* Social Links */}

        <FadeUp delay={0.35}>
          <div className="mt-12 text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b7458]">
              Follow Our Journey
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-[#dfd1bd] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c9af87] hover:shadow-[0_16px_40px_rgba(33,24,15,.10)]"
                  >
                    <Icon className="text-[20px] text-[#21180f] transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}