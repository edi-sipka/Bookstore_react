/* eslint-disable */
import React from 'react';
import Books from './Books';
import AddBook from './AddBook';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'Petar Pan',
      author: 'Romano',
    },
    {
      id: 2,
      title: 'Disney books',
      author: 'Walt Disney',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Books key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
};

export default BookList;
