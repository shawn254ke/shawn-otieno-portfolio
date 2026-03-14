import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/2026_Shawn_Otieno_Resume_Best.pdf"; // Change to your CV filename
    link.download = "Shawn-Otieno-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-[calc(2rem+3.5rem)]">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl w-full md:flex-1 order-2 md:order-1"
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
              <button
                onClick={handleDownloadCV}
                className="btn-press inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:border-primary/50 transition-colors"
              >
                <FileDown size={14} strokeWidth={1.5} />
                Download CV
              </button>
            </div>
          </motion.div>
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 flex justify-center order-1 md:order-2 w-full md:w-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl md:blur-3xl" />
              <Avatar className="h-48 w-48 sm:h-56 sm:w-56 md:h-60 md:w-60 lg:h-80 lg:w-80 relative">
                <AvatarImage src="/profile.png" alt="Shawn Otieno" />
                <AvatarFallback className="text-3xl sm:text-4xl md:text-5xl font-display bg-muted text-foreground">SO</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
