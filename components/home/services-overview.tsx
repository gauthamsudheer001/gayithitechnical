import Link from "next/link"
import { Snowflake, Wrench, Settings, Wind, ArrowRight, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Snowflake,
    title: "AC Installation",
    description:
      "Professional installation of split, central, and ductless AC systems tailored to your space for optimal cooling performance.",
  },
  {
    icon: Settings,
    title: "AC Maintenance",
    description:
      "Preventive maintenance programs to keep your AC systems running at peak efficiency and extend equipment lifespan.",
  },
  {
    icon: Wrench,
    title: "AC Repair",
    description:
      "Fast and reliable AC repair services by certified technicians to restore your comfort quickly.",
  },
  {
    icon: Layers,
    title: "GI & PI Ducting",
    description:
      "Custom fabrication and installation of galvanized iron and pre-insulated ducting for commercial and residential projects.",
  },
  {
    icon: Wind,
    title: "Ventilation Systems",
    description:
      "Complete ventilation solutions including design, installation, and maintenance for healthy indoor air quality.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Comprehensive HVAC Solutions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            From installation to repair, we provide end-to-end HVAC services designed to deliver comfort, efficiency, and reliability for every client.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/60 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-accent"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
