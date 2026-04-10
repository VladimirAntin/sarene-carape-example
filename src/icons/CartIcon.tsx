import {FC, memo} from 'react';

const CartIcon: FC<Icon> = ({width = 24, height = 24, className}) => (
  <svg
    width={width}
    height={height}
    viewBox={'0 0 24 24'}
    fill={'none'}
    stroke={'currentColor'}
    strokeWidth={1.8}
    strokeLinecap={'round'}
    strokeLinejoin={'round'}
    xmlns={'http://www.w3.org/2000/svg'}
    className={className}>
    <path d={'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z'} />
    <line x1={'3'} y1={'6'} x2={'21'} y2={'6'} />
    <path d={'M16 10a4 4 0 01-8 0'} />
  </svg>
);

export default memo(CartIcon);

