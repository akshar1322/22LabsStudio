import { Hero } from "@/app/components/sections/Hero";
import { Intro } from "@/app/components/sections/Intro";
import { Services } from "@/app/components/sections/Services";
import { Portfolio } from "@/app/components/sections/Portfolio";
import { Workflow } from "@/app/components/sections/Workflow";
import { Contact } from "@/app/components/sections/Contact";
import { BrandVideo } from "@/app/components/sections/BrandVideo";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Portfolio />
      <Workflow />
      <Contact />
      <BrandVideo />
    </>
  );
}
