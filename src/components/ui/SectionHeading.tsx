import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

type Props = {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl min-w-0",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <h2 className="heading-display text-3xl text-balance sm:text-4xl md:text-5xl lg:text-6xl [overflow-wrap:anywhere]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.08}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-pretty text-base leading-relaxed text-bone-300/75 [overflow-wrap:anywhere] md:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
