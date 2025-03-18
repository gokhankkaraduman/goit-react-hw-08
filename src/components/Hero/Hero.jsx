import css from './Hero.module.css'; 
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

function Hero () {

    const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 8000); 

    return () => clearInterval(interval);
    }, []);
    const texts = [
                "Connecting the world",
                "Your Phone Book, Your Gateway to the World", 
                "Never Lose a Connection, Stay in the World’s Loop"
            ];


    return (
        <section className={css.section}>
            <div className={css.container}>
                <div className={css.titleContent}>
                <div>
                    <AnimatePresence mode="wait">
                    <motion.h1
                        key={texts[index]}
                        className={css.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {texts[index]}
                    </motion.h1>
                    </AnimatePresence>
                </div>
                <p className={css.subtitle}>
                    Keep your contacts organized and accessible with <span>Nexora.</span> No more lost numbers or scattered lists—just a seamless way to store, manage, and connect with the people who matter most. Stay in control of your phonebook and simplify your communication like never before.
                </p>
                </div>
                <div className={css.td}>
                <Spline scene="https://prod.spline.design/rLKTICRxipdYtN5C/scene.splinecode" />
                </div>
            </div>
        </section>
    )
};
export default Hero;