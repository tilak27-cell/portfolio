import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "4", label: "Major Projects", showPlus: true },
    { number: "5", label: "Hackathons", showPlus: true },
    { number: "2", label: "Finalist Positions", showPlus: false },
  ];

  return (
    <>
      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-12 text-gray-300" data-testid="stats-title">My Stats</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="space-y-4 group cursor-pointer"
                data-testid={`stat-${stat.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <motion.div 
                  className="text-7xl md:text-8xl font-bold mb-4 leading-none group-hover:text-gray-200 transition-colors duration-300"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3, type: "spring", stiffness: 150 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white">{stat.number}</span>
                  {stat.showPlus && <span className="text-4xl text-gray-400 ml-1">+</span>}
                </motion.div>
                <p className="text-gray-400 text-lg font-medium tracking-wide group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="about-description"
          >
            I'm a passionate tech enthusiast who thrives at the intersection of innovation, 
            entrepreneurship, and problem-solving. Through my experience in national hackathons 
            including <span className="text-white font-semibold">SIH</span>, <span className="text-white font-semibold">IIT Delhi Space Hackathon (Top 10)</span>, 
            and <span className="text-white font-semibold">IIIT Guwahati Hacksagon (Finalist)</span>, I've learned to transform 
            complex challenges into elegant, automated solutions.
          </motion.p>
          
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="about-mission"
          >
            My mission is turning innovative ideas into impactful solutions that bridge 
            the gap between technology and human needs.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default About;
