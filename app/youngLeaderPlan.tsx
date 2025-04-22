import React from 'react';
import Image from 'next/image';
import bg1 from '@/assets/bg1.png';

function YoungLeaderPlan() {
  return (
    <section id="#home" className="relative w-full">
      {/* Background Image with priority loading */}
      <div className="absolute inset-0 -z-10">
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

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:py-4 z-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mt-10 md:mt-0 mb-8 text-center md:text-start text-[#221E52CC]">
          Young Leader Program
        </h1>

        {/* Content */}
        <div className="max-w-7xl mb-4 md:mb-12">
          <p className="text-lg md:text-xl text-center md:text-start text-[#221E52] leading-tight tracking-wider">
            The Young Leaders Program is a five week long, one-of-its kind program designed to give school students an exposure to real world problems and help them build skills that are essential for leadership in the 21st century. The students will get a rare opportunity to work on a project under close mentorship of experienced leaders from the corporate world.
          </p>
        </div>

        {/* YouTube Video Embed */}
        <div className="w-full aspect-video mt-10 md:mt-0 max-w-7xl mx-auto">
          <iframe
            className="w-full h-[200px] md:h-[493px] rounded-lg shadow-xl"
            src="https://www.youtube.com/embed/Yy0OKB-Xnzc" // Replace with your actual video ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default YoungLeaderPlan;