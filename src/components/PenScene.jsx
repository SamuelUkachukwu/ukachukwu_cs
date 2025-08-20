import React, { useEffect, useMemo, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { Pen } from "./Pen";
import {
    Environment,
    Loader,
    OrthographicCamera,
} from "@react-three/drei";

const ModelPen = () => {
    const { viewport } = useThree();

    const scale = useMemo(() => {
        if (viewport.width < 2.5) return 1.6;
        if (viewport.width < 4) return 2.4;
        if (viewport.width < 6) return 3.4;
        return 5;
    }, [viewport.width]);

    return <Pen position={[0, -1.6, 0.7]} scale={scale} />;
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

const PenScene = () => {
    const isDark = useTheme();
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
                    zIndex: -1,
                }}
            >
                <ambientLight intensity={1} />

                {/* Camera */}
                <OrthographicCamera makeDefault zoom={120} position={[0, 0, 6]} />

                <Suspense fallback={null}>
                    <ModelPen />
                    <Environment preset={isDark ? "dawn" : "sunset"} />
                </Suspense>
            </Canvas>
        </>
    );
};

export default PenScene;
