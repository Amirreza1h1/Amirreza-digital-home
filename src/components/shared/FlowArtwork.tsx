/** Decorative paths inspired by connected ideas; no simulated metrics or live data. */
export function FlowArtwork() {
  return (
    <svg className='flow-artwork' viewBox='0 0 1200 760' fill='none' aria-hidden='true' focusable='false'>
      <g className='flow-lines'>
        <path d='M-80 520C180 180 310 740 620 420S970 100 1280 220' />
        <path d='M-80 545C180 205 310 765 620 445S970 125 1280 245' />
        <path d='M-80 570C180 230 310 790 620 470S970 150 1280 270' />
        <path d='M1200 680C920 760 1010 290 770 310S540 70 360 110' />
      </g>
      <g className='flow-sparks'>
        <path pathLength='100' d='M-80 520C180 180 310 740 620 420S970 100 1280 220' />
        <path pathLength='100' d='M-80 570C180 230 310 790 620 470S970 150 1280 270' />
      </g>
      <g className='flow-cluster'>
        <circle cx='925' cy='260' r='116' className='flow-halo' />
        <ellipse cx='925' cy='260' rx='116' ry='40' transform='rotate(-30 925 260)' />
        <ellipse cx='925' cy='260' rx='48' ry='116' transform='rotate(-30 925 260)' />
        <path d='m860 215 65-38 65 38v76l-65 38-65-38zm0 0 65 38 65-38m-65 38v76' />
        <circle cx='825' cy='315' r='7' className='flow-node' />
        <circle cx='1020' cy='195' r='5' className='flow-node' />
      </g>
      <g className='flow-tile'>
        <rect x='640' y='135' width='100' height='76' rx='18' transform='rotate(-12 640 135)' />
        <path d='m665 154-10 12 10 8m38-30 10 8-10 12m-15-20-6 24' />
      </g>
      <g className='flow-tile flow-tile-late'>
        <rect x='990' y='435' width='104' height='76' rx='18' transform='rotate(12 990 435)' />
        <circle cx='1017' cy='472' r='6' />
        <circle cx='1062' cy='476' r='6' />
        <circle cx='1037' cy='499' r='6' />
        <path d='m1023 472 33 4m-17 17 19-13m-37-2 12 17' />
      </g>
    </svg>
  );
}
