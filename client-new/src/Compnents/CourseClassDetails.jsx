import React from "react";
import HeadingSectionOverlay from "./HeadingSectionOverlay";
import { FaArrowRightLong } from "react-icons/fa6";
import LatestProgramsSlider from "./LatestProgramsSlider";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import NotLoginPopUp from "./NotLoginPopUp";

const CourseClassDetails = ({courses}) => {
    // const classDetailsHeading = "Classes Details"
    const {isAuthenticated} = useAuth()

 
  return (  
    <>
    <section className="w-full pt-20 sm:pt-32 md:pt-44">
        {/* <HeadingSectionOverlay heading={classDetailsHeading} /> */}
        {/* <div className=" w-full h-96 flex justify-center items-center bg-cover "
        style={{backgroundImage:"url('/images/heading-bg/class-bg-2.jpg')", backgroundRepeat:"no-repeat", backgroundPosition:"center",
        


        }}
        
        > */}
          <img src="/images/heading-bg/class-bg-2.jpg" alt="class-bg" className="w-full h-auto object-cover max-h-[23rem]" />
          {/* <h1 className="text-5xl font-bold text-white salsa ">Class Details </h1> */}
        {/* </div> */}

    <div className="flex flex-col lg:flex-row items-start justify-between p-4 sm:p-6 lg:p-12 gap-8 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-medium text-[#2e3d62] mb-4 sm:mb-6">
          {courses.courseName}
        </h2>
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="teacher"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-[#2e3d62]">Nathan M. Beeman</h3>
            <p className="text-base sm:text-lg text-gray-500">Senior Teacher</p>
          </div>
        </div>
        <img
          src={courses.courseImage}
          alt={courses.courseName}
          className="rounded-xl object-cover w-full max-h-[31rem]"
        />
        <p className="mulish text-base sm:text-lg leading-7 sm:leading-8 text-gray-500">{courses.courseDescription}</p>
      </div>

      {/* Right Section - Info Box */}
      <div className="w-full lg:w-1/3 bg-white shadow-xl rounded-xl">
        <div className="bg-purple-500 text-white rounded-t-xl p-3 sm:p-4 text-xl flex items-center gap-3">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 20l9-5-9-5-9 5 9 5z" />
            <path d="M12 12l9-5-9-5-9 5 9 5z" />
          </svg>
          <p className="text-2xl sm:text-3xl salsa">Informations</p>
        </div>
        <div className="p-4 sm:p-6 space-y-4">
          {/* <div className="flex justify-between items-center">
            <span className="text-[#2b3c6b] mulish text-base sm:text-lg font-bold">Course Price</span>
            <span className="text-[#ff6b6b] text-lg sm:text-xl font-bold">${courses.coursePrice}</span>
          </div> */}
          {/* <hr className="text-gray-300" /> */}
          
          <div className="flex justify-between items-center">
            <span className="text-[#2b3c6b] mulish text-base sm:text-lg font-bold">Sessions</span>
            <span className="text-[#ff6b6b] text-lg sm:text-xl font-bold">{`${courses.courseDuration}`}</span>
          </div>
          <hr className="text-gray-300" />
          <div className="flex justify-between items-center">
            <span className="text-[#2b3c6b] mulish text-base sm:text-lg font-bold">Age Group</span>
            <span className="text-[#ff6b6b] text-lg sm:text-xl font-bold">{courses && `${courses.ageGroup?.min}-${courses.ageGroup?.max}`}</span>
          </div>
          <hr className="text-gray-300" />
          <div className="flex justify-between items-center">
            <span className="text-[#2b3c6b] mulish text-base sm:text-lg font-bold">Months</span>
            <span className="text-[#ff6b6b] text-lg sm:text-xl font-bold">{`${Math.ceil((courses.courseDuration)/20)}`}</span>
          </div>
          <hr className="text-gray-300" />
          <div className="flex justify-between items-center">
            <span className="text-[#2b3c6b] mulish text-base sm:text-lg font-bold">Lessons</span>
            <span className="text-[#ff6b6b] text-lg sm:text-xl font-bold">12</span>
          </div>
          <hr className="text-gray-300" />
          <div className="flex justify-between items-center">
            <span className="text-[#2b3c6b] mulish text-base sm:text-lg font-bold">Language</span>
            <span className="text-[#ff6b6b] text-lg sm:text-xl font-bold">English</span>
          </div>
          <hr className="text-gray-300" />
          <div className="flex justify-between items-center">
            <span className="text-[#2b3c6b] mulish text-base sm:text-lg font-bold">Course Price</span>
            <span className="text-[#ff6b6b] text-lg sm:text-xl font-bold">${courses.coursePrice}</span>
          </div>
          <hr className="text-gray-300" />

          
          {
            isAuthenticated?<Link 
            to="bookdemoclass" 
            className="w-full flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl mt-4 bg-[#1f2a54] hover:bg-[#2e3d62] text-white py-2.5 sm:py-3 font-semibold rounded-lg transition"
          >
            Book a free demo <FaArrowRightLong />
          </Link>:<NotLoginPopUp heading={"Book a free demo"}/>
          }


{
            isAuthenticated?<Link 
            to="bookdemoclass" 
            className="w-full flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl mt-4 bg-[#1f2a54] hover:bg-[#2e3d62] text-white py-2.5 sm:py-3 font-semibold rounded-lg transition"
          >
            Enroll now <FaArrowRightLong />
          </Link>:<NotLoginPopUp heading={"Enroll now"}/>
          }
          
        </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default CourseClassDetails;