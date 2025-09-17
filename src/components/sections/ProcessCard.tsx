import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ProcessCardProps {
  step: {
    number: string;
    title: string;
    description: string;
    icon: string;
  };
}

const ProcessCard = ({ step }: ProcessCardProps) => {
  const { ref, isInView } = useScrollAnimation();

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="relative z-10 text-center group p-0.5"
    >
      <div className="relative z-10 bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
        {/* Subtle background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        
        {/* Animated Gradient Border */}
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-saffron-300 to-accent-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

        <div className="relative z-20">
          <motion.div variants={childVariants} className="inline-flex items-center justify-center w-16 h-16 bg-saffron-500 text-white text-xl font-bold rounded-full mb-6 group-hover:bg-accent-500 group-hover:scale-110 transition-all duration-300">
            {step.number}
          </motion.div>

          <motion.div variants={childVariants} className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
            {step.icon}
          </motion.div>

          <motion.h3 variants={childVariants} className="text-2xl font-semibold text-neutral-800 mb-4 group-hover:text-accent-600 transition-colors duration-300">
            {step.title}
          </motion.h3>

          <motion.p variants={childVariants} className="text-neutral-600 leading-relaxed">
            {step.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessCard;
