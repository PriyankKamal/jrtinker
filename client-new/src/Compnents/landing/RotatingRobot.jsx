import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import RobotModel from './RobotModel';
import { OrbitControls } from '@react-three/drei';

const RotatingRobot = () => {
    const groupRef = useRef();

    // Keep the robot rotating around its own axis
    // useFrame(() => {
    //   if (groupRef.current) {
    //     groupRef.current.rotation.y += 0.01; // Adjust speed here
    //   }
    // });
  
    return (
      <>
        <OrbitControls/>
        <RobotModel />
      </>
    );
}

export default RotatingRobot