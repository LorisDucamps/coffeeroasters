import Icons from './Icons';

const beforeStyles =
  "before:content-[''] before:bg-darked-grey-blue before:absolute before:inset-0 before:h-[902px] before:rounded-[10] before:z-[-1]";

const WhyChooseUs = () => {
  const cards = [
    {
      type: 'bean',
      title: 'Best quality',
      text: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
    },
    {
      type: 'gift',
      title: 'Exclusive benefits',
      text: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
    },
    {
      type: 'truck',
      title: 'Free shipping',
      text: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
    },
  ];
  return (
    <section className={`relative ${beforeStyles} px-6 mb-[120px]`}>
      <h2 className="font-fraunces font-black text-[28px] leading-[28px] text-center text-white pt-16 pb-6">
        Why choose us?
      </h2>
      <p className="text-[15px] leading-[25px] text-light-cream text-center pb-16">
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
      <article className="grid grid-col-1 gap-6">
        <>
          {cards.map((card) => (
            <div
              className="flex flex-col justify-between h-[382px] bg-dark-cyan rounded-lg px-3 pb-12"
              key={card.type}
            >
              <Icons
                type={card.type}
                className="w-[72px] h-full mx-auto text-pale-orange"
              />
              <h3 className="font-fraunces font-black text-[24px] leading-[32px] text-white text-center mb-6">
                {card.title}
              </h3>
              <p className="text-[15px] leading-[25px] text-light-cream text-center px-5">
                {card.text}
              </p>
            </div>
          ))}
        </>
      </article>
    </section>
  );
};

export default WhyChooseUs;
