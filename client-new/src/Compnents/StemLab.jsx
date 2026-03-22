import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaMicroscope, FaChalkboardTeacher, FaProjectDiagram, FaGlobe } from "react-icons/fa";
import { ArrowRight } from 'lucide-react';
import SchoolContactForm from "./SchoolContactForm";
import FeatureCard from "./StemLabCard";

const StemLab = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      title: "Cutting-edge Equipment",
      description: "Experiment with DIY Kits, 3D printers, Robotics kits, coding platforms, and more.",
      icon: <FaMicroscope className="text-4xl text-blue-600 mb-4" />,
    },
    {
      title: "Expert Guidance",
      description: "Learn from experienced educators who are passionate about STEM.",
      icon: <FaChalkboardTeacher className="text-4xl text-green-600 mb-4" />,
    },
    {
      title: "Collaborative Projects",
      description: "Team up on exciting challenges and innovate through group collaboration.",
      icon: <FaProjectDiagram className="text-4xl text-purple-600 mb-4" />,
    },
    {
      title: "Real-world Applications",
      description: "Understand how STEM applies in everyday life through practical exposure.",
      icon: <FaGlobe className="text-4xl text-yellow-500 mb-4" />,
    },
  ];
  const handleScrollToForm = () => {
    setTimeout(() => {
      const el = document.getElementById("school-contact-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay helps in case the component hasn't mounted
  };
  
  

  return (
    <>
      <Helmet>
        <title>STEM Lab | Centre of Excellence</title>
      </Helmet>

      <section className="pt-52   min-h-screen px-4 md:px-10 ">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-2">STEM Lab</h1>
          <h2 className="text-xl font-medium text-blue-600 mb-4">(Centre of Excellence)</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our STEM Lab is a state-of-the-art facility equipped with the latest technology and resources,
            providing a hands-on learning environment where students can explore the exciting world of science,
            technology, engineering, and mathematics.
          </p>
        </motion.div>

        {/* Image */}
        <div className="flex justify-center ">
          <img
            src="/images/Lab-image.webp"
            alt="STEM Lab"
            className="w-full md:w-3/4 lg:w-2/3 rounded-3xl shadow-lg object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Features */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
         

          <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What can you expect in our STEM Lab?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our lab is designed to inspire curiosity and foster innovation through hands-on learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-4 max-w-3xl mx-auto"
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            Whether students are budding scientists, engineers, or tech enthusiasts, our STEM Lab offers
            endless opportunities for growth and discovery. Unleash the creativity and potential of your students.
          </p>
        </motion.div>
      </section>



      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Unleash Creativity and Innovation
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Whether students are budding scientists, engineers, or tech enthusiasts, our STEM Lab offers
            endless opportunities for growth and discovery. Unleash the creativity and potential of your students.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={handleScrollToForm} className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Schedule a Tour
            </button>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-gray-700">of students report increased interest in STEM fields after using our lab</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-700">hands-on experiments and projects available to students of all ages</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-700">access to digital learning resources and online STEM community</p>
          </div>
        </div>
      </div>
    </section>
    <SchoolContactForm/>
    </>
  );
};

export default StemLab;
