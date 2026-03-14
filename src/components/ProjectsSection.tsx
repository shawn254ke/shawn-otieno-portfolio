import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

import projectScada from "@/assets/project-scada.jpg";
import projectTraining from "@/assets/project-training.jpg";
import projectAts from "@/assets/project-ats.jpg";
import projectPlc from "@/assets/project-plc.jpg";
import projectBusiness from "@/assets/project-business.jpg";
import projectKisii from "@/assets/project-kisii.jpg";

const projects = [
  {
    id: "01",
    title: "SCADA via JavaFX & PLC4X",
    overview: "Developed a SCADA system using JavaFX and Apache PLC4X for industrial monitoring and control. The system communicates with industrial devices, visualizes live data, and provides a dashboard for process diagnostics.",
    technologies: ["Java", "JavaFX", "Apache PLC4X", "SCADA"],
    challenge: "Bridging legacy PLC protocols with modern reactive UI while maintaining <50ms latency in data visualization.",
    images: [projectScada],
  },
  {
    id: "02",
    title: "U.S. Embassy Burundi Training",
    overview: "Conducted hands-on training for technical staff at the U.S. Embassy in Burundi, covering PLC systems, VFDs, and electronic troubleshooting for mission-critical environments.",
    technologies: ["Siemens PLC", "VFD", "Diagnostics"],
    challenge: "Adapting complex automation concepts for diverse technical backgrounds while ensuring immediate practical applicability in embassy infrastructure.",
    images: [projectTraining],
  },
  {
    id: "03",
    title: "ATS Commissioning — Socomec 1000kVA",
    overview: "Commissioned a Socomec 1000kVA Automatic Transfer Switch in a generator-to-generator configuration for redundant power supply with master/secondary ATS coordination.",
    technologies: ["Socomec ATS", "Power Systems", "Synchronization"],
    challenge: "Orchestrating dual ATS logic for seamless generator-to-generator transfer while ensuring zero downtime in power delivery.",
    images: [projectAts],
  },
  {
    id: "04",
    title: "PLC Training — Siemens S7-1200",
    overview: "Delivered hands-on training on Siemens S7-1200 PLC (CPU 1214C) following SITRAIN methodology, covering ladder logic, diagnostics, and industrial troubleshooting.",
    technologies: ["Siemens S7-1200", "TIA Portal", "SITRAIN"],
    challenge: "Structuring comprehensive PLC curriculum that bridges theoretical fundamentals with real-world industrial applications.",
    images: [projectPlc],
  },
  {
    id: "05",
    title: "Kisii Polytechnic Training",
    overview: "Conducted training for polytechnic students on fundamentals of industrial automation, covering PLC basics, sensors, actuators, control systems, and process automation.",
    technologies: ["PLC", "Sensors", "Actuators", "Control Systems"],
    challenge: "Making advanced industrial automation concepts accessible to students with varying technical backgrounds.",
    images: [projectKisii],
  },
  {
    id: "06",
    title: "Unified Business Management OS",
    overview: "Developed a comprehensive platform integrating inventory management, accounting, sales, and HR into one system to streamline operations and improve efficiency.",
    technologies: ["Java", "Spring Boot", "Angular", "SQL"],
    challenge: "Consolidating four distinct business domains into a single coherent platform with real-time data synchronization.",
    images: [projectBusiness],
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">Technical Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(project)}
              className="glass-panel rounded-sm p-6 text-left border-glow group btn-press"
            >
              <div className="mb-4 overflow-hidden rounded-sm">
                <img src={project.images[0]} alt={project.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono text-primary uppercase tracking-widest">Project {project.id}</span>
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2 text-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.overview}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="section-label">Project {selected.id}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-1">{selected.title}</h3>
                </div>
                <button onClick={() => setSelected(null)} className="p-1 text-muted-foreground hover:text-foreground btn-press">
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <ImageCarousel images={selected.images} alt={selected.title} />

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Overview</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selected.overview}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Challenge Solved</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selected.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
