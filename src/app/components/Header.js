import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header
      role="banner"
      className="flex items-center justify-between my-8 tablet:my-10 desktop:my-12"
    >
      <Link href="/" aria-label="Accueil">
        <Image
          src="/logos/logo-header-coffeeroasters.svg"
          alt="Coffeeroasters logo"
          width={236}
          height={26}
          className="w-[163px] h-[18px] tablet:w-[200px] tablet:h-[23px] desktop:w-[236px] desktop:h-[26px]"
          priority
        />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
