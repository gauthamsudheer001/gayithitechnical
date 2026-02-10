import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Skilled Technical Team",
    description:
      "Our certified technicians bring years of hands-on experience to every project, ensuring precision workmanship and lasting results.",
  },
  {
    title: "Quality Workmanship",
    description:
      "We use premium-grade materials and follow industry best practices to deliver HVAC solutions that stand the test of time.",
  },
  {
    title: "Customer-First Approach",
    description:
      "From initial consultation to project completion, we prioritize clear communication, transparency, and your complete satisfaction.",
  },
  {
    title: "Competitive Pricing",
    description:
      "We offer fair, transparent pricing with no hidden fees. Get premium HVAC services that deliver real value for your investment.",
  },
  {
    title: "Timely Delivery",
    description:
      "We respect your schedule and commit to completing every project on time, with minimal disruption to your daily routine.",
  },
  {
    title: "After-Service Support",
    description:
      "Our relationship does not end at installation. We provide ongoing maintenance, warranty support, and 24/7 emergency assistance.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </p>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <span className="text-balance">Trusted by Hundreds of Satisfied Clients</span>
            </h2>
            <p className="mb-8 max-w-lg leading-relaxed text-muted-foreground">
              Gayithi Technical Services is committed to delivering exceptional HVAC solutions backed by expertise, reliability, and an unwavering dedication to client satisfaction.
            </p>
            <div className="relative rounded-xl border border-border/60 bg-card p-6">
              <p className="mb-3 text-sm italic leading-relaxed text-muted-foreground">
                &quot;Gayithi Technical Services exceeded our expectations. Their team was professional, punctual, and delivered outstanding results. We highly recommend them for any HVAC project.&quot;
              </p>
              <div>
                <p className="font-heading text-sm font-bold text-foreground">Ahmed Al-Rashid</p>
                <p className="text-xs text-muted-foreground">Facility Manager, Commercial Building</p>
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-lg border border-border/60 bg-card p-5 transition-shadow hover:shadow-md"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                <h3 className="mb-1.5 font-heading text-sm font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
