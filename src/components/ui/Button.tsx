import Link from "next/link";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/cn";
import { FaIcon } from "@/components/ui/FaIcon";

type Variant = "solid" | "primary" | "outline" | "ghost";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  icon?: boolean;
};

const variants: Record<Variant, string> = {
  solid:
    "bg-bone-50 text-ink-950 border border-bone-50 shadow-[0_10px_30px_-12px_rgba(255,255,255,0.35)] hover:bg-silver-soft hover:border-silver-soft",
  primary:
    "bg-white/10 text-bone-50 border border-white/20 shadow-[0_4px_24px_-6px_rgba(255,255,255,0.15)] hover:bg-bone-50 hover:text-ink-950 hover:border-bone-50 hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.4)]",
  outline:
    "bg-transparent text-bone-50 border border-bone-50/30 hover:bg-bone-50 hover:text-ink-950 hover:border-bone-50",
  ghost:
    "bg-transparent text-bone-50 border border-transparent hover:bg-white/10 hover:border-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  icon = true,
}: Props) {
  const cls = cn(
    "group inline-flex min-h-[48px] max-w-full min-w-0 flex-nowrap items-center justify-center gap-x-2 rounded-full px-5 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.18em] transition-[background-color,border-color,color,box-shadow,transform] duration-300 active:scale-[0.98] sm:px-7 sm:text-[12px] sm:tracking-[0.22em]",
    variants[variant],
    className
  );

  const inner = (
    <>
      <span className="min-w-0 break-words">{children}</span>
      {icon && (
        <FaIcon
          icon={external ? faArrowUpRightFromSquare : faArrowRight}
          className={cn(
            "h-3.5 w-3.5 shrink-0 transition-transform duration-300",
            external
              ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              : "group-hover:translate-x-1"
          )}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
