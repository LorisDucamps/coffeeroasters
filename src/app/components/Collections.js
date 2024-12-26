import Image from 'next/image';

const collectionsData = [
  {
    id: 1,
    src: '/visuals/gran-espresso.png',
    alt: 'Gran Espresso visual',
    title: 'Gran Espresso',
    description:
      'Light and flavorful blend with cocoa and black pepper for an intense experience.',
  },
  {
    id: 2,
    src: '/visuals/planalto.png',
    alt: 'Planalto visual',
    title: 'Planalto',
    description:
      'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.',
  },
  {
    id: 3,
    src: '/visuals/piccollo.png',
    alt: 'Piccollo visual',
    title: 'Piccollo',
    description:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry.',
  },
  {
    id: 4,
    src: '/visuals/danche.png',
    alt: 'Danche visual',
    title: 'Danche',
    description:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes.',
  },
];

const Collections = () => {
  return (
    <section className="my-[120px]" aria-labelledby="collection-heading">
      <h2 className="font-fraunces font-black text-[40px] leading-[72px] bg-text-gradient bg-clip-text text-fill-transparent text-center mb-[13px]">
        our collection
      </h2>
      <div className="grid grid-cols-1 px-6 gap-12 desktop:grid-cols-4">
        {collectionsData.map((item) => (
          <article key={item.id} className="tablet:flex desktop:block">
            <figure>
              <Image
                src={item.src}
                alt={item.alt}
                width={256}
                height={194}
                loading="lazy"
                className="mx-auto max-w-[200px]"
              />
              <figcaption className="sr-only">{item.alt}</figcaption>
            </figure>
            <div>
              <h3 className="font-fraunces font-black text-[24px] leading-[32px] text-center mt-6 mb-4">
                {item.title}
              </h3>
              <p className="text-[15px] leading-[25px] text-center">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Collections;
