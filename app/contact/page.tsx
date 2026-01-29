"use client";

import React, { useEffect, useMemo, useState, useRef } from "react";
import { ShineBorder } from "@/components/ui/shine-border";
import { Mail, Copy, Check, CalendarDays, MessageSquare } from "lucide-react";

const CALENDLY_BASE = "https://calendly.com/shahzadsohail1678/30min";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function formatLocalDateTime(d: Date) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(
    d.getDate()
  )}T${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
}

const Page = () => {
  const [active, setActive] = useState<"call" | "message">("call");
  const [copied, setCopied] = useState(false);
  const [calendlyReady, setCalendlyReady] = useState(false);

  const calendlyRef = useRef<HTMLDivElement>(null);
  const email = "mr.shahzad.developer@gmail.com";

  // Load Calendly script once + mark ready when loaded
  useEffect(() => {
    const w = window as any;

    // If Calendly already present, mark ready
    if (w.Calendly && typeof w.Calendly.initInlineWidget === "function") {
      setCalendlyReady(true);
      return;
    }

    const existing = document.getElementById("calendly-script") as
      | HTMLScriptElement
      | null;

    // If script tag exists but Calendly isn't ready yet, wait for it
    if (existing) {
      const onLoad = () => {
        const ww = window as any;
        if (ww.Calendly && typeof ww.Calendly.initInlineWidget === "function") {
          setCalendlyReady(true);
        }
      };

      existing.addEventListener("load", onLoad);

      // In case it already loaded but event didn't fire for this mount
      const t = window.setTimeout(() => {
        const ww = window as any;
        if (ww.Calendly && typeof ww.Calendly.initInlineWidget === "function") {
          setCalendlyReady(true);
        }
      }, 0);

      return () => {
        existing.removeEventListener("load", onLoad);
        window.clearTimeout(t);
      };
    }

    // Otherwise, create script
    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      const ww = window as any;
      if (ww.Calendly && typeof ww.Calendly.initInlineWidget === "function") {
        setCalendlyReady(true);
      }
    };
    script.onerror = () => setCalendlyReady(false);

    document.body.appendChild(script);
  }, []);

  // Prepare Calendly URL
  const calendlyUrl = useMemo(() => {
    const start = new Date();
    start.setDate(start.getDate() + 2);
    start.setHours(10, 0, 0, 0);

    const params = new URLSearchParams({
      background_color: "07070b",
      text_color: "ffffff",
      primary_color: "7c3aed",
      hide_landing_page_details: "1",
      hide_gdpr_banner: "1",
      date: formatLocalDateTime(start),
      prefill_date: formatLocalDateTime(start),
    });

    return `${CALENDLY_BASE}?${params.toString()}`;
  }, []);

  // Robust init: wait for paint + ensure container has non-zero height
  useEffect(() => {
    if (active !== "call") return;
    if (!calendlyReady) return;

    const w = window as any;
    const el = calendlyRef.current;
    if (!el) return;
    if (!w.Calendly || typeof w.Calendly.initInlineWidget !== "function") return;

    let raf1 = 0;
    let raf2 = 0;
    let timer = 0;
    let cancelled = false;

    const tryInit = () => {
      if (cancelled) return;

      const height = el.getBoundingClientRect().height;
      const width = el.getBoundingClientRect().width;

      // If layout hasn't settled yet, retry next frame
      if (height < 200 || width < 200) {
        raf2 = window.requestAnimationFrame(tryInit);
        return;
      }

      // Clear previous widget
      el.innerHTML = "";

      w.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: el,
        prefill: {},
        utm: {},
        styles: { height: "100%" },
      });
    };

    // Wait for React commit + next paint + small delay (Calendly is timing-sensitive)
    raf1 = window.requestAnimationFrame(() => {
      timer = window.setTimeout(() => {
        tryInit();
      }, 50);
    });

    return () => {
      cancelled = true;
      if (raf1) window.cancelAnimationFrame(raf1);
      if (raf2) window.cancelAnimationFrame(raf2);
      if (timer) window.clearTimeout(timer);

      // Optional: clear on unmount/tab switch to avoid stale iframes
      if (calendlyRef.current) {
        calendlyRef.current.innerHTML = "";
      }
    };
  }, [active, calendlyUrl, calendlyReady]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 my-10">
      {/* Header */}
      <div className="relative mx-auto max-w-6xl text-center">
        <div className="flex justify-center">
          <div className="relative inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <span className="text-xs uppercase tracking-[0.25em] text-white/70">
              Contact
            </span>
          </div>
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold font-serif">
          Let&apos;s Get{" "}
          <span className="bg-linear-to-r from-primary via-indigo-500 to-fuchsia-500 bg-clip-text italic text-transparent">
            In Touch
          </span>
        </h1>

        <div className="mt-5 flex justify-center gap-3 text-white/80 flex-wrap">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>{email}</span>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
            <button
              onClick={() => setActive("call")}
              className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2 ${
                active === "call"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5"
              }`}
            >
              <CalendarDays size={16} />
              Book a Call
            </button>

            <button
              onClick={() => setActive("message")}
              className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2 ${
                active === "message"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5"
              }`}
            >
              <MessageSquare size={16} />
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl mt-10">
        {/* Calendly */}
        {active === "call" && (
          <div className="w-full -mt-5">
            
            <div
              ref={calendlyRef}
              className="w-full"
              style={{
                height: "calc(100vh - 200px)",
                minHeight: 720,
              }}
            />
          </div>
        )}

        {/* Message */}
        {active === "message" && (
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
            <h2 className="text-3xl font-semibold font-serif">
              Prefer to message?
            </h2>
            <p className="mt-3 text-white/65">
              Email your project details and I’ll reply with next steps.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
