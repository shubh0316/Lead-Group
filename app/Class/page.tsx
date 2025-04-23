"use client"
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import students from './students.json'; // Import your JSON data


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

function Page() {
  return (
    <div className="min-h-screen bg-[#F3F2FF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#221E52]">
            Class of 2025
          </h1>
        </div>
        
        {/* Two column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map through student cards */}
          {students.map((student) => (
            <Card key={student.id} className="hover:shadow-md border-none rounded-lg transition-shadow bg-white p-6">
              <div className="flex flex-row">
                {/* Image container - left side */}
                <div className="relative w-1/3 h-48 bg-gray-100 rounded-xl overflow-hidden">
  {student["Student's photo (In school uniform) - For all social media communication"] ? (
    <img
      src={convertToDirectLink(student["Student's photo (In school uniform) - For all social media communication"])}
      alt={`${student["Student name"]}'s profile`}
      className="w-full h-full object-cover"
      onError={(e) => {
        // Replace with placeholder when image fails to load
        e.currentTarget.onerror = null;
        e.currentTarget.src = '/student-placeholder.jpg';
      }}
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center text-gray-400">
      No photo available
    </div>
  )}
</div>
                
                {/* Text content - right side */}
                <div className="w-2/3 pl-4">
  <CardHeader className="p-0 pb-2">
    <CardTitle className="text-lg sm:text-xl">
      {student["Student name"]}
    </CardTitle>
    <CardDescription className="flex flex-wrap items-center text-sm">
      <span className='text-[#1F1463] font-extralight'>{student["Student's grade"]}</span>
      <span className="mx-1 text-[#1F1463] font-extralight">|</span>
      <span className='text-[#1F1463] font-extralight'>{student["Gender"]}</span>
      <span className="mx-1 text-[#1F1463] font-extralight">|</span>
      <span className='text-[#1F1463] font-extralight whitespace-normal break-all'>
        {student["School Name"]}
      </span>
    </CardDescription>
  </CardHeader>
  <CardContent className="p-0 pt-2">
    <p className='text-sm text-gray-600'>{student["Student Bio"]}</p>
  </CardContent>
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