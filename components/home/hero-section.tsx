import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foreground">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, hsl(213, 80%, 50%) 0%, transparent 50%), radial-gradient(circle at 75% 50%, hsl(200, 75%, 45%) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="text-xs font-medium text-primary">
                Professional HVAC Solutions
              </span>
            </div>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight text-card md:text-5xl lg:text-6xl">
              <span className="text-balance">Expert HVAC &amp; Technical Services You Can Trust</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-card/70">
              Gayithi Technical Services delivers premium AC installation, maintenance, repair, ducting, and ventilation solutions for residential and commercial properties.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="font-medium">
                <Link href="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-card/20 font-medium text-card hover:bg-card/10 hover:text-card bg-transparent"
              >
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>

        
          </div>

          {/* Right side visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[420px] w-full max-w-md overflow-hidden rounded-2xl">
              <Image
                src="/images/hvac-hero.png"
                alt="Professional HVAC technician working on air conditioning unit"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
