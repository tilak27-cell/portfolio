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
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
            alt="Tilak Sorte - Available for work" 
            className="w-48 h-48 rounded-3xl mx-auto mb-12 object-cover shadow-2xl"
            data-testid="contact-profile-image"
          />
          
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 bg-gray-900 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-medium" data-testid="availability-status">Available For Work</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="mailto:24sortet@rbunagpur.in"
              className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
              data-testid="contact-email"
            >
              24sortet@rbunagpur.in
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
