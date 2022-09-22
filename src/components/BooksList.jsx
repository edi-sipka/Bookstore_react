/* eslint-disable */
import React, { useEffect } from 'react';
import Books from './Books';
import AddBook from './AddBook';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../redux/books/books';

const BooksList = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);
  return (
    <div>
      {books.map((book) => (
        <Books
          id={book.id}
          title={book.title}
          author={book.author}
          key={book.id}
          category={book.category}
        />
      ))}

      <AddBook />
    </div>
  );
};

export default BooksList;
