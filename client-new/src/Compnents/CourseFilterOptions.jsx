import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegClock, FaUserGraduate } from "react-icons/fa6";
import { RiPriceTag3Fill } from "react-icons/ri";
import { MdCalendarViewMonth } from "react-icons/md";
import { motion } from 'framer-motion';

const CourseFilterOptions = () => {
  const [loading, setLoading] = useState(false);
  const [allCourses, setAllCourses] = useState([]);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState({ min: 6, max: 12 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', transition: { duration: 0.3 } },
  };

  const ageGroup = [
    { label: "6-12", min: 6, max: 12 },
    { label: "6-18", min: 6, max: 18 },
    { label: "14-24", min: 14, max: 24 },
    { label: "12-24", min: 12, max: 24 },
    { label: "16-24", min: 16, max: 24 },
  ];

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:4600/admin/course-dashboard/all-courses"
      );
      const result = await response.json();
      setAllCourses(result.courses);
    } catch (error) {
      console.log("course filter section error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const filterCourse = allCourses.filter((e) => {
    return (
      e.ageGroup.min == selectedAgeGroup.min &&
      e.ageGroup.max == selectedAgeGroup.max
    );
  });

  const handleSelectChange = (e) => {
    const [min, max] = e.target.value.split("-").map(Number);
    setSelectedAgeGroup({ min, max });
  };

  return (
    <div className="w-full min-h-screen">
      {/* Heading Section - Responsive */}
      <div className="px-4 sm:px-8 md:px-16 pt-8 md:pt-16 pb-8 md:pb-16">
        <div className="w-full mb-8 md:mb-16">
          <div className="w-full flex flex-col sm:flex-row flex-wrap sm:items-center gap-2 sm:gap-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">My child is in the</h1>
            <select
              className="text-2xl sm:text-3xl md:text-4xl font-medium border-0 outline-none text-cyan-600 border-b-2 bg-transparent py-1 max-w-[150px]"
              onChange={handleSelectChange}
            >
              {ageGroup.map((elem, index) => (
                <option
                  key={index}
                  value={`${elem.min}-${elem.max}`}
                  className="text-lg sm:text-xl md:text-2xl"
                >
                  {elem.label}
                </option>
              ))}
            </select>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">age group.</h1>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          /* Course Cards - Responsive Grid */
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filterCourse.length > 0 ? (
                filterCourse.map((course, index) => (
                  <motion.div
                    key={index}
                    className="relative group bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    {/* Image Section */}
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img
                        src={course.courseImage}
                        alt={course.courseName}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{
                          maskImage: `url("/images/background/bg-img-courses.png")`,
                          maskPosition: 'center center',
                          maskRepeat: 'no-repeat',
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-5 md:p-6 flex flex-col items-center text-center flex-grow">
                      <Link
                        to={`/courses/${course._id}`}
                        className="text-xl sm:text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300 mb-2 md:mb-3 font-salsa line-clamp-2"
                      >
                        {course.courseName}
                      </Link>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3 md:mb-4">
                        {course.courseDescription}
                      </p>

                      {/* Divider */}
                      <div className="w-12 sm:w-16 h-1 bg-indigo-500 rounded-full mb-4 md:mb-6"></div>

                      {/* Course Details */}
                      <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4 w-full text-left mt-auto">
                        <div className="flex items-center gap-2">
                          <FaUserGraduate className="text-lg sm:text-xl text-indigo-600 flex-shrink-0" />
                          <p className="text-sm sm:text-base font-medium text-gray-700 truncate">
                            {`${course.ageGroup.min}-${course.ageGroup.max}`}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <MdCalendarViewMonth className="text-lg sm:text-xl text-cyan-500 flex-shrink-0" />
                          <p className="text-sm sm:text-base font-medium text-gray-700 truncate">
                            {`${Math.ceil((course.courseDuration)/20)} months`}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <RiPriceTag3Fill className="text-lg sm:text-xl text-orange-500 flex-shrink-0" />
                          <p className="text-sm sm:text-base font-medium text-gray-700 truncate">
                            ${course.coursePrice}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaRegClock className="text-lg sm:text-xl text-yellow-500 flex-shrink-0" />
                          <p className="text-sm sm:text-base font-medium text-gray-700 truncate">
                            {`${course.courseDuration} sessions`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-xl text-gray-500">No courses found for this age group.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseFilterOptions;