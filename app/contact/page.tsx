"use client";

import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  Mail,
  Copy,
  Check,
  CalendarDays,
  MessageSquare,
  Send,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ShineBorder } from "@/components/ui/shine-border";
import { motion } from 'framer-motion';

const CALENDLY_BASE = "https://calendly.com/shahzadsohail1678/30min";

const EMAILJS_SERVICE_ID = "service_wsxw9eb";
const EMAILJS_TEMPLATE_ID = "template_f2gozlj";
const EMAILJS_PUBLIC_KEY = "iELAqtu3pD_Jc_jqZ";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function formatLocalDateTime(d: Date) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(
    d.getDate()
  )}T${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
}

const Page = () => {
  const [active, setActive] = useState<"call" | "message">("message");
  const [copied, setCopied] = useState(false);
  const [calendlyReady, setCalendlyReady] = useState(false);

  const calendlyRef = useRef<HTMLDivElement>(null);
  const email = "shahzadsohail1678@gmail.com";

  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  // Load Calendly script once + mark ready when loaded
  useEffect(() => {
    const w = window as any;

    if (w.Calendly && typeof w.Calendly.initInlineWidget === "function") {
      setCalendlyReady(true);
      return;
    }

    const existing = document.getElementById("calendly-script") as
      | HTMLScriptElement
      | null;

    if (existing) {
      const onLoad = () => {
        const ww = window as any;
        if (ww.Calendly && typeof ww.Calendly.initInlineWidget === "function") {
          setCalendlyReady(true);
        }
      };

      existing.addEventListener("load", onLoad);

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

  // Prepare Calendly URL (DON'T CHANGE)
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

  // Robust init for Calendly
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

      if (height < 200 || width < 200) {
        raf2 = window.requestAnimationFrame(tryInit);
        return;
      }

      el.innerHTML = "";

      w.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: el,
        prefill: {},
        utm: {},
        styles: { height: "100%" },
      });
    };

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
      if (calendlyRef.current) calendlyRef.current.innerHTML = "";
    };
  }, [active, calendlyUrl, calendlyReady]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  const onSubmitMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: fromName,
          from_email: fromEmail,
          message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 2500,
        theme: "dark",
      });

      setFromName("");
      setFromEmail("");
      setMessage("");
    } catch (err) {
      toast.error("Failed to send. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 overflow-hidden">
      <ToastContainer />

      {/* Header */}
      <div className="relative mx-auto text-center">
         <motion.div
        // variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mb-10 flex flex-col items-center text-center "
      >
        <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
          {/* Text */}
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <p className="relative z-10 text-xs uppercase tracking-[0.25em] text-white/70 sm:text-sm">
            Featured Case Studies
          </p>
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold font-serif  leading-[1.15] text-white">
          Let's Get {" "}
          <span className="bg-linear-to-r from-primary via-fuchsia-500 to-pink-500 bg-clip-text font-semibold italic text-transparent">
            In Touch
          </span>
        </h2>

      </motion.div>

        <div className="mt-0 flex justify-center text-white/80">
          <div className="flex items-center gap-5 rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <Mail className="h-4 w-4" />
            <span>{email}</span>
            <button onClick={copyEmail} className="opacity-90 hover:opacity-100">
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* Tabs (equal width) */}
        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-2 w-full max-w-xs rounded-lg border gap-1 border-white/10 bg-white/5 p-1 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_60px_rgba(0,0,0,0.35)]">
            <button
              onClick={() => setActive("message")}
              className={`w-full px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition ${
                active === "message"
                  ? "bg-white/10 text-white shadow-[0_10px_30px_rgba(124,58,237,0.12)]"
                  : "text-white/70 hover:bg-white/5"
              }`}
            >
              <MessageSquare size={16} />
              Send Message
            </button>

            <button
              onClick={() => setActive("call")}
              className={`w-full px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition ${
                active === "call"
                  ? "bg-white/10 text-white shadow-[0_10px_30px_rgba(124,58,237,0.12)]"
                  : "text-white/70 hover:bg-white/5"
              }`}
            >
              <CalendarDays size={16} />
              Book a Call
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl mt-10 w-full">
        {/* ✅ ONLY FORM (no side box) */}
        {active === "message" && (
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="relative rounded-3xl overflow-hidden p-[1.5px]">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

                <div className="relative rounded-3xl border border-white/10 bg-[#0b0b12]/80 backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_rgba(0,0,0,0.45)] overflow-hidden">
                  <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

                  <form onSubmit={onSubmitMessage} className="mx-auto max-w-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-left">
                        <label className="text-sm text-white/70">Name</label>
                        <input
                          value={fromName}
                          onChange={(e) => setFromName(e.target.value)}
                          placeholder="Jane Doe"
                          required
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-violet-400/40 focus:bg-white/7.5 focus:ring-2 focus:ring-violet-500/20"
                        />
                      </div>

                      <div className="text-left">
                        <label className="text-sm text-white/70">Email</label>
                        <input
                          value={fromEmail}
                          onChange={(e) => setFromEmail(e.target.value)}
                          placeholder="jane@example.com"
                          type="email"
                          required
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-violet-400/40 focus:bg-white/7.5 focus:ring-2 focus:ring-violet-500/20"
                        />
                      </div>
                    </div>

                    <div className="mt-6 text-left">
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-white/70">Message</label>
                        <span className="text-xs text-white/40">
                          {Math.min(message.length, 1000)}/1000
                        </span>
                      </div>

                      <textarea
                        value={message}
                        onChange={(e) =>
                          setMessage(e.target.value.slice(0, 1000))
                        }
                        placeholder="Tell me about your project (scope, timeline, budget, references)..."
                        required
                        rows={6}
                        className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-violet-400/40 focus:bg-white/7.5 focus:ring-2 focus:ring-violet-500/20"
                      />
                    </div>

                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={sending}
                        className="group w-full rounded-2xl bg-linear-to-r from-violet-800 to-primary text-white font-medium py-3.5 hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_18px_60px_rgba(124,58,237,0.20)] transition"
                      >
                        <span className="inline-flex items-center justify-center gap-2">
                          {sending ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </span>
                      </button>

                      <p className="mt-3 text-center text-xs text-white/45">
                        By submitting, you agree to be contacted back via email.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Calendly (keep wide so it stays horizontal on large screens) */}
        {active === "call" && (
          <div className="w-full -mt-6">
            <div className="relative w-full">
              <div
                ref={calendlyRef}
                className="relative w-full"
                style={{
                  height: "calc(100vh - 200px)",
                  minHeight: 720,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
