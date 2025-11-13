import Achievement from "@/components/home/Achievement";
import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-dm">
      <HeroSection />
      <Achievement />
      <h1>Hello pimjo</h1>
    </main>
  );
}
