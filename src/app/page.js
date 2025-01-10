import Collections from './components/Collections';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <WhyChooseUs />
      <HowItWorks variant="light" showTitle={true} showButton={true} />
    </>
  );
}
