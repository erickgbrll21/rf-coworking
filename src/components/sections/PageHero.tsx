import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "@/components/ui/Reveal";
import { FaIcon } from "@/components/ui/FaIcon";

type Crumb = { label: string; href?: string };

type Props = {
  title: React.ReactNode;
  description?: React.ReactNode;
  image: string | StaticImageData;
  /** Acessibilidade: descreva a foto quando não for só decorativa. */
  imageAlt?: string;
  crumbs?: Crumb[];
};

export function PageHero({
  title,
  description,
  image,
  imageAlt = "",
  crumbs,
}: Props) {
  const isStatic = typeof image === "object";

  return (
    <section className="relative overflow-hidden bg-ink-950 pt-28 pb-20 sm:pt-32 md:pt-44 md:pb-32">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          placeholder={isStatic ? "blur" : undefined}
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-ink-950" />
      </div>

      <div className="relative container min-w-0 max-w-full">
        {crumbs && (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="flex max-w-full flex-wrap items-center gap-x-2 gap-y-2 text-[11px] uppercase tracking-[0.24em] text-bone-300/70"
            >
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-bone-50">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current={i === crumbs.length - 1 ? "page" : undefined}>
                      {c.label}
                    </span>
                  )}
                  {i < crumbs.length - 1 && (
                    <FaIcon icon={faChevronRight} className="h-2.5 w-2.5 text-bone-300/40" />
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        <Reveal delay={0.06}>
          <h1 className="heading-display mt-8 max-w-5xl text-4xl text-balance sm:text-5xl md:text-6xl lg:text-7xl [overflow-wrap:anywhere]">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-bone-300/75 [overflow-wrap:anywhere] md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
