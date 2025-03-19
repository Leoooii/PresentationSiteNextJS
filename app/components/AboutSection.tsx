import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { HeroBackground } from "../DynamicComponents";

const AboutSection = () => {
  return (
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
                Building digital experiences with modern technologies. Focused on creating elegant solutions to complex problems.
              </p>
            </div>
          </div>
          <div className="space-x-4">
            <Link href="https://github.com" target="_blank">
              <Button variant="outline" size="icon" className="border-blue-500/30 hover:bg-blue-950/30 hover:text-blue-300">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button variant="outline" size="icon" className="border-blue-500/30 hover:bg-blue-950/30 hover:text-blue-300">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Button variant="outline" size="icon" className="border-blue-500/30 hover:bg-blue-950/30 hover:text-blue-300">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:hello@example.com">
              <Button variant="outline" size="icon" className="border-blue-500/30 hover:bg-blue-950/30 hover:text-blue-300">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;