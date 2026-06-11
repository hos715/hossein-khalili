"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { social } from "@/content/data/social";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

export function ContactForm() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setBusy(true);
    setStatus("idle");

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;

    setStatus("success");
    setBusy(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          {t("formName")}
        </label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={status === "error" && !name.trim()}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          {t("formEmail")}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          dir="ltr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={status === "error" && !email.includes("@")}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          {t("formMessage")}
        </label>
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={status === "error" && !message.trim()}
        />
      </div>
      <Button type="submit" aria-busy={busy} disabled={busy}>
        {busy ? t("formSending") : t("formSubmit")}
      </Button>
      {status === "success" && (
        <p role="status" className="text-sm text-muted-foreground">
          {t("formSuccess")}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {t("formError")}
        </p>
      )}
    </form>
  );
}
