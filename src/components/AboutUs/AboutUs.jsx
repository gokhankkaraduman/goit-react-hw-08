import React from "react";
import { FaUsers, FaBrain, FaCode } from "react-icons/fa";
import css from './AboutUs.module.css';
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.section
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
        viewport={{ once: true }}
        className={css.aboutSection}>
      <div className={css.container}>
        <div className={css.textContent}>
          <h2>About Us</h2>
          <p>
            We are a team of passionate innovators and tech enthusiasts, committed to 
            creating intelligent, user-friendly solutions. Our mission is to bridge the 
            gap between technology and human needs with the power of AI and seamless 
            communication.
          </p>
        </div>
        <div className={css.infoBoxes}>
          <div className={css.infoBox}>
            <FaUsers className={css.icon} />
            <h3>Our Team</h3>
            <p>We are a diverse group of experts in technology, design, and user experience.</p>
          </div>
          <div className={css.infoBox}>
            <FaBrain className={css.icon} />
            <h3>Intelligence</h3>
            <p>Our brainpower drives innovation, making us leaders in AI-driven technology.</p>
          </div>
          <div className={css.infoBox}>
            <FaCode className={css.icon} />
            <h3>Engineering</h3>
            <p>We believe in creating elegant code and scalable solutions for modern needs.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutUs;
