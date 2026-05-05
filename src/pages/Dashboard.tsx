import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [logs, setLogs] = useState<{ id: number; text: string; color: string }[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sequence = [
      { text: "[SYS] INITIALIZING INTERVENTION CONTROL UI...", color: "text-white/50" },
      { text: "[AGNT] VERIFYING CLIENT STATE...", color: "text-white/80" },
      { text: "[PASS] STATE VERIFIED. DRIFT LEVEL: LOW.", color: "text-bronze" },
      { text: "[SYS] EXECUTING INTERVENTION #4A2...", color: "text-white/50" },
      { text: "[WARN] DETECTING POTENTIAL CASCADE...", color: "text-crimson" },
      { text: "[ICA] CONTAINMENT PROTOCOL ENGAGED.", color: "text-bronze" },
      { text: "[PASS] INTERVENTION SECURED. STATE RECORDED.", color: "text-white" },
    ];
    
    let i = 0;
    const int = setInterval(() => {
      if (i < sequence.length) {
        setLogs(prev => [...prev, { id: i, ...sequence[i] }]);
        i++;
      } else {
        clearInterval(int);
      }
    }, 1500);
    return () => clearInterval(int);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="text-crimson font-mono text-xs tracking-[0.3em] mb-2 uppercase">HUD v2.4 Online</div>
            <h1 className="text-3xl text-white">INTERVENTION CONTROL</h1>
          </div>
          <div className="text-right">
            <div className="text-white/40 font-mono text-[10px] tracking-widest uppercase">Target ID</div>
            <div className="text-bronze font-mono tracking-widest">S-8842</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left: The Hardening Vector (Simulated Radar/Stats) */}
          <div className="glass-panel p-6 col-span-1 lg:col-span-1 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="4 4"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="2 2"/>
                <path d="M50 0 L50 100 M0 50 L100 50" stroke="#fff" strokeWidth="1" opacity="0.5"/>
              </svg>
            </div>
            <h3 className="text-sm font-serif tracking-widest text-white/60 mb-8">THE HARDENING VECTOR</h3>
            <div className="space-y-6 relative z-10">
              <div>
                <div className="flex justify-between text-xs font-mono text-white/50 mb-2">
                  <span>COMPLIANCE</span>
                  <span className="text-bronze">94%</span>
                </div>
                <div className="h-1 bg-white/10 w-full"><div className="h-full bg-bronze w-[94%]" /></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono text-white/50 mb-2">
                  <span>DRIFT</span>
                  <span className="text-crimson">6%</span>
                </div>
                <div className="h-1 bg-white/10 w-full"><div className="h-full bg-crimson w-[6%]" /></div>
              </div>
            </div>
          </div>

          {/* Center: The Audit Feed */}
          <div className="glass-panel p-6 col-span-1 lg:col-span-2 border border-bronze/20 flex flex-col h-[400px]">
            <h3 className="text-sm font-serif tracking-widest text-bronze mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              LIVE AUDIT FEED
            </h3>
            <div className="flex-1 overflow-y-auto font-mono text-sm space-y-3 custom-scrollbar pr-4">
              {logs.map((log) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  key={log.id} 
                  className={log.color}
                >
                  {log.text}
                </motion.div>
              ))}
              <div ref={endRef} />
            </div>
          </div>

          {/* Bottom Left: Scoreboard */}
          <div className="glass-panel p-6 col-span-1 lg:col-span-2 border border-white/5">
            <h3 className="text-sm font-serif tracking-widest text-white/60 mb-6">LAYER SCOREBOARD (0-4 RUBRIC)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "PROBLEM", score: 4 },
                { label: "STATE", score: 3 },
                { label: "DECISION", score: 4 },
                { label: "INTERVENTION", score: 4 },
              ].map(item => (
                <div key={item.label} className="bg-black/50 p-4 border border-white/5 text-center">
                  <div className="text-[10px] font-mono text-white/40 tracking-widest mb-2">{item.label}</div>
                  <div className={`text-2xl font-serif ${item.score === 4 ? 'text-bronze' : 'text-white'}`}>{item.score}.0</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Right: Kill-Switch */}
          <div className="glass-panel p-6 col-span-1 lg:col-span-1 border border-crimson/20 flex flex-col justify-center items-center text-center">
            <h3 className="text-sm font-serif tracking-widest text-crimson mb-2">REVERSIBILITY</h3>
            <p className="text-[10px] font-mono text-white/40 mb-6 px-4">State reset unavailable. No failure detected in current intervention vector.</p>
            <button className="w-full py-4 border border-white/10 text-white/20 font-serif tracking-widest uppercase text-xs cursor-not-allowed bg-black">
              EXECUTE STATE RESET
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
