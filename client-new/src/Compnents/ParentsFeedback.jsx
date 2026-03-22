// ParentsFeedback.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ParebFeedBackSlider from "./ParebFeedBackSlider";
import "../Compnents/styling/ParentFeedback.css";

const feedbacks = [
  {
    name: "Bradly Y.Grymes",
    title: "Senior Manager",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum obcaecati totam eaque amet tempora tenetur a.",
    avatar: "/images/thumbnails/avt-quote.jpg",
  },
  {
    name: "Sarah J. Parker",
    title: "Business Analyst",
    message: "Excellent kindergarten! My child is always excited to go there and learn new things every day!",
    avatar: "/images/thumbnails/avt-quote.jpg",
  },
  {
    name: "Thomas R. Elliot",
    title: "Software Engineer",
    message: "Teachers are very friendly and the atmosphere is truly nurturing for young minds!",
    avatar: "/images/thumbnails/avt-quote.jpg",
  },
];

const ParentsFeedback = () => {
  return (
    <section 
      className="w-full relative parent-feedback py-32"
      style={{ backgroundImage: 'url("/images/background/bg-fb2.png")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-4 mb-4">
          <img src="/images/asset 54.svg" alt="asset1" />
          <p className="text-xl text-center font-extrabold text-red-400 mulish ">Parents Feedback</p>
          <img src="/images/asset 53.svg" alt="asset2" />
        </div>
        <p className="text-[#33467b] text-4xl leading-11 font-medium text-center salsa w-11/12 md:w-1/2">
          What Parents Say About Our <span className="text-red-400">JRtinker</span> 
        </p>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        speed={3000}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 }
        }}
        className="w-full max-w-7xl mx-auto"
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <ParebFeedBackSlider {...feedback} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ParentsFeedback;
