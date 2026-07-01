"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionHeader from "@/components/ui/SectionHeader";

const venues = [
  {
    name: "Penha Longa Resort",
    city: "Sintra",
    country: "Portugal",
    address: "Estrada da Lagoa Azul, 2714-511 Sintra",
    lat: 38.7651,
    lng: -9.3924,
  },
  {
    name: "Palácio Nacional da Pena",
    city: "Sintra",
    country: "Portugal",
    address: "Estrada da Pena, 2710-609 Sintra",
    lat: 38.7876,
    lng: -9.3906,
  },
  {
    name: "Four Seasons Hotel Ritz Lisbon",
    city: "Lisbon",
    country: "Portugal",
    address: "Rua Rodrigo da Fonseca 88, 1099-039 Lisboa",
    lat: 38.7242,
    lng: -9.1545,
  },
];

const services = [
  "Photography",
  "Videography",
  "Drone",
  "Content Creator",
  "Albums",
];

const budgets = ["€2–4k", "€4–6k", "€6–8k", "€8k+"];

export default function LuxuryContactForm() {
  const [venueSearch, setVenueSearch] = useState("");
  const [selectedVenue, setSelectedVenue] = useState<any>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Photography",
    "Videography",
  ]);
  const [guests, setGuests] = useState(120);
  const [budget, setBudget] = useState("€4–6k");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const suggestions = venues.filter((venue) =>
    venue.name.toLowerCase().includes(venueSearch.toLowerCase())
  );

  const recommendation = useMemo(() => {
    if (!selectedVenue) return null;

    if (guests >= 120 || selectedServices.includes("Drone")) {
      return "Signature Collection";
    }

    return "Classic Collection";
  }, [guests, selectedVenue, selectedServices]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  return (
    <section id="contact-form" className="py-16 lg:py-18">
      <Container>
        <FadeUp>
          <SectionHeader
            label="AI Wedding Concierge"
            title="Plan Your Enquiry In 20 Seconds"
            description="A smarter, faster way to tell us about your wedding. Search your venue, choose your needs, and receive an instant recommendation."
          />
        </FadeUp>

        <FadeUp delay={0.15}>
          <Card className="mx-auto mt-10 max-w-4xl p-6 lg:p-7">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#21180f] text-white">
                <Sparkles size={26} />
              </div>

              <h3
                className="mt-5 text-3xl font-light text-[#21180f]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Your Wedding Concierge
              </h3>

              <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#6d5b48]">
                Continue with Google later, or fill manually in seconds.
              </p>

              <button
                type="button"
                className="mx-auto mt-6 flex items-center gap-3 rounded-full border border-[#dfd1bd] bg-white px-6 py-3 text-sm font-medium text-[#21180f] transition hover:bg-[#fcfaf6]"
              >
                <FcGoogle size={22} />
                Continue with Google
              </button>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Input
                label="Your Name"
                value={name}
                onChange={setName}
                autoComplete="name"
              />

              <Input
                label="Email"
                value={email}
                onChange={setEmail}
                type="email"
                autoComplete="email"
              />

              <Input
                label="Wedding Date"
                value={date}
                onChange={setDate}
                type="date"
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-[#21180f]">
                  Guests
                </label>

                <div className="rounded-2xl border border-[#dfd1bd] bg-white px-5 py-4">
                  <div className="flex items-center justify-between">
                    <Users size={18} />
                    <span className="font-medium text-[#21180f]">
                      {guests} Guests
                    </span>
                  </div>

                  <input
                    type="range"
                    min="20"
                    max="350"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="mt-4 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-[#21180f]">
                Wedding Venue / Location
              </label>

              <div className="relative">
                <input
                  value={venueSearch}
                  onChange={(e) => {
                    setVenueSearch(e.target.value);
                    setSelectedVenue(null);
                  }}
                  placeholder="Search venue, hotel, palace, church or location..."
                  className="w-full rounded-2xl border border-[#dfd1bd] bg-white px-5 py-4 text-[#21180f] outline-none transition focus:border-[#21180f]"
                />

                {venueSearch && !selectedVenue && (
                  <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-[#dfd1bd] bg-white shadow-xl">
                    {suggestions.length > 0 ? (
                      suggestions.map((venue) => (
                        <button
                          key={venue.name}
                          type="button"
                          onClick={() => {
                            setSelectedVenue(venue);
                            setVenueSearch(venue.name);
                          }}
                          className="flex w-full items-start gap-3 px-5 py-4 text-left transition hover:bg-[#fcfaf6]"
                        >
                          <MapPin size={18} className="mt-1 text-[#21180f]" />

                          <span>
                            <span className="block font-medium text-[#21180f]">
                              {venue.name}
                            </span>
                            <span className="block text-sm text-[#6d5b48]">
                              {venue.city}, {venue.country}
                            </span>
                          </span>
                        </button>
                      ))
                    ) : (
                      <div className="px-5 py-4 text-sm text-[#6d5b48]">
                        Google Places API will show live venue suggestions here.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {selectedVenue && (
              <div className="mt-6 overflow-hidden rounded-3xl border border-[#dfd1bd]">
                <iframe
                  title="Selected wedding venue"
                  src={`https://www.google.com/maps?q=${selectedVenue.lat},${selectedVenue.lng}&z=14&output=embed`}
                  className="h-[260px] w-full border-0"
                  loading="lazy"
                />

                <div className="bg-[#fcfaf6] p-5">
                  <p className="font-medium text-[#21180f]">
                    {selectedVenue.name}
                  </p>

                  <p className="mt-1 text-sm text-[#6d5b48]">
                    {selectedVenue.address}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6">
              <label className="mb-3 block text-sm font-medium text-[#21180f]">
                Services
              </label>

              <div className="flex flex-wrap gap-3">
                {services.map((service) => {
                  const active = selectedServices.includes(service);

                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`rounded-full border px-5 py-3 text-sm transition ${
                        active
                          ? "border-[#21180f] bg-[#21180f] text-white"
                          : "border-[#dfd1bd] bg-white text-[#21180f]"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-3 block text-sm font-medium text-[#21180f]">
                Investment Range
              </label>

              <div className="grid gap-3 sm:grid-cols-4">
                {budgets.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setBudget(item)}
                    className={`rounded-2xl border px-4 py-3 text-sm transition ${
                      budget === item
                        ? "border-[#21180f] bg-[#21180f] text-white"
                        : "border-[#dfd1bd] bg-white text-[#21180f]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {recommendation && (
              <div className="mt-8 rounded-3xl border border-[#e7d9c5] bg-[#fcfaf6] p-6">
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-[#21180f]" />

                  <p className="text-sm uppercase tracking-[0.25em] text-[#8b7458]">
                    AI Recommendation
                  </p>
                </div>

                <h3
                  className="mt-4 text-3xl font-light text-[#21180f]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {recommendation}
                </h3>

                <p className="mt-4 leading-7 text-[#6d5b48]">
                  Based on your venue, guest count and selected services, this
                  collection is likely the best fit. For {guests} guests at{" "}
                  {selectedVenue.name}, we recommend full-day coverage and a
                  cinematic team prepared for both emotional moments and luxury
                  details.
                </p>
              </div>
            )}

            <div className="mt-8 text-center">
              <PrimaryButton
                showArrow
                onClick={() => {
                  console.log({
                    name,
                    email,
                    date,
                    venue: selectedVenue,
                    guests,
                    services: selectedServices,
                    budget,
                    recommendation,
                  });
                }}
              >
                Send My Enquiry
              </PrimaryButton>

              <p className="mt-4 text-sm text-[#8b775f]">
                Takes around 20 seconds. Full Google + AI integration comes next.
              </p>
            </div>
          </Card>
        </FadeUp>
      </Container>
    </section>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
};

function Input({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#21180f]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-[#dfd1bd] bg-white px-5 py-4 text-[#21180f] outline-none transition focus:border-[#21180f]"
      />
    </div>
  );
}