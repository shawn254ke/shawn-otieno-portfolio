import { motion } from "framer-motion";
import { Cpu, Monitor, Wrench, Gauge, Settings, GraduationCap, Code2 } from "lucide-react";

const services = [
  { icon: Cpu, title: "PLC Programming", desc: "Custom PLC solutions for Siemens and Allen-Bradley platforms." },
  { icon: Monitor, title: "SCADA & HMI Development", desc: "Real-time monitoring dashboards and operator interfaces." },
  { icon: Wrench, title: "Industrial Troubleshooting", desc: "Diagnostics and repair for automation and control systems." },
  { icon: Settings, title: "VFD Installation & Configuration", desc: "Motor drive parameterization for optimal performance." },
  { icon: Gauge, title: "Sensor Calibration", desc: "Precision calibration of flow, pressure, and temperature instruments." },
  { icon: GraduationCap, title: "Technical Training", desc: "SITRAIN-based PLC, VFD, and SCADA training programs." },
  { icon: Code2, title: "Software Development", desc: "Business and industrial software solutions in Java and Angular." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-3">Offerings</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-panel rounded-sm p-5 border-glow group"
            >
              <s.icon size={20} strokeWidth={1.5} className="text-primary mb-3" />
              <h3 className="font-display font-semibold text-sm text-foreground mb-1.5">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
