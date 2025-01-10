import Image from 'next/image';

const beforeStyles =
  "before:content-[''] before:bg-darked-grey-blue before:absolute before:top-[25%] before:left-0 before:right-0 before:h-[509px] before:rounded-[10px] before:z-[-1] before:tablet:h-[488px] before:desktop:h-[474px] before:desktop:top-[88px]";

const Uncompromising = () => {
  return (
    <section className={`relative ${beforeStyles} mb-[120px]`}>
      <div className="grid grid-cols-1 desktop:grid-cols-2 gap-16 desktop:max-w-[1110px] desktop:mx-auto desktop:justify-between desktop:items-center">
        <picture className="relative w-full px-6 tablet:px-14 desktop:order-1 desktop:px-0 desktop:max-w-[445px]">
          <source
            srcSet="/uncompromising-mobile.jpg 1x, /uncompromising-mobile@2x.jpg 2x"
            media="(max-width: 599px)"
          />
          <source
            srcSet="/uncompromising-tablet.jpg 1x, /uncompromising-tablet@2x.jpg 2x"
            media="(max-width: 979px)"
          />
          <source
            srcSet="/uncompromising-desktop.jpg 1x, /uncompromising-desktop@2x.jpg 2x"
            media="(min-width: 980px)"
          />
          <Image
            src="/uncompromising-desktop.jpg"
            alt=""
            width={445}
            height={474}
            className="object-cover w-full h-auto rounded-lg"
            priority
          />
        </picture>
        <div className="px-6 tablet:px-16 desktop:px-0 desktop:mt-20">
          <h3 className="font-fraunces font-black text-[28px] leading-[28px] text-center text-light-cream mb-6 tablet:text-center desktop:text-[40px] desktop:leading-[48px] desktop:text-left">
            Uncompromising quality
          </h3>
          <p className="text-[15px] leading-[25px] text-light-cream text-center tablet:text-center desktop:text-left">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Uncompromising;
