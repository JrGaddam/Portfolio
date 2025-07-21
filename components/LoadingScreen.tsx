"use client"

import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl mb-4">Initializing Interface</h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5 }}
          className="h-2 bg-green-500"
        />
      </motion.div>
    </div>
  )
}

