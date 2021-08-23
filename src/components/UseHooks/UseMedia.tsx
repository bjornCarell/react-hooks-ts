import React from 'react';
import { useMedia } from '../../hooks/useMedia/useMedia';

export const UseMedia = (): JSX.Element => {
  const isBig = useMedia('(min-width: 1000px)');
  const isMedium = useMedia('(max-width: 999px) and (min-width: 700px)');
  const isSmall = useMedia('(max-width: 699px)');
  let color;

  if (isBig) {
    color = 'green';
  }

  if (isMedium) {
    color = 'yellow';
  }

  if (isSmall) {
    color = 'red';
  }

  if (!isBig && !isMedium && !isSmall) {
    color = 'orange';
  }

  return <div style={{ width: 200, height: 200, backgroundColor: color }} />;
};
