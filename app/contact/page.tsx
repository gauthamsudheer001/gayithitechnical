import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Gayithi Technical Services",
  description:
    "Get in touch with Gayithi Technical Services for HVAC solutions, quotes, and support. Call, email, or send us a message.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+971 553659379", "+971 507914670"],
    action: { href: "tel:+971553659379", label: "Call Now" },
  },
  {
    icon: Mail,
    title: "Email",
    details: ["gayithitechnical@gmail.com"],
    action: { href: "mailto:gayithitechnical@gmail.com", label: "Send Email" },
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Dubai, United Arab Emirates"],
    action: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </p>
            <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-card md:text-5xl">
              <span className="text-balance">Get in Touch With Our Team</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-card/70">
              Have a question or need a quote? Reach out to us through any of the channels below. Our team is ready to help you with your HVAC needs.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-5">
              {/* Left: Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-bold text-foreground">
                          {item.title}
                        </h3>
                        {item.details.map((detail) => (
                          <p key={detail} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                        {item.action && (
                          <a
                            href={item.action.href}
                            className="mt-1 inline-block text-sm font-medium text-primary transition-colors hover:text-accent"
                          >
                            {item.action.label}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8 rounded-xl border border-border/60 bg-card p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25d366]/10">
                      <MessageCircle className="h-5 w-5 text-[#25d366]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-foreground">
                        Chat on WhatsApp
                      </h3>
                      <p className="text-xs text-muted-foreground">Quick response guaranteed</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/971553659379?text=Hello%20Gayithi%20Technical%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex w-full items-center justify-center rounded-md bg-[#25d366] px-4 py-2.5 text-sm font-medium text-card transition-colors hover:bg-[#20b858]"
                  >
                    Start a Chat
                  </a>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="lg:col-span-3">
                <ContactForm />
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
