import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";
import type { FAQItem } from "@/lib/faqs";
import { cn } from "@/lib/cn";

type Props = {
  items: FAQItem[];
  title?: React.ReactNode;
  className?: string;
};

export function FAQSection({
  items,
  title = "Perguntas frequentes.",
  className,
}: Props) {
  return (
    <section className={cn("py-28 md:py-36", className ?? "bg-ink-950")}>
      <div className="container max-w-4xl">
        <SectionHeading title={title} />
        <div className="mt-14">
          <FAQ items={items} />
        </div>
      </div>
    </section>
  );
}
