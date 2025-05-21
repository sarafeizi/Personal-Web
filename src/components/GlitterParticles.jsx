import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const GlitterParticles = ({ theme }) => {
    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    const options = {
        fullScreen: { enable: true, zIndex: -1 },
        background: {
            color: theme === "dark" ? "#000000" : "#ffffff", // بک‌گراند سیاه یا سفید
        },
        particles: {
            number: { value: 200, density: { enable: true, area: 800 } },
            color: {
                value: theme === "dark" ? "#FFD700" : "#f0f", // طلایی یا صورتی
            },
            shape: { type: "circle" },
            opacity: { value: 0.8, random: true },
            size: { value: 2, random: true },
            move: {
                enable: true,
                speed: 1,
                random: true,
                straight: false,
                outModes: { default: "out" },
            },
        },
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100 } },
        },
    };

    return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default GlitterParticles;
