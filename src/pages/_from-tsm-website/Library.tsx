import { useState, useEffect, useMemo } from "react";
import ScrollReveal from "../components/ScrollReveal";
import EquilibriumBackdrop from "../components/EquilibriumBackdrop";

const COMMAND_API = "https://command.theschreckmethod.com/api/ebooks";
const COVER_SRC = "/assets/brand/ebook-cover-blank.png";
const PAGE_SIZE = 60;

interface Ebook {
  filename: string;
  series: string;
  seriesCode: string;
  volume: number | null;
  part: number | null;
  title: string;
  sizeBytes: number;
  downloadUrl: string;
}

export default function Library() {
  const [allBooks, setAllBooks] = useState<Ebook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    let cancelled = false;
    fetch(`${COMMAND_API}/list`)
      .then(r => {
        if (!r.ok) throw new Error(`Library service returned ${r.status}`);
        return r.json();
      })
      .then(data => {
        if (cancelled) return;
        setAllBooks(data.items || []);
        setLoading(false);
      })
      .catch(e => {
        if (cancelled) return;
        setError(e.message || "Failed to load library");
        setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const series = useMemo(() => {
    const map = new Map<string, number>();
    map.set("All", allBooks.length);
    allBooks.forEach(b => map.set(b.series, (map.get(b.series) || 0) + 1));
    return Array.from(map.entries()).sort((a, b) => {
      if (a[0] === "All") return -1;
      if (b[0] === "All") return 1;
      return b[1] - a[1];
    });
  }, [allBooks]);

  const filtered = useMemo(() => {
    return allBooks.filter(b => {
      const seriesMatch = selectedSeries === "All" || b.series === selectedSeries;
      const q = search.toLowerCase();
      const searchMatch = !q || b.title.toLowerCase().includes(q) || b.series.toLowerCase().includes(q) || (b.volume?.toString() || "").includes(q);
      return seriesMatch && searchMatch;
    });
  }, [allBooks, selectedSeries, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Reset to page 1 when filters change
  useEffect(() => { setPage(1); }, [selectedSeries, search]);

  return (
    <div style={{ background: 'var(--bg-base)' }}>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <EquilibriumBackdrop intensity="section" anchor="top" />
        <div className="grid-pattern absolute inset-0" style={{ opacity: 0.35 }} />
        <div className="orb-field">
          <div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(184,150,46,0.08) 0%, transparent 70%)', top: '-10%', right: '-5%', animationDuration: '30s' }} />
        </div>
        <div className="container relative z-10">
          <div className="badge badge-gold mb-6">INTELLIGENCE LIBRARY</div>
          <h1 className="hero-headline gradient-text mb-4">
            {loading ? "Loading…" : `${allBooks.length} Volumes.`}
          </h1>
          <h2 className="section-headline mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {loading ? "" : `${series.length - 1} Series. One Framework.`}
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
            The complete intelligence library of ALEETH. Every volume governed by the ICA framework. Click any cover to download.
          </p>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="section pt-0">
        <div className="container">

          {error && (
            <div className="glass-card p-6 mb-8" style={{ border: '1px solid rgba(220,80,80,0.3)', background: 'rgba(220,80,80,0.05)' }}>
              <div style={{ color: 'rgba(255,170,170,0.92)', fontFamily: 'DM Sans, sans-serif' }}>
                <strong>Library temporarily unavailable.</strong> {error}. Try refreshing in a moment, or email <a href="mailto:shane@theschreckmethod.com" style={{ color: '#B8962E', textDecoration: 'underline' }}>shane@theschreckmethod.com</a> if this persists.
              </div>
            </div>
          )}

          {!loading && !error && (
            <>
              {/* Search */}
              <ScrollReveal>
                <div className="mb-8">
                  <input
                    type="text"
                    placeholder={`Search ${allBooks.length} volumes…`}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full max-w-md glass px-4 py-3 text-sm bg-transparent outline-none"
                    style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.85)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.1)' }}
                    data-testid="library-search"
                  />
                </div>
              </ScrollReveal>

              {/* Series filter */}
              <ScrollReveal delay={100}>
                <div className="flex flex-wrap gap-2 mb-10">
                  {series.map(([name, count]) => (
                    <button
                      key={name}
                      onClick={() => setSelectedSeries(name)}
                      className={selectedSeries === name ? 'btn-gold' : 'btn-ghost'}
                      style={{ fontSize: '0.65rem', padding: '0.4rem 0.875rem', minHeight: '32px', borderRadius: 6 }}
                      data-testid={`filter-${name}`}
                    >
                      {name} ({count})
                    </button>
                  ))}
                </div>
              </ScrollReveal>

              {/* Results count */}
              <div className="label-mono mb-6" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
                Showing {paginated.length} of {filtered.length} volumes
                {totalPages > 1 ? ` · page ${page} of ${totalPages}` : ''}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {paginated.map((book) => {
                  const volLabel = book.volume != null
                    ? `Vol. ${String(book.volume).padStart(3, '0')}${book.part != null ? ` · Part ${book.part}` : ''}`
                    : '';
                  return (
                    <a
                      key={book.filename}
                      href={book.downloadUrl.startsWith('http') ? book.downloadUrl : `${COMMAND_API.replace('/api/ebooks', '')}${book.downloadUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card group"
                      style={{ padding: '14px', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(184,150,46,0.15)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}
                      data-testid={`book-${book.filename}`}
                    >
                      <div
                        style={{
                          width: '100%',
                          aspectRatio: '9 / 16',
                          background: `#0d0d0d url(${COVER_SRC}) center / cover no-repeat`,
                          borderRadius: 4,
                          marginBottom: 12,
                          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Title overlay · overlays the gold S logo (logo
                            stays as background texture). Bold sans matches
                            the title text below the cover, but larger. */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '8%',
                            right: '8%',
                            transform: 'translateY(-50%)',
                            textAlign: 'center',
                            fontFamily: 'Outfit, sans-serif',
                            fontWeight: 800,
                            color: '#FFFFFF',
                            fontSize: 'clamp(0.95rem, 2.2vw, 1.5rem)',
                            lineHeight: 1.15,
                            letterSpacing: '-0.01em',
                            textShadow: '0 2px 12px rgba(0,0,0,0.85), 0 0 30px rgba(0,0,0,0.6)',
                          }}
                          aria-hidden
                        >
                          {book.title}
                        </div>
                      </div>
                      <div className="label-mono" style={{ fontSize: '0.55rem', color: 'rgba(184,150,46,0.7)', letterSpacing: '0.08em', marginBottom: 4 }}>
                        {book.series}{volLabel ? ` · ${volLabel}` : ''}
                      </div>
                      <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.85rem', lineHeight: 1.3, color: 'rgba(255,255,255,0.92)', letterSpacing: '-0.01em', marginBottom: 6 }}>
                        {book.title}
                      </h4>
                      <div className="label-mono" style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', marginTop: 'auto' }}>
                        {(book.sizeBytes / 1024).toFixed(0)} KB · PDF ↗
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-12">
                  <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', opacity: page === 1 ? 0.3 : 1 }}>
                    ← Prev
                  </button>
                  <span className="label-mono" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', minWidth: 80, textAlign: 'center' }}>
                    {page} / {totalPages}
                  </span>
                  <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="btn-gold" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', opacity: page === totalPages ? 0.3 : 1 }}>
                    Next →
                  </button>
                </div>
              )}

              {filtered.length === 0 && (
                <div className="text-center py-20" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
                  No volumes match your filters.
                </div>
              )}
            </>
          )}

          {loading && (
            <div className="text-center py-20" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
              Loading the intelligence library…
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
