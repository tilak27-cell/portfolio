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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="@assets/ef3e4326-96a3-43de-90f0-6a47643ce978_1756063914627.jpg" 
            alt="Tilak Sorte - Tech Enthusiast" 
            className="w-64 h-64 rounded-3xl mx-auto object-cover shadow-2xl"
            data-testid="profile-image"
          />
        </motion.div>
        
        <motion.h1 
          className="text-7xl md:text-9xl font-bold mb-12 tracking-wider leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          data-testid="hero-title"
        >
          TILAK SORTE
        </motion.h1>
        
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
