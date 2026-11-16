"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import heroPhoto from "../../../assets/coworking/IMG_1341.png";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bg.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const y = window.scrollY * 0.25;
      gsap.to(bg.current, { y, duration: 0.6, ease: "power2.out", overwrite: "auto" });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100svh] overflow-hidden bg-ink-950"
    >
      <div ref={bg} className="absolute -inset-20">
        <Image
          src={heroPhoto}
          alt="Interior do RF Coworking — espaço amplo, mesas e iluminação em Belém"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[center_40%] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/60 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/40 to-transparent" />
      </div>

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950/80 to-transparent" />

      <div className="relative z-10 container flex min-h-[100svh] min-w-0 max-w-full flex-col justify-center pt-28 pb-36 sm:pt-32 sm:pb-28">
        <motion.h1
          initial={{ opacity: 1, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="heading-display max-w-4xl text-[2.5rem] leading-[1.02] sm:text-6xl md:text-7xl xl:text-8xl text-balance break-words"
        >
          Seu espaço corporativo no <em className="font-display italic text-silver">coração</em> de Belém.
        </motion.h1>

        <motion.p
          initial={{ opacity: 1, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-pretty text-base md:text-lg leading-relaxed text-bone-300/85 [overflow-wrap:anywhere]"
        >
          Estrutura profissional, salas privativas e endereço empresarial
          de alto padrão para empresas e profissionais exigentes — no Ed.
          Rogelio Fernandez Business Center, na Cremação.
        </motion.p>

        <motion.div
          initial={{ opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex w-full min-w-0 flex-col gap-4 sm:max-w-none sm:flex-row sm:flex-wrap"
        >
          <Button href="/#contato" variant="solid">
            Agendar uma visita
          </Button>
          <Button href="/sobre" variant="outline">
            Conhecer o coworking
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
