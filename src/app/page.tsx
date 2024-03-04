"use client";

import HomePage from "./pages";
import MealsPage from "./meals/page";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

// import { MenuIcon, XIcon } from "heroicons/react/outline";

export default function Home() {
  return (
    <div className=' m-auto'>
      <HeroSection />
    </div>
  );
}
