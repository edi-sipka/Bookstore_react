/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [inputState, setState] = useState({
    title: '',
    author: '',
    category: '',
  });
  const changeState = (e) => {
    setState({ ...inputState, [e.target.name]: e.target.value });
  };

  const bookState = (e) => {
    e.preventDefault();
    // if (!inputState.title.trim() || !inputState.author.trim()) return;
    const book = {
      item_id: uuidv4(),
      ...inputState,
    };
    dispatch(addBook(book));
    setState({ title: '', author: '', category: '' });
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
        <select
          value={inputState.category}
          onChange={changeState}
          name="category"
        >
          <option>Select Category:</option>
          <option>Fiction</option>
          <option>Action</option>
          <option>Crime</option>
        </select>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
