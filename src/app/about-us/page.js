import Hero from '../components/Hero';
import OurCommitment from '../components/OurCommitment';
import Uncompromising from '../components/Uncompromising';

export default function page() {
  return (
    <>
      <Hero
        title="About Us"
        description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        showButton={false}
        images={{
          mobile: { src: '/hero-about-mobile.jpg', width: 640, height: 300 },
          tablet: { src: '/hero-about-tablet.jpg', width: 1280, height: 400 },
          desktop: { src: '/hero-about-desktop.jpg', width: 1280, height: 450 },
        }}
      />
      <OurCommitment />
      <Uncompromising />
    </>
  );
}
