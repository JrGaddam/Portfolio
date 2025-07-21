"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: "Leading development of cutting-edge web applications using React and Node.js.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed and maintained various web applications using MERN stack.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2016 - 2018",
    description: "Assisted in the development of mobile apps using React Native.",
  },
]

export default function Experience() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>
              <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-xl">{exp.title}</h3>
                <h4 className="mb-3 font-semibold text-lg text-blue-400">{exp.company}</h4>
                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

