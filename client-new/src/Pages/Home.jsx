import WhyChooseUs from "../Compnents/WhyChooseUs";

import HomePageNew from "../Compnents/HomeNew";

import NumberBanner from "../Compnents/NumberBanner";
import LatestProgramsSlider from "../Compnents/LatestProgramsSlider";

import AboutUsHome from "../Compnents/AboutUsHome";
import WhyChooseUs2 from "../Compnents/WhyChooseUs2";
 
import CourseFilterOptions from "../Compnents/CourseFilterOptions";
import ParentTestimonials from "../Compnents/parent-testimonial/ParentTestimonial";

import TeacherTestimonials from "../Compnents/TeacherTestimonial";
// import SchoolContactForm from "../Compnents/SchoolContactForm";
import WhatsappIntegration from "../Compnents/WhatsappIntegration";
import { Helmet } from "react-helmet-async";

import ChildrenTestimonial from "../Compnents/childrenTestimonial/ChildrenTestimonial";
import Chatbot from "../Compnents/chatbot/Chatbot2";

const Home = () => {
 

  return (
    <>
      <Helmet>
        <title>JRtinker</title>
      </Helmet>

      

      <main className="w-full relative ">
        
        <Chatbot/>
        <WhatsappIntegration />
    

        <HomePageNew />
        <WhyChooseUs />
        
        <AboutUsHome />

    
        <LatestProgramsSlider />
        <CourseFilterOptions />
        <NumberBanner />
        <ChildrenTestimonial />

        <TeacherTestimonials />

        <WhyChooseUs2 />
        
        <ParentTestimonials />

        {/* <SchoolContactForm /> */}

       
      </main>

    </>
  );
};

export default Home;
