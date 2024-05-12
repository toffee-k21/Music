'use client'

import { Hero } from "@/components/Hero";
import { AnimatedPinDemo } from "@/components/Pin";
import { useState } from "react";

export default function Home() {
  const [darkMode,setDarkMode] = useState<string>('')

const handleDarkMode =()=> {
  darkMode == '' ? setDarkMode('dark') : setDarkMode('')
}

  return (
<>
{/* <button onClick={handleDarkMode} className=" text-white cursor-pointer">Dark mode</button> */}
<Hero />
<div className="flex">
<AnimatedPinDemo />
<AnimatedPinDemo />
<AnimatedPinDemo />
<AnimatedPinDemo />
</div>
</>
  );
}
