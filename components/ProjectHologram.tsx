"use client"

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Updated projects with variable metrics blocks
interface Project {
	name: string;
	description: string;
	image: string;
	video?: string;
	techStack: string[];
	metrics: {
		main: string;
		stats: { label: string; value: string; }[];
	};
	github: string;
	live?: string;
}

const projects: Project[] = [
	{
		name: "Pathiq",
		description:
			"A full-stack, cloud-native adaptive learning platform built with Java/Spring Boot and React, deployed on AWS, reducing developer research time through context-aware recommendations.",
		image: "/placeholder.svg?height=200&width=300",
		techStack: ["Java", "Spring Boot", "React", "AWS", "OpenSearch", "AWS Glue"],
		metrics: {
			main: "Implemented an LLM-powered semantic search engine using Amazon OpenSearch Service for vector indexing and AWS Glue for ETL, enabling fast, contextual search across millions of embedded learning resources.",
			stats: [
				{ label: "API response time", value: "<100ms" },
				{ label: "concurrent users", value: "1,000+" },
				{ label: "efficiency improvement", value: "35%" },
			],
		},
		github: "https://github.com/JrGaddam/Pathiq",
		live: "https://pathiq.com",
	},
	{
		name: "Krypto",
		description:
			"A secure, full-stack web application using Python (Flask) to support file encryption, decryption, and key management with multiple cryptographic algorithms across Flask routes.",
		image: "/krypto.png",
		techStack: [
			"Python",
			"Flask",
			"Supabase",
			"PostgreSQL",
			"Cloudflare R2",
			"Jinja2",
		],
		metrics: {
			main: "Integrated Supabase (PostgreSQL) and Cloudflare R2, enabling scalable encrypted file handling for files up to 100MB per user, with 100% data isolation and presigned URL access control.",
			stats: [
				{ label: "processing latency reduction", value: "30%" },
			],
		},
		github: "https://github.com/JrGaddam/Krypto",
	},
	{
		name: "USACE Lake Water Level Application",
		description:
			"Cross-platform mobile app providing real-time water levels, flood alerts, and location-based safety notifications for 38 lakes managed by the USACE Tulsa District.",
		image: "/placeholder.svg?height=200&width=300",
		techStack: ["Flutter", "Dart", "Firebase", "WidgetKit/SwiftUI", "Google Maps"],
		metrics: {
			main: "Implemented a resilient offline-first architecture using HTTP, custom HTML parsing, and local storage (SharedPreferences), reducing data latency by 65% and API dependency by 100%.",
			stats: [
				{ label: "code reusability", value: "90%" },
				{ label: "database reliability", value: "99.7%" },
				{ label: "managed lakes", value: "38" },
				{ label: "data latency reduction", value: "65%" },
			],
		},
		github: "https://github.com/JrGaddam/USACE-Lake-App",
		live: "https://usace-lake-app.com",
	},
	{
		name: "Software Testing for PrintTokens",
		description:
			"Comprehensive software testing project focusing on achieving high code coverage and identifying critical bugs in Java methods.",
		image: "/placeholder.svg?height=200&width=300",
		techStack: ["Java", "JUnit", "JaCoCo", "Eclipse", "Control Flow Graphs"],
		metrics: {
			main: "Designed Control Flow Graphs (CFGs) for 15 Java methods, identifying critical branching logic and improving test coverage with advanced JUnit techniques and structured test cases.",
			stats: [
				{ label: "total code coverage", value: "94%" },
				{ label: "branch coverage (complex methods)", value: "96%" },
			],
		},
		github: "https://github.com/JrGaddam/PrintTokens-Testing",
	},
]

