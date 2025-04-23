"use client";
import React from 'react';
import team from './team.json';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

function Page() {
    // Function to convert Google Drive view link to direct image URL
    const convertToDirectLink = (url: string): string => {
        if (!url) return '';
        
        // Handle Google Drive links
        if (url.includes('drive.google.com')) {
          // Extract file ID from various Google Drive URL formats
          let fileId = '';
          
          // Format 1: https://drive.google.com/file/d/FILE_ID/view
          if (url.includes('/file/d/')) {
            fileId = url.split('/file/d/')[1].split('/')[0];
          }
          // Format 2: https://drive.google.com/open?id=FILE_ID
          else if (url.includes('id=')) {
            fileId = url.split('id=')[1].split('&')[0];
          }
          
          if (fileId) {
            return `https://lh3.googleusercontent.com/d/${fileId}=s400?authuser=0`;
          }
        }
        
        return url;
    };

    return (
        <div className="min-h-screen bg-[#F3F2FF] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#221E52]">
                        Teams
                    </h1>
                </div>
                
                {/* Groups Section */}
                <div className="space-y-6">
                    {team.groups.map((group) => (
                        <Card key={group.group} className="mb-8">
                            <div className="w-full bg-white p-4 rounded-2xl">
                                {/* Group Info Card */}
                                <div className="bg-[#F3F2FF] rounded-lg p-6 shadow-sm">
                                    <h1 className="text-2xl font-bold text-[#221E52]">Group {group.group}</h1>
                                    <p className="text-md font-normal text-[#221E52] mt-2">{group.project}</p>
                                    
                                    {/* Mentor */}
                                    <div className="flex items-center space-x-3 mt-4">
                                        <div className='flex flex-col space-y-2'> 
                                            <span className="text-gray-600">Mentored by:</span>
                                            <div className="flex items-center space-x-3">
                                                {group.mentorPhoto ? (
                                                    <div className="h-14 w-14 rounded-full overflow-hidden">
                                                        <Image
                                                            src={group.mentorPhoto}
                                                            width={40}
                                                            height={40}
                                                            className="h-full w-full object-cover"
                                                            alt={group.mentor}
                                                            onError={(e) => {
                                                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${group.mentor.replace(' ', '+')}&background=random`;
                                                            }}
                                                        />
                                                    </div>
                                                ) : (
                                                    <img 
                                                        src={`https://ui-avatars.com/api/?name=${group.mentor.replace(' ', '+')}&background=random`} 
                                                        className="h-10 w-10 rounded-full object-cover"
                                                        alt={group.mentor}
                                                    />
                                                )}
                                                <div className='flex flex-col'>  
                                                <span className="font-semibold text-[#221E52] text-lg">{group.mentor}</span>
                                                <span className="font-normal text-[#221E52] text-md">{group.designation}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Team Members Section */}
                                <div className='p-6'>
                                    <div className='text-2xl font-bold text-[#221E52] mb-6'>
                                        Team Members
                                    </div>
                                    
                                    <div className="flex flex-wrap justify-between gap-y-8">
                                        {group.students.map((student, index) => (
                                            <div key={index} className="flex flex-col items-center w-[calc(20%-1rem)] min-w-[150px]">
                                                <div className="h-40 w-40 mb-3 rounded-lg overflow-hidden shadow-md">
                                                    <img 
                                                        src={convertToDirectLink(student.photo)} 
                                                        className="h-full w-full object-cover"
                                                        alt={student.name}
                                                        onError={(e) => {
                                                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${student.name.replace(' ', '+')}&background=random`;
                                                        }}
                                                    />
                                                </div>
                                                <div className="text-center w-full">
                                                    <p className="font-medium">{student.name}</p>
                                                    <p className="text-sm text-gray-600 text-start">
                                                        <span>{student.grade}</span> | <span>{student.school}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Page;