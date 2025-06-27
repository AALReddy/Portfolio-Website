import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Snowfall() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="snowfall"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 100,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "star" },
          opacity: { value: 0.8, random: true },
          size: { value: 4, random: true },
          move: {
            direction: "bottom",
            enable: true,
            speed: 1.5,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Snowfall;
