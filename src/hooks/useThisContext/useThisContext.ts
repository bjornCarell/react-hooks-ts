import { useContext } from 'react';

export const useThisContext = <T>(Context: React.Context<T>): T => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useThisContext must be provided a Context Provider');
  }
  return context;
};
