/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
    <header className="flex items-center justify-between mt-8 mb-10">
      <div className="text-lg font-bold">
        <Link href="/">
          <img
            src="/logos/logo-header-coffeeroasters.svg"
            alt="Logo Coffeeroasters"
            className="w-[163px] h-[18px] tablet:w-[236px] tablet:h-[26px]"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden space-x-4 tablet:flex">
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="/about-us" className="hover:text-gray-400 ">
          About us
        </Link>
        <Link href="/create-your-plan" className="hover:text-gray-400 ">
          Create your plan
        </Link>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className="z-20 tablet:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile Navigation with Gradient */}
      <div
        className={`tablet:hidden w-full h-full transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'fixed top-[90] left-0 right-0 z-10' : 'hidden'
        }`}
      >
        <nav
          className="block h-full pt-10"
          style={{
            background:
              'linear-gradient(180deg, #FEFCF7 50%, rgba(254, 252, 247, 0) 100%)',
          }}
        >
          <ul className="space-y-8">
            <li>
              <Link
                href="/"
                className="block text-2xl text-center font-fraunces text-dark-grey-blue"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="block text-2xl text-center font-fraunces text-dark-grey-blue"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/create-your-plan"
                className="block text-2xl text-center font-fraunces text-dark-grey-blue"
              >
                Create your plan
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
