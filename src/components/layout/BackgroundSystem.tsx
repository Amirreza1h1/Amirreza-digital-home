/**
 * Global layered background system.
 * Layers (bottom → top):
 *  1. Body base color   (CSS variable --background)
 *  2. Radial glow blobs (violet + blue + indigo)
 *  3. Subtle grid       (fades towards edges via mask)
 *  4. Noise texture     (subliminal grain)
 *
 * All layers are fixed-positioned behind every page element.
 * Opacity values are intentionally conservative — legibility first.
 */
export function BackgroundSystem() {
  return (
    <div aria-hidden='true' className='pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none'>
      {/* ─── Radial glow blobs ────────────────────────────────────────── */}

      {/* Violet — upper right */}
      <div className='absolute top-[-12%] right-[-18%] h-175 w-175 rounded-full bg-violet-400/4 blur-[140px] dark:bg-violet-500/10' />

      {/* Blue — upper left */}
      <div className='absolute top-[2%] left-[-14%] h-140 w-160 rounded-full bg-blue-400/4 blur-[120px] dark:bg-blue-400/8' />

      {/* Indigo/purple — lower center */}
      <div className='absolute bottom-[-8%] left-[45%] h-120 w-215 -translate-x-1/2 rounded-full bg-indigo-300/3 blur-[150px] dark:bg-purple-600/[0.07]' />

      {/* ─── Grid — visible at top, fades towards bottom ──────────────── */}

      {/* Light-mode grid */}
      <div
        className='absolute inset-0 dark:hidden'
        style={{
          backgroundImage: [
            'linear-gradient(rgba(15,23,42,0.045) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(15,23,42,0.045) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '64px 64px',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 55% at 50% 0%, white 0%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 100% 55% at 50% 0%, white 0%, transparent 100%)',
        }}
      />

      {/* Dark-mode grid */}
      <div
        className='absolute inset-0 hidden dark:block'
        style={{
          backgroundImage: [
            'linear-gradient(rgba(248,250,252,0.030) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(248,250,252,0.030) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '64px 64px',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 55% at 50% 0%, white 0%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 100% 55% at 50% 0%, white 0%, transparent 100%)',
        }}
      />

      {/* ─── Noise texture ─────────────────────────────────────────────── */}
      <div
        className='absolute inset-0 opacity-[0.016] dark:opacity-[0.024]'
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
        }}
      />
    </div>
  );
}
