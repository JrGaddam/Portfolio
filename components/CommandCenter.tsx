"use client"

import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import Education from "./Education"
import ProjectHologram from "./ProjectHologram"
import SkillsRadar from "./SkillsRadar"
import Terminal from "./Terminal"

const sections = ["About", "Projects", "Education", "Skills", "Contact"]

export default function CommandCenter() {
  const [activeSection, setActiveSection] = useState("About")
  const [showTerminal, setShowTerminal] = useState(false)
  const sectionRefs = useRef(sections.map(() => React.createRef<HTMLElement>()))

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      sectionRefs.current.forEach((ref, index) => {
        const el = ref.current
        if (!el) return
        
        const rect = el.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementBottom = elementTop + rect.height
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveSection(sections[index])
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionName: string) => {
    const index = sections.findIndex(section => 
      section.toLowerCase() === sectionName.toLowerCase()
    )
    if (index !== -1) {
      sectionRefs.current[index].current?.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      })
    }
  }

  return (
    <div className="relative bg-black text-green-500 min-h-screen scroll-smooth snap-y snap-mandatory cursor-terminal" style={{ touchAction: 'pan-y' }}>
      {/* Terminal Toggle Button */}
      <button
        onClick={() => setShowTerminal(!showTerminal)}
        className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50 bg-green-500 text-black px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base rounded hover:bg-green-400 transition-colors"
      >
        {showTerminal ? "Hide Terminal" : "Show Terminal"}
      </button>

      {/* Terminal Sidebar */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 w-full md:w-1/4 h-screen bg-black border-l border-green-500 z-40 pt-12 sm:pt-16"
          >
            <Terminal setActiveSection={scrollToSection} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-4 md:pt-8" style={{ overflowY: 'auto', height: '100vh' }}>
        {sections.map((section, index) => (
          <section
            key={section}
            ref={sectionRefs.current[index]}
            className={`min-h-screen w-full flex items-center justify-center p-4 md:p-8 snap-start ${
              // Add extra spacing after Projects and Education sections
              (section === "Projects" || section === "Education") ? "mb-24" : ""
            }`}
            id={section.toLowerCase()}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-6xl"
            >
              {section === "About" && (
                <div className="text-center space-y-6">
                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold text-green-400"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Hi, I'm Jayanth Reddy Gaddam
                  </motion.h2>
                  <motion.div 
                    className="space-y-2 text-lg md:text-xl text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p>Computer Science Student at University of Texas at Arlington</p>
                    <p>Passionate about building innovative software solutions</p>
                  </motion.div>
                </div>
              )}
              {section === "Projects" && <ProjectHologram />}
              {section === "Education" && <Education />}
              {section === "Skills" && <SkillsRadar />}
              {section === "Contact" && (
                <div className="text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
                  <div className="space-y-3 text-base md:text-lg">
                    <p>Email: ascii.8192@gmail.com</p>
                    <p>Location: Dallas, TX, USA</p>
                  </div>
                  <div className="flex justify-center space-x-6 mt-6">
                    <a
                      href="https://linkedin.com/in/jrgaddam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400 transition-colors text-lg"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/JrGaddam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400 transition-colors text-lg"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </section>
        ))}
      </main>
    </div>
  )
}