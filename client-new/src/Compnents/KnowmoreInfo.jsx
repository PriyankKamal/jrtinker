import { useRef } from "react";
import "./KnowmoreInfo.css"
import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";

const KnowmoreInfo = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef();
  const videoRef3 = useRef();
  const videoRef4 = useRef();
  const videoRef5 = useRef();
  const videoRef6 = useRef();
  const videoRef7 = useRef();
  const videoRef8 = useRef();
  const videoRef9 = useRef();
  const videoRef10 = useRef();
  const videoRef11 = useRef();

  const handleMouseEnter = () => {
    if (videoRef1.current) {
      console.log("mouse enter");
      videoRef1.current.play();
    }
  };
  const handleMouseEnter2 = () => {
    if (videoRef2.current) {
      console.log("mouse enter");
      videoRef2.current.play();
    }
  };

  const handleMouseEnter3 = () => {
    if (videoRef3.current) {
      console.log("mouse enter");
      videoRef3.current.play();
    }
  };
  const handleMouseEnter4 = () => {
    if (videoRef4.current) {
      console.log("mouse enter");
      videoRef4.current.play();
    }
  };
  const handleMouseEnter5 = () => {
    if (videoRef5.current) {
      console.log("mouse enter");
      videoRef5.current.play();
    }
  };
  const handleMouseEnter6 = () => {
    if (videoRef6.current) {
      console.log("mouse enter");
      videoRef6.current.play();
    }
  };

  const handleMouseEnter7 = () => {
    if (videoRef7.current) {
      console.log("mouse enter");
      videoRef7.current.play();
    }
  };
  const handleMouseEnter8 = () => {
    if (videoRef8.current) {
      console.log("mouse enter");
      videoRef8.current.play();
    }
  };
  const handleMouseEnter9 = () => {
    if (videoRef9.current) {
      console.log("mouse enter");
      videoRef9.current.play();
    }
  };

  const handleMouseEnter10 = () => {
    if (videoRef10.current) {
      console.log("mouse enter");
      videoRef10.current.play();
    }
  };

  const handleMouseEnter11 = () => {
    if (videoRef11.current) {
      console.log("mouse enter");
      videoRef11.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef1.current) {
      console.log("mouse leave");
      videoRef1.current.pause();
    }
  };

  const handleMouseLeave2 = () => {
    if (videoRef2.current) {
      console.log("mouse leave");
      videoRef2.current.pause();
    }
  };

  const handleMouseLeave3 = () => {
    if (videoRef3.current) {
      console.log("mouse leave");
      videoRef3.current.pause();
    }
  };
  const handleMouseLeave4 = () => {
    if (videoRef4.current) {
      console.log("mouse leave");
      videoRef4.current.pause();
    }
  };
  const handleMouseLeave5 = () => {
    if (videoRef5.current) {
      console.log("mouse leave");
      videoRef5.current.pause();
    }
  };

  const handleMouseLeave6 = () => {
    if (videoRef6.current) {
      console.log("mouse leave");
      videoRef6.current.pause();
    }
  };
  const handleMouseLeave7 = () => {
    if (videoRef7.current) {
      console.log("mouse leave");
      videoRef7.current.pause();
    }
  };
  const handleMouseLeave8 = () => {
    if (videoRef8.current) {
      console.log("mouse leave");
      videoRef8.current.pause();
    }
  };

  const handleMouseLeave9 = () => {
    if (videoRef9.current) {
      console.log("mouse leave");
      videoRef9.current.pause();
    }
  };
  const handleMouseLeave10 = () => {
    if (videoRef10.current) {
      console.log("mouse leave");
      videoRef10.current.pause();
    }
  };
  const handleMouseLeave11 = () => {
    if (videoRef11.current) {
      console.log("mouse leave");
      videoRef11.current.pause();
    }
  };

  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <>
   
    
    <section className="w-full h-full px-40 pt-64 py-28 project-section-border-radius bg-[#161616] text-white ">
      <div className="w-full leading-36">
        <h1
          className="text-[9.6rem] tracking-tight font-[350]"
         
        >
          Featured
        </h1>
        <div className="flex gap-7 items-center h-[12rem]">
          <video
          
            src="/videos/header2.mp4"
            loop
            muted
            autoPlay
            className="project-section-video"
          ></video>
          <p
            className=" italic text-[9.6rem] font-[350] tracking-tight leading-none lg:mb-[75px]"
           
          >
            projects
          </p>
        </div>
      </div>

      <div className="project-container w-full py-32">
        <div className="image-1 project-container-images">
          <video
            src="/videos/cover.mp4"
            loop
            
            playsInline
            muted
            className="w-full"
            ref={videoRef1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></video>
          <p className="mt-6 text-2xl w-3/4">
            {" "}
            <span className="font-medium">Punto Pago –</span> The First
            Super-App in Latin America
          </p>
        </div>
        <div className="image-2 project-container-images">
          <video
            ref={videoRef2}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            src="/videos/cover-1.mp4"
            loop
            playsInline
            muted
            className="w-full"
          ></video>
          <p className="mt-6 text-2xl w-3/4">
            {" "}
            <span className="font-medium"> Kelvin Zero –</span> A digital
            product for passwordless authentication
          </p>
        </div>
        <div className="image-3 project-container-images">
          <video
            ref={videoRef3}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
            src="/videos/cover-2.mp4"
            loop
            playsInline
            muted
            className="w-full"
          ></video>
          <p className="mt-6 text-2xl w-3/4">
            {" "}
            <span className="font-medium">DaoWay –</span> Astrology planner app:
            plan, achieve, thrive
          </p>
        </div>
        <div className="image-4 project-container-images">
          <video
            ref={videoRef4}
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
            src="/videos/cover-4.mp4"
            loop
            playsInline
            muted
            className="w-full"
          ></video>
          <p className="mt-6 text-2xl w-3/4">
            {" "}
            <span className="font-medium">Magma –</span> The ultimate tool for
            building in the Web3 era
          </p>
        </div>
        <div className="image-5 project-container-images">
          <video
            ref={videoRef5}
            onMouseEnter={handleMouseEnter5}
            onMouseLeave={handleMouseLeave5}
            src="/videos/cover-5.mp4"
            loop
            playsInline
            muted
            className="w-full"
          ></video>
          <p className="mt-6 text-2xl w-3/4">
            {" "}
            <span className="font-medium">Riyadh –</span> Official website of
            Riyadh, Saudi Arabia's capital
          </p>
        </div>
        <div className="image-6 project-container-images">
          <video
            ref={videoRef6}
            onMouseEnter={handleMouseEnter6}
            onMouseLeave={handleMouseLeave6}
            src="/videos/cover-6.mp4"
            loop
            playsInline
            muted
            className="w-full"
          ></video>
          <p className="mt-6 text-2xl w-3/4">
            {" "}
            <span className="font-medium">FlipaClip –</span> The best tool for
            stop-motion animation
          </p>
        </div>
        <div className="image-7 project-container-images">
          <video
            ref={videoRef7}
            onMouseEnter={handleMouseEnter7}
            onMouseLeave={handleMouseLeave7}
            src="/videos/cover-7.mp4"
            loop
            playsInline
            muted
            className="w-full"
          ></video>
          <p className="mt-6 text-2xl w-3/4">
            {" "}
            <span className="font-medium">Qvino –</span> Wine marketplace with
            interactive learning
          </p>
        </div>
        <div className="image-8 project-container-images">
          <video
            ref={videoRef8}
            onMouseEnter={handleMouseEnter8}
            onMouseLeave={handleMouseLeave8}
            src="/videos/cover-8.mp4"
            loop
            playsInline
            muted
            className="w-full"
          ></video>
          <p className="mt-6 text-2xl w-3/4">
            {" "}
            <span className="font-medium">Zelt –</span> Run HR, IT & Finance in
            one place
          </p>
        </div>
        <div className="image-9 project-container-images">
          <video
            ref={videoRef9}
            onMouseEnter={handleMouseEnter9}
            onMouseLeave={handleMouseLeave9}
            src="/videos/cover-9.mp4"
            loop
            playsInline
            muted
            className="w-full"
          ></video>
          <p className="mt-6 text-2xl w-3/4">
            {" "}
            <span className="font-medium">Potion –</span> Sales tool for
            increasing conversions
          </p>
        </div>
        <div className="image-10 project-container-images">
          <video
            ref={videoRef10}
            onMouseEnter={handleMouseEnter10}
            onMouseLeave={handleMouseLeave10}
            src="/videos/cover-10.mp4"
            loop
            playsInline
            muted
            className="w-full"
          ></video>
          <p className="mt-6 text-2xl w-3/4">
            {" "}
            <span className="font-medium">Ferrumpipe –</span> Galvanized steel
            metal frame manufacturer
          </p>
        </div>
        <div className="image-11 project-container-images">
          <video
            ref={videoRef11}
            onMouseEnter={handleMouseEnter11}
            onMouseLeave={handleMouseLeave11}
            src="/videos/cover-11.mp4"
            loop
            playsInline
            muted
            className="w-full"
          ></video>
          <p className="mt-6 text-2xl w-3/4">
            {" "}
            <span className="font-medium">Cisco –</span> Cloud based network
            management
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default KnowmoreInfo;
