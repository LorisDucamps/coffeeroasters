const headQuarters = [
  {
    title: 'United Kingdom',
    description: ['68 Asfordby Rd', 'Alcaston', 'SY6 1YA', '+44 1241 918425'],
    svg: '/icons/map-uk.svg',
  },
  {
    title: 'Canada',
    description: [
      '1528 Eglinton Avenue',
      'Toronto',
      'Ontario M4P 1A6',
      '+1 416 485 2997',
    ],
    svg: '/icons/map-canada.svg',
  },
  {
    title: 'Australia',
    description: [
      '36 Swanston Street',
      'Kewell',
      'Victoria',
      '+61 4 9928 3629',
    ],
    svg: '/icons/map-australia.svg',
  },
];

const HeadQuarters = () => {
  return (
    <section className="relative mb-[120px] pt-[120px] desktop:pl-[85px]">
      <h3 className="font-fraunces font-black text-[24px] leading-[32px] text-grey text-center mb-20 tablet:text-left">
        Our headquarters
      </h3>
      <div className="grid grid-cols-1 gap-20 tablet:grid-cols-3 tablet:gap-8">
        {headQuarters.map((headQuarter, index) => (
          <div key={index} className="relative text-center tablet:text-left">
            <img
              src={headQuarter.svg}
              alt={`${headQuarter.title} icon`}
              className="w-[50px] h-[50px] mx-auto tablet:ml-0"
              width="50"
              height="50"
            />
            <h4 className="font-fraunces font-black text-[28px] leading-[36px] text-dark-grey-blue mt-[47px] mb-[22px]">
              {headQuarter.title}
            </h4>
            <ul className="text-[16px] leading-[26px] text-dark-grey-blue">
              {headQuarter.description.map((line, lineIndex) => (
                <li key={lineIndex}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeadQuarters;
