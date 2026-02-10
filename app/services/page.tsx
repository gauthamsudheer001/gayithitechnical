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
  Phone,
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
              <span className="text-balance">Complete HVAC Solutions for Every Need</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-card/70">
              From installation to ongoing maintenance and emergency repairs, we offer a comprehensive suite of HVAC and technical services tailored to both residential and commercial clients.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  id={service.title.toLowerCase().replace(/[^a-z]/g, "-")}
                  className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-12 ${
                    index % 2 !== 0 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Content side */}
                  <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <p className="mb-1 text-sm font-medium text-primary">{service.tagline}</p>
                    <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <Button asChild>
                      <Link href="/contact">
                        Request a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Features side */}
                  <div
                    className={`rounded-xl border border-border/60 bg-card p-6 ${
                      index % 2 !== 0 ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                How We Work
              </p>
              <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                <span className="text-balance">Our Simple 4-Step Process</span>
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "We assess your needs and provide expert recommendations tailored to your space and budget.",
                },
                {
                  step: "02",
                  title: "Proposal",
                  description: "Receive a detailed, transparent quote with clear timelines and no hidden costs.",
                },
                {
                  step: "03",
                  title: "Execution",
                  description: "Our certified team carries out the work with precision, cleanliness, and minimal disruption.",
                },
                {
                  step: "04",
                  title: "Support",
                  description: "We provide ongoing maintenance, warranty support, and 24/7 emergency assistance.",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border border-border/60 bg-card p-6">
                  <span className="font-heading text-3xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="rounded-2xl bg-foreground p-8 text-center md:p-12">
              <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-card md:text-4xl">
                <span className="text-balance">Need a Custom HVAC Solution?</span>
              </h2>
              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-card/70">
                Every project is unique. Contact us today to discuss your requirements and get a tailored proposal from our HVAC experts.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="font-medium">
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-card/20 font-medium text-card hover:bg-card/10 hover:text-card bg-transparent"
                >
                  <a href="tel:+971000000000">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
