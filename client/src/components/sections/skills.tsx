import { motion } from "framer-motion";

const Skills = () => {
  const services = [
    {
      number: "01.",
      title: "Full-Stack Development", 
      description: "I specialize in creating modern web applications with React, Node.js, and databases, bringing your vision to life with pixel-perfect precision and scalable architecture."
    },
    {
      number: "02.",
      title: "AI & Automation",
      description: "With expertise in machine learning models like YOLOv8 and automation platforms like n8n, I build intelligent solutions that streamline workflows and solve complex problems."
    },
    {
      number: "03.",
      title: "Hackathon Consulting",
      description: "Drawing from my experience as a finalist at IIT Delhi and IIIT Guwahati hackathons, I help teams ideate, prototype, and execute winning solutions under pressure."
    },
    {
      number: "04.",
      title: "Technical Problem Solving",
      description: "I excel at breaking down complex technical challenges into manageable solutions, whether it's optimizing performance, debugging issues, or architecting robust systems."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-gray-300" data-testid="services-title">My Services</h2>
        </motion.div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-800 pb-12"
              data-testid={`service-${service.number.replace('.', '')}`}
            >
              <div className="grid md:grid-cols-4 gap-8 items-start">
                <div className="md:col-span-1">
                  <h3 className="text-6xl font-bold text-gray-600 mb-4" data-testid={`service-number-${service.number.replace('.', '')}`}>
                    {service.number}
                  </h3>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <h4 className="text-3xl font-bold text-white" data-testid={`service-title-${service.number.replace('.', '')}`}>
                    {service.title}
                  </h4>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-3xl" data-testid={`service-description-${service.number.replace('.', '')}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
