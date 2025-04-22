'use client';

import React from 'react';

type LeaderboardEntry = {
  rank: number;
  team: string;
  project: string;
  votes: string;
};

const data: LeaderboardEntry[] = [
  { rank: 4, team: 'Team A', project: 'Build Innovative Strategies To Transform Schools Into Eco-Friendly And Green Spaces', votes: '1,000' },
  { rank: 5, team: 'Team B', project: 'Sustainable Water Conservation System', votes: '950' },
  { rank: 6, team: 'Team C', project: 'AI-Powered Waste Management', votes: '900' },
  { rank: 7, team: 'Team D', project: 'Renewable Energy Solutions', votes: '850' },
  { rank: 8, team: 'Team E', project: 'Urban Green Spaces Initiative', votes: '800' },
];

const LeaderboardSection = () => {
  return (
    <div className="bg-[#f3f0ff] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header - hidden on mobile, shown on md+ */}
        <div className="relative overflow-hidden pl-8 md:pl-10 hidden md:block">
          <div className="grid grid-cols-10 min-w-[600px] bg-[#2c1e80] text-white font-semibold rounded-xl py-4 px-6 text-sm md:text-base mb-6">
            <div className="col-span-3">Team Name</div>
            <div className="col-span-5">Project Name</div>
            <div className="col-span-2 text-right">Total Votes</div>
          </div>
        </div>

        {/* Mobile header */}
        <div className="md:hidden text-[#2c1e80] font-semibold text-lg mb-4 pl-4">
          Leaderboard
        </div>

        {/* Entries */}
        <div className="space-y-3 md:space-y-5">
          {data.map((entry) => (
            <div key={entry.rank} className="relative flex md:mb-5 min-h-[70px] md:min-h-[80px] pl-8 md:pl-10">
              {/* Rank */}
              <div className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 w-8 h-16 md:w-12 md:h-20 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-[#2c1e80] font-medium shadow-md text-sm md:text-base">
                {entry.rank}
              </div>

              {/* Card - different layout for mobile */}
              <div className="flex-1 min-w-0 bg-white rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-5 shadow-sm">
                {/* Mobile layout */}
                <div className="md:hidden space-y-1">
                  <div className="flex justify-between">
                    <div className="text-[#2c1e80] font-medium text-sm truncate max-w-[60%]">
                      {entry.team}
                    </div>
                    <div className="text-[#2c1e80] text-sm font-semibold">
                      {entry.votes} votes
                    </div>
                  </div>
                  <div className="text-[#2c1e80] text-xs leading-snug line-clamp-2">
                    {entry.project}
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-10 items-center">
                  <div className="col-span-3 text-[#2c1e80] font-medium text-sm">
                    {entry.team}
                  </div>
                  <div className="col-span-5 text-[#2c1e80] text-sm leading-snug">
                    {entry.project}
                  </div>
                  <div className="col-span-2 text-[#2c1e80] text-sm font-semibold text-right">
                    {entry.votes}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardSection;