import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";

const Portfolio = () => {
  useEffect(() => {
    // Set page title
    document.title = "Tilak Sorte - Web Developer | AI & Automation Explorer";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold tracking-wider mb-4 md:mb-0" data-testid="footer-logo">
              TILAK SORTE
            </div>
            
            <div className="flex items-center space-x-8 mb-4 md:mb-0" data-testid="footer-nav">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="flex space-x-4" data-testid="footer-social">
              <a href="https://github.com/hysonberg27" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-github">
                Github
              </a>
              <a href="https://www.linkedin.com/in/tilak-sorte-223ab1335/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-linkedin">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm" data-testid="footer-copyright">
              Created by <span className="text-white">Tilak Sorte</span> • Built with React & TypeScript
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
