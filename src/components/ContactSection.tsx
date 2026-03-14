import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-3">Connect</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">Get in Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {(["name", "email", "subject"] as const).map((field) => (
              <div key={field}>
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5 block">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={form[field]}
                  onChange={(e) => update(field, e.target.value)}
                  className="w-full bg-muted/30 border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder={`Your ${field}`}
                />
                {errors[field] && <p className="text-xs text-destructive mt-1">{errors[field]}</p>}
              </div>
            ))}
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5 block">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={5}
                className="w-full bg-muted/30 border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Your message"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="btn-press inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-colors"
            >
              <Send size={14} strokeWidth={1.5} />
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-panel rounded-sm p-6 space-y-4">
              {[
                { icon: Mail, label: "Email", value: "shawn.otieno@email.com" },
                { icon: Phone, label: "Phone", value: "+254 700 000 000" },
                { icon: MapPin, label: "Location", value: "Kenya" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon size={16} strokeWidth={1.5} className="text-primary shrink-0" />
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:shawn.otieno@email.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="glass-panel rounded-sm p-3 border-glow btn-press"
                  aria-label={s.label}
                >
                  <s.icon size={18} strokeWidth={1.5} className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
