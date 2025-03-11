import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./style.scss";
import cnt from "../../assets/images/thesis/cnt_forest.png";
import schematic from "../../assets/images/thesis/1.3_hyperblock.png";
import outcad from "../../assets/images/thesis/outcad.png";
import maps from "../../assets/images/thesis/map.png";
import codeblocks from "../../assets/images/thesis/codeblocks.png";
import landing from "../../assets/images/thesis/landing.png";


export const Thesis = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 200, damping: 10 });


  return (
    <div className="thesis__container">
      <h1 className = "thesis__title">Automation of a broadband infrared hyperspectroscopy apparatus</h1>
      <a href="https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0401866" 
   className="button" 
   target="_blank">
   UBC Publication
</a>

      {/* Laser Path - Wider to Avoid Overlap
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
      </svg> */}

      {/* Section 1: Motivations in Materials Physics */}
      <motion.section id="motivations" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Motivations in Materials Physics</h2>
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
        <h2 className = "optics__title">Opto-Mechanical Design</h2>
        <img className = "optics__image" src={schematic} alt="Hyperspectrometer Schematic" />
        <p className = "optics__text">
        To investigate the heat trap effect, a <strong>3D Hyperspectroscopy</strong> system was developed, incorporating advanced optical and linear motion components.
        A high-powered <strong>532nm, 5W Solid-State Laser</strong> was directed towards the sample using passive optical
    components like mirrors and a <strong>Thorlabs infinity-corrected objective lens</strong>. This setup ensured precise excitation beam and outgoing signal alignment,
    and confined delivery of laser energy to the target material.</p>
    <img className = "optics__image--noborder" src={outcad} alt="Hyperspectrometer CAD" />
    <p className = "optics__text">The outgoing infrared (IR) signal
    was spatially discretized using <strong>Zaber Precision Linear Stages</strong> and passive optics, allowing sub-micron 2D control of signal collection. 
    The IR signal was then directed to the <strong>Fourier Transform Infrared (FTIR) Spectrometer</strong>.
    </p>
    <img className = "optics__image" src={maps} alt="Hyperspectrometer CAD" />
    <p className = "optics__text">Finally, the discritized spectral data was fed into a custom black-body normalized spectral algorithm built in <strong>Python</strong>, enabling <strong>2D Thermal Map Generation</strong>.
        </p>
      </motion.section>

      {/* Section 3: HypIR Software Stack */}
      <motion.section id="software" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
        <h2><strong>HypIR</strong> Software Stack</h2>
        <img className = "software__image--noborder" src={codeblocks} alt="IR Signal Results" />
        <p className="software__text">
        HypIR is a lean stack comprised of low-level, well documented and scalable languages and frameworks, 
        as well as hardware specified languages and SDK's.
        </p>

        <p className="software__text">
    The backend was developed using a combination of <strong>C</strong> and <strong>Python</strong> to manage spectrometer/linear motion coordination and
    control. The front end was built using the <strong>Tkinter</strong> library in <strong>Python</strong>,
    providing a simple and scalable UI.
    
    An <strong>SQLite3</strong> database was implemented to store and manage spectral data along with all
    experimental parameters. 
    </p>
    <img className = "software__image--noborder" src={landing} alt="IR Signal Results" />

    <p className="software__text">
    The resulting full-stack software represents an integral step in transforming
    an optics table prototype into an effective, marketable scientific instrument.
     </p>
      </motion.section>
    </div>
  );
};
