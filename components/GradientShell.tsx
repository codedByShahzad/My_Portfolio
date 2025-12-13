"use client";

export default function GradientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      {/* ✅ Gradients only for navbar + hero */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Top-left (bigger in X axis) */}
        <div className="absolute top-30 -left-52 h-[520px] w-[980px] rounded-full bg-primary/25 blur-3xl" />

        {/* Bottom-right (bigger in X axis) */}
        <div className="absolute -bottom-52 -right-64 h-[560px] w-[1100px] rounded-full bg-purple-500/20 blur-3xl" />

        {/* Optional: subtle vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {children}
    </div>
  );
}
