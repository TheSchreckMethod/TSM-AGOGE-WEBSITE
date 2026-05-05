import { motion } from "framer-motion";

const LAYERS = [
  { num: "01", name: "PROBLEM CONTROL", desc: "No problem enters the system untraced." },
  { num: "02", name: "CLIENT STATE CONTROL", desc: "No intervention is authorized without a documented state." },
  { num: "03", name: "DECISION CONTROL", desc: "Decisions must leave a trail." },
  { num: "04", name: "INTERVENTION CONTROL", desc: "Containment is mandatory. No cascading effects." },
  { num: "05", name: "FAILURE CONTROL", desc: "Failure is contained by design, not hope." },
  { num: "06", name: "OBSERVABILITY CONTROL", desc: "If it cannot be observed, it cannot be governed." },
  { num: "07", name: "INCIDENT CONTROL", desc: "Incidents are converted into stronger architecture." },
];

export default function Doctrine() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl text-white mb-6">THE 7 CONTROL LAYERS</h1>
          <p className="doctrine-text max-w-2xl mx-auto text-white/60">
            Every engagement satisfies three non-negotiable constraints: Traceable, Contained, Reversible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LAYERS.map((layer, idx) => (
            <motion.div 
              key={layer.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 border-l-2 border-l-white/10 hover:border-l-crimson hover:bg-black transition-all duration-500 cursor-default group"
            >
              <div className="text-bronze font-mono text-xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {layer.num}
              </div>
              <h3 className="text-xl text-white mb-4">{layer.name}</h3>
              <p className="font-sans text-sm text-white/50 leading-relaxed">
                {layer.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
