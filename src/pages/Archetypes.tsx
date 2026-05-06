import { motion } from "framer-motion";
import { Link } from "wouter";

const ARCHETYPES = [
  {
    id: "leonidas",
    label: "ARCHETYPE I",
    name: "LEONIDAS",
    epithet: "The Warrior-King",
    summary: "Founder under existential pressure.",
    pillar: "Leonidan",
    body: `The candidate who carries the Leonidan formation. Founder under existential pressure. The decision-maker who knows the column will withdraw and stays at the gate anyway. The Leonidan archetype is not bravado — it is the engineering of permanence under impossible odds. The operator the institution cannot replace because the institution rests on his stand.`,
    sources: [
      { author: "Herodotus", work: "Histories", ref: "VII.220–228", note: "The Thermopylae account. The oracle. The choice. The stand." },
      { author: "Plutarch", work: "Sayings of Spartans", ref: "Apophthegmata Laconica", note: "“Molon labe.” Come and take them. The two-word doctrine." },
      { author: "Diodorus Siculus", work: "Library of History", ref: "Book XI", note: "Independent confirmation of the Leonidas record." },
    ],
  },
  {
    id: "gorgo",
    label: "ARCHETYPE II",
    name: "GORGO",
    epithet: "The Strategic Sovereign",
    summary: "Judgment that resolves the room.",
    pillar: "Gorgonian",
    body: `Queen of Sparta, daughter of Cleomenes I, wife of Leonidas. Recorded by Herodotus by name in an era when women were almost never recorded by name. As a child she advised her father against the bribery of Aristagoras of Miletus — the only voice in the room that saw the pattern. As queen she resolved the political question of her husband's succession. She is the archetype of judgment that arrives one move before everyone else — and is heeded.`,
    sources: [
      { author: "Herodotus", work: "Histories", ref: "V.51", note: "“Father, get up and leave or this stranger will corrupt you.” Gorgo, age eight, before Aristagoras." },
      { author: "Plutarch", work: "Sayings of Spartan Women", ref: "Moralia 240E", note: "Recorded under her name. Multiple sayings preserved verbatim." },
      { author: "Plutarch", work: "Lycurgus", ref: "14", note: "On the formation of Spartan women — context for the archetype." },
      { author: "Aristotle", work: "Politics", ref: "II.9 (1269b)", note: "The structural acknowledgment that Spartan women held political weight." },
    ],
  },
  {
    id: "cynisca",
    label: "ARCHETYPE III",
    name: "CYNISCA",
    epithet: "The Breaker of Barriers",
    summary: "Systems mastery, not protest.",
    pillar: "Either pillar — by formation",
    body: `Spartan princess, daughter of King Archidamus II, sister of Agesilaus II. In 396 BCE the first woman in recorded history to be crowned an Olympic victor — winning the four-horse chariot race. Won again in 392 BCE. She did not win by changing the rules. She won by mastering the system as it was: she funded, owned, and trained the team that crossed the line first. A heroon was raised for her at Sparta. Pausanias describes her bronze chariot at Olympia.`,
    sources: [
      { author: "Pausanias", work: "Description of Greece", ref: "III.8.1, III.15.1, V.12.5", note: "The chariot. The heroon. The dedicatory inscription, recorded verbatim." },
      { author: "Xenophon", work: "Agesilaus", ref: "9.6", note: "Cynisca's brother encouraging her toward the systems play, not protest." },
      { author: "Plutarch", work: "Agesilaus", ref: "20", note: "Independent confirmation of the family record and motive." },
    ],
  },
];

export default function Archetypes() {
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
            <p className="text-crimson text-xs tracking-[0.4em] mb-6">DOCTRINE / TYPOLOGY</p>
            <h1 className="font-serif text-4xl md:text-6xl mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              THE THREE ARCHETYPES
            </h1>
            <p className="text-bronze italic text-lg md:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed">
              The historical record is the standard.<br />
              The popular memory is the distortion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OPENING FRAME */}
      <section className="py-16 px-6 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-white/75 leading-relaxed text-center">
            Every Praefectus / Praefecta is forged in the pattern of one of three archetypes drawn from the Spartan record. Two of the three are women. The doctrine does not add them — the doctrine reads the record correctly.
          </p>
        </div>
      </section>

      {/* THE THREE ARCHETYPES */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          {ARCHETYPES.map((arch, idx) => (
            <motion.article
              key={arch.id}
              id={arch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: idx * 0.1 }}
              className="bg-obsidian border border-white/5 p-10 md:p-14"
            >
              <div className="text-bronze text-[11px] tracking-[0.3em] mb-3">{arch.label}</div>
              <h2 className="font-serif text-5xl md:text-6xl text-white mb-3 tracking-wide">{arch.name}</h2>
              <p className="font-serif italic text-bronze text-xl mb-1">{arch.epithet}</p>
              <p className="text-white/55 text-sm tracking-[0.18em] uppercase mb-8">
                Pillar: {arch.pillar}
              </p>

              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
                {arch.body}
              </p>

              <p className="font-serif italic text-white/55 text-base mb-4">{arch.summary}</p>

              <div className="border-t border-white/10 pt-6">
                <div className="text-bronze text-[10px] tracking-[0.24em] mb-4">PRIMARY SOURCES</div>
                <ul className="space-y-3">
                  {arch.sources.map((s, i) => (
                    <li key={i} className="text-sm text-white/70 leading-relaxed">
                      <span className="text-bronze font-serif">{s.author}</span>
                      <span className="text-white/50">, </span>
                      <span className="italic text-white/80">{s.work}</span>
                      <span className="text-white/50"> · {s.ref}</span>
                      <span className="block text-white/50 text-xs mt-1 pl-4 border-l border-white/10">{s.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-white/85 italic mb-4 leading-relaxed">
            "They were always there.<br />
            We are the ones who finally read the sources."
          </p>
          <p className="text-white/40 text-sm tracking-[0.2em] uppercase mb-12">— Master refrain · v2.2</p>
          <Link href="/access">
            <button className="btn-primary">Submit to the Gates</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
