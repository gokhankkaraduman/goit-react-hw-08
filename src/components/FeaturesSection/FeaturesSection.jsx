import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import css from './FeaturesSection.module.css';

function FeaturesSection () {

    return (
        <motion.section
            key="features-section"  // key ekleyerek her kaydırıldığında tekrar render edilmesini sağlıyoruz.
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }}  // Görünür olduğunda animasyon başlasın
            transition={{ duration: 0.6, ease: "easeOut" }} 
            viewport={{ once: false }}          // Kaydırdıkça yeniden tetiklesin
            className={css.section}
        >
            <div className={css.container}>
                <motion.h2 
                    key="title"  // Başlık için de key ekledik
                    className={css.title} 
                    initial={{ opacity: 0, y: 100 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Unlock the Power of Intelligent Connectivity
                </motion.h2>

                <div className={css.content}>
                    <Spline scene="https://prod.spline.design/WWHCMZwBEuRTfteA/scene.splinecode" />
                    <p className={css.text}>
                        Powered by intelligence, driven by connection! Experience the next evolution of digital communication, crafted with cutting-edge technology and the power of human intelligence. Seamlessly manage your contacts, retrieve call history in an instant, and stay effortlessly connected. Inspired by the way our brains create and store information, our smart phone book adapts to your needs, ensuring a fluid and intuitive experience. 
                    </p>
                </div>
            </div>
        </motion.section>
    );
}

export default FeaturesSection;
