import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teachers = [
  {
    name: "Shahanwaz Khan",
    profile: "STEM Trainer",
    experience: "3 years",
    image: "/images/teachers/teacher-1.webp",
  },
  {
    name: "Anushka Jain",
    profile: "Data Science Instructor",
    experience: "4 years",
    image: "/images/teachers/teacher-2.webp",
  },
  {
    name: "Sahil Jaiswal",
    profile: "AI & Coding Trainer",
    experience: "5 years",
    image: "",
  },
  {
    name: "Shivam Pandey",
    profile: "IoT & Automation Systems Trainer",
    experience: "6 years",
    image: "/images/teachers/teacher-3.webp",
  },
  {
    name: "Abhishek Kumar Srivastava",
    profile: "Robotics & Drone Trainer",
    experience: "3 years",
    image: "/images/teachers/teacher-4.webp",
  },
  {
    name: "Arsalan Wasim",
    profile: "3D Modeling & Printing Instructor",
    experience: "3 years",
    image: "/images/teachers/teacher-5.webp",
  },
  {
    name: "Shruti Kamal",
    profile: "Python Instructor",
    experience: "2 years",
    image: "/images/teachers/teacher-6.webp",
  },
 

];

const TeacherTestimonials = () => {
  return (
    <section className="py-16 bg-[#27548A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className="mb-12 text-center"
         
        >
          <h2 className="text-3xl font-extrabold text-[#F3F3E0] tracking-tight sm:text-4xl lg:text-5xl">
            Meet Our <span className="">Expert Instructors</span>
          </h2>
          <p className="mt-4 text-lg text-[#A2B9A7] nunito sm:text-xl max-w-3xl mx-auto">
            Our dedicated team of trainers brings years of industry experience
            and a passion for guiding you on your learning journey.
          </p>
        </div>

        <div
         className="mb-10"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-button-prev-teachers",
              nextEl: ".swiper-button-next-teachers",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {teachers.map((teacher, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  layout
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="p-6 flex flex-col items-center bg-[#183B4E]">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#DDA853]">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="object-cover w-full h-full"
                      />
                      {/* <div className="absolute inset-0 bg-indigo-500 opacity-20 rounded-full animate-pulse"></div> */}
                    </div>
                    <h3 className="text-xl text-center font-semibold text-[#DDA853] mb-2">
                      {teacher.name}
                    </h3>
                    <p className="text-[#DDA853] text-center font-medium mb-1">
                      {teacher.profile}
                    </p>
                    <p className="text-sm text-center text-[#DDA853]">
                      Experience: <span className="font-semibold">{teacher.experience}</span>
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev-teachers absolute top-1/2 left-2 sm:left-4 md:left-4 lg:left-4 -translate-y-1/2 bg-white shadow-md rounded-full p-2 sm:p-3 lg:p-3 md:p-3 cursor-pointer z-10 hover:bg-indigo-100 transition-colors duration-200">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-teachers absolute top-1/2 right-2 sm:right-4 md:right-4 lg:right-4 -translate-y-1/2 bg-white shadow-md rounded-full p-2 sm:p-3 lg:p-3 md:p-3 cursor-pointer z-10 hover:bg-indigo-100 transition-colors duration-200">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeacherTestimonials;