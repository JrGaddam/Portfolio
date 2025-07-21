"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Education() {
  // Updated courses list with all relevant coursework
  const courses = [
    {
      name: "Data Structures & Algorithms",
      concepts: ["Time/space complexity analysis", "Trees, graphs, heaps", "Sorting & searching algorithms", "Dynamic programming"]
    },
    {
      name: "Operating Systems",
      concepts: ["Process management", "Memory management", "File systems", "Concurrency & synchronization", "Virtualization"]
    },
    {
      name: "Software Testing",
      concepts: ["Unit & integration testing", "Test-driven development", "Coverage analysis", "Automated testing", "JUnit & JaCoCo"]
    },
    {
      name: "Artificial Intelligence",
      concepts: ["Search algorithms", "Knowledge representation", "Reasoning under uncertainty", "Natural language processing", "Genetic algorithms"]
    },
    {
      name: "Machine Learning",
      concepts: ["Supervised & unsupervised learning", "Neural networks", "Model evaluation", "Feature engineering", "Reinforcement learning"]
    },
    {
      name: "Information Security",
      concepts: ["Cryptography", "Network security", "Authentication", "Access control", "Penetration testing"]
    },
    {
      name: "Computer Networks",
      concepts: ["TCP/IP protocol suite", "Routing algorithms", "Network security", "Socket programming", "Wireless networks"]
    },
    {
      name: "Software Engineering",
      concepts: ["SDLC methodologies", "Design patterns", "Requirements analysis", "Project management", "CI/CD pipelines"]
    },
    {
      name: "Data Mining",
      concepts: ["Pattern recognition", "Clustering", "Classification", "Association rules", "Data visualization"]
    },
    {
      name: "Databases",
      concepts: ["Relational algebra", "SQL", "Transaction management", "Normalization", "Indexing", "NoSQL databases"]
    },
    {
      name: "Compilers",
      concepts: ["Lexical analysis", "Parsing techniques", "Code generation", "Optimization strategies", "Symbol tables"]
    }
  ]

  const achievements = [
    "Outstanding Student in Computer Science",
    "Active member of Computer Science Student Association"
  ]

  // Track which course is being hovered
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl mb-8 text-center"
        >
          Education
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-10">
          {/* University Info with Larger Landscape Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="border border-green-500/50 rounded-lg p-6 bg-black/60 backdrop-blur-sm relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-400"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-400"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-400"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-400"></div>
              
              {/* University Image */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative"
              >
                <img
                  src="uta.jpg"
                  alt="University of Texas at Arlington"
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-md mb-4"
                />
                <div className="absolute inset-0 border border-green-500/30 rounded-md"></div>
              </motion.div>
              
              {/* University Info - Updated graduation date */}
              <div className="space-y-4">
                <div className="border-l-2 border-green-500 pl-4">
                  <h3 className="text-2xl font-bold text-green-400 tracking-wide">University of Texas at Arlington</h3>
                  <div className="text-lg text-gray-300 font-mono">Bachelor of Science in Computer Science</div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-green-300/70 mt-1 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      January 2023 – May 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Combined Coursework & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-green-500/50 rounded-lg p-6 bg-black/60 backdrop-blur-sm"
          >
            {/* Academic Achievements Section */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-6 inline-flex items-center border-b border-green-500/30 pb-2 w-full">
                <div className="w-3 h-3 bg-green-400 rounded-sm mr-2"></div>
                Academic Achievements
              </h4>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-green-500/10 border border-green-500/30 rounded-md mr-4 mt-1">
                      <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15L8.5 11.5L9.5 10.5L12 13L16.5 8.5L17.5 9.5L12 15Z" fill="currentColor" />
                        <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Coursework Section with Hover Effects - Now with updated courses */}
            <div>
              <h4 className="text-xl font-bold mb-6 inline-flex items-center border-b border-green-500/30 pb-2 w-full">
                <div className="w-3 h-3 bg-green-400 rounded-sm mr-2"></div>
                Relevant Coursework
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                  <div
                    key={course.name}
                    className="relative"
                    onMouseEnter={() => setHoveredCourse(index)}
                    onMouseLeave={() => setHoveredCourse(null)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="bg-gray-800/60 border border-green-500/20 rounded-md p-4 hover:border-green-500/50 transition-colors cursor-default h-full"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-green-300 font-medium">{course.name}</span>
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700/80 text-green-400 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Concepts tooltip - appears on hover */}
                      <div 
                        className={`absolute left-0 right-0 bottom-full mb-2 bg-gray-900 border border-green-500/30 rounded-md p-3 shadow-lg transition-all duration-200 z-10
                          ${hoveredCourse === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                      >
                        <div className="text-sm text-green-400 font-medium mb-2">Key Concepts:</div>
                        <ul className="text-xs text-gray-300 space-y-1">
                          {course.concepts.map((concept, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-400 mr-1">•</span>
                              <span>{concept}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 border-r border-b border-green-500/30"></div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
