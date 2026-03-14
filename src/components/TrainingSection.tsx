import { motion } from "framer-motion";
import { Award, Shield } from "lucide-react";

const certs = [
  {
    title: "Bachelor of Science in Instrumentation & Control Engineering",
    detail: "Multimedia University of Kenya — Graduated with Honors, specializing in industrial automation, control systems, and instrumentation engineering.",
  },
  {
    title: "Software Engineering Certifications",
    detail: "Certified Java Programmer, demonstrating proficiency in software development principles, Java programming, and modern web application development.",
    highlight: true,
  },
  {
    title: "SITRAIN PLC Training — Siemens S7-1200",
    detail: "Completed Siemens SITRAIN training on S7-1200 PLC, covering ladder logic programming, diagnostics, and industrial automation applications.All three levels",
    highlight: true,
  },
  {
    title: "VFD Parameterization & Pump Sizing",
    detail: "Professional training on variable frequency drive configuration, motor control optimization, and pump system design.",
  },
  {
    title: "SCADA & HMI Design Training",
    detail: "Industrial monitoring system design, dashboard development, and operator interface training for automation professionals.",
  },
  {
    title: "Electronic Troubleshooting & Diagnostics",
    detail: "Fault diagnosis, circuit analysis, and repair methodology training for industrial electronics and control systems.",
  },
];

const TrainingSection = () => {
  return (
    <section id="training" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-3">Credentials</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">Training & Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`glass-panel rounded-sm p-5 border-glow ${c.highlight ? "border-primary/30" : ""}`}
            >
              <div className="flex items-start gap-3">
                {c.highlight ? (
                  <Shield size={18} strokeWidth={1.5} className="text-accent mt-0.5 shrink-0" />
                ) : (
                  <Award size={18} strokeWidth={1.5} className="text-primary mt-0.5 shrink-0" />
                )}
                <div>
                  <h3 className="font-display font-semibold text-sm text-foreground mb-1.5">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
