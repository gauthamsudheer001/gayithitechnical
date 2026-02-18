import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import {
  Snowflake,
  Settings,
  Wrench,
  Layers,
  Wind,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Gayithi Technical Services",
  description:
    "Explore our full range of HVAC services including AC installation, maintenance, repair, GI/PI ducting, and ventilation systems.",
}

const services = [
  {
    icon: Snowflake,
    title: "AC Installation",
    tagline: "Professional Cooling Solutions",
    description:
      "We provide expert installation of all types of air conditioning systems, including split units, central AC, VRF/VRV systems, and ductless mini-splits. Our team conducts thorough site assessments to recommend the optimal system for your space, ensuring maximum cooling performance and energy efficiency.",
    features: [
      "Split and multi-split AC systems",
      "Central air conditioning",
      "VRF/VRV system installation",
      "Ductless mini-split units",
      "Load calculation and system sizing",
      "Post-installation testing and commissioning",
    ],
  },
  {
    icon: Settings,
    title: "AC Maintenance",
    tagline: "Keep Your Systems Running Smoothly",
    description:
      "Regular maintenance is the key to extending your AC system's lifespan and maintaining optimal performance. Our preventive maintenance programs include comprehensive inspections, filter replacements, coil cleaning, refrigerant checks, and performance optimization to prevent costly breakdowns.",
    features: [
      "Scheduled preventive maintenance plans",
      "Filter cleaning and replacement",
      "Coil and condenser cleaning",
      "Refrigerant level checks and top-ups",
      "Thermostat calibration",
      "Performance and efficiency reports",
    ],
  },
  {
    icon: Wrench,
    title: "AC Repair",
    tagline: "Fast, Reliable Repair Services",
    description:
      "When your AC breaks down, you need fast and reliable repair services. Our certified technicians diagnose and fix all types of AC issues, from compressor failures and refrigerant leaks to electrical faults and sensor problems. We carry common replacement parts for quick turnaround times.",
    features: [
      "Emergency and same-day repairs",
      "Compressor and motor replacement",
      "Refrigerant leak detection and repair",
      "Electrical and control system repair",
      "Thermostat troubleshooting",
      "Complete system diagnostics",
    ],
  },
  {
    icon: Layers,
    title: "GI & PI Ducting",
    tagline: "Custom Ductwork Solutions",
    description:
      "We specialize in the design, fabrication, and installation of galvanized iron (GI) and pre-insulated (PI) ductwork for commercial and residential HVAC systems. Our ductwork is precision-engineered to deliver efficient airflow, minimize energy loss, and meet all local building codes and standards.",
    features: [
      "GI duct fabrication and installation",
      "Pre-insulated duct systems",
      "Custom duct design and engineering",
      "Duct modification and retrofitting",
      "Insulation and sealing",
      "Code-compliant installations",
    ],
  },
  {
    icon: Wind,
    title: "Ventilation Systems",
    tagline: "Breathe Better, Live Better",
    description:
      "Proper ventilation is essential for healthy indoor air quality and regulatory compliance. We design and install complete ventilation solutions including exhaust systems, fresh air supply systems, kitchen and bathroom ventilation, and specialized systems for commercial and industrial facilities.",
    features: [
      "Exhaust and supply air systems",
      "Kitchen hood and exhaust installation",
      "Bathroom and laundry ventilation",
      "Heat recovery ventilators (HRV)",
      "Industrial and commercial ventilation",
      "Indoor air quality assessments",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
        <section className="bg-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Services
            </p>

            <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-card md:text-5xl">
              Complete HVAC Solutions for Every Need
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-card/70">
              From installation to ongoing maintenance and emergency repairs,
              we offer a comprehensive suite of HVAC and technical services
              tailored to both residential and commercial clients.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-16">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="grid items-start gap-8 lg:grid-cols-1"
                >
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>

                    <p className="mb-1 text-sm font-medium text-primary">
                      {service.tagline}
                    </p>

                    <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {service.title}
                    </h2>

                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="mb-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild>
                      <Link href="/contact">
                        Request a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
