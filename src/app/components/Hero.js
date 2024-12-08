import Head from "next/head";

const Hero = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/hero-home-desktop.webp" as="image" />
      </Head>
      <section
        className="relative w-full rounded-[10] bg-no-repeat bg-center h-0 pt-[46.875%] bg-cover bg-[url('/hero-home-mobile.webp')] tablet:bg-[url('/hero-home-tablette.webp')] desktop:bg-[url('/hero-home-desktop.webp')]"
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Bienvenue</h1>
          <p className="text-lg mb-6">Découvrez notre contenu incroyable.</p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
            En savoir plus
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
