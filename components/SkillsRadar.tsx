"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

// Type definitions
interface Skill {
  name: string
  level: number
}

interface RadarChartProps {
  skills: Skill[]
  category: string
}

const skillCategories = {
  "Programming Languages": [
    { name: "Java", level: 0.9 },
    { name: "Python", level: 0.85 },
    { name: "JavaScript", level: 0.8 },
    { name: "TypeScript", level: 0.75 },
    { name: "SQL", level: 0.85 },
    { name: "Scala", level: 0.7 },
    { name: "C", level: 0.7 },
    { name: "C++", level: 0.75 },
  ],
  "Frameworks & Libraries": [
    { name: "Spring Boot", level: 0.85 },
    { name: "React.js", level: 0.9 },
    { name: "Flask", level: 0.9 },
    { name: "Flutter", level: 0.85 },
    { name: "JUnit", level: 0.85 },
    { name: "Mockito", level: 0.7 },
    { name: "JaCoCo", level: 0.9 },
    { name: "Express.js", level: 0.7 },
  ],
  "Cloud & Backend Services": [
    { name: "Docker", level: 0.95 },
    { name: "Kubernetes", level: 0.8 },
    { name: "AWS", level: 0.75 },
    { name: "Spring Cloud Gateway", level: 0.7 },
    { name: "Eureka Service Discovery", level: 0.7 },
    { name: "OpenAI API", level: 0.8 },
    { name: "Pinecone", level: 0.75 },
    { name: "CI/CD pipelines", level: 0.8 },
  ],
  "Databases": [
    { name: "PostgreSQL", level: 0.85 },
    { name: "MySQL", level: 0.85 },
    { name: "MongoDB", level: 0.75 },
    { name: "Vector Databases", level: 0.7 },
    { name: "Firebase Firestore", level: 0.8 },
    { name: "Redis", level: 0.7 },
  ],
  "Tools & DevOps": [
    { name: "Git", level: 0.9 },
    { name: "Docker", level: 0.8 },
    { name: "Postman", level: 0.85 },
    { name: "Swagger", level: 0.8 },
    { name: "Kafka", level: 0.7 },
    { name: "RabbitMQ", level: 0.7 },
    { name: "GitHub Actions", level: 0.8 },
    { name: "Jenkins", level: 0.7 },
  ],
}

function RadarChart({ skills, category }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 78 // Slightly reduced radius to make more room for labels

    // Draw radar background circles
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 1
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI)
      ctx.stroke()
    }

    // Draw radar lines
    const angleStep = (2 * Math.PI) / skills.length
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius
      )
      ctx.stroke()
    }

    // Draw skill points and labels
    ctx.fillStyle = "rgb(0, 255, 0)"
    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2
      const skillRadius = radius * skill.level
      
      // Draw skill point
      ctx.beginPath()
      ctx.arc(
        centerX + Math.cos(angle) * skillRadius,
        centerY + Math.sin(angle) * skillRadius,
        4,
        0,
        2 * Math.PI
      )
      ctx.fill()

      // Draw label with improved spacing
      ctx.font = "11px Space Mono" // Slightly smaller font
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      
      // Increase label radius for more space
      const labelRadius = radius + 40
      
      // Calculate label position
      let labelX = centerX + Math.cos(angle) * labelRadius
      let labelY = centerY + Math.sin(angle) * labelRadius
      
      // Add extra padding for labels on the sides
      if (Math.abs(Math.cos(angle)) > 0.7) {
        labelX = centerX + Math.cos(angle) * (labelRadius + 15)
      }
      
      // Draw text with background for better readability
      const textWidth = ctx.measureText(skill.name).width
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
      ctx.fillRect(labelX - textWidth/2 - 3, labelY - 8, textWidth + 6, 16)
      
      // Draw the text
      ctx.fillStyle = "rgb(0, 255, 0)"
      ctx.fillText(skill.name, labelX, labelY)
    })

    // Connect skill points to form radar shape
    if (skills.length > 0) {
      ctx.strokeStyle = "rgba(0, 255, 0, 0.3)"
      ctx.fillStyle = "rgba(0, 255, 0, 0.1)"
      ctx.lineWidth = 2
      ctx.beginPath()
      
      skills.forEach((skill, index) => {
        const angle = index * angleStep - Math.PI / 2
        const skillRadius = radius * skill.level
        const x = centerX + Math.cos(angle) * skillRadius
        const y = centerY + Math.sin(angle) * skillRadius
        
        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })
      
      ctx.closePath()
      ctx.fill()
      ctx.stroke()
    }
  }, [skills])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold mb-4">{category}</h3>
      <canvas ref={canvasRef} width="360" height="360" className="mx-auto"></canvas>
    </motion.div>
  )
}

export default function SkillsRadar() {
  return (
    <div className="text-center">
      <h2 className="text-2xl mb-8">Skills Radar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <RadarChart key={category} skills={skills} category={category} />
        ))}
      </div>
    </div>
  )
}