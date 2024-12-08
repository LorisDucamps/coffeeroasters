'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isMenuOpen]);

    return (
        <header className="bg-gray-800">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
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
                <nav className="hidden tablet:flex space-x-4">
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
                    className="tablet:hidden focus:outline-none z-20"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#000000"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isMenuOpen
                                    ? "M6 18L18 6M6 6l12 12" // X icon (Close)
                                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon (Menu)
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation with Gradient */}
            <div
                className={`tablet:hidden w-full h-full transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "z-10" : "hidden"
                }`}
            >
                <nav
                    className="h-full flex flex-col items-center justify-center"
                    style={{
                        background: "linear-gradient(180deg, #FEFCF7 0%, rgba(254, 252, 247, 0) 70%)",
                    }}
                >
                    <ul className="space-y-8">
                        <li>
                            <Link href="/" className="block text-center text-2xl font-fraunces text-dark-grey-blue hover:text-gray-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="block text-center text-2xl font-fraunces text-dark-grey-blue hover:text-gray-500">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link href="/create-your-plan" className="block text-center text-2xl font-fraunces text-dark-grey-blue hover:text-gray-500">
                                Create your plan
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
