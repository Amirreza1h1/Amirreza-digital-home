import { useId } from 'react';

/** One light sweep synchronizes the decorative paths and symbols. */
export function FlowArtwork() {
  const id = useId().replace(/:/g, '');
  return (
    <svg className='flow-artwork' viewBox='0 0 1200 760' fill='none' aria-hidden='true' focusable='false'>
      <defs>
        <linearGradient id={id + '-quiet-left'} x1='0' x2='1200' gradientUnits='userSpaceOnUse'>
          <stop offset='0.42' stopColor='white' stopOpacity='0' />
          <stop offset='0.57' stopColor='white' />
        </linearGradient>
        <mask id={id + '-paths-mask'}>
          <rect width='1200' height='760' fill={'url(#' + id + '-quiet-left)'} />
        </mask>
        <linearGradient id={id + '-light'}>
          <stop stopColor='white' stopOpacity='0' />
          <stop offset='.65' stopColor='white' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </linearGradient>
        <mask id={id + '-wave'} maskUnits='userSpaceOnUse' x='0' y='0' width='1200' height='760'>
          <rect className='signal-sweep' x='-240' width='240' height='760' fill={'url(#' + id + '-light)'} />
        </mask>
        <g id={id + '-paths'}>
          <path d='M-80 500C160 220 320 680 560 440S620 140 700 140S930 50 1280 160' />
          <path d='M-80 520C160 240 320 700 560 460S690 660 820 660S1080 280 1280 310' />
          <path d='M-80 540C160 260 320 720 560 480S850 260 1100 180S1200 170 1280 190' />
          <path d='M-80 550C160 270 320 730 560 490S850 270 1100 190S1200 180 1280 200' />
        </g>
        <g id={id + '-symbols'} strokeLinecap='round' strokeLinejoin='round'>
          {/* Brain with neural connections. */}
          <g transform='translate(650 90)'>
            <rect className='signal-panel' width='100' height='100' rx='22' />
            <path d='M50 25C48 15 34 15 31 25C20 24 15 34 20 43C10 51 15 64 24 66C22 78 36 86 45 77C48 76 50 72 50 68V25ZM50 25C52 15 66 15 69 25C80 24 85 34 80 43C90 51 85 64 76 66C78 78 64 86 55 77C52 76 50 72 50 68' />
            <path d='M31 25C28 33 33 38 39 38M20 43C28 40 34 45 33 52M24 66C31 69 38 63 37 57M50 48C40 46 39 54 42 59M69 25C72 33 67 38 61 38M80 43C72 40 66 45 67 52M76 66C69 69 62 63 63 57M50 48C60 46 61 54 58 59' />
            <circle cx='39' cy='38' r='2' />
            <circle cx='61' cy='38' r='2' />
          </g>
          {/* Matrix cubes. */}
          <g transform='translate(760 615)'>
            <rect className='signal-panel' width='120' height='100' rx='22' />
            <path
              d='m60 12 22 13v26L60 64 38 51V25Zm-22 13 22 13 22-13M60 38v26M38 51 16 64v24l22 12 22-12V64m-44 0 22 12 22-12M38 76v24M82 51l22 13v24l-22 12-22-12m0-24 22 12 22-12M82 76v24'
              transform='translate(0 -4) scale(1 .9)'
            />
          </g>
          {/* Database cylinder. */}
          <g transform='translate(1050 125)'>
            <rect className='signal-panel' width='100' height='105' rx='22' />
            <ellipse cx='50' cy='30' rx='26' ry='10' />
            <path d='M24 30v46c0 14 52 14 52 0V30M24 45c0 14 52 14 52 0M24 60c0 14 52 14 52 0' />
          </g>
        </g>
      </defs>
      <use href={'#' + id + '-paths'} className='signal-paths' mask={'url(#' + id + '-paths-mask)'} />
      <use href={'#' + id + '-symbols'} className='signal-symbols' />
      <g className='signal-lit' mask={'url(#' + id + '-wave)'}>
        <use href={'#' + id + '-paths'} mask={'url(#' + id + '-paths-mask)'} />
        <use href={'#' + id + '-symbols'} />
      </g>
    </svg>
  );
}
