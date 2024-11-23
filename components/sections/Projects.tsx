"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Texting Betty",
      description: "A modern messaging platform built with Django and WebSocket for real-time communication. Features include end-to-end encryption, file sharing, and group chats.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=60",
      tech: ["Django", "Channels", "PostgreSQL", "Redis", "WebSocket"],
      github: "https://github.com/hamzasial1911/texting-betty",
      demo: "https://www.textingbetty.com"
    },
    {
      title: "The Billionaires Plan",
      description: "Financial planning application with advanced analytics and reporting. Built with FastAPI for high-performance API endpoints and real-time data processing.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=60",
      tech: ["FastAPI", "MongoDB", "Redis", "Celery", "React"],
      github: "https://github.com/hamzasial1911/billionaires-plan",
      demo: "https://www.thebillionairesplan.com"
    },
    {
      title: "Task Master Pro",
      description: "Enterprise task management system with advanced workflow automation and team collaboration features. Built with Flask and SQLAlchemy.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
      tech: ["Flask", "SQLAlchemy", "Celery", "Redis", "Vue.js"],
      github: "https://github.com/hamzasial1911/task-master-pro",
      demo: "https://taskmaster.pro"
    },
    {
      title: "Health Track API",
      description: "Comprehensive healthcare API built with Pyramid framework, handling patient records, appointments, and medical data with strict HIPAA compliance.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
      tech: ["Pyramid", "PostgreSQL", "Redis", "Docker", "AWS"],
      github: "https://github.com/hamzasial1911/health-track-api",
      demo: "https://api.healthtrack.io"
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in Python frameworks
            and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 bg-card">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}