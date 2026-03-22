import { useGLTF } from "@react-three/drei"; 
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RobotModel = () => {
    const robotRef = useRef()

    useFrame((state,delta)=>{
        robotRef.current.rotation.y += delta*0.4 
    })


  const { scene } = useGLTF('/threed/robot_police_little_helper.glb'); // Ensure you have a robot.glb model in your public folder


  return <primitive ref={robotRef} object={scene} scale={0.2} position={[0, 7, -140]} />;
};

export default RobotModel
