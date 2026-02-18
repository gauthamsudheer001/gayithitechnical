import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-card/90">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-card/70 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-card/90">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {[
                "AC Installation",
                "AC Maintenance",
                "AC Repair",
                "GI & PI Ducting",
                "Ventilation Systems",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-card/70 hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-card/90">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <div className="flex flex-col">
                  <a href="tel:+971553659379" className="text-sm text-card/70 hover:text-primary">
                    +971 553659379
                  </a>
                  <a href="tel:+971507914670" className="text-sm text-card/70 hover:text-primary">
                    +971 507914670
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a href="mailto:gayithitechnical@gmail.com" className="text-sm text-card/70 hover:text-primary">
                  gayithitechnical@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-sm text-card/70">
                  Dubai, United Arab Emirates
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-card/10 pt-6 text-center">
        <p className="text-xs text-card/50">
  © {new Date().getFullYear()} Gayithi Technical Services. All rights reserved.
</p>

        </div>
      </div>
    </footer>
  )
}
