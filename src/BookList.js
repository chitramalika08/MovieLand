import React from 'react';
import './index.css';
import EventExamples1 from './Event';

function BookList({ books }) {
  if (!books || books.length === 0) {
    return <div>No books available</div>;
  }

return (
  
    <section className='booklist'>
      <EventExamples1 />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className='book'>
      <img src={img} alt={Book.title} />
      <h2>{Book.title}</h2>
      <h4>{Book.author} </h4>
    </article>
  );
};

export default BookList;
