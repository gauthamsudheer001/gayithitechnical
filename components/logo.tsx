import Image from "next/image"

export function Logo({ className = "", size = "default" }: { className?: string; size?: "default" | "large" }) {
  const dimensions = size === "large" ? { img: 48, text: "text-xl" } : { img: 36, text: "text-lg" }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/images/gayithi-logo.png"
        alt="Gayithi Technical Services logo"
        width={dimensions.img}
        height={dimensions.img}
        className="object-contain"
        priority
      />
      <div className="flex flex-col leading-tight">
        <span className={`font-heading font-bold ${dimensions.text} tracking-tight text-primary`}>
          Gayithi
        </span>
        <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
          Technical Services
        </span>
      </div>
    </div>
  )
}
