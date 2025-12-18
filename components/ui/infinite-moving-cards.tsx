"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current?.style.setProperty(
      "--animation-duration",
      duration
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="group relative w-[340px] md:w-[420px] shrink-0 rounded-2xl 
            border border-white/10 
            bg-white/5 backdrop-blur-xl
            px-7 py-6
            transition-all duration-300
            hover:border-purple-500/40
            hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
          >
            {/* Glow Layer */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <blockquote className="relative z-10">
              <p className="text-sm leading-relaxed text-gray-300">
                “{item.quote}”
              </p>

              <div className="mt-6 flex items-center gap-3">
                {/* Avatar */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full 
                  bg-purple-600/20 text-purple-400 font-semibold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.title}
                  </p>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
