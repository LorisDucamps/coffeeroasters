import Button from './Button';

const steps = [
  {
    number: '01',
    title: (
      <>
        Pick your <br className="hidden tablet:block" />
        coffee
      </>
    ),
    description:
      'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
  },
  {
    number: '02',
    title: (
      <>
        Choose the <br className="hidden tablet:block" />
        frequency
      </>
    ),
    description:
      'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
  },
  {
    number: '03',
    title: (
      <>
        Receive and <br className="hidden tablet:block" />
        enjoy!
      </>
    ),
    description:
      'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
  },
];

const HowItWorks = () => {
  return (
    <section className="relative mb-[120px]">
      <h3 className="font-fraunces font-black text-[24px] leading-[32px] text-grey text-center mb-20 tablet:text-left tablet:mb-10 desktop:mb-20">
        How it works
      </h3>
      <div className="grid grid-cols-1 gap-14 tablet:grid-cols-3 tablet:gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative text-center tablet:text-left">
            <div className="hidden tablet:flex flex-col items-center tablet:items-start relative mb-6 tablet:mb-12 desktop:mb-16">
              <div className="bg-light-cream h-[31px] w-[31px] border-2 border-dark-cyan rounded-full"></div>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 left-[31px] translate-y-[-50%] h-[2px] w-[100%] bg-pale-orange"></div>
              )}
            </div>

            <span className="block font-fraunces font-black text-[72px] leading-[72px] text-pale-orange">
              {step.number}
            </span>

            <h4 className="font-fraunces font-black text-[28px] leading-[32px] text-dark-grey-blue my-6 tablet:my-8">
              {step.title}
            </h4>
            <p className="text-[15px] leading-[25px] text-dark-grey-blue">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <Button
        href="/create-your-plan"
        className="block mt-20 mx-auto tablet:m-0 tablet:mt-11 desktop:mt-16"
      >
        Create your plan
      </Button>
    </section>
  );
};

export default HowItWorks;
