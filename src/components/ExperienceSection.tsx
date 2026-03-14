import { motion } from "framer-motion";

const experiences = [
  {
    role: "Instrumentation & Control Engineer",
    company: "New KCC, Kitale",
    description:
      "Maintained and calibrated industrial instrumentation including flow meters, pressure sensors, temperature transmitters, and level instruments. Performed PLC troubleshooting and programming for automated dairy production systems using Siemens and Allen-Bradley controllers. Supported control loop optimization and maintained Variable Frequency Drives for motor speed control and energy efficiency.",
    tags: ["Siemens", "Allen-Bradley", "VFD", "SCADA", "Calibration"],
  },
  {
    role: "Field Engineer",
    company: "Centurion Systems",
    description:
      "Provided field engineering support in industrial automation and control systems. Delivered PLC, VFD, and electronic troubleshooting training for the U.S. Embassy in Burundi and Kenya. Commissioned a 3-phase Automatic Transfer Switch (ATS) for generator-to-generator synchronization. Implemented SCADA dashboard-based monitoring systems for real-time process supervision.",
    tags: ["U.S. Embassy", "ATS", "SCADA", "Field Support"],
  },
  {
    role: "Technical Trainer",
    company: "Industrial Automation",
    description:
      "Delivered professional training on PLC systems following Siemens SITRAIN methodology. Trained participants in VFD parameterization, pump sizing, electronic troubleshooting, SCADA systems, and HMI design. Covered IT integration within industrial environments including networking, communication protocols, and system connectivity.",
    tags: ["SITRAIN", "PLC Training", "VFD", "HMI"],
  },
  {
    role: "Software Developer",
    company: "Independent",
    description:
      "Developed a unified business management platform integrating inventory management, accounting, sales, and human resource management into a single system. Streamlined business operations, improved data visibility, and enabled efficient management of core processes through a centralized software platform.",
    tags: ["Java", "Spring Boot", "Angular", "SQL"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-3">Career</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">Operational Timeline</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-10 md:pl-14"
              >
                {/* Node */}
                <div className="absolute left-1.5 md:left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                <div className="glass-panel rounded-sm p-6 border-glow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h3 className="font-display font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs font-mono text-primary">{exp.company}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
