import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

export default function QuoteDetails() {
  const params = useParams();

  return (
    <section>
      <h1>Quote Details</h1>
      <h3>{params.quoteId}</h3>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
}
