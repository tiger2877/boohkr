import React from 'react';
import helpers from '../utils/helpers';

export default function Detail(props) {
  const {
    title,
    subtitle,
    authors,
    description,
    pageCount,
    publisher,
    publishedDate,
    thumbnail,
  } = props.location.state.book;

  // helper function to render authors
  const authorList = helpers.authorList(authors);

  return (
    <div>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <ul>Author: {authorList}</ul>
      <p>Page count: {pageCount}</p>
      <p>
        Publisher {publisher} on {publishedDate}
      </p>
      <div>
        <img src={thumbnail} alt={`book: ${title}`} />
        <p>{description}</p>
      </div>
    </div>
  );
}
