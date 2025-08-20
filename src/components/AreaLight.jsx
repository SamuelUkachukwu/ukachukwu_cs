import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";

export function AreaLight() {
  const lightRef = useRef();

  return (
    <rectAreaLight
      ref={lightRef}
      width={1.5}
      height={1.5}
      color={"#ffffff"}
      intensity={5}
      position={[-0.22271, 1.1187, 1.5155]}
      rotation={[0, 0, 0]} 
    />
  );
}
