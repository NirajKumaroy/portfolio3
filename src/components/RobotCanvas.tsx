"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect } from "react";

function RobotModel() {
  const { scene, animations } = useGLTF("/Models/robot.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && animations.length > 0) {
      // Log available animations for debugging
      console.log(
        "Available Animations:",
        animations.map((a) => a.name)
      );

      // Select the best animation based on name priority
      const preferredAnimation =
        actions["Dance"] ||
        actions["Walking"] ||
        actions["Run"] ||
        actions["Idle"] ||
        actions[animations[0].name];

      // Play the selected animation with fade-in
      preferredAnimation?.reset().fadeIn(0.5).play();
    }
  }, [actions, animations]);

  return <primitive object={scene} scale={1.1} position={[0, -1, 0]} />;
}

export default function RobotCanvas() {
  return (
    <div className=" bg-white dark:bg-gradient-to-r from-blue-500 to-purple-500 w-screen h-screen ">
      <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <RobotModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
