import { motion } from "framer-motion";
import { Rocket, Trophy, Lightbulb, Cog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Timeline = () => {
  const timelineEvents = [
    {
      id: 1,
      title: "IIT Delhi Space Hackathon",
      achievement: "Top 10 Finalist",
      description: "Built innovative space cargo management system reaching final rounds among hundreds of participants",
      year: "2024",
      icon: Rocket,
      side: "left"
    },
    {
      id: 2,
      title: "IIIT Guwahati Hacksagon",
      achievement: "Finalist",
      description: "Showcased advanced automation solutions and AI-driven applications in competitive environment",
      year: "2024",
      icon: Trophy,
      side: "right"
    },
    {
      id: 3,
      title: "Smart India Hackathon (SIH)",
      achievement: "Participant",
      description: "Contributed to national-level innovation challenges focusing on technology solutions for social impact",
      year: "2023-2024",
      icon: Lightbulb,
      side: "left"
    },
    {
      id: 4,
      title: "MSME Hackathon",
      achievement: "Participant",
      description: "Developed solutions for small and medium enterprises focusing on digital transformation and automation",
      year: "2023",
      icon: Cog,
      side: "right"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-navy">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="timeline-title">Hackathon Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8" data-testid="timeline-subtitle">Key achievements and milestones</p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal to-light-blue mx-auto"></div>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-teal to-light-blue h-full"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="flex items-center"
                initial={{ opacity: 0, x: event.side === "left" ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                data-testid={`timeline-event-${event.id}`}
              >
                {event.side === "left" ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <Card className="bg-gradient-to-br from-white to-pale-blue dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-teal mb-2" data-testid={`event-title-${event.id}`}>
                            {event.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-2 font-semibold" data-testid={`event-achievement-${event.id}`}>
                            {event.achievement}
                          </p>
                          <p className="text-sm mb-2" data-testid={`event-description-${event.id}`}>
                            {event.description}
                          </p>
                          <span className="text-sm text-teal font-semibold" data-testid={`event-year-${event.id}`}>
                            {event.year}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                    <motion.div 
                      className="relative z-10 flex items-center justify-center w-12 h-12 bg-teal rounded-full shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <event.icon className="text-white h-6 w-6" />
                    </motion.div>
                    <div className="w-1/2 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8"></div>
                    <motion.div 
                      className="relative z-10 flex items-center justify-center w-12 h-12 bg-teal rounded-full shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <event.icon className="text-white h-6 w-6" />
                    </motion.div>
                    <div className="w-1/2 pl-8">
                      <Card className="bg-gradient-to-br from-white to-pale-blue dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-teal mb-2" data-testid={`event-title-${event.id}`}>
                            {event.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-2 font-semibold" data-testid={`event-achievement-${event.id}`}>
                            {event.achievement}
                          </p>
                          <p className="text-sm mb-2" data-testid={`event-description-${event.id}`}>
                            {event.description}
                          </p>
                          <span className="text-sm text-teal font-semibold" data-testid={`event-year-${event.id}`}>
                            {event.year}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Achievement Summary */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-teal to-light-blue text-white p-8 rounded-2xl text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4" data-testid="impact-title">Hackathon Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div data-testid="impact-hackathons">
              <h4 className="text-3xl font-bold mb-2">5+</h4>
              <p className="text-sm opacity-90">Major Hackathons</p>
            </div>
            <div data-testid="impact-finalist">
              <h4 className="text-3xl font-bold mb-2">2</h4>
              <p className="text-sm opacity-90">Finalist Positions</p>
            </div>
            <div data-testid="impact-top10">
              <h4 className="text-3xl font-bold mb-2">Top 10</h4>
              <p className="text-sm opacity-90">IIT Delhi Achievement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
