import React from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./style.scss";
import cnt from "../../assets/images/thesis/cnt_forest.png";

export const Thesis = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 200, damping: 10 });


  return (
    <div className="thesis-container">

      {/* Laser Path - Wider to Avoid Overlap */}
      <svg className="laser-svg">
        <motion.path
          d="M5 33 H1000"          stroke="#adff2f"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0.5 }}
          style={{ pathLength }}
        />
      </svg>

      {/* Section 1: Motivations in Materials Physics */}
      <motion.section id="motivations" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Motivations in Materials Physics</h1>
        <div className = "motivations__container">
        <img className = "motivations__image" src={cnt} alt="CNT Forest Heat Trap" />
        <p className = "motivations__text">
          Carbon Nanotube Forests (CNTF) exhibit extreme heat localization, creating a confined "hot spot" when exposed to a laser beam of sufficient intensity and frequency. 
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
        <img src="/images/figure2_2.jpg" alt="Gaussian Beam Propagation" />
        <img src="/images/figure2_4.jpg" alt="Beam Tracing" />
        <img src="/images/figure2_12.jpg" alt="Optical Table Setup" />
        <p>
          The incident laser beam follows Gaussian propagation principles, optimized using Zemax OpticStudio simulations. 
          The hyperspectroscopy setup leverages precision **2D translational optics** to fine-tune sample positioning for highly accurate measurements.
        </p>
      </motion.section>

      {/* Section 3: HypIR Software Stack */}
      <motion.section id="software" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
        <h2>"HypIR" Software Stack</h2>
        <img src="/images/figure3_1.jpg" alt="HypIR Software Stack" />
        <p>
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
