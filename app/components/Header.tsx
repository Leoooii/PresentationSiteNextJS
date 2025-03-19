'use client'; // Client Component pentru navigare interactivă

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleScroll = (section : any) => {
    router.push(`/#${section}`,  { scroll: false });
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Ilie Leonard Andrei</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <button onClick={() => handleScroll('about')} className="transition-colors hover:text-primary">
              About
            </button>
            <button onClick={() => handleScroll('experience')} className="transition-colors hover:text-primary">
              Experience
            </button>
            <button onClick={() => handleScroll('projects')} className="transition-colors hover:text-primary">
              Projects
            </button>
            <button onClick={() => handleScroll('skills')} className="transition-colors hover:text-primary">
              Skills
            </button>
            <button onClick={() => handleScroll('certifications')} className="transition-colors hover:text-primary">
              Certifications
            </button>
            <button onClick={() => handleScroll('courses')} className="transition-colors hover:text-primary">
              Courses
            </button>
            <button onClick={() => handleScroll('contact')} className="transition-colors hover:text-primary">
              Contact
            </button>
          </nav>
        </div>
        <Button variant="outline" className="ml-auto border-blue-500/30 hover:bg-blue-950/30 hover:text-blue-300">
          Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;