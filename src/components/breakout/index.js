import React, { useState } from "react";
import "./style.scss"; // Import the SCSS for animations

const Breakout = () => {
  const [exploded, setExploded] = useState(false);

  const titles = [
    "Creative Coder",
    "UI/UX Explorer",
    "Full-Stack Developer",
    "Frontend Engineer",
    "Tech Enthusiast",
    "Problem Solver",
  ];

  return (
    <div className="title">
      {/* Center title with shimmering effect */}
      <h1
        className={`title__text ${exploded ? "title__text--no-shimmer" : "title__text--shimmer"}`}
        onMouseEnter={() => setExploded(true)}
        onMouseLeave={() => setExploded(false)}
      >
        Software Engineer
        <span className="title__shimmer"></span>
      </h1>

      {/* Exploding titles in a radial layout */}
      {exploded && (
        <div className="title__container">
          {titles.map((title, index) => {
            const angle = (index * (360 / titles.length)) * (Math.PI / 180); // Convert to radians
            const radius = 160; // Increased to prevent overlap
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className="title__explosion"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {title}
                <div
                  className="title__connector"
                  style={{
                    height: `${radius - 20}px`, // Dynamic line length
                    transform: `rotate(${angle}rad)`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Breakout;
