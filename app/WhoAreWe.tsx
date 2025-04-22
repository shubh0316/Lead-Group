import React from 'react'
import Image from 'next/image'
import bg2 from '@/assets/bg2.png'
import image1 from '@/assets/image1.png'

function WhoAreWe() {
    return (
        <section className="relative w-full">
            {/* Background Image with priority loading */}
            <div className="absolute inset-0 -z-10">
            <Image
                    src={bg2}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className="object-cover"
                />
            </div>
    
            {/* Content Container */}
            <div className="max-w-7xl items-center text-center mx-auto px-4 py-2">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl mt-10 md:mt-0  font-bold mb-8 text-[#221E52]">
                    Who are the Young Leaders?
                </h1>
    
                {/* Content */}
                <div className="max-w-7xl md:mb-12 text-start font-normal leading-tight tracking-wider">
                    <p className="text-lg md:text-xl text-center text-[#221E52]">
                        The top 50 students from the most progressive schools of the country who have cleared a rigorous selection process get to participate in this program.
                    </p>
                </div>
    
                {/* Image */}
                <div className="w-full max-w-7xl mx-auto">
                    <div className="relative w-full md:h-[761px] overflow-hidden">
                        <Image
                            src={image1}
                            alt="Young Leaders"
                            objectFit="cover"
                            quality={100}
                            className='"w-full overflow-hidden h-auto"'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoAreWe