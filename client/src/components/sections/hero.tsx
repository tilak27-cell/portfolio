import * as React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const badgeRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (badgeRef.current) {
      const rect = badgeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            ref={badgeRef}
            className="relative mb-8 group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative z-10"
              animate={{
                scale: mousePosition.x || mousePosition.y ? 1.05 : 1,
                rotateX: mousePosition.y ? (mousePosition.y - 50) / 20 : 0,
                rotateY: mousePosition.x ? (mousePosition.x - 50) / 20 : 0,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img 
                src="https://i.ibb.co/YTWsxyqF/available-for-work.png" 
                alt="Available for work" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                data-testid="available-badge"
                style={{
                  transform: `perspective(1000px) rotateX(${-(mousePosition.y - 50) / 40}deg) rotateY(${(mousePosition.x - 50) / 40}deg)`,
                }}
              />
            </motion.div>
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl -z-10"
              animate={{
                x: (mousePosition.x - 50) / 5,
                y: (mousePosition.y - 50) / 5,
                opacity: mousePosition.x || mousePosition.y ? 0.3 : 0,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          </motion.div>
          
          <motion.h1 
            className="text-7xl md:text-9xl font-bold tracking-wider leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            data-testid="hero-title"
          >
            TILAK SORTE
          </motion.h1>
        </div>
        
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center space-x-3 bg-gray-900 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white font-medium" data-testid="availability-status">Available For Work</span>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          data-testid="hero-description"
        >
          I am a dedicated web developer and AI enthusiast, deeply committed to building intelligent solutions. With hackathon experience and hands-on expertise in automation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            onClick={() => scrollToSection("about")}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-all hover:scale-105 group"
            data-testid="button-more-about-me"
          >
            More About Me
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
