import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import AnimatedBackground from "./components/animated-background"
import HeroBackground from "./components/hero-background"
import Experience from "./components/experience"

export default function Page() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 w-full border-b border-blue-900/30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <Link className="mr-6 flex items-center space-x-2" href="/">
                <span className="hidden font-bold sm:inline-block">John.dev</span>
              </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href="#about" className="transition-colors hover:text-primary">
                  About
                </Link>
                <Link href="#experience" className="transition-colors hover:text-primary">
                  Experience
                </Link>
                <Link href="#projects" className="transition-colors hover:text-primary">
                  Projects
                </Link>
                <Link href="#skills" className="transition-colors hover:text-primary">
                  Skills
                </Link>
                <Link href="#certifications" className="transition-colors hover:text-primary">
                  Certifications
                </Link>
                <Link href="#courses" className="transition-colors hover:text-primary">
                  Courses
                </Link>
                <Link href="#contact" className="transition-colors hover:text-primary">
                  Contact
                </Link>
              </nav>
            </div>
            <Button variant="outline" className="ml-auto border-blue-500/30 hover:bg-blue-950/30 hover:text-blue-300">
              Resume
            </Button>
          </div>
        </header>

        <main className="container px-4 md:px-6">
          <section id="about" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 relative p-8 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 w-full max-w-3xl mx-auto overflow-hidden">
                  <HeroBackground />
                  <div className="relative z-10">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white mb-8">
                      Full Stack Developer
                    </h1>
                    <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-blue-500/30 mb-6 glow-blue">
                      <Image
                        src="/leo.png?height=160&width=160"
                        alt="Profile"
                        width={160}
                        height={160}
                        className="object-cover"
                      />
                    </div>
                    <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                      Building digital experiences with modern technologies. Focused on creating elegant solutions to
                      complex problems.
                    </p>
                  </div>
                </div>
                <div className="space-x-4">
                  <Link href="https://github.com" target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-blue-500/30 hover:bg-blue-950/30 hover:text-blue-300"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-blue-500/30 hover:bg-blue-950/30 hover:text-blue-300"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-blue-500/30 hover:bg-blue-950/30 hover:text-blue-300"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="mailto:hello@example.com">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-blue-500/30 hover:bg-blue-950/30 hover:text-blue-300"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
                Experience
              </h2>
              <Experience />
            </div>
          </section>

          <section id="projects" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
                Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <ProjectCard
                  title="Hardware Store Web Platform"
                  description="I independently developed a web platform using Next.js for a hardware store, integrating Firebase authentication, which allows the owner to showcase and efficiently manage their stock."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["Next.js", "Firebase", "Authentication"]}
                />
                <ProjectCard
                  title="Dental Clinic Management Platform"
                  description="I built a web platform using React, Express and Mongoose where doctors can create appointments and manage other aspects of the clinic."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["React", "Express", "MongoDB"]}
                />
                <ProjectCard
                  title="ANAF Information Platform"
                  description="Web platform for accessing ANAF (Romanian Tax Administration) information, providing users with easy access to tax-related data."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["JavaScript", "API Integration", "Web Development"]}
                />
                <ProjectCard
                  title="Security System for Hearing Impaired"
                  description="I worked on a team project which involves Arduino and sensors with the purpose of alarming people with hearing impairments of intruders."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["Arduino", "IoT", "Sensors"]}
                />
              </div>
            </div>
          </section>

          <section id="skills" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
                Skills
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-300">Technical Skills</h3>
                  <TechStack />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-300">Soft Skills</h3>
                  <div className="grid gap-4">
                    <div className="bg-black/50 rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                          <span className="text-blue-100">Time management</span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                          <span className="text-blue-100">Good communication skills</span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                          <span className="text-blue-100">Fast learner</span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                          <span className="text-blue-100">Teamwork</span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                          <span className="text-blue-100">Leadership</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="certifications" className="py-12 md:py-24 lg:py-32 bg-blue-950/30 backdrop-blur-sm rounded-xl">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
                Certifications
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-black/50 rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">Bachelor's Degree in System Engineering</h3>
                  <p className="text-blue-200 mb-2">2020-2024</p>
                  <p className="text-sm text-blue-100">
                    Comprehensive education in system design, software engineering, and IT infrastructure management.
                  </p>
                </div>
                <div className="bg-black/50 rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">
                    Certificate in Public Procurement Expertise
                  </h3>
                  <p className="text-blue-200 mb-2">2022</p>
                  <p className="text-sm text-blue-100">
                    Specialized training in public procurement procedures, regulations, and best practices.
                  </p>
                </div>
                <div className="bg-black/50 rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">Certificate in Fitness Training</h3>
                  <p className="text-blue-200 mb-2">2021</p>
                  <p className="text-sm text-blue-100">
                    Professional certification in fitness instruction, nutrition, and personalized training programs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="courses" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
                Self-Taught Courses
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all bg-black/50">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">
                    The Complete 2023 Web Development Bootcamp
                  </h3>
                  <p className="text-blue-200 mb-4">2023</p>
                  <div className="flex items-center text-sm text-blue-100">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span>HTML, CSS, JavaScript</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-100 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span>Responsive Design</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-100 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span>Frontend Frameworks</span>
                  </div>
                </div>
                <div className="rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all bg-black/50">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">JavaScript - The Complete Guide 2023</h3>
                  <p className="text-blue-200 mb-4">2023</p>
                  <div className="flex items-center text-sm text-blue-100">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span>Advanced JavaScript</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-100 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span>ES6+ Features</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-100 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span>Asynchronous Programming</span>
                  </div>
                </div>
                <div className="rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all bg-black/50">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">
                    React, NodeJS, Express & MongoDB - The MERN Fullstack Guide
                  </h3>
                  <p className="text-blue-200 mb-4">2023</p>
                  <div className="flex items-center text-sm text-blue-100">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span>React & Redux</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-100 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span>Node.js & Express</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-100 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <span>MongoDB & Mongoose</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
                  Get in Touch
                </h2>
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-blue-900/30">
          <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
            <p className="text-xs text-blue-300">© 2025 Ilie Leonard Andrei All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4 text-blue-300 hover:text-blue-100" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4 text-blue-300 hover:text-blue-100" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}

