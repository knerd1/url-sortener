import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Instant Shortening",
    desc: "Shorten your URLs in a flash with just one click.",
    icon: "⚡",
  },
  {
    title: "Analytics Dashboard",
    desc: "Track clicks, locations, and devices in real time.",
    icon: "📊",
  },
  {
    title: "Custom Links",
    desc: "Personalize your short links for better branding.",
    icon: "🔗",
  },
];

const gradientVariants = {
  animate: {
    background: [
      "linear-gradient(135deg, #f8fafc 0%, #e0c3fc 100%)",
      "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
      "linear-gradient(135deg, #f8fafc 0%, #e0c3fc 100%)",
    ],
    transition: {
      duration: 16,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const valueProps = [
  "Share links in seconds",
  "Track every click",
  "Your links, your brand",
  "Analytics made simple",
  "Safe & reliable redirects",
];

function AnimatedValueProps({ dark }) {
  const [index, setIndex] = useState(0);
  // Cycle through valueProps every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % valueProps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`text-3xl sm:text-4xl font-bold text-center drop-shadow-lg ${dark ? 'text-white' : 'text-primary'}`}
    >
      {valueProps[index]}
    </motion.span>
  );
}

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start px-2 bg-background">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full flex flex-col items-center mt-10"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 text-white font-semibold text-lg shadow-lg flex items-center gap-2"
        >
          <span className="text-2xl">✨</span>
          Lightning-fast, secure, and free
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center text-primary mb-4 drop-shadow-lg"
        >
          The only URL Shortener <br /> you'll ever need!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg sm:text-2xl text-muted-foreground text-center max-w-2xl mb-8 drop-shadow"
        >
          Shorten, customize, and track your links with ease. Fast, secure, and free.
        </motion.p>
        <motion.form
          onSubmit={handleShorten}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col sm:flex-row w-full max-w-xl gap-2 mb-6"
        >
          <Input
            type="url"
            placeholder="Enter your long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="flex-1 py-4 px-4 text-lg shadow-md"
            required
          />
          <Button type="submit" className="h-full text-lg px-8 animate-pulse" variant="destructive">
            Shorten!
          </Button>
        </motion.form>
        {/* Animated Glassmorphism Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="w-full max-w-3xl rounded-3xl shadow-2xl my-8 relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 backdrop-blur-md bg-opacity-70 border border-white/20"
        >
          <motion.div
            className="flex flex-col items-center justify-center py-16"
            initial={false}
            animate={{}}
          >
            <AnimatedValueProps dark />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl my-10"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-card rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-border hover:scale-105 transition-transform duration-300"
          >
            <span className="text-4xl mb-3 animate-bounce">{feature.icon}</span>
            <h3 className="text-xl font-bold mb-2 text-primary-foreground">{feature.title}</h3>
            <p className="text-muted-foreground text-base">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl mb-20"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">Frequently Asked Questions</h2>
        <Accordion type="multiple" collapsible className="w-full bg-card rounded-xl shadow-md border border-border">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How does the Link-Shorts URL shortener work?
            </AccordionTrigger>
            <AccordionContent>
              When you enter a long URL, our system generates a shorter version of that URL. This shortened URL redirects to the original long URL when accessed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do I need an account to use the app?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Creating an account allows you to manage your URLs, view analytics, and customize your short URLs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What analytics are available for my shortened URLs?
            </AccordionTrigger>
            <AccordionContent>
              You can view the number of clicks, geolocation data of the clicks and device types (mobile/desktop) for each of your shortened URLs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default LandingPage;
