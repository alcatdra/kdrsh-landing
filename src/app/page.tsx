import { ComfortSection } from "@/components/landing/comfort-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { JourneySection } from "@/components/landing/journey-section";
import { ProgressSection } from "@/components/landing/progress-section";
import { ServiceSection } from "@/components/landing/service-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TeamSection } from "@/components/landing/team-section";
import { TrustSection } from "@/components/landing/trust-section";
import { WhyChooseUsSection } from "@/components/landing/why-choose-us-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <HeroSection />
        <TrustSection />
        <WhyChooseUsSection />
        <JourneySection />
        <ServiceSection />
        <ProgressSection />
        <TeamSection />
        <ComfortSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
