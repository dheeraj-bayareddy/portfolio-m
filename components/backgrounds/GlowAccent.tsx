export function GlowAccent() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-[-10%] top-[-10%] -z-10 h-[360px] w-[360px] rounded-full blur-3xl sm:h-[440px] sm:w-[440px]"
      style={{
        background:
          "radial-gradient(circle, rgba(255,154,92,0.55) 0%, rgba(255,154,92,0.18) 45%, transparent 75%)",
      }}
    />
  );
}
