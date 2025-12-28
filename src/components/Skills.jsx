import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, 
  FaGitAlt, FaDocker, FaAws 
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiMongodb, SiPostgresql, SiRedis, SiTypescript,
  SiExpress, SiNextdotjs, SiGraphql
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
      ],
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
    <section id="skills" className="py-20 px-6">
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
            My <span className="text-gradient">Skills</span>
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
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 transition-all"
                  >
                    <skill.icon 
                      size={48} 
                      className="mb-3"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Always learning and expanding my skill set with the latest technologies
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

