import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

const CourseContext = createContext();

const CourseProvider = ({children}) => {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(false);

  const allCourses = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:4600/admin/course-dashboard/all-courses",
      );

      if (response.ok) {
        const data = await response.json();
        // console.log("all courses data: ", data);
        setCourses(data.courses);
      }
    } catch (error) {
      console.log("all courses error: ", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
    allCourses(); 
  }, []);



  return (
    <>
    <CourseContext.Provider value={{loading,courses}}>
      {children}
    </CourseContext.Provider>
    </>
  )
}

const useCourses =()=> useContext(CourseContext)

export {useCourses}

export default CourseProvider