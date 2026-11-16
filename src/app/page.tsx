import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { homeFaqs } from "@/lib/faqs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Differentials />
      <FAQSection items={homeFaqs} className="bg-ink-900" />
      <ContactSection />
    </>
  );
}
