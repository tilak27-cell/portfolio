import { motion } from "framer-motion";
import { Code, Brain, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillIcons = [
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500", description: "Semantic markup and accessibility" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500", description: "Responsive design & animations" },
    { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500", description: "ES6+ features & async programming" },
    { name: "React", icon: "fab fa-react", color: "text-blue-400", description: "Component-based architecture" },
    { name: "Python", icon: "fab fa-python", color: "text-blue-600", description: "AI/ML & automation scripts" },
    { name: "APIs", icon: "fas fa-plug", color: "text-green-500", description: "RESTful services & integration" },
    { name: "n8n", icon: "fas fa-robot", color: "text-purple-500", description: "Workflow automation platform" },
    { name: "GitHub", icon: "fab fa-github", color: "text-gray-700 dark:text-gray-300", description: "Version control & collaboration" }
  ];

  const competencies = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern frameworks and best practices"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Object detection, computer vision, and intelligent automation solutions"
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description: "Problem-solving expertise proven through hackathon successes and project delivery"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-pale-blue dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="skills-title">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8" data-testid="skills-subtitle">Technologies I use to bring ideas to life</p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal to-light-blue mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {skillIcons.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-center relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`skill-${skill.name.toLowerCase()}`}
            >
              <i className={`${skill.icon} text-4xl ${skill.color} mb-4`}></i>
              <h3 className="font-semibold text-sm">{skill.name}</h3>
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                {skill.description}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center gradient-text" data-testid="competencies-title">Core Competencies</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {competencies.map((competency, index) => (
                  <motion.div
                    key={competency.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    data-testid={`competency-${competency.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    <competency.icon className="h-12 w-12 text-teal mb-4 mx-auto" />
                    <h4 className="text-lg font-semibold mb-2">{competency.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{competency.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      {/* FontAwesome CDN for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </section>
  );
};

export default Skills;
