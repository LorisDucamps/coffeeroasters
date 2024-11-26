import Head from "next/head";

const Hero = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/hero-home.webp" as="image" />
      </Head>
      <section
        className="relative w-full h-[600px] sm:h-[500px] bg-cover bg-center bg-[url('/hero-home.webp')] sm:bg-[url('/hero-home.webp')] md:bg-[url('/hero-home.webp')]"
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
