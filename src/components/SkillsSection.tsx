import { motion } from "framer-motion";
import { Cpu, Code2, Wrench } from "lucide-react";

const categories = [
  {
    icon: Cpu,
    title: "Industrial Automation",
    skills: [
      "PLC Programming",
      "Siemens S7-1200 / S7-300",
      "Allen-Bradley PLCs",
      "VFD Installation & Parameterization",
      "Sensor Calibration",
      "Control Loop Optimization",
      "Electronic Troubleshooting",
      "ATS Commissioning",
      "SCADA Systems",
      "HMI Design",
      "Industrial Networking",
      "IT Integration",
    ],
  },
  {
    icon: Code2,
    title: "Software Development",
    skills: [
      "Java",
      "JavaFX",
      "Angular",
      "Spring Boot",
      "SQL Databases",
      "Desktop Applications",
      "Business Management Systems",
      "SCADA Software Development",
      "Apache PLC4X",
    ],
  },
  {
    icon: Wrench,
    title: "Field Engineering",
    skills: [
      "Sensor Calibration",
      "ATS Commissioning",
      "Industrial Networking",
      "Process Diagnostics",
      "Equipment Maintenance",
      "Technical Training",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-3">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">Technical Stack</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-sm p-6 border-glow"
            >
              <div className="flex items-center gap-3 mb-6">
                <cat.icon size={20} strokeWidth={1.5} className="text-primary" />
                <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
