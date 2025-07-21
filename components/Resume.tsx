"use client"

import { motion } from "framer-motion"

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-left max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4">Jayanth Reddy Gaddam</h2>
      <p className="mb-4">
        <a href="https://linkedin.com/in/jrgaddam/" target="_blank" rel="noopener noreferrer" className="mr-4">
          LinkedIn
        </a>
        <a href="https://jrgaddam.com" target="_blank" rel="noopener noreferrer" className="mr-4">
          Website
        </a>
        <a href="https://github.com/JrGaddam" target="_blank" rel="noopener noreferrer" className="mr-4">
          GitHub
        </a>
        <span className="mr-4">+1 (346)-366-5510</span>
        <a href="mailto:ascii.8192@gmail.com">ascii.8192@gmail.com</a>
      </p>
      <p className="mb-4">Arlington, TX</p>

      <h3 className="text-2xl font-bold mt-6 mb-2">Education</h3>
      <p className="font-bold">University of Texas at Arlington</p>
      <p>Bachelor of Science in Computer Science</p>
      <p>January 2023 – Expected May 2025</p>

      <h3 className="text-2xl font-bold mt-6 mb-2">Skills</h3>
      <p>
        <strong>Languages:</strong> Python, SQL, Java, C++, C, JavaScript, TypeScript, HTML5, CSS3, Dart, Swift, Scala
      </p>
      <p>
        <strong>Frameworks:</strong> Flask, Django, Flutter, React, Node.js, jQuery, MongoDB, Java Swing, Apache Maven,
        Gradle
      </p>
      <p>
        <strong>Tools:</strong> Git, Postman, Docker, Kubernetes, Jenkins, CocoaPods, JaCoCo
      </p>
      <p>
        <strong>Concepts:</strong> REST APIs, CI/CD pipelines, Agile scrum, System Design, Test-Driven Development
        (TDD), Linux environments
      </p>
      <p>
        <strong>Cloud Platforms:</strong> AWS S3, Google Cloud Platform (GCP), Firebase
      </p>
      <p>
        <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Firestore
      </p>

      <h3 className="text-2xl font-bold mt-6 mb-2">Projects</h3>
      <ul className="list-disc pl-5">
        <li className="mb-4">
          <strong>USACE Lake Water Level Application</strong>
          <p>Flutter Application Developer | Aug 2024 – May 2025</p>
          <p>
            Led a team of 4 to build a cross-platform mobile app using Flutter and Dart, providing real-time water
            levels and flood alerts for 38 lakes.
          </p>
        </li>
        <li className="mb-4">
          <strong>Software Testing for PrintTokens</strong>
          <p>Software Testing Engineer | Aug 2024 – Dec 2024</p>
          <p>
            Achieved 94% total code coverage using JUnit, with 100% branch coverage for 5 methods and 96% for complex
            functions.
          </p>
        </li>
        <li className="mb-4">
          <strong>Compiler for Simple Programming Language (SPL)</strong>
          <p>Compiler Developer | Aug 2024 – Dec 2024</p>
          <p>Built a compiler for SPL from scratch, using JFlex for lexical analysis and CUP for syntax parsing.</p>
        </li>
        <li className="mb-4">
          <strong>DOCTORAL Database Management System</strong>
          <p>Full Stack Developer | May 2024 – Aug 2024</p>
          <p>
            Developed a full-stack database application using Python (Flask), React, and MySQL to manage data for 500+
            PhD students and faculty.
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

