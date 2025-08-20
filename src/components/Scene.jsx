import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import * as THREE from "three";

import Loader from "./Loader";
import { Laptop } from "./Laptop";
import { AreaLight } from "./AreaLight";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ResponsiveGroup = () => {
  const { viewport } = useThree();
  const groupRef = useRef();

  useEffect(() => {
    gsap.to(groupRef.current.rotation, {
      y: Math.PI, // Rotate 180 degrees
      duration: 2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        // end: "+=100%",
        scrub: 2,
        // markers: true,
      },
    });
  }, []);

  // Group scale based on viewport width
  const scale = useMemo(() => {
    if (viewport.width < 2.5) return 0.4;
    if (viewport.width < 4) return 0.6;
    if (viewport.width < 6) return 0.8;
    return 1;
  }, [viewport.width]);

  return (
    <>
      <group ref={groupRef} scale={scale}>
        <Laptop position={[0, -0.45, 0]} />
      </group>
    </>
  );
};

const useTheme = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const updateTheme = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    updateTheme();
    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
};

const Scene = () => {
  const isDark = useTheme();

  const BaseCircle = () => {
  const { viewport } = useThree()
  const isMobile = viewport.width < 2.5 

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, isMobile ? -0.2 : -0.38, 0]}
      receiveShadow
    >
      <circleGeometry args={[5, 64]} />
      <shadowMaterial opacity={0.2} />
    </mesh>
  )
}

  return (
    <>
   <Loader />
      <Canvas
        shadows
        gl={{ antialias: true }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 4,
        }}
      >
        
        {/* Camera */}
        <PerspectiveCamera
          makeDefault
          fov={45}
          position={[0, 0, 2.5]}
          rotation={[0, 0, 0]}
        />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[2, 4, 2]}
          intensity={5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={0.1}
          shadow-camera-far={10}
          shadow-camera-top={5}
          shadow-camera-right={5}
          shadow-camera-bottom={-5}
          shadow-camera-left={-5}
        />
        {/* Base Circle */}
        <BaseCircle />

        {/* Models */}
        <Suspense fallback={null}>
          <ResponsiveGroup />
          <AreaLight />
          <Environment preset={isDark ? "sunset" : "city"} />
        </Suspense>
        {/* <OrbitControls enableZoom={false}/> */}
        {/* <axesHelper args={[5]} />
                <gridHelper args={[10, 10]} /> */}
      </Canvas>
    </>
  );
};

export default Scene;
