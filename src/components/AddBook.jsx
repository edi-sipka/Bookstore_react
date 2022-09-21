/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [inputState, setState] = useState({ title: '', author: '' });
  const changeState = (e) => {
    e.preventDefault();
    setState({ ...inputState, [e.target.name]: e.target.value });
  };

  const bookState = (e) => {
    e.preventDefault();
    if (!inputState.title.trim() || !inputState.author.trim()) return;
    const book = {
      id: uuidv4(),
      title: inputState.title,
      author: inputState.author,
    };
    dispatch(addBook(book));
    setState({ title: '', author: '' });
  };
  return (
    <div>
      <form onSubmit={bookState}>
        <input
          type="text"
          placeholder="title"
          value={inputState.title}
          onChange={changeState}
          name="title"
        />
        <input
          type="text"
          placeholder="author"
          value={inputState.author}
          onChange={changeState}
          name="author"
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
