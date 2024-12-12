import localFont from 'next/font/local';
import "./globals.css";
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';

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
        <div className="max-w-[1360px] mx-auto px-6 tablet:px-10">
            <Header />
            <main>
                {children}
            </main>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
