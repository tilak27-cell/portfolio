import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative mb-12 group max-w-xs mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://i.ibb.co/YTWsxyqF/available-for-work.png" 
              alt="Available for work" 
              className="w-full h-auto rounded-2xl transition-all duration-500"
              data-testid="contact-available-badge"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="mailto:tilaksorte52@gmail.com"
              className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
              data-testid="contact-email"
            >
              tilaksorte52@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
