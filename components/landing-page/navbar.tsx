"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./navigation";
import { Menu, MoveUpRight, X } from "lucide-react";
import { Button } from "../ui/button";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" backdrop-filter backdrop-blur-lg w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <Link href={'/'}>
            <div className="flex flex-row items-center space-x-2 mb-2 mt-2">
              
              {/* <Image src={"/logo.png"} width={50} height={50} alt="Logo" /> */}
              <span className="text-2xl font-serif font-bold text-white">
                Captur
                </span>
              
            </div>
            </Link>
          </div>
          <div className="hidden md:block ">
            <div className="ml-10 flex items-baseline space-x-4">
             <Navigation />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
          <Button className="flex items-center gap-2 bg-white text-black border group" variant={'outline'}>
            Join Waitlist
            <MoveUpRight className="w-4 h-4  text-blue transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
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
        <div className="md:hidden border bg-white" id="mobile-menu">
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
              Community
            </Link>
            
            <Button className="flex items-center gap-2 border group" variant={'outline'}>
            Join Waitlist
            <MoveUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
            </div>        
        </div>
      )}
    </nav>
  );
};
