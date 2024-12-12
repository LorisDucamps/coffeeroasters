import Image from 'next/image';

const Hero = () => {
  return (
    <header
      className="relative"
      role="banner"
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
    >
      {/* Image Mobile */}
      <div
        className="block  tablet:hidden desktop:hidden"
      >
        <Image
          src="/hero-home-mobile.jpg"
          alt="Paysage du hero version mobile"
          width={640}   // Mettre les dimensions réelles de l'image mobile
          height={300}  // ajustez selon vos images
          priority
          className="object-cover w-full h-auto"
          sizes="100vw"
          srcSet="/hero-home-mobile.jpg 1x, /hero-home-mobile@2x.jpg 2x"
        />
      </div>

      {/* Image Tablette */}
      <div
        className="hidden  tablet:block desktop:hidden"
      >
        <Image
          src="/hero-home-tablet.jpg"
          alt="Paysage du hero version tablette"
          width={1024}  // dimensions réelles de votre image tablette
          height={480}  // ajustez selon vos images
          priority
          className="object-cover w-full h-auto"
          sizes="100vw"
          srcSet="/hero-home-tablet.jpg 1x, /hero-home-tablet@2x.jpg 2x"
        />
      </div>

      {/* Image Desktop */}
      <div
        className="hidden  tablet:hidden desktop:block"
      >
        <Image
          src="/hero-home-desktop.jpg"
          alt="Paysage du hero version desktop"
          width={1280}   // Dimensions réelles de l'image desktop
          height={600}   // Gardez le ratio exact
          priority
          className="object-cover w-full h-auto"
          sizes="100vw"
          srcSet="/hero-home-desktop.jpg 1x, /hero-home-desktop@2x.jpg 2x"
        />
      </div>

      {/* Contenu texte et CTA (optionnel)
      <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center text-white">
        <h1 id="hero-heading" className="mb-4 text-4xl font-bold">
          Bienvenue sur Notre Site
        </h1>
        <p id="hero-description" className="mb-6 text-lg">
          Découvrez notre contenu incroyable, conçu spécialement pour vous.
        </p>
        <button
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="En savoir plus sur nos offres"
        >
          En savoir plus
        </button>
      </div>
      */}
    </header>
  );
};

export default Hero;
