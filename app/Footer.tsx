import React from 'react';
import Image from 'next/image';
import logo from "@/assets/logo.png";
import { Phone, MapPin, Clock } from 'lucide-react';
import footerBg from "@/assets/footer.png";

function Footer() {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Class of 2025', href: '/Class' },
        { name: 'Teams', href: '/Teams' },
    ];

    const followUs = [
        { name: 'Facebook', href: 'https://www.facebook.com/leadschoolindia/' },
        { name: 'Twitter',  href: 'https://x.com/leadgroupindia' },
        { name: 'Instagram', href: 'https://www.instagram.com/leadschoolindia/' },
        { name: 'LinkedIn',  href: 'https://www.linkedin.com/school/leadgroupindia/' },
        { name: 'YouTube',  href: 'https://www.youtube.com/@LEADgroupindia' },
    ];

    const contactInfo = [
        { type: 'Phone', value: '+91 8682833333', icon: <Phone className="w-5 h-5" /> },
        { type: 'Time', value: '8:00 AM to 6:00 PM Monday to Saturday', icon: <Clock className="w-5 h-5" /> },
        { type: 'Address', value: 'Lotus Corporate Park, 6th Floor, F-Wing, 185/A, Graham Firth Compound, Goregaon (E), Western Express Highway, Mumbai – 400063', icon: <MapPin className="w-5 h-5" /> },
    ];
    
    return (
        <footer className="relative text-[#221E52] bg-white py-16 z-10">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 opacity-10">
                <Image 
                    src={footerBg} 
                    alt="Footer background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Content Row - Logo + 3 Columns */}
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Logo - Left Side */}
                    <div className="w-full md:w-auto">
                        <Image 
                            src={logo} 
                            alt="Young Leaders Logo" 
                            className="w-64 md:w-[600px]"
                            width={256}
                            height={64}
                        />
                    </div>

                    {/* Columns - Right Side */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
                        {/* Column 1 - Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-[#221E52]">Quick Links</h3>
                            <ul className="space-y-4 text-[#221E52]">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a 
                                            href={link.href} 
                                            className="hover:text-[#221E52] transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Column 2 - Follow Us */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-[#221E52]">Follow Us</h3>
                            <ul className="space-y-4 text-[#221E52]">
                                {followUs.map((link) => (
                                    <li key={link.name}>
                                        <a 
                                            href={link.href} 
                                            target='_blank'
                                            className="hover:text-[#221E52] transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                      
                        {/* Column 3 - Contact Us - Full width on mobile */}
                        <div className="col-span-2 sm:col-span-1">
                            <h3 className="text-lg font-semibold mb-6 text-[#221E52]">Contact Us</h3>
                            <ul className="space-y-4 text-[#221E52CC]">
                                {contactInfo.map((info) => (
                                    <li key={info.type} className="flex items-start gap-3">
                                        <span className="mt-0.5 text-[#221E52]">{info.icon}</span>
                                        <div>
                                            <p className="font-medium text-[#221E52]">{info.type}</p>
                                            <p className="hover:text-[#221E52] transition-colors">{info.value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-[#221E5220] mt-16 pt-8 text-center text-[#221E52CC]">
                    <p>© {new Date().getFullYear()} Young Leaders Program. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;