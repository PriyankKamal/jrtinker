import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "../Compnents/Skeleton";
import { FaUserGraduate } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { MdCalendarViewMonth } from "react-icons/md";
import { motion } from "framer-motion";
import { RiPriceTag3Fill } from "react-icons/ri";
import { useCourses } from "../Context/CourseProvider";
import { Helmet } from "react-helmet-async";

const Courses = () => {
  const { loading, courses } = useCourses();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <Helmet>
        <title>For Kids</title>
      </Helmet>

      <section className="w-full pt-0 sm:pt-32">
        <div className="px-0 md:px-16 py-16 min-h-screen">
          {loading ? (
            <Skeleton />
          ) : (
            <section className="container mx-auto px-4 py-12">
              {/* Section Heading */}
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 font-salsa">
                  One Path.{" "}
                  <span className="text-indigo-600">Infinite Possibilities.</span>
                </h2>
                <p className="mt-3 text-lg sm:text-xl text-gray-600">
                  Age-inclusive STEM programs that grow with you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses &&
                  courses.map((course, index) => (
                    <motion.div
                      key={index}
                      className="relative group bg-white rounded-2xl shadow-lg overflow-hidden"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                    >
                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={course.courseImage.replace(
                            "/upload/",
                            "/upload/w_432,h_256,c_fill,f_auto,q_auto/"
                          )}
                          alt={course.courseName}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{
                            maskImage: `url("/images/background/bg-img-courses.png")`,
                            maskPosition: "center center",
                            maskRepeat: "no-repeat",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex flex-col items-center text-center">
                        <Link
                          to={`/courses/${course._id}`}
                          className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300 mb-3 font-salsa"
                        >
                          {course.courseName}
                        </Link>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {course.courseDescription}
                        </p>

                        {/* Divider */}
                        <div className="w-16 h-1 bg-indigo-500 rounded-full mb-6"></div>

                        {/* Course Details */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full text-left">
                          <div className="flex items-center gap-2">
                            <FaUserGraduate className="text-xl text-indigo-600" />
                            <p className="text-base font-medium text-gray-700">
                              {`${course.ageGroup.min}-${course.ageGroup.max}`}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <MdCalendarViewMonth className="text-xl text-cyan-500" />
                            <p className="text-base font-medium text-gray-700">
                              {`${Math.ceil(course.courseDuration / 20)} months`}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <RiPriceTag3Fill className="text-xl text-orange-500" />
                            <p className="text-base font-medium text-gray-700">
                              ${course.coursePrice}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaRegClock className="text-xl text-yellow-500" />
                            <p className="text-base font-medium text-gray-700">
                              {`${course.courseDuration} sessions`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
};

export default Courses;
