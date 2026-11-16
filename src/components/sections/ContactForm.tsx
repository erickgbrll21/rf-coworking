"use client";

import { useState } from "react";
import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { site } from "@/lib/site";
import { FaIcon } from "@/components/ui/FaIcon";

const services = [
  "Sala Privativa",
  "Endereço Fiscal",
  "Open Office",
  "Sala de Reunião",
  "Outro",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: services[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, sou ${form.name}.\n` +
        `E-mail: ${form.email}\n` +
        `Telefone: ${form.phone}\n` +
        `Interesse: ${form.interest}\n\n` +
        `${form.message}`
    );
    window.open(`https://wa.me/${site.whatsapp.raw}?text=${text}`, "_blank");
    setSent(true);
  };

  const labelClass =
    "mb-2 block text-[11px] uppercase tracking-[0.24em] text-bone-300/70";
  const inputClass =
    "w-full min-w-0 max-w-full rounded-none border-b border-white/15 bg-transparent px-1 py-4 text-base text-bone-50 placeholder:text-bone-300/60 transition-colors hover:border-white/30 focus:border-silver focus:outline-none focus-visible:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Nome
          </label>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            required
            className={inputClass}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Seu nome completo…"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            E-mail
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            required
            className={inputClass}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            Telefone / WhatsApp
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className={inputClass}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(91) 99999-9999"
          />
        </div>
        <div>
          <label htmlFor="cf-interest" className={labelClass}>
            Interesse
          </label>
          <select
            id="cf-interest"
            name="interest"
            className={inputClass + " appearance-none cursor-pointer"}
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
          >
            {services.map((s) => (
              <option key={s} value={s} className="bg-ink-900 text-bone-50">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Mensagem
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          className={inputClass + " resize-none"}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Conte um pouco sobre o que você precisa…"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="group inline-flex min-h-[48px] w-full max-w-md items-center justify-center gap-3 rounded-full border border-bone-50 bg-bone-50 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-ink-950 shadow-[0_10px_30px_-12px_rgba(255,255,255,0.35)] transition-[background-color,border-color,transform] duration-300 hover:border-silver-soft hover:bg-silver-soft active:scale-[0.98] sm:w-auto"
        >
          {sent ? (
            <>
              <FaIcon icon={faCheck} className="h-4 w-4" /> Mensagem enviada
            </>
          ) : (
            <>
              Enviar mensagem
              <FaIcon
                icon={faPaperPlane}
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>
        <p aria-live="polite" className="mt-4 text-xs text-bone-300/70">
          {sent
            ? "Abrimos o WhatsApp em uma nova aba com sua mensagem preenchida."
            : "Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida."}
        </p>
      </div>
    </form>
  );
}
