import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PainPoints } from "@/components/pain-points";
import { Pricing } from "@/components/pricing";
import { SocialProof } from "@/components/social-proof";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <Navbar />
      <Hero />
      <PainPoints />
      <FeaturesSection />
      <div id="pricing">
        <Pricing />
      </div>
      <SocialProof />
      <FAQ />
      <div id="download">
        <Footer />
      </div>
    </main>
  );
}
