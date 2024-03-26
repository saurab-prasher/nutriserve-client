"use client";

import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";
import HowItWorks from "./components/HowItWorks";
import GoodForYou from "./components/GoodForYou";
import Menu from "./components/Menu";
import RootLayout from "./layout";

export default function Home() {
  return (
    <div className='m-auto'>
      <HeroSection />
      <Testimonial />
      <HowItWorks />
      <GoodForYou />
      <Menu />
    </div>
  );
}
