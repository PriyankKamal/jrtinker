import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AboutUsHome = () => {
  return (
    <section className="w-full+">
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 px-6 py-20 md:px-20 lg:p-[140px] gap-10 lg:gap-20 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/home-2.webp"
            alt="about-us-img"
            className="w-full max-w-[599px] object-contain"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <p className="text-xl font-extrabold text-red-400 mulish">About Us</p>
            <img src="/images/asset 53.svg" alt="asset2" loading="lazy"/>
          </div>

          <p className="text-3xl md:text-4xl leading-9 md:leading-11 text-[#33467b] font-medium salsa">
            Inspiring Young Minds Through the Power of STEM
          </p>

          <p className="text-[1rem] text-gray-500">
            At our core, we believe every child is a curious explorer, ready to discover the wonders of Science, Technology, Engineering, and Math. Our platform is designed to ignite that curiosity and transform it into lifelong passion through fun, hands-on learning experiences. With interactive lessons, exciting experiments, and real-world challenges, we make STEM not just educational—but exciting and engaging. Whether your child dreams of building robots, cracking codes, or exploring space, we’re here to guide them every step of the way. Let’s build a brighter future—one young innovator at a time!
          </p>

          <Link
            to="/know-more-info"
            className="px-6 py-4 w-fit mt-6 text-white bg-[#e6a72a] flex items-center gap-2.5 rounded-md uppercase text-xl salsa"
          >
            Learn More US <FaArrowRightLong className="text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
