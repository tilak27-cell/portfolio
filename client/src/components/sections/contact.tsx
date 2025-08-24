import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-pale-blue dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="contact-title">Let's Connect</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8" data-testid="contact-subtitle">Ready to collaborate on your next project?</p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal to-light-blue mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text" data-testid="form-title">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Name *</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full resize-none"
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal to-light-blue text-white hover:shadow-lg transition-all hover:scale-105"
                    data-testid="button-submit"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Information & Map */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text" data-testid="contact-info-title">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4" data-testid="contact-email">
                    <Mail className="text-teal h-6 w-6" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:24sortet@rbunagpur.in" className="text-gray-600 dark:text-gray-300 hover:text-teal transition-colors">
                        24sortet@rbunagpur.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-phone">
                    <Phone className="text-teal h-6 w-6" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919527692809" className="text-gray-600 dark:text-gray-300 hover:text-teal transition-colors">
                        +91 9527692809
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="contact-location">
                    <MapPin className="text-teal h-6 w-6" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">Nagpur, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4 mt-8" data-testid="social-links">
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
                    data-testid="link-linkedin"
                  >
                    <a href="https://www.linkedin.com/in/tilak-sorte-223ab1335/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="bg-gray-800 hover:bg-gray-900 text-white border-gray-800 hover:border-gray-900"
                    data-testid="link-github"
                  >
                    <a href="https://github.com/hysonberg27" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700"
                    data-testid="link-email"
                  >
                    <a href="mailto:24sortet@rbunagpur.in">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Map Element */}
            <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 gradient-text" data-testid="map-title">Based in Nagpur</h3>
                <div className="bg-gradient-to-br from-teal to-light-blue rounded-lg h-48 flex items-center justify-center text-white" data-testid="map-placeholder">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mb-2 mx-auto" />
                    <p className="text-lg font-semibold">Nagpur, Maharashtra</p>
                    <p className="text-sm opacity-90">Central India • Tech Hub</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
