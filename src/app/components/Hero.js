import Image from 'next/image';
import Button from './Button';

const Hero = ({
  title = 'Great coffee made simple.',
  description = `Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.`,
  showButton = true,
  buttonText = 'Create your plan',
  images = {
    mobile: { src: '/hero-home-mobile.jpg', width: 640, height: 300 },
    tablet: { src: '/hero-home-tablet.jpg', width: 1280, height: 480 },
    desktop: { src: '/hero-home-desktop.jpg', width: 1280, height: 600 },
  },
}) => {
  return (
    <header
      className="relative"
      role="banner"
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
    >
      <div className="block tablet:hidden desktop:hidden">
        <Image
          src={images.mobile.src}
          alt="Paysage du hero version mobile"
          width={images.mobile.width}
          height={images.mobile.height}
          priority
          className="object-cover w-full h-auto"
          sizes="100vw"
          srcSet={`${images.mobile.src} 1x, ${images.mobile.src.replace(
            '.jpg',
            '@2x.jpg'
          )} 2x`}
        />
      </div>

      <div className="hidden tablet:block desktop:hidden">
        <Image
          src={images.tablet.src}
          alt="Paysage du hero version tablette"
          width={images.tablet.width}
          height={images.tablet.height}
          priority
          className="object-cover w-full h-auto"
          sizes="100vw"
          srcSet={`${images.tablet.src} 1x, ${images.tablet.src.replace(
            '.jpg',
            '@2x.jpg'
          )} 2x`}
        />
      </div>

      <div className="hidden tablet:hidden desktop:block">
        <Image
          src={images.desktop.src}
          alt="Paysage du hero version desktop"
          width={images.desktop.width}
          height={images.desktop.height}
          priority
          className="object-cover w-full h-auto"
          sizes="100vw"
          srcSet={`${images.desktop.src} 1x, ${images.desktop.src.replace(
            '.jpg',
            '@2x.jpg'
          )} 2x`}
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col w-full px-6 place-content-center tablet:px-14">
        <div className="w-full tablet:max-w-[398px] desktop:max-w-[494px]">
          <h1
            id="hero-heading"
            className="font-fraunces font-black text-white text-[40px] leading-[40px] text-center tablet:text-[48px] tablet:leading-[48px] tablet:text-left desktop:text-[72px] desktop:leading-[72px]"
          >
            {title}
          </h1>
          <p
            id="hero-description"
            className="text-[15px] leading-[25px] text-light-cream opacity-80 mt-6 mb-9 text-center tablet:text-left desktop:mt-8 desktop:mb-14"
          >
            {description}
          </p>
          {showButton && (
            <Button className="block mx-auto tablet:m-0">{buttonText}</Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Hero;
