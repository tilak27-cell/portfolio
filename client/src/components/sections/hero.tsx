import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Web Developer", "AI Explorer", "Hackathon Enthusiast", "Automation Expert"];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentText = texts[currentTextIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-teal to-navy opacity-90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="Tilak Sorte - Professional Developer" 
              className="w-32 h-32 rounded-full mx-auto shadow-2xl border-4 border-light-blue object-cover"
              data-testid="profile-image"
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="hero-title"
          >
            Hi, I'm <span className="gradient-text">Tilak Sorte</span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-8 text-light-blue"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            data-testid="hero-subtitle"
          >
            Building Intelligent Solutions at the Intersection of
          </motion.p>
          
          <motion.div 
            className="text-3xl md:text-4xl font-semibold mb-12 h-16 flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-teal" data-testid="dynamic-text">{displayText}</span>
            <motion.span 
              className="text-light-blue ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-teal hover:bg-teal/80 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
              data-testid="button-view-projects"
            >
              <Code className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-2 border-light-blue text-light-blue hover:bg-light-blue hover:text-navy px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
              data-testid="button-download-resume"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            data-testid="scroll-indicator"
          >
            <ChevronDown className="text-2xl text-light-blue" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
