'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { href: '/', label: 'Home' },
  // { href: '/dashboard', label: 'Dashboard' },
  // { href: '/search', label: 'Search' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          MyPortfolio
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition',
                pathname === link.href && 'font-semibold text-blue-600 dark:text-blue-400'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition',
                pathname === link.href && 'font-semibold text-blue-600 dark:text-blue-400'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
