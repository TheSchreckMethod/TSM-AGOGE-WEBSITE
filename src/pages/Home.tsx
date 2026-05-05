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
    </div>
  );
}
