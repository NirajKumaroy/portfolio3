"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect } from "react";

function RobotModel() {
  const { scene, animations } = useGLTF("/Models/robot.glb");
  const { actions } = useAnimations(animations, scene);
  const { viewport } = useThree();

  // Responsive scale and position for mobile screens
  const scale = viewport.width < 4 ? 0.8 : 1.1;
  const positionY = viewport.width < 4 ? -0.8 : -1;

  useEffect(() => {
    if (actions && animations.length > 0) {
      // Log available animations for debugging
      console.log(
        "Available Animations:",
        animations.map((a) => a.name),
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

  return (
    <primitive
      object={scene}
      scale={scale}
      position={[0, positionY, 0]}
      dispose={null}
    />
  );
}

export default function RobotCanvas() {
  return (
    <div className="bg-white dark:bg-gradient-to-r from-blue-500 to-purple-500 w-full h-[100dvh] md:h-screen relative">
      <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <RobotModel />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
