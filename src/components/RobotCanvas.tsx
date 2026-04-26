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
    if (!actions || animations.length === 0) return;

    // Select the best animation based on name priority
    const animationName =
      ["Dance", "Walking", "Run", "Idle"].find((name) => actions[name]) ||
      animations[0]?.name;

    const preferredAnimation = animationName ? actions[animationName] : null;

    if (preferredAnimation) {
      // Play the selected animation with fade-in
      preferredAnimation.reset().fadeIn(0.5).play();

      // Cleanup to avoid ghost animations in React 18 Strict Mode
      return () => {
        preferredAnimation.fadeOut(0.5);
      };
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

// Preload the 3D model to prevent Suspense fallback delays
useGLTF.preload("/Models/robot.glb");

export default function RobotCanvas() {
  return (
    <div className="bg-white dark:bg-linear-to-r from-blue-500 to-purple-500 w-full h-dvh md:h-screen relative">
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
