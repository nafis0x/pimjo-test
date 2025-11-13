import Achievement from "@/components/home/Achievement";
import HeroSection from "@/components/home/HeroSection";
import Newsletter from "@/components/home/Newsletter";
import Template from "@/components/home/Template";
import WhyUs from "@/components/home/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-dm">
      <HeroSection />
      <Achievement />
      <WhyUs />
      <Template />
      <Newsletter />
    </main>
  );
}
