import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const ChildrenTestimonial = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: "Aarav",
      age: 6,
      image:
        "https://images.unsplash.com/photo-1532619031801-97b02fb2de1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      course: "STEM Learning",
      review:
        "I loved the STEM Learning classes because they made science and math fun! We did cool experiments and activities that helped me understand how things work in real life. I especially liked building little machines and learning about energy. It felt like I was a real scientist every day!",
    },
    {
      name: "Mia",
      age: 5,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      course: "Robotics Fundamentals",
      review:
        "Robotics Fundamentals was awesome! I got to build my first robot and learn how to make it move using simple commands. The teacher made it easy to follow, and I had so much fun working with my friends to solve problems and make our robots do fun things like follow a line or avoid obstacles.",
    },
    {
      name: "Liam",
      age: 7,
      image:
        "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      course: " Advanced Robotics",
      review:
        "Advanced Robotics was challenging but really exciting. I already knew a bit about robots, but in this course, I learned how to use sensors and program more complex actions. I even got to design a robot that could complete a task all by itself. I feel proud of what I built!",
    },
    {
      name: "Sophia",
      age: 6,
      image:
        "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      course: "Python for Beginners",
      review:
        "Python for Beginners helped me learn how to code for the first time. I was nervous at first, but the lessons were simple and interesting. I made my own calculator and a guessing game, which was super cool. Now I want to learn more about coding and maybe even make my own app someday!",
    },
    {
      name: "Kabir",
      age: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      course: "Drone & Aviation Fundamentals",
      review: "Learning about drones and aviation was the best part of my week! I didn’t know how drones worked before, but now I understand how they fly, how to control them, and even the rules for using them safely. It was so cool to try flying one myself. I felt like a pilot!",
    },
  ];

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const randomRotate = () => {
    return Math.floor(Math.random() * 21 - 10);
  };

  const activeTestimonail = testimonials[active];

  const isActive = (index) => index === active;

  

  return (
    <>
    <div className="flex items-center w-full justify-center pt-5">

    <p className="text-4xl  md:text-5xl text-[#34477b] font-medium salsa text-center leading-tight max-w-2xl">From the Heart of Our Youngest Learners</p>
    </div>
    <section className="w-full flex flex-col lg:flex-row items-center justify-center h-auto lg:h-[70vh] p-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto w-full">
    
    {/* Image Container */}
    <div className="relative w-full h-80 sm:h-96 overflow-x-hidden">
      <AnimatePresence>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{
              opacity: 0,
              scale: 0.9,
              zIndex: -100,
              rotate: randomRotate(),
              y: 0,
            }}
            animate={{
              opacity: isActive(index) ? 1 : 0.7,
              scale: isActive(index) ? 1 : 0.95,
              rotate: isActive(index) ? 0 : randomRotate(),
              zIndex: isActive(index) ? 777 : testimonials.length + 2 - index,
              y: isActive(index) ? [0, -80, 0] : 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              zIndex: 100,
              rotate: randomRotate(),
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 origin-bottom"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-3xl h-full w-full object-cover object-center"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

    {/* Review + Arrows */}
    <div className="flex flex-col justify-between w-full">
      <div>
        <h2 className="text-2xl font-bold">{activeTestimonail.name}</h2>
        <p className="text-base text-neutral-400 font-bold">
          {activeTestimonail.course}
        </p>
        <p className="text-lg pt-6 text-neutral-500 salsa font-normal">
          {activeTestimonail.review}
        </p>
      </div>

      {/* Arrows for mobile */}
      <div className="flex justify-center gap-4 pt-6 lg:hidden">
        <button
          onClick={handlePrev}
          className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center hover:scale-105 transition-all"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={handleNext}
          className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center hover:scale-105 transition-all"
        >
          <FaArrowRightLong />
        </button>
      </div>

      {/* Arrows for laptop and up */}
      <div className="hidden lg:flex gap-4 pt-10">
        <button
          onClick={handlePrev}
          className="h-8 w-8 rounded-full bg-neutral-200 flex items-center justify-center hover:scale-105 transition-all"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={handleNext}
          className="h-8 w-8 rounded-full bg-neutral-200 flex items-center justify-center hover:scale-105 transition-all"
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default ChildrenTestimonial;
