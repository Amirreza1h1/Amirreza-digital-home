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
          {/* Side-view cerebrum, cortical folds, cerebellum, and brainstem. */}
          <g transform='translate(650 90)'>
            <rect className='signal-panel' width='100' height='100' rx='22' />
            <path d='M18 59C10 55 11 44 16 40C13 32 20 24 28 24C32 16 44 15 51 20C60 15 70 20 73 25C83 25 90 35 86 43C92 51 85 62 78 63C72 70 60 68 54 63C47 69 36 66 33 61C27 65 21 64 18 59Z' />
            <path d='M57 66C58 76 71 80 79 73C84 69 82 62 77 61M57 70C53 74 55 79 61 85L67 83C61 77 65 77 68 77' />
            <g strokeWidth='1.3'>
              <path d='M28 24C24 30 27 36 33 36C39 36 41 30 38 26M16 40C22 36 29 40 28 46C27 52 19 50 20 57M51 20C45 26 52 30 49 36C46 41 38 37 36 43M73 25C66 24 60 30 63 35C67 40 76 34 79 42M86 43C78 42 72 46 74 52M33 61C30 55 34 49 40 50C46 51 47 59 54 63M49 36C55 33 61 39 58 44C54 49 46 43 43 47M58 44C65 45 67 51 63 56C60 60 65 65 71 63M61 68C65 66 73 66 77 68M62 72C67 70 72 71 75 73' />
            </g>
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
