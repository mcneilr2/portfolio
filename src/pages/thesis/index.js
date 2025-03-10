import React from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./style.scss";
import cnt from "../../assets/images/thesis/cnt_forest.png";
import hyperblock from "../../assets/images/thesis/1.3_hyperblock.png";
import zemaxObjective from  "../../assets/images/thesis/zemaxObjective.png";
import solidworksObjective from "../../assets/images/thesis/solidworksObjective.png";
import laserPath from "../../assets/images/thesis/laserPath.png";

export const Thesis = () => {
  // const { scrollYProgress } = useScroll();
  // const pathLength = useSpring(scrollYProgress, { stiffness: 200, damping: 10 });


  return (
    <div className="thesis-container">

      {/* Laser Path - Wider to Avoid Overlap
      <svg className="laser-svg">
        <motion.path
          d="M5 33 H1000"   
                 stroke="#adff2f"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0.5 }}
          style={{ pathLength }}
        />
      </svg> */}

      {/* Section 1: thesis in Materials Physics */}
      <motion.section id="motivations" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Motivations in Materials Physics</h1>
        <div className = "thesis__container">
        <img className = "thesis__image" src={cnt} alt="CNT Forest Heat Trap" />
        <p className = "thesis__text">
          <strong>Carbon Nanotube Forests (CNTFs)</strong> exhibit extreme heat localization, creating a confined "hot spot" when exposed to a laser beam of sufficient intensity and frequency. 
          This phenomenon, known as the <strong>Heat Trap Effect</strong>, results in peak temperatures of <strong>over 2000K</strong> at the center of this incandescent spot, which is excited by <strong>tens of milliwats</strong>. This temperature provides the thermal energy to induce thermionic
 emission and multiphoton photo-electron emission, which can be applied to
 devices such as <strong>thermionic energy converters</strong>. This is in contrast to classical
 conductors which require around <strong>3 times</strong> higher irradiance to
 reach the same temperature.
        </p>
        </div>
      </motion.section>

      {/* Section 2: Gaussian Optics & Opto-Mechanics */}
      <motion.section id="optics" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <h2>Gaussian Optics & Opto-Mechanics</h2>
        <img className = "thesis__image" src={hyperblock} alt="Hyperspectrometer hyperblock diagram" />
        <p className = "thesis__text">
          To determine the <strong>how</strong> and <strong>why</strong> of this phenomenon, 
          a <strong>3D IR spectrometer</strong> was constructed which would scan in 2D across the surface of the spot using translational optics,
          measuring the spectral emissions coming from each sub-micron area.  This system deploys a complex system of <strong> optical components, mechatronic stages, thermal sensors and vaccuum chambers</strong> to accomplish this task.
           I modelled this optical system using <strong>Zemax OpticStudio</strong> where I applied
          Gaussian physics principles to predict the behaviour of the beam, the energy applied to the spot and to guide <strong>optical upgrades</strong>.  
          <div className="thesis__container--horizontal">
            <img className = "thesis__image--sideby" src={zemaxObjective} alt="Zemax Objective Lense Simulation" />
            <img className = "thesis__image--sideby" src={solidworksObjective} alt="Solidworks Objective Lense Simulation" />
          </div>
          I modelled the mechanical system in <strong>Solidworks</strong> to determine necessary <strong>mechanical upgrades, system limitations and safety measures</strong>.
        </p>
        <img className = "thesis__image" src={laserPath} alt="Read Signal Path" />
      </motion.section>

      {/* Section 3: HypIR Software Stack */}
      <motion.section id="software" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
        <h2>"HypIR" Software Stack</h2>
        <img src="/images/figure3_1.jpg" alt="HypIR Software Stack" />
        <p className = "thesis__text">
          HypIR is a full-stack automation software built in **C, Python, and SQLite**. 
          It controls the experiment setup, gathers spectral data, and performs post-processing analysis in **Matlab**.
        </p>
        <img src="/images/figure4_6.jpg" alt="IR Signal Results" />
        <p>
          The system enables precise spectral measurements, allowing for real-time analysis of heat distribution across various materials.
        </p>
      </motion.section>

      {/* Footer */}
      <footer>
        <p>© 2025 Robyn McNeil | Portfolio Integration</p>
      </footer>
    </div>
  );
};
