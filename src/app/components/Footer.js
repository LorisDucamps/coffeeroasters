import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Icons from './Icons';

const Footer = () => {
  return (
    <footer className="bg-darked-grey-blue p-14 desktop:flex desktop:px-20 desktop:py-12">
      <Link href="/" aria-label="Accueil">
        <Image
          src="/logos/logo-footer-coffeeroasters.svg"
          alt="Coffeeroasters logo"
          width={236}
          height={26}
          className="w-[218px] h-[24px] tablet:w-[236px] tablet:h-[26px] mx-auto"
          priority
        />
      </Link>
      <nav
        aria-label="Navigation principale"
        className="flex flex-col items-center my-12 space-y-6 tablet:flex-row tablet:justify-center tablet:space-y-0 tablet:space-x-8 desktop:space-y-0 desktop:my-0"
      >
        <Link
          href="/"
          className="text-xs font-bold uppercase text-grey font-barlow tracking-[.92px] hover:text-light-cream"
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className="text-xs font-bold uppercase text-grey font-barlow tracking-[.92px] hover:text-light-cream"
        >
          About us
        </Link>
        <Link
          href="/create-your-plan"
          className="text-xs font-bold uppercase text-grey font-barlow tracking-[.92px] hover:text-light-cream"
        >
          Create your plan
        </Link>
      </nav>
      <div className="flex justify-center space-x-6">
        <a href="#">
          <Icons
            type="facebook"
            className="w-6 h-6 text-light-cream hover:text-pale-orange"
          />
        </a>
        <a href="#">
          <Icons
            type="twitter"
            className="w-6 h-6 text-light-cream hover:text-pale-orange"
          />
        </a>
        <a href="#">
          <Icons
            type="instagram"
            className="w-6 h-6 text-light-cream hover:text-pale-orange"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
