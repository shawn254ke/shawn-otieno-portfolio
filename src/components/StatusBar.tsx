import { useEffect, useState } from "react";

const StatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-8 bg-card/80 backdrop-blur-md border-b border-border flex items-center justify-between px-4 md:px-8 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
      <span>Shawn Otieno — Portfolio v1.0</span>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">{time.toUTCString().slice(17, 25)} UTC</span>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
          <span>System Online</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
