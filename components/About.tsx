"use client"

import { motion } from "framer-motion"

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "GraphQL",
  "Docker",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Next.js",
  "TailwindCSS",
]

export default function About() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <p className="text-lg mb-4">
              I'm a software developer with a passion for creating elegant, efficient, and user-friendly applications.
              With over 5 years of experience in the industry, I've worked on a wide range of projects from small
              startups to large enterprises.
            </p>
            <p className="text-lg">
              My goal is to build software that not only meets the functional requirements but also provides an
              exceptional user experience. I'm always eager to learn new technologies and stay up-to-date with the
              latest industry trends.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm cursor-pointer"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

