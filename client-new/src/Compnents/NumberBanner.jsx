import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const NumberBanner = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const numberBannerArr = [
    {
      count: 5693,
      text: "Student Enroll",
      svgImage: "/images/asset 55.svg",
    },
    {
      count: 463,
      text: "Total Classes",
      svgImage: "/images/asset 56.svg",
    },
    {
      count: 934,
      text: "Expert Teacher",
      svgImage: "/images/asset 57.svg",
    },
    {
      count: 3000,
      text: "Years Experience",
      svgImage: "/images/asset 58.svg",
    },
  ];

  return (
    <section
    ref={ref}
    className="w-full relative bg-cover bg-center min-h-96 h-auto py-12"
    style={{ backgroundImage: 'url("/images/background/bg-funfac-2.png")' }}
  >
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-0 px-4">
      {numberBannerArr.map((elem, index) => (
        <div className="flex flex-col items-center" key={index}>
          <div className="w-fit relative h-auto mb-4">
            <img src="/images/patternphoto/mask.png" alt="mask" />
            <img
              src={elem.svgImage}
              alt="asset 55"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div>
            <p className="text-4xl md:text-5xl salsa relative text-white text-center mb-2">
            {inView && <CountUp end={elem.count} duration={3} />}
            +
            </p>
            <p className="text-xl md:text-2xl salsa relative text-white text-center">
              {elem.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default NumberBanner;
