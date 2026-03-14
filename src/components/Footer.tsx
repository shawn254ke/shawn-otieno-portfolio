const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-display font-bold text-lg tracking-tighter text-foreground mb-1">
              S<span className="text-primary">.</span>Otieno
            </p>
            <p className="text-xs text-muted-foreground max-w-sm">
              Precision systems. Integrated code. Bridging industrial automation and modern software solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Shawn Otieno. I speak both Ladder Logic and Java.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
