import React from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "All Appointments", href: "/all-appointments" },
    { id: 3, label: "Dashboard", href: "/dashboard" },
  ];

  const socailLinks = [
    { id: 1, icon: <FaLinkedinIn size={16} />, href: "https://www.linkedin.com/in/hasibur-rahman19/" },
    { id: 2, icon: <FaXTwitter size={16} />, href: "https://x.com/" },
    { id: 3, icon: <FaGithub size={16} />, href: "https://github.com/HSBHasib" },
  ];

  return (
    <div className="bg-[#f8fafc] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="DocAppoint_Logo"
                width={400}
                height={400}
                className="h-auto w-16 object-contain"
              />
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                DocAppoint
              </span>
            </Link>
            <p className="text-sm text-[#404750] leading-relaxed max-w-xs">
              Book trusted doctors near you, manage appointments, and take
              charge of your health.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:pl-12">
            <h4 className="text-sm font-bold text-[#191C20] uppercase ">
              Quick Links
            </h4>
            {quickLinks.map((link) => (
              <ul key={link.id} className="space-y-2.5 text-sm font-medium">
                <li>
                  <Link
                    href={link.href}
                    className="text-[#404750] hover:text-[#1e73be] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              </ul>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#191C20] uppercase">
              Follow Us
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {socailLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="p-2.5 bg-white  border border-gray-100 rounded-xl text-[#404750] hover:text-[#1e73be] hover:border-[#1e73be]/30 shadow-xs transition-all duration-300 active:scale-95"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-[#404750] font-medium tracking-wide">
            &copy; 2026 DocAppoint. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

