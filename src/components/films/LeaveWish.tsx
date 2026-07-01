"use client";

import { useState } from "react";
import { Send, SmilePlus } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Card from "@/components/ui/Card";

export default function LeaveWish() {
  const [message, setMessage] = useState("");

  return (
    <section className="py-4">
      <FadeUp>
        <Card>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7458]">
            Leave Your Wishes
          </p>

          <h2
            className="mt-3 text-[2rem] font-light leading-tight text-[#21180f]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Celebrate This Beautiful Story
          </h2>

          <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#6d5b48]">
            Share your wishes with the couple. Your message will become part of
            their wedding story and may be cherished for years to come.
          </p>

          {/* Textarea */}

          <div className="mt-7">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              maxLength={500}
              placeholder="Write your wishes for the couple..."
              className="w-full resize-none rounded-2xl border border-[#e6d9c7] bg-[#fbf9f6] px-5 py-4 text-[15px] leading-7 text-[#21180f] outline-none transition placeholder:text-[#a58f79] focus:border-[#b99772]"
            />
          </div>

          {/* Bottom */}

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-[14px] text-[#8b7458] transition hover:text-[#21180f]"
            >
              <SmilePlus size={18} />
              Add Emoji
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#21180f] px-7 py-3 text-[15px] font-medium text-white transition hover:bg-[#3a2b20]"
            >
              <Send size={16} />

              Post Your Wishes
            </button>
          </div>

          {/* Future Auth */}

          <div className="mt-6 rounded-2xl border border-dashed border-[#dbcbb8] bg-[#f8f4ee] px-5 py-4">
            <p className="text-[13px] leading-6 text-[#7c6956]">
              <strong>Next Step:</strong> When the visitor clicks{" "}
              <strong>Post Your Wishes</strong>, a small popup will appear with
              Google, Facebook, Apple and TikTok verification. After a
              successful verification, their profile photo, name and verified
              badge will automatically be added and the wish will be published
              instantly.
            </p>
          </div>
        </Card>
      </FadeUp>
    </section>
  );
}