import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <header
      className="relative"
      role="banner"
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
    >
      <div className="block tablet:hidden desktop:hidden">
        <Image
          src="/hero-home-mobile.jpg"
          alt="Paysage du hero version mobile"
          width={640} // Mettre les dimensions réelles de l'image mobile
          height={300} // ajustez selon vos images
          priority
          className="object-cover w-full h-auto"
          sizes="100vw"
          srcSet="/hero-home-mobile.jpg 1x, /hero-home-mobile@2x.jpg 2x"
        />
      </div>
      <div className="hidden tablet:block desktop:hidden">
        <Image
          src="/hero-home-tablet.jpg"
          alt="Paysage du hero version tablette"
          width={1024}
          height={480}
          priority
          className="object-cover w-full h-auto"
          sizes="100vw"
          srcSet="/hero-home-tablet.jpg 1x, /hero-home-tablet@2x.jpg 2x"
        />
      </div>
      <div className="hidden tablet:hidden desktop:block">
        <Image
          src="/hero-home-desktop.jpg"
          alt="Paysage du hero version desktop"
          width={1280}
          height={600}
          priority
          className="object-cover w-full h-auto"
          sizes="100vw"
          srcSet="/hero-home-desktop.jpg 1x, /hero-home-desktop@2x.jpg 2x"
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col w-full px-6 place-content-center tablet:px-14 ">
        <div className="w-full tablet:max-w-[398px] desktop:max-w-[494px]">
          <h1 className="font-fraunces font-black text-white text-[40px] leading-[40px] text-center tablet:text-[48px] tablet:leading-[48px] tablet:text-left desktop:text-[72px] desktop:leading-[72px]">
            Great coffee made simple.
          </h1>
          <p className="text-[15px] leading-[25px] text-light-cream opacity-80 mt-6 mb-9 text-center tablet:text-left desktop:mt-8 desktop:mb-14">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Button className="block mx-auto tablet:m-0">Create your plan</Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
