import Image from 'next/image';

const OurCommitment = () => {
  return (
    <section className="my-[120px] tablet:my-[152px] desktop:my-[168px]">
      <div className="flex flex-col gap-12">
        <picture>
          <source
            srcSet="/commitment-mobile.jpg 1x, /commitment-mobile@2x.jpg 2x"
            media="(max-width: 599px)"
          />
          <source
            srcSet="/commitment-tablet.jpg 1x, /commitment-tablet@2x.jpg 2x"
            media="(max-width: 979px)"
          />
          <source
            srcSet="/commitment-desktop.jpg 1x, /commitment-desktop@2x.jpg 2x"
            media="(min-width: 980px)"
          />
          <Image
            src="/commitment-desktop.jpg"
            alt="A coffee grower preparing a cup of coffee"
            width={445}
            height={520}
            className="object-cover w-full h-auto rounded-lg"
            priority
          />
        </picture>

        <div>
          <h3 className="font-fraunces font-black text-[32px] leading-[48px] text-center text-dark-grey-blue mb-7 desktop:text-[40px] desktop:leading-[48px] desktop:text-left">
            Our commitment
          </h3>
          <p className="mt-4 text-[15px] leading-[25px] text-dark-grey-blue text-center desktop:text-left">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
