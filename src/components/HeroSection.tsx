import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-[calc(2rem+3.5rem)]">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="section-label mb-4">Instrumentation & Control · Software Engineering</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95] mb-6 text-foreground">
            Bridging Industrial<br />
            Automation and Modern<br />
            <span className="text-primary">Software Solutions.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Instrumentation and Control Engineer by profession. Java and Angular developer by heart. 
            I build the systems that run the world and the software that manages them.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn-press inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-colors"
            >
              View Technical Portfolio
              <ArrowDown size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#contact"
              className="btn-press inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:border-primary/50 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="btn-press inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:border-primary/50 transition-colors"
            >
              <FileDown size={14} strokeWidth={1.5} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
