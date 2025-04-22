import React from 'react'
import bg3 from '@/assets/bg3.png'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import image1 from '@/assets/carousel/image1.png'
import image2 from '@/assets/carousel/image2.png'
import image3 from '@/assets/carousel/image3.png'
import image5 from '@/assets/carousel/image5.png'
import image5v from '@/assets/carousel/5v.png'
import image6 from '@/assets/carousel/image6.png'
import image7 from '@/assets/carousel/image7.png'
import image8 from '@/assets/carousel/image8.png'
import image9 from '@/assets/carousel/image9.png'
import image10 from '@/assets/carousel/image10.png'
import Nithika from '@/assets/carousel/mentors/Nithika.jpeg'
import guruPrasad from '@/assets/carousel/mentors/guruPrasad.jpg'
import Sangeeta from "@/assets/carousel/mentors/SangeetaDas.jpeg"
import JyotiVatsal from "@/assets/carousel/mentors/JyotiVatsal.jpeg"
import LoluckBaby from "@/assets/carousel/mentors/LoluckBaby.jpeg"
import SandeepGulia from "@/assets/carousel/mentors/SandeepGulia.jpeg"
import KrishnaChaitanya from "@/assets/carousel/mentors/KrishnaChaitanya.jpeg"
import Shalini from "@/assets/carousel/mentors/Shalini.jpeg"
import SidddharthSonti from "@/assets/carousel/mentors/SidddharthSonti.jpeg"
import Ashish from "@/assets/carousel/mentors/Ashish.jpg"
function WhatAreTheyOn() {
  const projects = [
    {
      id: 1,
      projectName: "Build innovative strategies to transform schools into eco-friendly and green spaces",
      image: image1,
      mentor: {
        name: "Sidddharth Sonti",
        designation: "Curriculum Development Director, LEAD Group",
        avatar: SidddharthSonti
      }
    },
    {
      id: 2,
      projectName: "Designing a toolkit to promote kindness and enhance emotional well-being at home and school",
      image: image2,
      mentor: {
        name: "Nithika Yadav",
        designation: "Vice President- Academic Content Development, LEAD Group",
        avatar: Nithika
      }
    },
    {
      id: 3,
      projectName: "Devise innovative strategies to make at home learning fun and interesting",
      image: image3,
      mentor: {
        name: "Guruprasad Holla",
        designation: "Senior Vice President, Engineering, LEAD Group",
        avatar: guruPrasad
      }
    },
    {
      id: 4,
      projectName: " Reimagine the student app to better meet students' needs, and increase their engagement with the platform",
      image: image5,
      mentor: {
        name: "Ashish Jain",
        designation: "Senior Director, Technology, LEAD Group",
        avatar: Ashish
      }
    },
    {
      id: 5,
      projectName: " Creatively repurpose underutilized school spaces using the concept of Building as Learning Aid (BALA) to maximize their educational potential",
      image: image5v,
      mentor: {
        name: "Sangeeta Das",
        designation: "Curriculum Development Director, LEAD Group",
        avatar: Sangeeta
      }
    },
    {
      id: 6,
      projectName: "Create an Impactful Pitch Deck for New School Partnerships: Communicating the Value of LEAD",
      image: image6,
      mentor: {
        name: "Jyoti Vatsal",
        designation: "Vice President, Marketing, LEAD Group",
        avatar: JyotiVatsal
      }
    },
    {
      id: 7,
      projectName: " Create a New Parent Orientation Deck and strategies to increase parent attendance in school events",
      image: image7,
      mentor: {
        name: "Loluck Baby",
        designation: "Senior Zonal Academic Excellence Director, LEAD Group",
        avatar: LoluckBaby
      }
    },
    {
      id: 8,
      projectName: " Create opportunities to develop reading habits among students",
      image: image8,
      mentor: {
        name: "Sandeep Gulia",
        designation: "Zonal Academic Excellence Director, LEAD Group",
        avatar: SandeepGulia
      }
    },
    {
      id: 9,
      projectName: "Propose a framework for vocational studies curriculum in line with NCF",
      image: image9,
      mentor: {
        name: "AV Krishna Chaitanya",
        designation: "Zonal Academic Excellence Director, LEAD Group",
        avatar: KrishnaChaitanya
      }
    },
    {
      id: 10,
      projectName: "Develop a comprehensive social media strategy for LEAD",
      image: image10,
      mentor: {
        name: "Shalini Bhattacharya",
        designation: "Assistant Vice President, Communications & Public Relations, LEAD Group",
        avatar: Shalini
      }
    }
  ]

  return (
    <section className="relative w-full md:py-24  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bg3}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="object-cover bg-[#F3F2FF]"
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:mt-0 mt-10 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center text-[#221E52]">
          What are they working on?
        </h1>

        {/* Carousel Container */}
        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden">
                    {/* Image Container - Fixed to ensure full coverage */}
                    <div className="relative h-96 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.projectName}
                        fill
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold text-[#221E52] mb-4">
                        {project.projectName}
                      </h3>
                      
                      <div className="mt-auto">
                        <p className="text-sm text-[#221E52]/80 mb-2">Mentored by</p>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 border-2 border-[#221E52] flex-shrink-0">
                            {project.mentor.avatar ? (
                              <AvatarImage 
                                src={project.mentor.avatar.src} 
                                className="object-cover"
                              />
                            ) : (
                              <AvatarFallback className="bg-[#221E52] text-white font-medium">
                                {project.mentor.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div className="min-w-0">
                            <p className="font-medium text-[#221E52] truncate">{project.mentor.name}</p>
                            <p className="text-sm text-[#221E52]/60 ">
                              {project.mentor.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <div className="flex justify-center gap-8 mt-12">
              <CarouselPrevious className="relative left-0 right-0 transform-none -translate-y-0 bg-[#221E52] text-white hover:bg-[#221E52]/90 h-12 w-12 rounded-full shadow-md hover:scale-105 transition-transform" />
              <CarouselNext className="relative left-0 right-0 transform-none -translate-y-0 bg-[#221E52] text-white hover:bg-[#221E52]/90 h-12 w-12 rounded-full shadow-md hover:scale-105 transition-transform" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default WhatAreTheyOn