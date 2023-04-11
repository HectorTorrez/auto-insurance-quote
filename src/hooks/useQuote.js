import { useContext } from 'react';
import { QuoteContext } from '../context/QuoteProvider';

export const useQuote = () => {
  return useContext(QuoteContext)
}