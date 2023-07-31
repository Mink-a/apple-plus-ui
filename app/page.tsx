import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/main/hero";
import ValuePropsSection from "@/components/main/value-prop";
import ShowsSection from "@/components/main/shows";
import AppleTvSection from "@/components/main/apple-tv";
import FaqSection from "@/components/main/faq";
import AppleOneSection from "@/components/main/apple-one";
import PromotionSection from "@/components/main/apple-promo";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValuePropsSection />
      <ShowsSection />
      <AppleTvSection />
      <FaqSection />
      <AppleOneSection />
      <PromotionSection />
    </main>
  );
}
