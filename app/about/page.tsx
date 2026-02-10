import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Target, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Gayithi Technical Services",
  description:
    "Learn about Gayithi Technical Services LLC, established in 2024 with over 23 years of HVAC industry experience. Delivering reliable and efficient solutions for residential, commercial, and industrial clients.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </p>
            <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-card md:text-5xl">
              <span className="text-balance">Building Comfort, Delivering Trust</span>
            </h1>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                <span className="text-balance">Who We Are</span>
              </h2>
              <div className="max-w-4xl space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Gayithi Technical Services LLC is a specialized HVAC technical services company established in 2024, backed by over 23 years of industry experience. We deliver reliable and efficient solutions for residential, commercial, and industrial clients.
                </p>
                <p>
                  Our services include HVAC installation, repair, and maintenance, PI and GI ducting works, and electrical works, all executed in accordance with industry standards and safety regulations. We focus on quality workmanship, system efficiency, and long-term performance in every project we undertake.
                </p>
                <p>
                  By combining deep field experience with modern practices, Gayithi Technical Services LLC is committed to providing dependable technical services that meet client requirements and project timelines.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid items-start gap-6 sm:grid-cols-2">
              {/* Mission */}
              <div className="rounded-xl border border-border/60 bg-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To deliver top-tier HVAC solutions that combine technical expertise with customer-focused service, ensuring every client enjoys optimal indoor comfort and energy efficiency.
                </p>
              </div>
              {/* Vision */}
              <div className="rounded-xl border border-border/60 bg-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To be the most trusted and respected HVAC services provider in the region, recognized for innovation, quality, and dedication to building long-term client relationships.
                </p>
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
