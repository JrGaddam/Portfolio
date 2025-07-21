"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface TerminalProps {
  setActiveSection: (sectionName: string) => void
}

export default function Terminal({ setActiveSection }: TerminalProps) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState(['Welcome to the Command Center. Type "help" for available commands.'])

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    
    switch (command) {
      case "help":
        setOutput([...output, "> " + cmd, "Available commands: about, projects, education, skills, contact, clear"])
        break
      case "about":
        setOutput([...output, "> " + cmd, `Accessing ${command} information...`])
        setActiveSection("About")
        break
      case "projects":
        setOutput([...output, "> " + cmd, `Accessing ${command} information...`])
        setActiveSection("Projects")
        break
      case "education":
        setOutput([...output, "> " + cmd, `Accessing ${command} information...`])
        setActiveSection("Education")
        break
      case "skills":
        setOutput([...output, "> " + cmd, `Accessing ${command} information...`])
        setActiveSection("Skills")
        break
      case "contact":
        setOutput([...output, "> " + cmd, `Accessing ${command} information...`])
        setActiveSection("Contact")
        break
      case "clear":
        setOutput([])
        break
      default:
        setOutput([...output, "> " + cmd, 'Command not recognized. Type "help" for available commands.'])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput("")
    }
  }

  useEffect(() => {
    const terminal = document.getElementById("terminal-output")
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight
    }
  }, [output])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black border border-green-500 p-4 h-full overflow-hidden flex flex-col font-mono"
    >
      <div className="text-green-400 mb-2 text-sm border-b border-green-500 pb-2">
        TERMINAL v1.0.0
      </div>
      <div id="terminal-output" className="flex-1 overflow-y-auto mb-4 text-sm">
        {output.map((line, index) => (
          <div key={index} className="mb-1">
            {line}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="mr-2 text-green-400">{">"}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-green-500 text-sm"
          placeholder="Enter command..."
          autoFocus
        />
      </form>
    </motion.div>
  )
}

