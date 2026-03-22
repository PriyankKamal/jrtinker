import React, { useEffect, useState } from "react";
import "../App.css";
// import Skeleton from "./Skeleton";
import { Link, useParams } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useAuth } from "../Context/Auth";
import NotLoginPopUp from "./NotLoginPopUp";
import CourseClassDetails from "./CourseClassDetails";

const SingleCourseData = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { isAuthenticated } = useAuth();

  const singleCourse = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:4600/admin/course-dashboard/single-course",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ courseId: id }),
        }
      );

      if (response.ok) {
        setLoading(false);
        const result = await response.json();
        console.log("single course data: ", result);
        setCourseData(result.course);
      }
    } catch (error) {
      console.log("single course error: ", error);
      alert("Something went wrong", error);
    }
  };

  useEffect(() => {
    singleCourse();
  }, [id]);

  if (!courseData) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Course not found
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500 text-xl" />);
    }
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-500 text-xl" />
      );
    }
    while (stars.length < 5) {
      stars.push(
        <FaRegStar key={stars.length} className="text-gray-500 text-xl" />
      );
    }

    return stars;
  };

  return ( 
    <>
     
<CourseClassDetails courses={courseData}/>
    </>
  );
};

export default SingleCourseData;
