import { useState } from "react";
import type { FormEvent } from "react";
import { contact } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [sent, setSent] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  // No backend required: this composes a pre-filled email and opens the user's
  // mail client. To collect submissions server-side later, swap this handler for
  // a POST to a form service (Formspree, Web3Forms) or your own API endpoint.
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website contact — ${form.name || "New message"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org}\n\n${form.message}`
    );
    window.location.href = `mailto:${contact.details.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder-ink/40 focus:border-moss";

  return (
    <section id="contact" className="bg-paper py-24 md:py-32">
      <div className="container-px grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Details */}
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow leaf-rule">{contact.eyebrow}</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/75">{contact.body}</p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-eyebrow text-moss">
                  Address
                </dt>
                <dd className="mt-1 text-ink/80">{contact.details.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-eyebrow text-moss">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.details.email}`}
                    className="text-forest underline-offset-4 hover:underline"
                  >
                    {contact.details.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-eyebrow text-moss">
                  Phone
                </dt>
                <dd className="mt-1 space-y-1">
                  {contact.details.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block text-ink/80 hover:text-forest"
                    >
                      {p}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal className="md:col-span-7" delay={100}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-bone p-7 md:p-9"
          >
            <h3 className="font-display text-xl text-ink">Send us a message</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                className={field}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
              <input
                className={field}
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
              />
            </div>
            <input
              className={`${field} mt-4`}
              placeholder="Organization (optional)"
              value={form.org}
              onChange={(e) => update("org", e.target.value)}
            />
            <textarea
              className={`${field} mt-4 min-h-[140px] resize-y`}
              placeholder="How can we collaborate?"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-5 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-moss"
            >
              Send message
            </button>
            {sent && (
              <p className="mt-4 text-sm text-moss">
                Your email client should now be open with the message ready to send.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
