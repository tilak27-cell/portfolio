import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Automated Workflows with n8n",
      description: "Designed and deployed comprehensive automation pipelines integrating APIs, email triggers, and complex workflows to reduce manual processes by 80%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tech: ["n8n", "APIs", "Webhooks", "Automation"],
      liveUrl: "https://n8n-automation.vercel.app",
      githubUrl: "https://github.com/hysonberg27/n8n-workflows"
    },
    {
      id: 2,
      title: "Object Detection with YOLOv8",
      description: "Built and trained a real-time object detection model using YOLOv8 with custom dataset achieving 92% accuracy for precise object identification and tracking.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tech: ["YOLOv8", "Python", "OpenCV", "AI/ML"],
      liveUrl: "https://yolo-detection.vercel.app",
      githubUrl: "https://github.com/hysonberg27/yolo-detection"
    },
    {
      id: 3,
      title: "Bookstore Website",
      description: "Developed a comprehensive full-stack e-commerce platform simulating complete online sales workflow with user authentication, payment integration, and inventory management.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://bookstore-tilak.vercel.app",
      githubUrl: "https://github.com/hysonberg27/bookstore-website"
    },
    {
      id: 4,
      title: "Cargo Management System",
      description: "Created an advanced logistics tracking system at IIT Delhi Space Hackathon (Final Round) for efficient space cargo project management and real-time monitoring.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tech: ["React", "TypeScript", "PostgreSQL", "Docker"],
      liveUrl: "https://space-cargo.vercel.app",
      githubUrl: "https://github.com/hysonberg27/space-cargo-management"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-navy">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="projects-title">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8" data-testid="projects-subtitle">Showcasing innovation through code and creativity</p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal to-light-blue mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              data-testid={`project-${project.id}`}
            >
              <Card className="bg-gradient-to-br from-white to-pale-blue dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`project-image-${project.id}`}
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-teal" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6" data-testid={`project-tech-${project.id}`}>
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-teal text-white px-3 py-1 rounded-full text-sm"
                        data-testid={`tech-${tech.toLowerCase()}-${project.id}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button
                      asChild
                      className="bg-teal hover:bg-teal/80 text-white"
                      data-testid={`button-live-demo-${project.id}`}
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      data-testid={`button-github-${project.id}`}
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
