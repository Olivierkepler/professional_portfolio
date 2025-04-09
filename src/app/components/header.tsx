'use client'

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google';
import { usePathname } from 'next/navigation';
import DropdownMenu from "./dropdownmenu";
import SearchBar from "./dynamic_search/component/SearchBar"; // <-- Import SearchBar

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="pt-4 inset-x-0 z-50">
        <nav className="flex flex-wrap items-center justify-between lg:px-8  px-8" aria-label="Global"  >
          <div className="flex lg:flex-1">
            <a href="/" className="flex items-center space-x-2 text-lg font-bold group">
              <Image
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                src="/images/olivier_logo_green.png"
                alt="Olivier Logo"
                width={40}
                height={40}
                priority
              />
              <span className={`${playfair.className} text-xl text-gray-600 dark:text-gray-600 group-hover:text-violet-500 transition-colors duration-200`}>
                Olivier
              </span>
            </a>
          </div>

          {/* Hamburger menu button for mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          {/* Desktop Nav + Search */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            <a href="/" className={`text-sm font-semibold ${pathname === '/' ? 'text-orange-300' : 'text-gray-900 dark:text-white'}`}>Home</a>
            <a href="/" className={`text-sm font-semibold ${pathname === '/' ? 'text-orange-300' : 'text-gray-900 dark:text-white'}`}><DropdownMenu /></a>
            {/* <a href="/about" className={`text-sm font-semibold ${pathname === '/about' ? 'text-orange-300' : 'text-gray-900 dark:text-white'}`}>About</a> */}
           
            <a href="/about" className={`text-sm font-semibold ${pathname === '/contact' ? 'text-orange-300' : 'text-gray-900 dark:text-white'}`}>Contact</a>
            <a href="/products" className={`text-sm font-semibold ${pathname === '/products' ? 'text-orange-300' : 'text-gray-900 dark:text-white'}`}>Products</a>    
            <a href="/contact" className={`text-sm font-semibold ${pathname === '/contact' ? 'text-orange-300' : 'text-gray-900 dark:text-white'}`}>Contact</a>
            <a href="/" className="text-sm font-semibold text-gray-900 dark:text-white">Loging</a>

            {/* Search bar - desktop */}
            <div className="ml-4 w-64">
              <SearchBar />
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="flex text-lg font-bold items-center space-x-2 group">
                  <Image
                    className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                    src="/olivier_logo.png"
                    alt="Olivier Logo"
                    width={40}
                    height={40}
                    priority
                  />
                  <span className={`${playfair.className} text-xl text-gray-500 dark:text-gray-600 group-hover:text-violet-500 transition-colors duration-300`}>
                    Olivier
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Search bar - mobile */}
              <div className="mt-6 mb-4">
                <SearchBar />
              </div>

              {/* Mobile links */}
              <div className="flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="/" className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${pathname === '/' ? 'bg-gray-100 text-orange-300' : 'text-gray-900 hover:bg-gray-50'}`}>Home</a>
                    <a href="/about" className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${pathname === '/about' ? 'bg-gray-100 text-orange-300' : 'text-gray-900 hover:bg-gray-50'}`}>About</a>
                    <a href="/contact" className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${pathname === '/contact' ? 'bg-gray-100 text-orange-300' : 'text-gray-900 hover:bg-gray-50'}`}>Contact</a>
                    <a href="/products" className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${pathname === '/products' ? 'bg-gray-100 text-orange-300' : 'text-gray-900 hover:bg-gray-50'}`}>Products</a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
