"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navigation } from "./navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full z-0">
      <div className="max-w-7xl border-gray-500 border-b-[1px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={'/'}>
              <div className="flex flex-row items-center space-x-2 mb-2 mt-2">
                <Image src={"/deeptrack-favicon.ico"} className="grayscale" width={50} height={50} alt="Logo" />
                <span className="text-2xl font-serif font-bold text-white">
                  DEEPTRACK
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block ">
            <div className="ml-10 flex items-baseline space-x-4">
              <Navigation />
            </div>
          </div>


          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border bg-black text-white p-2" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Solutions
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Use Cases
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Support
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog & Events
            </Link>


          </div>
        </div>
      )}
    </nav>
  );
};
