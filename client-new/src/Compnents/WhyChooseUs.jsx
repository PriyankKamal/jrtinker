import { useTransform } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhyChooseUs = () => {




  const features = [
    {
      img: "/images/Icons/study-game.png",
      alt: "Award icon with a star and ribbon",
      description: "Unlock curiosity with hands-on science activities that make learning exciting and fun.",
      title: "Experiment & Explore",
      
    },
    {
      img: "/images/Icons/atoz.png",
      alt: "Books icon representing curriculum",
      description: "Engage in structured STEM modules—from foundational concepts to building real-world projects.",
      title: "From Basics to Bots",
      
    },
    {
      img: "/images/Icons/expert-teacher.png",
      alt: "Globe icon with location markers",
      description: "Learn from experienced educators who specialize in Science, Technology, Engineering, and Math.",
      title: "STEM Mentors",
      
    },
    { 
      img: "/images/Icons/mental-health.png",
      alt: "Mental Health icon",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,ad.",
      title: "Cognitive Development",
      
    },
  ];

  return (
    <section
      className="w-full relative  bg-cover  min-h-screen py-14 lg:py-[7rem]  "
      style={{ backgroundImage: "url('/images/background/bg-tf-discovery.png')" ,
     
        backgroundRepeat:"no-repeat",
       
      }}
    >
      <div className="w-full flex flex-col items-center py-10 md:py-20 px-4 text-red-400 sm:text-white md:text-white lg:text-white ">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-4">
          <img src="/images/asset 54.svg" alt="decor" className="w-8 h-8 md:w-10 md:h-10" />
          <p className="text-lg md:text-xl font-semibold">Why Choose Us</p>
          <img src="/images/asset 53.svg" alt="decor" className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        <p className="text-2xl md:text-4xl font-medium text-center max-w-[90%] md:max-w-[40%] sm:max-w-[60%] mb-8 salsa">
          Discover Now Why People Come With <span className="text-red-700 sm:text-red-400 md:text-red-400 lg:text-red-400">JRtinker</span> 
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full max-w-7xl">
          {features.map((elem, index) => (
            <div key={index} className="relative bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all bg-cover"
           
            >
              <img src={elem.img} alt={elem.alt} className="w-12 h-12 md:w-16 md:h-16 mb-4" />
              <Link to={elem.path} className="text-lg md:text-xl font-semibold text-blue-900 hover:text-blue-800 capitalize mb-2">
                {elem.title}
              </Link>
              <p className="text-sm md:text-base text-gray-500 mb-4">
                {elem.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
