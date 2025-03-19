'use client';

import dynamic from 'next/dynamic';

// Încarcă componentele dinamic
const ProjectCard = dynamic(() => import('./components/project-card'), { ssr: false });
const Experience = dynamic(() => import('./components/experience'), { ssr: false });
const ContactForm = dynamic(() => import('./components/contact-form'), { ssr: false });
const TechStack = dynamic(() => import('./components/tech-stack'), { ssr: false });
const AnimatedBackground = dynamic(() => import('./components/animated-background'), { ssr: false });
const HeroBackground = dynamic(() => import('./components/hero-background'), { ssr: false });

// Încarcă secțiunile dinamic
const ProjectsSection = dynamic(() => import('./components/ProjectsSection'), { ssr: false });
const SkillsSection = dynamic(() => import('./components/SkillsSection'), { ssr: false });
const CertificationsSection = dynamic(() => import('./components/CertificationsSection'), { ssr: false });
const CoursesSection = dynamic(() => import('./components/CoursesSection'), { ssr: false });
const ContactSection = dynamic(() => import('./components/ContactSection'), { ssr: false });

// Exportă toate componentele
export {
  ProjectCard,
  Experience,
  ContactForm,
  TechStack,
  AnimatedBackground,
  HeroBackground,
  ProjectsSection,
  SkillsSection,
  CertificationsSection,
  CoursesSection,
  ContactSection,
};