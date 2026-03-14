import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

import projectScada from "@/assets/project-scada.jpg";
import projectTraining from "@/assets/project-training.jpg";
import projectAts from "@/assets/project-ats.jpg";
import projectPlc from "@/assets/project-plc.jpg";
import projectBusiness from "@/assets/project-business.jpg";
import projectKisii from "@/assets/project-kisii.jpg";

const galleries = [
  { title: "U.S. Embassy Training", images: [projectTraining] },
  { title: "ATS Commissioning", images: [projectAts] },
  { title: "PLC 1214C Training", images: [projectPlc] },
  { title: "Kisii Polytechnic", images: [projectKisii] },
  { title: "SCADA Project", images: [projectScada] },
  { title: "Business Management System", images: [projectBusiness] },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-3">Visual Archive</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">Gallery</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="space-y-3"
            >
              <ImageCarousel images={g.images} alt={g.title} />
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{g.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
