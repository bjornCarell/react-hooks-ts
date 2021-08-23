/* eslint-disable no-nested-ternary */
import React from 'react';
import { useMedia } from '../../hooks/useMedia/useMedia';

export const Box = (): JSX.Element => {
  const isBig = useMedia('(min-width: 1000px)');
  const isMedium = useMedia('(max-width: 999px) and (min-width: 700px)');
  const isSmall = useMedia('(max-width: 699px)');
  const color = isBig
    ? 'green'
    : isMedium
    ? 'yellow'
    : isSmall
    ? 'red'
    : 'orange';

  return <div style={{ width: 200, height: 200, backgroundColor: color }} />;
};
