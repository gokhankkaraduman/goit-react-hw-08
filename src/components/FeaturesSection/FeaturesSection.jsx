import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import css from "./FeaturesSection.module.css";

function FeaturesSection() {
  return (
    <motion.section
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
        viewport={{ once: false }} 
      className={css.section}
    >
      <div className={css.container}>
        <motion.h2
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} 
            viewport={{ once: false }} 
          className={css.title}
        >
          Unlock the Power of Intelligent Connectivity
        </motion.h2>

        <div className={css.content}>
          <div style={{ width: "100%", maxWidth: "600px", maxHeight:"700px" }}>
            <Spline scene="https://prod.spline.design/WWHCMZwBEuRTfteA/scene.splinecode" />
          </div>
          <motion.p className={css.text}
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} 
            viewport={{ once: false }} >
            Powered by intelligence, driven by connection! Experience the next evolution of digital communication, crafted with cutting-edge technology and the power of human intelligence. Seamlessly manage your contacts, retrieve call history in an instant, and stay effortlessly connected. Inspired by the way our brains create and store information, our smart phone book adapts to your needs, ensuring a fluid and intuitive experience.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturesSection;