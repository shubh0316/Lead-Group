"use client";
import hero from "@/assets/hero.png";  
import Image from "next/image";
import YoungLeaderPlan from "./youngLeaderPlan";
import WhoAreWe from "./WhoAreWe";
import WhatYoungLeaderGet from "./WhatYoungLeaderGet";
import WhatAreTheyOn from "./WhatAreTheyOn";
export default function Home() {
  return (
    <>
      <Image src={hero} alt="Hero" className="w-full overflow-hidden h-auto" priority />
      <YoungLeaderPlan />
      <WhoAreWe />
      <WhatYoungLeaderGet />
      <WhatAreTheyOn />
    </>
  );
}
