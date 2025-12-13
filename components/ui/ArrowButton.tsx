"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, Transition } from "framer-motion";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";

type Dir = "up-right" | "up-left";
type DirectionMode = Dir | "auto";

function dirToVector(dir: Dir, distance = 14) {
  switch (dir) {
    case "up-right":
      return { x: distance, y: -distance };
    case "up-left":
      return { x: -distance, y: -distance };
  }
}

function pickUpDirectionOnly(rect: DOMRect, vw: number): Dir {
  const cx = rect.left + rect.width / 2;
  return cx > vw * 0.66 ? "up-left" : "up-right";
}

export default function ArrowSwapButton({
  label = "Check it out",
  href,
  className = "",
  direction = "auto",
}: {
  label?: string;
  href?: string;
  className?: string;
  direction?: DirectionMode; // ✅ NEW
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [dir, setDir] = useState<Dir>("up-right");

  useEffect(() => {
    // ✅ if direction is forced, don’t auto-calc
    if (direction !== "auto") {
      setDir(direction);
      return;
    }

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setDir(pickUpDirectionOnly(rect, window.innerWidth));
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [direction]);

  const v = useMemo(() => dirToVector(dir, 14), [dir]);

  // Smooth / not too fast
  const spring: Transition = useMemo(
    () => ({
      type: "spring",
      stiffness: 260,
      damping: 20,
      mass: 0.8,
    }),
    []
  );

  const Icon = dir === "up-left" ? ArrowUpLeft : ArrowUpRight;
  const Base = href ? motion.a : motion.button;

  return (
    <Base
      ref={ref as any}
      href={href as any}
      variants={{ rest: {}, hover: {} }}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={[
        "group inline-flex items-center gap-3 rounded-full",
        "bg-primary text-white",
        "px-6 py-3 font-medium",
        "shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
        "overflow-hidden select-none",
        className,
      ].join(" ")}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <span>{label}</span>

      <span className="relative h-6 w-6 overflow-hidden">
        {/* Arrow A */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            rest: { x: 0, y: 0, opacity: 1 },
            hover: { x: v.x, y: v.y, opacity: 0 },
          }}
          transition={spring}
        >
          <Icon className="h-6 w-6" />
        </motion.span>

        {/* Arrow B */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            rest: { x: -v.x, y: -v.y, opacity: 0 },
            hover: { x: 0, y: 0, opacity: 1 },
          }}
          transition={spring}
        >
          <Icon className="h-6 w-6" />
        </motion.span>
      </span>
    </Base>
  );
}
