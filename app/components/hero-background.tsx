"use client"

import { useEffect, useRef } from "react"

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle class for the hero section
    class HeroParticle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      maxOpacity: number
      fadeSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 6 + 2 // Larger particles
        this.speedX = Math.random() * 1.5 - 0.75 // Faster movement
        this.speedY = Math.random() * 1.5 - 0.75
        this.maxOpacity = Math.random() * 0.7 + 0.5 // Higher opacity
        this.opacity = 0
        this.fadeSpeed = 0.01

        // Create brighter blue particles
        const blueValue = Math.floor(Math.random() * 55) + 200 // Brighter blue (200-255)
        this.color = `rgba(0, ${blueValue}, 255, ${this.opacity})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }

        // Fade in and out
        if (this.opacity < this.maxOpacity) {
          this.opacity += this.fadeSpeed
        } else {
          this.opacity -= this.fadeSpeed
        }

        // Update color with new opacity
        const colorMatch = this.color.match(/rgba$$(\d+),\s*(\d+),\s*(\d+),\s*[\d.]+$$/)
        if (colorMatch) {
          const r = colorMatch[1]
          const g = colorMatch[2]
          const b = colorMatch[3]
          this.color = `rgba(${r}, ${g}, ${b}, ${this.opacity})`
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Add stronger glow effect
        ctx.shadowBlur = 25
        ctx.shadowColor = "rgba(0, 150, 255, 0.8)"
      }
    }

    // Create particles
    const particlesArray: HeroParticle[] = []
    const numberOfParticles = Math.min(70, Math.floor((canvas.width * canvas.height) / 6000)) // More particles

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new HeroParticle())
    }

    // Animation loop
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Connect particles with lines
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150 // Increased connection distance

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 180, 255, ${0.4 * (1 - distance / maxDistance)})` // Brighter, more visible lines
            ctx.lineWidth = 2 // Thicker lines
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full rounded-xl z-0" />
}