export default function ProjectHologram() {
	const mountRef = useRef<HTMLDivElement>(null)

	// Three.js hologram setup
	useEffect(() => {
		if (mountRef.current) {
			mountRef.current.innerHTML = ""
		}

		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
		const renderer = new THREE.WebGLRenderer({ alpha: true })
		renderer.setSize(300, 300)

		if (mountRef.current) {
			mountRef.current.appendChild(renderer.domElement)
		}

		// Create multiple geometric shapes for a more complex hologram
		const geometry1 = new THREE.BoxGeometry(1, 1, 1)
		const geometry2 = new THREE.OctahedronGeometry(0.8)
		const geometry3 = new THREE.TorusGeometry(0.6, 0.2, 8, 16)

		const material = new THREE.MeshBasicMaterial({
			color: 0x00ff88,
			wireframe: true,
		})

		const cube = new THREE.Mesh(geometry1, material)
		const octahedron = new THREE.Mesh(geometry2, material)
		const torus = new THREE.Mesh(geometry3, material)

		octahedron.position.set(1.5, 0, 0)
		torus.position.set(-1.5, 0, 0)

		scene.add(cube)
		scene.add(octahedron)
		scene.add(torus)

		camera.position.z = 5

		const animate = () => {
			requestAnimationFrame(animate)
			cube.rotation.x += 0.01
			cube.rotation.y += 0.01
			octahedron.rotation.x += 0.015
			octahedron.rotation.z += 0.01
			torus.rotation.x += 0.02
			torus.rotation.y += 0.015
			renderer.render(scene, camera)
		}

		animate()

		return () => {
			if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
				mountRef.current.removeChild(renderer.domElement)
			}
			renderer.dispose()
		}
	}, [])

	return (
		<div className="text-center">
			<h2 className="text-2xl mb-8">Projects Hologram</h2>
			{/* Centered cube */}
			<div
				ref={mountRef}
				className="mx-auto mb-8 flex justify-center items-center h-[300px]"
			></div>

			{/* Project cards - vertical layout with landscape image and animations */}
			<div className="space-y-24">
				{projects.map((project, index) => (
					<motion.div
						key={project.name}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.7,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.1,
						}}
						className="bg-gray-900 rounded-lg overflow-hidden border border-green-500/30 shadow-lg min-h-[800px]"
					>
						{/* Window Title Bar */}
						<div className="bg-gray-800 py-3 px-4 flex items-center border-b border-green-500/20">
							<div className="flex space-x-2 mr-4">
								<div className="w-3 h-3 rounded-full bg-red-500/70"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
								<div className="w-3 h-3 rounded-full bg-green-500/70"></div>
							</div>
							<div className="text-green-400 font-bold text-lg flex-1 text-left">
								{project.name}.exe
							</div>
						</div>

						{/* Window Content - Vertical Layout */}
						<div className="p-6 flex flex-col gap-8">
							{/* Landscape Image or Video with the specified aspect ratio */}
							<motion.div
								className="w-full"
								initial={{ scale: 0.95, opacity: 0.8 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								{project.video ? (
									<div className="aspect-[1677/802] relative overflow-hidden rounded-md border border-green-500/20 shadow-lg shadow-green-500/10">
										<video
											src={project.video}
											autoPlay
											muted
											loop
											playsInline
											className="w-full h-full object-cover"
										/>
									</div>
								) : (
									<div className="aspect-[1677/802] relative rounded-md border border-green-500/20 shadow-lg shadow-green-500/10 overflow-hidden">
										<img
											src={project.image}
											alt={project.name}
											className="w-full h-full object-cover"
										/>
									</div>
								)}
							</motion.div>

							{/* Project Content */}
							<div className="flex flex-col space-y-6">
								{/* Title and Description */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.3 }}
								>
									<h3 className="text-2xl font-bold mb-4 text-green-400">
										{project.name}
									</h3>
									<p className="text-gray-300 text-lg leading-relaxed mb-6">
										{project.description}
									</p>
								</motion.div>

								{/* Tech Stack */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.4 }}
									className="flex flex-wrap gap-2 mb-2"
								>
									{project.techStack.map((tech, techIndex) => (
										<motion.span
											key={tech}
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.3,
												delay: 0.5 + techIndex * 0.05,
											}}
											className="bg-gray-800 text-green-300 px-3 py-1 rounded-md text-sm border border-green-500/30"
										>
											{tech}
										</motion.span>
									))}
								</motion.div>

								{/* Main Metrics */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.5 }}
									className="bg-gray-800/50 rounded-md p-5 border-l-2 border-green-500"
								>
									<p className="text-gray-300 leading-relaxed text-base">
										{project.metrics.main}
									</p>
								</motion.div>

								{/* Stats Metrics - Block Display with dynamic grid */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.6 }}
									className={`grid gap-4 ${
										project.metrics.stats.length === 1
											? "grid-cols-1"
											: project.metrics.stats.length === 2
											? "grid-cols-2"
											: project.metrics.stats.length === 3
											? "grid-cols-3"
											: "grid-cols-2 md:grid-cols-4"
									}`}
								>
									{project.metrics.stats.map((stat, i) => (
										<motion.div
											key={i}
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.3,
												delay: 0.7 + i * 0.1,
											}}
											whileHover={{
												scale: 1.05,
												boxShadow:
													"0 10px 25px -5px rgba(0, 255, 0, 0.1)",
												borderColor: "rgba(0, 255, 0, 0.4)",
											}}
											className="bg-gray-800/30 p-4 rounded-md border border-green-500/20 text-center transition-all duration-300"
										>
											<div className="text-green-400 text-3xl font-bold mb-1">
												{stat.value}
											</div>
											<div className="text-sm text-gray-400">
												{stat.label}
											</div>
										</motion.div>
									))}
								</motion.div>

								{/* Action Links */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.8 }}
									className="flex gap-4 mt-4 pt-4 border-t border-green-500/20"
								>
									{project.github && (
										<motion.a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{
												scale: 1.05,
												backgroundColor: "rgba(31, 41, 55, 0.9)",
											}}
											whileTap={{ scale: 0.98 }}
											className="bg-gray-800 text-green-400 px-6 py-3 rounded-md text-sm font-medium transition-colors"
										>
											GitHub
										</motion.a>
									)}
									{project.live && (
										<motion.a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{
												scale: 1.05,
												backgroundColor: "rgba(5, 150, 105, 0.9)",
											}}
											whileTap={{ scale: 0.98 }}
											className="bg-green-600 text-black px-6 py-3 rounded-md text-sm font-medium transition-colors"
										>
											Live
										</motion.a>
									)}
								</motion.div>
							</div>
						</div>

						{/* Status Bar */}
						<div className="bg-gray-800 py-2 px-4 border-t border-green-500/20 flex justify-between text-xs text-green-400/70 font-mono">
							<span>Status: Operational</span>
							<span>Modified: 2024</span>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}