import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="relative">
      {/* 1. HERO: THE THRESHOLD */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(205,127,50,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center flex flex-col items-center"
        >
          <img 
            src="/logo.png" 
            alt="Agoge Logo" 
            className="w-32 h-32 md:w-48 md:h-48 mb-8 drop-shadow-[0_0_30px_rgba(205,127,50,0.2)]"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            THE LAST PLATFORM
          </h1>
          
          <div className="flex gap-4 md:gap-8 mb-12 text-xs md:text-sm tracking-[0.4em] font-serif text-bronze">
            <span>SIGNATUS</span>
            <span className="text-white/30">•</span>
            <span>SCULPTUS</span>
            <span className="text-white/30">•</span>
            <span>PERMANENS</span>
          </div>

          <Link href="/access">
            <button className="btn-primary">
              Submit to the Gates
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 2. THE MANIFESTO */}
      <section className="py-32 px-6 bg-black relative border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-crimson text-sm tracking-[0.3em] mb-12 text-center">A LETTER TO THE CATEGORY</h2>
            
            <div className="doctrine-text space-y-8 text-lg md:text-2xl text-center">
              <p className="text-white font-bold">TO THE COACHING INDUSTRY: SILENCE IS YOUR ONLY ANSWER.</p>
              
              <p>The era of the "unregulated guide" is over. The Agoge Method does not offer advice; it administers an Applied Institution. We have watched you scale through dilution and hide behind subjective results. We are the end of your category.</p>
              
              <p className="text-bronze font-bold">
                We are governed by Doctrine, not intuition.<br/>
                We are validated by Audit, not testimonials.<br/>
                We are enforced by Refusal, not sales targets.
              </p>
              
              <p>Every Agoge Passage is Traceable, Contained, and Reversible. You cannot follow us. To do so would require you to publish your doctrine and accept liability—tasks you are architecturally incapable of performing.</p>
              
              <p className="pt-8 text-white tracking-[0.2em] text-xl">STRENGTH. SYSTEMS. PERMANENCE.<br/><span className="text-bronze">PASSAGE IS EARNED.</span></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE TWO PILLARS */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="text-crimson text-xs tracking-[0.4em] mb-4">DOCTRINE / STRUCTURE</p>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">THE TWO PILLARS</h2>
            <p className="text-bronze italic text-lg">The Pillars are two. The Doctrine is one.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-obsidian border border-white/10 p-8 md:p-10"
            >
              <div className="text-bronze text-[11px] tracking-[0.28em] mb-2">PILLAR I</div>
              <h3 className="font-serif text-3xl text-white mb-2">LEONIDAN</h3>
              <p className="font-serif italic text-bronze mb-4">Warrior-king formation.</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Operational hardship under fire. Throttle discipline when the situation refuses to slow down. The combat-frame of leadership. Patron: Leonidas I of Sparta.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-obsidian border border-white/10 p-8 md:p-10"
            >
              <div className="text-bronze text-[11px] tracking-[0.28em] mb-2">PILLAR II</div>
              <h3 className="font-serif text-3xl text-white mb-2">GORGONIAN</h3>
              <p className="font-serif italic text-bronze mb-4">Strategic sovereign formation.</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Pattern recognition before the pattern is visible. Civic indispensability. Voice as instrument of governance. Patron: Gorgo, Queen of Sparta.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link href="/pillars">
              <span className="text-bronze text-sm tracking-[0.18em] uppercase cursor-pointer border-b border-bronze/40 hover:border-bronze pb-1 transition-colors">
                Read the Two Pillars →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. THE THREE ARCHETYPES */}
      <section className="py-24 px-6 bg-black/40 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="text-crimson text-xs tracking-[0.4em] mb-4">DOCTRINE / TYPOLOGY</p>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">THE THREE ARCHETYPES</h2>
            <p className="text-bronze italic text-lg max-w-3xl mx-auto leading-relaxed">
              They were always there. We are the ones who finally read the sources.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: "leonidas", name: "LEONIDAS", role: "The Warrior-King", note: "Founder under existential pressure." },
              { id: "gorgo",    name: "GORGO",    role: "The Strategic Sovereign", note: "Judgment that resolves the room." },
              { id: "cynisca",  name: "CYNISCA",  role: "The Breaker of Barriers", note: "Systems mastery, not protest." },
            ].map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-obsidian border border-white/10 p-8 text-center"
              >
                <h3 className="font-serif text-3xl text-white mb-2 tracking-wide">{a.name}</h3>
                <p className="font-serif italic text-bronze mb-4">{a.role}</p>
                <p className="text-white/65 text-sm">{a.note}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/archetypes">
              <span className="text-bronze text-sm tracking-[0.18em] uppercase cursor-pointer border-b border-bronze/40 hover:border-bronze pb-1 transition-colors">
                Read the Archetypes with Primary Sources →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. THE TWO LIVING SYSTEMS */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="text-crimson text-xs tracking-[0.4em] mb-4">INFRASTRUCTURE / INSTITUTION-GRADE</p>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">THE TWO LIVING SYSTEMS</h2>
            <p className="text-bronze italic text-lg max-w-3xl mx-auto leading-relaxed">
              The Doctrine speaks. It does not stutter.<br />
              The certification is a pulse, not a stamp.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-obsidian border border-white/10 p-8 md:p-10"
            >
              <div className="text-bronze text-[11px] tracking-[0.28em] mb-2">LIVING SYSTEM I</div>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">CALIBRATED VOICE COMPANION</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Tri-provider TTS failover · zero-downtime VOX · calibrated authentic voice · bi-directional speech recognition. Executive interface that never stutters and always speaks with the calibrated authority required for the moment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-obsidian border border-white/10 p-8 md:p-10"
            >
              <div className="text-bronze text-[11px] tracking-[0.28em] mb-2">LIVING SYSTEM II</div>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">ACTIVE IAC</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Continuous DETECTIO · CADENTIA at 8-hour heartbeat · self-healing DIRECTIO · live compliance recertification, input/output provenance. Self-healing governance infrastructure for autonomous AI at the enterprise level.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link href="/living-systems">
              <span className="text-bronze text-sm tracking-[0.18em] uppercase cursor-pointer border-b border-bronze/40 hover:border-bronze pb-1 transition-colors">
                Read the Living Systems →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. THE APEX */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-crimson text-xs tracking-[0.4em] mb-6">THE APEX GATE</p>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
            IMPERATOR · IMPERATRIX
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12">
            One gate. Two ceremonial registers. Same Founder. Same standard. The candidate who completes the Cursus stands before the Apex — and the Apex either confirms, or does not.
          </p>
          <Link href="/access">
            <button className="btn-primary">Submit to the Gates</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
