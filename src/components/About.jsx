import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate software developer with a love for creating innovative 
              solutions that make a real impact. My journey in tech has been driven by 
              curiosity and a desire to continuously learn and grow.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in building modern web applications using cutting-edge 
              technologies. Whether it's crafting beautiful user interfaces or 
              architecting robust backend systems, I bring dedication and attention 
              to detail to every project.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge with 
              the developer community.
            </p>
          </motion.div>

          {/* Stats/Highlights */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg"
            >
              <div className="text-4xl font-bold text-gradient mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Lines of Code
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg"
            >
              <div className="text-4xl font-bold text-gradient mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Projects Built
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg"
            >
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Learning Mode
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg"
            >
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Passion
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

