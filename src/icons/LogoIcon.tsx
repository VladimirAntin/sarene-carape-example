import {FC, memo} from 'react';

// Šarene Čarape — colorful sock logo
const LogoIcon: FC<Icon> = ({width = 40, height = 40, className}) => (
  <svg
    width={width}
    height={height}
    viewBox={'0 0 64 64'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
    className={className}>
    <defs>
      <linearGradient id={'sock-bg'} x1={'0'} y1={'0'} x2={'1'} y2={'1'}>
        <stop offset={'0%'} stopColor={'#e91e63'} />
        <stop offset={'100%'} stopColor={'#9c27b0'} />
      </linearGradient>
    </defs>
    <rect width={'64'} height={'64'} rx={'14'} fill={'url(#sock-bg)'} />
    {/* Leg tube */}
    <rect x={'14'} y={'8'} width={'18'} height={'34'} rx={'6'} fill={'white'} opacity={'0.95'} />
    {/* Foot */}
    <rect x={'14'} y={'36'} width={'38'} height={'22'} rx={'10'} fill={'white'} opacity={'0.95'} />
    {/* Stripes */}
    <rect x={'14'} y={'18'} width={'18'} height={'4'} rx={'2'} fill={'#FF6B35'} />
    <rect x={'14'} y={'25'} width={'18'} height={'4'} rx={'2'} fill={'#FFD600'} />
    <rect x={'14'} y={'32'} width={'18'} height={'4'} rx={'2'} fill={'#00C853'} />
  </svg>
);

export default memo(LogoIcon);
