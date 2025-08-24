import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "n8n Automation",
      category: "Workflow Automation",
      description: "API Integration Pipelines",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      id: 2,
      title: "YOLOv8 Detection",
      category: "AI/ML Project",
      description: "Real-time Object Detection",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      id: 3,
      title: "Bookstore Platform",
      category: "Full-Stack Development",
      description: "E-commerce Website",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      id: 4,
      title: "Space Cargo System",
      category: "Hackathon Project",
      description: "IIT Delhi Space Management",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-gray-300" data-testid="projects-title">Selected Projects</h2>
          <motion.a
            href="https://github.com/hysonberg27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 flex items-center space-x-2 group transition-colors"
            whileHover={{ x: 5 }}
            data-testid="more-projects-link"
          >
            <span>More Projects</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              data-testid={`project-${project.id}`}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`project-image-${project.id}`}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm" data-testid={`project-category-${project.id}`}>
                  {project.category}
                </p>
                <p className="text-gray-300" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
