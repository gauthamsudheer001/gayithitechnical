import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

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

    const result = await res.json()

    if (result.success) {
      setStatus("success")
      e.currentTarget.reset()
    } else {
      setStatus("error")
    }

  } catch (error) {
    setStatus("error")
  }
}

