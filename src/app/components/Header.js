import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Icons from './Icons';

const Header = () => {
  return (
    <header
      role="banner"
      className="flex items-center justify-between my-8 tablet:my-10 desktop:my-12"
    >
      <Link href="/" aria-label="Accueil">
        <Icons
          type="logo"
          colorBean="fill-dark-cyan"
          colorTitle="fill-dark-grey-blue"
          className="w-[163px] h-[18px] tablet:w-[200px] tablet:h-[23px] desktop:w-[236px] desktop:h-[26px]"
        />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
