import React from "react";
import Todo from "./components/Todo";
import Particles from "./Particles";

const App = () => {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Particles in the background */}
      <Particles
        particleColors={["#C8E5EE", "#5BA4FC"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={120}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        className="absolute inset-0 z-0"
      />

      {/* Centered Glass Card */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6">
        <Todo />
      </div>
    </div>
  );
};

export default App;
