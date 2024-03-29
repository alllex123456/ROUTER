import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';

export default function NewQuote() {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push('./quotes');
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
