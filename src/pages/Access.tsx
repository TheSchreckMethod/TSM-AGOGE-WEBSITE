import { motion } from "framer-motion";

export default function Access() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 px-6 min-h-[85vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-bronze/30 text-bronze text-[10px] tracking-[0.3em] font-mono mb-6 bg-bronze/5">
            FOUNDER PHASE
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">THE REGISTRY</h1>
          <p className="doctrine-text text-white/60">
            Current Status: <span className="text-crimson font-bold">ACTIVE</span><br/>
            Operator: Shane Schreck
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-8 text-center border-t border-t-white/10">
            <h3 className="text-white/50 text-sm tracking-widest mb-4">4 WEEKS</h3>
            <div className="text-3xl text-white mb-4">$12,500</div>
            <div className="w-full h-[1px] bg-white/10 my-6" />
            <p className="font-sans text-xs text-white/40 uppercase tracking-wider">Passage Initiation</p>
          </div>
          <div className="glass-panel p-8 text-center border-t border-t-bronze/50 relative overflow-hidden bg-gradient-to-b from-bronze/5 to-transparent">
            <h3 className="text-bronze text-sm tracking-widest mb-4">8 WEEKS</h3>
            <div className="text-4xl text-white mb-4">$25,000</div>
            <div className="w-full h-[1px] bg-bronze/20 my-6" />
            <p className="font-sans text-xs text-white/60 uppercase tracking-wider">Structural Alignment</p>
          </div>
          <div className="glass-panel p-8 text-center border-t border-t-white/10">
            <h3 className="text-white/50 text-sm tracking-widest mb-4">12 WEEKS</h3>
            <div className="text-3xl text-white mb-4">$50,000</div>
            <div className="w-full h-[1px] bg-white/10 my-6" />
            <p className="font-sans text-xs text-white/40 uppercase tracking-wider">Permanent Architecture</p>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-8 font-mono text-sm tracking-widest text-crimson animate-pulse">
            [ 8 / 8 ENGAGEMENTS FULL ]
          </div>
          <button className="btn-primary opacity-50 cursor-not-allowed">
            SUBMIT TO THE GATES
          </button>
          <p className="mt-4 text-[10px] font-mono text-white/30 uppercase tracking-widest">
            Applications currently closed. Refusal is active.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
