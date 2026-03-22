import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
// import RobotModel from './RobotModel'
import RotatingRobot from "./RotatingRobot";

const LandingPage = () => {
  return (
    <section className="w-full bg-zinc-100 h-[100vh] ">
      <div className="w-full h-[70vh] bg-[#353142]">
        <Canvas camera={{ position: [0, 0, 250], fov: 25 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <RotatingRobot />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default LandingPage;
