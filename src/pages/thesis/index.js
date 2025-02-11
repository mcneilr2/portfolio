import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import {
//   meta,
//   worktimeline,
//   skills,
//   pubs,
// } from "../../content_option";

export const Thesis = () => {
  return (
    <HelmetProvider>
      <div className="thesis-container">
      
      {/* Section 1: System Engineering & Multi-Disciplinary Integration */}
      <section className="thesis-section fadeInUp">
        <div className="thesis-text">
          <h2 className="section-title">System Engineering & Integration</h2>
          <p>
            Designed a **highly integrated hyperspectroscopy system** combining 
            **optical, infrared, thermal, and mechanical** components. Developed a 
            **SolidWorks CAD model, Zemax OpticStudio optical model, and MATLAB 
            spectral processing pipeline.**
          </p>
          <p>
            The system includes an **automated Fourier Transform Infrared (FTIR) 
            spectrometer**, controlled via a **custom-built software stack**, ensuring 
            high spatial resolution and reproducibility in material analysis.
          </p>
        </div>
        {/* <img src={SystemEngineeringImage} alt="System Engineering Diagram" className="thesis-image" /> */}
      </section>

      {/* Section 2: Custom Software Development & Automation */}
      <section className="thesis-section fadeInUp">
        <div className="thesis-text">
          <h2 className="section-title">Custom Software & Automation</h2>
          <p>
            Developed **HypIR**, a **full-stack automation software** for 
            hyperspectroscopy experiments. It includes:
          </p>
          <ul>
            <li>🔹 **Back-end:** Written in **C** for low-level device coordination.</li>
            <li>🔹 **Front-end:** Built with **Tkinter (Python GUI library)** for user control.</li>
            <li>🔹 **Database:** SQL-based system to maintain experimental parameters.</li>
          </ul>
          <p>
            The software automates the **motorized stage control, optical alignment, and 
            spectral data processing**, improving experimental efficiency and accuracy.
          </p>
        </div>
        {/* <img src={SoftwareArchitectureImage} alt="Software Architecture Diagram" className="thesis-image" /> */}
        
        {/* Tech Stack Circular Diagram */}
        <div className="tech-stack-container">
          {/* <img src={TechStackImage} alt="Technology Stack" className="tech-stack-image" /> */}
        </div>
      </section>

      {/* Section 3: Future-Proofing & Research Impact */}
      <section className="thesis-section fadeInUp">
        <div className="thesis-text">
          <h2 className="section-title">Enabling Future Innovation</h2>
          <p>
            The HypIR software provides **a standardized, scalable framework** for 
            future researchers, enabling **automated spectral data acquisition** for 
            novel materials science investigations.
          </p>
          <p>
            The instrument’s automation reduces **experimental setup complexity** 
            and allows researchers to focus on **data interpretation and material 
            characterization**, accelerating discoveries in **nanomaterials and 
            thermal emission studies**.
          </p>
        </div>
        {/* <img src={HyperspectrometerDiagram} alt="Hyperspectrometer Diagram" className="thesis-image" /> */}
      </section>
    </div>
        </HelmetProvider>
  );
};
