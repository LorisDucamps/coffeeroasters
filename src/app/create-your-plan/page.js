import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import YourPlan from '../components/YourPlan';

export default function page() {
  return (
    <>
      <Hero
        title="Create a plan"
        description="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
        showButton={false}
        images={{
          mobile: { src: '/hero-create-mobile.jpg', width: 640, height: 300 },
          tablet: { src: '/hero-create-tablet.jpg', width: 1280, height: 400 },
          desktop: {
            src: '/hero-create-desktop.jpg',
            width: 1280,
            height: 450,
          },
        }}
      />
      <HowItWorks variant="dark" showTitle={false} showButton={false} />
      <YourPlan />
    </>
  );
}
