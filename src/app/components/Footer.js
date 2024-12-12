import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darked-grey-blue p-14">
      <Link href="/" aria-label="Accueil">
        <Image
          src="/logos/logo-footer-coffeeroasters.svg"
          alt="Coffeeroasters logo"
          width={236}
          height={26}
          className="w-[218px] h-[24px] tablet:w-[236px] tablet:h-[26px]"
          priority
        />
      </Link>
    </footer>
  );
};

export default Footer;
