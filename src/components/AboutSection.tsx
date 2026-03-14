import { motion } from "framer-motion";
import { Cpu, Code2, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">About</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">The Hybrid Engineer</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: "Industrial Systems",
              desc: "I design, commission, and maintain PLC-based automation systems, VFDs, SCADA platforms, and HMI interfaces. From Siemens S7-1200 to Allen-Bradley controllers, I ensure process stability and precision in mission-critical environments.",
            },
            {
              icon: Code2,
              title: "Software Engineering",
              desc: "I architect robust applications using Java, Spring Boot, Angular, and JavaFX. From enterprise business management platforms to custom SCADA software built on Apache PLC4X, I deliver solutions that bridge hardware and code.",
            },
            {
              icon: Zap,
              title: "Technical Training",
              desc: "I've trained engineers at the U.S. Embassy, polytechnic students, and industry professionals on PLC programming, VFD parameterization, SCADA design, and industrial troubleshooting using Siemens SITRAIN methodology.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-sm p-6 border-glow group"
            >
              <item.icon size={24} strokeWidth={1.5} className="text-primary mb-4" />
              <h3 className="text-lg font-display font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-muted-foreground max-w-3xl leading-relaxed"
        >
          I operate at the intersection of industrial automation and modern software development — solving real-world problems 
          in dairy production, power systems, and enterprise operations. Whether it's calibrating a pressure transmitter 
          or architecting a full-stack business platform, I bring the same discipline and precision to every project.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
