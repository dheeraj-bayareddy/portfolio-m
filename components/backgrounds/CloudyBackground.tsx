export function CloudyBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #e9def2 0%, #f6dfe4 40%, #fbf1e2 75%, #fdf6ec 100%)",
      }}
    >
      <div
        className="animate-cloud-drift absolute -left-24 top-[-10%] h-[420px] w-[560px] rounded-full opacity-70 blur-3xl"
        style={{ background: "rgba(255,255,255,0.85)" }}
      />
      <div
        className="animate-cloud-drift absolute right-[-15%] top-[5%] h-[360px] w-[480px] rounded-full opacity-60 blur-3xl"
        style={{ background: "rgba(255,223,214,0.75)", animationDelay: "-8s" }}
      />
      <div
        className="animate-cloud-drift absolute left-[10%] bottom-[-15%] h-[380px] w-[620px] rounded-full opacity-70 blur-3xl"
        style={{ background: "rgba(232,220,245,0.8)", animationDelay: "-16s" }}
      />
      <div
        className="animate-cloud-drift absolute right-[5%] bottom-[-20%] h-[300px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{ background: "rgba(255,246,224,0.85)", animationDelay: "-4s" }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(120,90,110,0.08) 100%)",
        }}
      />
    </div>
  );
}
