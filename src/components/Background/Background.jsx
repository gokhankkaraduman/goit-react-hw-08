import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { useEffect } from 'react';

function Background({ children }) {
    const COLORS = ["#13FFA", "#1E67C6", "#CE84CF", "#DD335C"];
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(155% 125% at 20% 0%, #020617 30%, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror',
        });
    }, []);

    return (
        <motion.main style={{ backgroundImage: backgroundImage}}>
            {children}
        </motion.main>
    );
}

export default Background;
