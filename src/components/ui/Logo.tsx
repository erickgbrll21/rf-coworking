import Image from "next/image";
import { cn } from "@/lib/cn";
import logoSrc from "../../../assets/logo_rf_co_working (1).png";

type LogoProps = {
  className?: string;
  /** Use no header (LCP); no footer evita competir com o hero. */
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src={logoSrc}
      alt="RF Coworking"
      width={logoSrc.width}
      height={logoSrc.height}
      className={cn("h-12 w-auto object-contain object-left", className)}
      sizes="(max-width: 768px) 300px, 420px"
      priority={priority}
    />
  );
}
