import { Link, useLocation } from "wouter";

export default function Nav() {
  const [location] = useLocation();

  const links = [
    { href: "/doctrine", label: "THE DOCTRINE" },
    { href: "/pillars", label: "PILLARS" },
    { href: "/archetypes", label: "ARCHETYPES" },
    { href: "/living-systems", label: "LIVING SYSTEMS" },
    { href: "/access", label: "FOUNDER PHASE" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-obsidian/90 backdrop-blur-md border-b border-white/5 py-4">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-4 cursor-pointer group">
            <img 
              src="/logo.png" 
              alt="The Agoge Method" 
              className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(205,127,50,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(139,0,0,0.5)] transition-all duration-500"
            />
            <span className="font-serif text-lg tracking-[0.25em] text-white">THE AGOGE METHOD</span>
          </div>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`font-serif text-[11px] tracking-[0.2em] cursor-pointer transition-colors duration-300 ${location === link.href ? 'text-bronze' : 'text-white/60 hover:text-white'}`}>
                {link.label}
              </span>
            </Link>
          ))}
          
          <Link href="/access">
            <button className="ml-4 border border-crimson/50 text-crimson px-5 py-2 font-serif text-[10px] tracking-[0.2em] hover:bg-crimson/10 transition-colors uppercase">
              Submit to the Gates
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
