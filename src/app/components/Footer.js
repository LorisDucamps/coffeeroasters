import Link from 'next/link';
import React from 'react';
import Icons from './Icons';

const Footer = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About us' },
    { href: '/create-your-plan', label: 'Create your plan' },
  ];

  const socialIcons = [
    { type: 'facebook', href: '#', label: 'Visit our Facebook page' },
    { type: 'twitter', href: '#', label: 'Visit our Twitter page' },
    { type: 'instagram', href: '#', label: 'Visit our Instagram page' },
  ];

  return (
    <footer className="bg-darked-grey-blue p-14 desktop:flex desktop:px-20 desktop:py-12">
      <Link href="/" aria-label="Accueil">
        <Icons
          type="logo"
          colorBean="fill-dark-cyan"
          colorTitle="fill-white"
          className="w-[218px] h-[24px] mx-auto tablet:w-[236px] tablet:h-[26px]"
        />
      </Link>

      <nav
        aria-label="Navigation principale"
        className="flex flex-col items-center my-12 space-y-6 tablet:flex-row tablet:justify-center tablet:space-y-0 tablet:space-x-8 desktop:space-y-0 desktop:my-0"
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-xs font-bold uppercase text-grey font-barlow tracking-[.92px] hover:text-light-cream"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex justify-center space-x-6">
        {socialIcons.map(({ type, href, label }) => (
          <a key={type} href={href} aria-label={label}>
            <Icons
              type={type}
              className="w-6 h-6 text-light-cream hover:text-pale-orange"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
