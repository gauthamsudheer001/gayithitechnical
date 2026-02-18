import Image from "next/image"
import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["900"], // Extra Bold
})

export function Logo({
  className = "",
  size = "default",
}: {
  className?: string
  size?: "default" | "large"
}) {
  const dimensions =
    size === "large"
      ? { img: 48, text: "text-xl" }
      : { img: 36, text: "text-lg" }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/images/logo2.jpeg"
        alt="Company Logo"
        width={dimensions.img}
        height={dimensions.img}
        className="object-contain"
        priority
      />

      {/* DM Sans 900 applied only here */}
      <div className={`flex flex-col leading-tight ${dmSans.className}`}>
        <span
          className={`font-black ${dimensions.text} tracking-tight text-primary`}
        >
          Gayithi
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          Technical Services
        </span>
      </div>
    </div>
  )
}


