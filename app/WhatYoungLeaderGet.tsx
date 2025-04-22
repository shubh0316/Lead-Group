import React from "react";
import bg1 from "@/assets/bg1.png";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import icon4 from "@/assets/icon4.png";
import Image from "next/image";
import girl from "@/assets/girl.png";
import bgMobile from "@/assets/bgMobile.png";

function WhatYoungLeaderGet() {
  const benefitsData = [
    {
      id: 1,
      icon: icon1,
      text: (
        <>
          A Platform To Build
          Real-World Problem-<br />
          Solving Skills.
        </>
      ),
      position: "left",
      hasLineBreak: true
    },
    {
      id: 2,
      icon: icon2,
      text: "Exposure to expert mentors for unmatched guidance.",
      position: "left",
      hasLineBreak: true
    },
    {
      id: 3,
      icon: icon3,
      text: (
        <>
          Opportunity to collaborate
          with students from different
          parts of the country.
        </>
      ),
      position: "right",
      hasLineBreak: false
    },
  
    {
      id: 2,
      icon: icon4,
      text: "Recognition and transformation.",
      position: "right",
      hasLineBreak: false
    }
  ];

  return (
    <section className="relative w-full">
      {/* Desktop Background Image - hidden on mobile */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src={bg1}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className='object-cover'
        />
      </div>

      {/* Mobile Background Image - shown only on mobile */}
      <div className="absolute inset-0 -z-10 md:hidden">
        <Image
          src={bgMobile}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className='object-cover'
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl md:mt-0 mt-10 font-bold md:mb-10 text-[#221E52] text-center">
          What The Young Leaders Get?
        </h1>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mb-0 md:mb-8 md:gap-4">
          {/* Left Column - appears first on mobile */}
          <div className="flex flex-col md:mt-0 mt-10 justify-between space-y-6 md:space-y-8 order-1 md:order-1">
            {benefitsData
              .filter(item => item.position === "left")
              .map(item => (
                <div key={item.id} className="flex flex-col items-start">
                  <Image
                    src={item.icon}
                    priority
                    alt="Benefit Icon"
                    className="w-14 h-14 md:w-16 md:h-16"
                  />
                  <p className="text-[#221E52] text-base md:text-lg text-start mt-2 md:mt-3 leading-tight">
                    {item.text}
                  </p>
                </div>
              ))}
          </div>

          {/* Center Image - appears last on mobile */}
          <div className="flex items-center justify-center order-3 md:order-2 md:mb-0 md:my-0">
            <Image 
              src={girl} 
              alt="Young leader" 
              className="w-full h-auto max-w-xs md:max-w-md" 
              priority
            />
          </div>

          {/* Right Column - appears second on mobile */}
          <div className="flex flex-col justify-between space-y-6 md:space-y-8 order-2 md:order-3">
            {benefitsData
              .filter(item => item.position === "right")
              .map(item => (
                <div key={item.id} className="flex flex-col items-start">
                  <Image
                    src={item.icon}
                    priority
                    alt="Benefit Icon"
                    className="w-14 h-14 md:w-16 md:h-16"
                  />
                  <p className="text-[#221E52] text-base md:text-lg text-start mt-2 md:mt-3">
                    {item.text}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatYoungLeaderGet;