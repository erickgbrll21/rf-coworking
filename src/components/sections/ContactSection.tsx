import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import {
  faArrowRight,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "@/components/ui/FaIcon";

export function ContactSection() {
  return (
    <>
      <section id="contato" className="scroll-mt-28 bg-ink-900 py-20 md:py-36">
        <div className="container grid min-w-0 max-w-full gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <h2 className="heading-display text-4xl text-balance md:text-5xl">
                Envie sua mensagem.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-bone-300/75">
                Agende uma visita, peça uma proposta ou tire suas dúvidas.
                Ao enviar, você será direcionado ao WhatsApp com a mensagem
                pré-formatada.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          <aside className="min-w-0 space-y-8 lg:col-span-5">
            <Reveal>
              <div className="rounded-2xl border border-white/8 bg-ink-950 p-8">
                <FaIcon icon={faClock} className="h-6 w-6 text-silver" />
                <h3 className="mt-5 font-display text-2xl text-bone-50">
                  Horário de funcionamento
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-bone-300/80">
                  <li className="flex flex-col gap-1 border-b border-white/5 pb-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="shrink-0">Recepção</span>
                    <span className="min-w-0 text-bone-50 [overflow-wrap:anywhere] sm:text-right">
                      {site.hours.week}
                    </span>
                  </li>
                  <li className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <span>Acesso clientes</span>
                    <span className="text-silver">24 horas</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/8 bg-ink-950 p-8">
                <FaIcon icon={faLocationDot} className="h-6 w-6 text-silver" />
                <h3 className="mt-5 font-display text-2xl text-bone-50">
                  Onde estamos
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bone-300/80 [overflow-wrap:anywhere]">
                  {site.address.full}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-silver transition-colors hover:text-bone-50"
                >
                  Abrir no Google Maps
                  <FaIcon icon={faArrowRight} className="h-3 w-3" />
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-ink-950" aria-label="Localização">
        <div className="relative h-[42svh] min-h-[260px] w-full overflow-hidden border-t border-white/5 sm:h-[420px] md:h-[520px]">
          <iframe
            src={site.mapsEmbed}
            className="map-frame absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa ${site.name}`}
          />
        </div>
      </section>
    </>
  );
}
