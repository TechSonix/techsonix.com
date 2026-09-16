"use client";
import { useState, type FormEvent } from "react";
import { site } from "../lib/site";
import { sendContact } from "../lib/contact";
export default function ContactForm({
  topic = "General inquiry",
}: {
  topic?: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.botcheck) return;
    setStatus("sending");
    try {
      await sendContact(data);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <form
      className="contact-form"
      action="https://api.web3forms.com/submit"
      method="POST"
      onSubmit={submit}
    >
      <input type="hidden" name="access_key" value={site.formKey} />
      <input type="hidden" name="subject" value={`TechSonix: ${topic}`} />
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave empty
          <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Your name <span>(optional)</span>
          <input name="name" autoComplete="name" maxLength={100} />
        </label>
        <label>
          Email address
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label>
        What can we help with?
        <select name="topic" defaultValue={topic}>
          {[
            "General inquiry",
            "Project inquiry",
            "EpixNet support",
            "Privacy request",
            "Data deletion request",
            "Content or copyright report",
            "Moderation appeal",
          ].map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </label>
      <label>
        Your message
        <textarea
          name="message"
          rows={6}
          required
          maxLength={8000}
          placeholder="Tell us what you need. For an app issue, include your platform and app version."
        />
      </label>
      <p className="form-note">
        Never include recovery phrases, private keys, wallet passwords, or
        illegal material. Messages go to TechSonix through Web3Forms. Read our{" "}
        <a href="/privacy/#contact">privacy policy</a>.
      </p>
      <button type="submit" className="button" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p className="form-status success">
            Your message was sent. We’ll reply to the email you provided.
          </p>
        )}
        {status === "error" && (
          <p className="form-status error">
            Delivery could not be confirmed. Your message is still here; please
            try again.
            {site.contactEmail && (
              <>
                {" "}
                You can also email{" "}
                <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
              </>
            )}
          </p>
        )}
      </div>
    </form>
  );
}
