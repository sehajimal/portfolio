import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactMethods = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'sehajimal@gmail.com',
      href: 'mailto:sehajimal@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'in/sehajajimal',
      href: 'https://www.linkedin.com/in/sehajajimal/',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'sehajimal',
      href: 'https://github.com/sehajimal',
      color: 'from-gray-700 to-gray-900',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="py-20 px-6">
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
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your visions. Let's build something amazing together!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                <method.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {method.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 break-all">
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-12 text-white"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-3xl font-bold mb-4">Let's Work Together!</h3>
            <p className="text-lg mb-6 opacity-90">
              Have a project in mind? I'd love to hear about it.
            </p>
            <motion.a
              href="mailto:sehajimal@gmail.com"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Me an Email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

