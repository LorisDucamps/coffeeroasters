'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        aria-label="Navigation principale"
        className="hidden space-x-8 tablet:flex"
      >
        <Link
          href="/"
          className="text-xs font-bold uppercase text-grey font-barlow tracking-[.92px] hover:text-dark-grey-blue"
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className="text-xs font-bold uppercase text-grey font-barlow tracking-[.92px] hover:text-dark-grey-blue"
        >
          About us
        </Link>
        <Link
          href="/create-your-plan"
          className="text-xs font-bold uppercase text-grey font-barlow tracking-[.92px] hover:text-dark-grey-blue"
        >
          Create your plan
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="tablet:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-controls="mobile-menu"
        aria-expanded={isMenuOpen}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile Navigation */}
      {/* Utilisation d'un wrapper fixe pour le menu plein écran */}
      <div
        id="mobile-menu"
        className={`
          tablet:hidden fixed top-[88] left-0 right-0 z-20
          transition-opacity duration-300 ease-in-out h-full
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        style={{
          background:
            'linear-gradient(180deg, #FEFCF7 50%, rgba(254, 252, 247, 0) 100%)',
        }}
      >
        <nav
          aria-label="Navigation principale mobile"
          className="flex flex-col items-center h-full pt-10 space-y-8"
        >
          <Link
            href="/"
            className="text-2xl font-fraunces text-dark-grey-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-2xl font-fraunces text-dark-grey-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </Link>
          <Link
            href="/create-your-plan"
            className="text-2xl font-fraunces text-dark-grey-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Create your plan
          </Link>
        </nav>
      </div>
    </>
  );
}
