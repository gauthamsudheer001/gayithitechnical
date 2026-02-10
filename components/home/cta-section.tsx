import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-2xl bg-foreground p-8 text-center md:p-12 lg:p-16">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-card md:text-4xl">
            <span className="text-balance">Ready to Improve Your Indoor Comfort?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-card/70">
            Whether you need a new AC installation, routine maintenance, or emergency repair, our team is ready to help. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="font-medium"
            >
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-card/20 font-medium text-card hover:bg-card/10 hover:text-card bg-transparent"
            >
              <a href="tel:+971553659379">
                <Phone className="mr-2 h-4 w-4" />
                +971 553659379
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
