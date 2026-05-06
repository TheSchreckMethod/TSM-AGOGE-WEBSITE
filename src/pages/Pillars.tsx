import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Pillars() {
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
            <p className="text-crimson text-xs tracking-[0.4em] mb-6">DOCTRINE / STRUCTURE</p>
            <h1 className="font-serif text-4xl md:text-6xl mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              THE TWO PILLARS
            </h1>
            <p className="text-bronze italic text-lg md:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed">
              The Pillars are two. The Doctrine is one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DOCTRINAL FRAME */}
      <section className="py-20 px-6 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6 text-base md:text-lg text-white/75 leading-relaxed"
          >
            <p>
              The Agoge was always two-pillared. The historical record is unambiguous on this. Spartan formation produced both the warrior-king and the strategic sovereign — Leonidas at Thermopylae, Gorgo at the council fire, Cynisca at Olympia. The popular memory remembers only the first. The Method restores all three.
            </p>
            <p className="text-white">
              v2.0 of the Doctrine names what was always there. Two pillars. One standard. One rite of passage.
            </p>
            <p className="text-bronze font-serif text-sm tracking-[0.18em] uppercase pt-4">
              Pillar assignment is by formation, not chromosome.
            </p>
            <p className="text-white/60 text-sm">
              The candidate's pillar is determined by the formation pattern that emerges during Selection — the doctrine of CADENTIA under load, the protocol of VIDERE before action. The Praefectus is forged in the pillar that fits the operator, not the operator that fits a pillar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE TWO PILLARS — SIDE BY SIDE */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-px bg-white/5">

          {/* PILLAR I — LEONIDAN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-obsidian p-10 md:p-14 flex flex-col"
          >
            <div className="text-bronze text-xs tracking-[0.3em] mb-4">PILLAR I</div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">LEONIDAN</h2>
            <p className="font-serif italic text-bronze text-lg mb-8">Warrior-king formation.</p>

            <p className="text-white/75 leading-relaxed mb-8">
              The Leonidan candidate is forged by exposure. Operational hardship under fire. Throttle discipline when the situation refuses to slow down. The combat-frame of leadership — the operator who holds the pass while the column withdraws. Patron: Leonidas I, King of Sparta, who held the Hot Gates with three hundred against an army of millions because someone had to hold, and the historical record records who did.
            </p>

            <div className="border-t border-white/10 pt-6 mt-auto">
              <div className="text-bronze text-[10px] tracking-[0.24em] mb-3">CURRICULUM EMPHASES</div>
              <ul className="space-y-2 text-sm text-white/70">
                <li><span className="text-bronze">CADENTIA</span> under load — operating cadence in pressure</li>
                <li><span className="text-bronze">RESPONSIO</span> in crisis — the 30-second response</li>
                <li><span className="text-bronze">DETECTIO</span> as field commander — drift in self and others</li>
              </ul>
            </div>
          </motion.div>

          {/* PILLAR II — GORGONIAN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="bg-obsidian p-10 md:p-14 flex flex-col"
          >
            <div className="text-bronze text-xs tracking-[0.3em] mb-4">PILLAR II</div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">GORGONIAN</h2>
            <p className="font-serif italic text-bronze text-lg mb-8">Strategic sovereign formation.</p>

            <p className="text-white/75 leading-relaxed mb-8">
              The Gorgonian candidate is forged by judgment. Pattern recognition before others see the pattern. Civic indispensability — the operator the council cannot decide without. Voice as instrument of governance. Patron: Gorgo, Queen of Sparta, who at eight years old advised her father against an envoy's bribe, and at adulthood resolved the regency that decided the war. Herodotus and Plutarch both record her by name. They almost never record women by name. They recorded her.
            </p>

            <div className="border-t border-white/10 pt-6 mt-auto">
              <div className="text-bronze text-[10px] tracking-[0.24em] mb-3">THE GORGO PROTOCOL</div>
              <ul className="space-y-2 text-sm text-white/70">
                <li><span className="text-bronze">VIDERE</span> — to see the pattern</li>
                <li><span className="text-bronze">TACERE</span> — to hold silence until the moment</li>
                <li><span className="text-bronze">DICERE</span> — to speak the resolving sentence</li>
                <li><span className="text-bronze">REGERE</span> — to govern the room without occupying it</li>
                <li><span className="text-bronze">GENERARE</span> — to produce successors who carry the standard</li>
              </ul>
              <p className="text-[11px] text-white/40 mt-4 italic">
                The Archidamia function: the strategic sovereign who organizes the women of Sparta to hold the city while the army deploys. Recorded by Plutarch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSING REFRAIN */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-white/85 italic mb-12 leading-relaxed">
            "They were always there.<br />
            We are the ones who finally read the sources."
          </p>
          <Link href="/archetypes">
            <button className="btn-primary">Read the Three Archetypes</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
