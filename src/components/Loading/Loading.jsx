import { motion } from 'framer-motion';
import './Loading.module.css';

function Loading() {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const dotVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <motion.div
      className="loading-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="spinner-ring"
        variants={spinnerVariants}
        animate="animate"
      >
        <motion.div
          className="inner-circle"
          animate={{
            scale: [1, 1.2, 1],
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
        <motion.div
          className="inner-circle secondary"
          animate={{
            scale: [1.2, 1, 1.2],
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            },
          }}
        />
      </motion.div>

      <motion.p
        className="loading-text"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Loading
        <motion.span variants={dotVariants}>.</motion.span>
        <motion.span variants={dotVariants}>.</motion.span>
        <motion.span variants={dotVariants}>.</motion.span>
      </motion.p>
    </motion.div>
  );
}

export default Loading;