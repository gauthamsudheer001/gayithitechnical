"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error("Failed to send")
      }

      setStatus("success")
      e.currentTarget.reset()
    } catch (error) {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border/60 bg-card p-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
          Message Sent Successfully
        </h3>
        <p className="mb-6 text-sm text-muted-foreground">
          Thank you for contacting Gayithi Technical Services. We will get back
          to you within 24 hours.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border/60 bg-card p-6 md:p-8"
    >
      <h3 className="mb-6 font-heading text-lg font-bold text-foreground">
        Send Us a Message
      </h3>

      {status === "error" && (
        <div className="mb-6 flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3">
          <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
          <p className="text-sm text-destructive">
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+971 XX XXX XXXX"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service Needed</Label>
          <select
            id="service"
            name="service"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select a service</option>
            <option value="AC Installation">AC Installation</option>
            <option value="AC Maintenance">AC Maintenance</option>
            <option value="AC Repair">AC Repair</option>
            <option value="GI & PI Ducting">GI & PI Ducting</option>
            <option value="Ventilation Systems">Ventilation Systems</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project..."
          />
        </div>

       <button
  type="submit"
  className="w-full rounded-md bg-primary px-4 py-2 text-white"
  disabled={status === "submitting"}
>

          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  )
}
