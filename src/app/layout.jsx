import localFont from 'next/font/local';
import Link from "next/link";
import "./globals.css";
import React from "react";
import Image from "next/image";

export const metadata = {
    title: "CoffeeRoasters",
    description: "Une description de mon application",
};

const barlow = localFont({
    src: [
        {
            path: './fonts/barlow-regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/barlow-bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-barlow',
});

const fraunces = localFont({
    src: [
        {
            path: './fonts/fraunces-black.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-fraunces',
});

export default function RootLayout({children}) {
    return (
        <html lang="fr" className={`${barlow.variable} ${fraunces.variable}`}>
        <body className="antialiased font-barlow">
        <div className="max-w-[1280px] mx-auto">
            <Image
                src="/profile.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <nav>
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about-us">About us</Link>
                    </li>
                    <li>
                        <Link href="/create-your-plan"> Create your plan</Link>
                    </li>
                </ul>
            </nav>
            {children}

        </div>

        </body>
        </html>
    );
}
