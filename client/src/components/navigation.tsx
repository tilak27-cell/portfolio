import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Timeline" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator" style={{ transform: `translateX(${scrollProgress - 100}%)` }} />
      
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass-morphism"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold gradient-text cursor-pointer"
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.05 }}
              data-testid="logo"
            >
              TS
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-teal transition-colors duration-300"
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="hover:bg-gray-200 dark:hover:bg-gray-700"
                data-testid="theme-toggle"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                data-testid="mobile-menu-toggle"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <motion.div 
            className={`md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 ${isOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left hover:text-teal transition-colors duration-300"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
