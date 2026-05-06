import { motion } from "framer-motion";
import { Link } from "wouter";

export default function LivingSystems() {
  return (
    <div className="relative">
      {/* HEADER */}
      <section className="pt-16 pb-12 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-crimson text-xs tracking-[0.4em] mb-6">INFRASTRUCTURE / INSTITUTION-GRADE</p>
            <h1 className="font-serif text-4xl md:text-6xl mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              THE TWO LIVING SYSTEMS
            </h1>
            <p className="text-bronze italic text-lg md:text-xl tracking-wide max-w-3xl mx-auto leading-relaxed">
              The Doctrine speaks. It does not stutter.<br />
              The certification is a pulse, not a stamp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OPENING FRAME */}
      <section className="py-16 px-6 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-white/75 leading-relaxed text-center">
            The Doctrine is not a document. It is operational. Two infrastructure systems make it so — one for voice, one for governance. Both run continuously. Both are institutional-grade.
          </p>
        </div>
      </section>

      {/* LIVING SYSTEM I — VOICE COMPANION */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-obsidian border border-white/5 p-10 md:p-14"
          >
            <div className="text-bronze text-[11px] tracking-[0.3em] mb-3">LIVING SYSTEM I</div>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
              CALIBRATED VOICE COMPANION
            </h2>
            <p className="font-serif italic text-bronze text-lg mb-10">
              Multi-modal executive interface. Zero-downtime VOX.
            </p>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
              The Voice Companion is not a text-to-speech bolt-on. It is a fully integrated interface designed for executive operators — bridging the gap between digital systems and human cognition through natural speech, with the voice register the institution requires for the moment.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="border-l border-bronze/40 pl-5">
                <div className="text-bronze text-[10px] tracking-[0.22em] mb-2">CAPABILITY</div>
                <h3 className="font-serif text-white text-lg mb-2">Tri-Provider Failover</h3>
                <p className="text-sm text-white/65 leading-relaxed">Three enterprise-grade TTS providers in rotation. If one stalls or outages, the system fails over silently. 100% uptime for voice interactions.</p>
              </div>
              <div className="border-l border-bronze/40 pl-5">
                <div className="text-bronze text-[10px] tracking-[0.22em] mb-2">CAPABILITY</div>
                <h3 className="font-serif text-white text-lg mb-2">Calibrated Authentic Voice</h3>
                <p className="text-sm text-white/65 leading-relaxed">Tone, cadence, and delivery rigorously calibrated to the moment — the investor pitch, the operational briefing, the doctrinal address.</p>
              </div>
              <div className="border-l border-bronze/40 pl-5">
                <div className="text-bronze text-[10px] tracking-[0.22em] mb-2">CAPABILITY</div>
                <h3 className="font-serif text-white text-lg mb-2">Bi-Directional Recognition</h3>
                <p className="text-sm text-white/65 leading-relaxed">Real-time transcription and intent detection. Understands context, jargon, and complex multi-part commands.</p>
              </div>
            </div>

            <blockquote className="border-l-2 border-bronze pl-6 italic text-white/85 text-lg leading-relaxed">
              "Executives don't have time to type paragraphs to an AI. The Voice Companion creates a frictionless operational layer. With tri-provider automatic failover, the system never stutters, never goes down, and always speaks with the calibrated authority required for the task."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* LIVING SYSTEM II — ACTIVE IAC */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-obsidian border border-white/5 p-10 md:p-14"
          >
            <div className="text-bronze text-[11px] tracking-[0.3em] mb-3">LIVING SYSTEM II</div>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
              ACTIVE IAC
            </h2>
            <p className="font-serif italic text-bronze text-lg mb-10">
              Self-healing governance infrastructure. Eight hours, every eight hours, forever.
            </p>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
              Static certifications were built for static systems. Autonomous AI is non-deterministic and constantly evolving — and so its governance must be. Active IAC is a true live certification: continuous drift detection, automated re-evaluation, and self-healing infrastructure that adapts in real time. The certification is a pulse, not a stamp.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="border border-white/10 p-6">
                <div className="text-bronze text-[10px] tracking-[0.22em] mb-2">DETECTIO</div>
                <h3 className="font-serif text-white text-lg mb-2">Continuous Drift Detection</h3>
                <p className="text-sm text-white/65 leading-relaxed">Every autonomous agent under continuous behavioral monitoring. Tone shifts, hallucinations, unauthorized data scope — all flagged the moment they appear.</p>
              </div>
              <div className="border border-white/10 p-6">
                <div className="text-bronze text-[10px] tracking-[0.22em] mb-2">CADENTIA · 8-HOUR HEARTBEAT</div>
                <h3 className="font-serif text-white text-lg mb-2">Self-Healing Architecture</h3>
                <p className="text-sm text-white/65 leading-relaxed">Constitutional enforcement audits every eight hours. If a failure mode is detected, the system contains the threat and re-routes logic to maintain structural integrity. Without operator intervention.</p>
              </div>
              <div className="border border-white/10 p-6">
                <div className="text-bronze text-[10px] tracking-[0.22em] mb-2">DIRECTIO</div>
                <h3 className="font-serif text-white text-lg mb-2">Live Recertification</h3>
                <p className="text-sm text-white/65 leading-relaxed">Material changes — model, tools, scope, configuration — trigger automated re-evaluation. Failed compliance temporarily revokes certification and downgrades permissions.</p>
              </div>
              <div className="border border-white/10 p-6">
                <div className="text-bronze text-[10px] tracking-[0.22em] mb-2">PROVENANCE</div>
                <h3 className="font-serif text-white text-lg mb-2">Input / Output Provenance</h3>
                <p className="text-sm text-white/65 leading-relaxed">Full traceability of where the agent pulled its data from and how it reached its decision. Hallucination loops blocked at the infrastructure level.</p>
              </div>
            </div>

            <blockquote className="border-l-2 border-bronze pl-6 italic text-white/85 text-lg leading-relaxed">
              "Traditional compliance is dead when it comes to autonomous AI. You cannot give an AI a static certificate and walk away. Active IAC is a living, self-healing organism. It actively adapts, audits itself every eight hours, and instantly revokes agent privileges if they drift out of bounds. This is the only way to deploy AI at the enterprise level safely."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl text-white/85 italic mb-12 leading-relaxed">
            "Eight hours, every eight hours, forever.<br />
            The Gates do not close because the Gates are alive."
          </p>
          <Link href="/doctrine">
            <button className="btn-primary">Read the Full Doctrine</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
