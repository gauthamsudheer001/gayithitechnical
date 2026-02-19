"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, AlertCircle } from "lucide-react"

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

    console.log("Status:", res.status)

    if (res.status === 200) {
      setStatus("success")
      e.currentTarget.reset()
    } else {
      setStatus("error")
    }

  } catch (error) {
    console.error("Error:", error)
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
        <button
          onClick={() => setStatus("idle")}
          className="rounded-md border px-4 py-2"
        >
          Send Another Message
        </button>
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
        <div className="mb-6 flex items-center gap-2 rounded-lg border border-red-300 bg-red-100 px-4 py-3">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <p className="text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service Needed</Label>
          <select
            id="service"
            name="service"
            className="w-full rounded-md border px-3 py-2"
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
          <Label htmlFor="message">Message *</Label>
          <Textarea id="message" name="message" rows={5} required />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  )
}
