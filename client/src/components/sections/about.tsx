import { motion } from "framer-motion";
import { Target, Trophy, Users, GraduationCap } from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-pale-blue dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="about-title">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal to-light-blue mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            {...fadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed" data-testid="about-description-1">
              I'm a passionate <strong>tech enthusiast</strong> who thrives at the intersection of innovation, entrepreneurship, and problem-solving. My journey in technology is driven by a relentless curiosity to build solutions that make a real-world impact.
            </p>
            
            <p className="text-lg leading-relaxed" data-testid="about-description-2">
              Through my experience in national hackathons including <strong>SIH</strong>, <strong>IIT Delhi Space Hackathon (Top 10)</strong>, and <strong>IIIT Guwahati Hacksagon (Finalist)</strong>, I've learned to transform complex challenges into elegant, automated solutions.
            </p>
            
            <motion.div 
              className="bg-gradient-to-r from-teal to-light-blue p-6 rounded-2xl text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              data-testid="mission-statement"
            >
              <p className="text-xl font-semibold italic">
                "My mission is turning innovative ideas into impactful solutions that bridge the gap between technology and human needs."
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6 text-center">
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                data-testid="stat-projects"
              >
                <h3 className="text-2xl font-bold text-teal mb-2">4+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Major Projects</p>
              </motion.div>
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                data-testid="stat-hackathons"
              >
                <h3 className="text-2xl font-bold text-teal mb-2">5+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Hackathons</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            {...fadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Modern tech workspace setup" 
              className="rounded-2xl shadow-2xl w-full object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              data-testid="workspace-image"
            />
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal" data-testid="current-focus-title">Current Focus</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center" data-testid="focus-ai">
                  <Target className="text-teal mr-2 h-4 w-4" />
                  AI-driven automation workflows
                </li>
                <li className="flex items-center" data-testid="focus-web">
                  <Trophy className="text-teal mr-2 h-4 w-4" />
                  Full-stack web development
                </li>
                <li className="flex items-center" data-testid="focus-hackathons">
                  <Users className="text-teal mr-2 h-4 w-4" />
                  Competitive hackathon participation
                </li>
                <li className="flex items-center" data-testid="focus-education">
                  <GraduationCap className="text-teal mr-2 h-4 w-4" />
                  B.Tech in Electronics & Computer Science
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
