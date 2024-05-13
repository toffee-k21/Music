'use client'

import { GridBackgroundDemo } from "@/components/Hero";
import { AnimatedPinDemo } from "@/components/Pin";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PostHero from "@/components/PostHero";

export default function Home() {
  const [darkMode,setDarkMode] = useState<string>('')

const handleDarkMode =()=> {
  darkMode == '' ? setDarkMode('dark') : setDarkMode('')
}

  return (
<div className="dark:bg-black">
{/* <button onClick={handleDarkMode} className=" text-white cursor-pointer">Dark mode</button> */}
<GridBackgroundDemo />
<PostHero />
{/* <div className="w-full
">
</div> */}
</div>
  );
}
