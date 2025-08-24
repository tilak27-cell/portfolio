import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy dark:bg-black relative overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Card className="w-full max-w-2xl mx-4 bg-transparent border-0 shadow-none">
        <CardContent className="pt-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-8xl mb-8"
            data-testid="error-icon"
          >
            🚀
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            data-testid="error-title"
          >
            Oops! Cargo lost in space
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl mb-8 text-light-blue"
            data-testid="error-description"
          >
            The page you're looking for seems to have drifted into the void.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={handleGoHome}
              className="bg-teal hover:bg-teal/80 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
              data-testid="button-return-home"
            >
              Return to Earth 🌍
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 text-gray-400 text-sm"
            data-testid="error-code"
          >
            Error 404 - Page Not Found
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
