/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import style from './AddBook.module.css';

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
      <h2 className={style.heading}>ADD NEW BOOK</h2>
      <form onSubmit={bookState}>
        <input
          className={style.panel}
          type="text"
          placeholder="Title"
          value={inputState.title}
          onChange={changeState}
          name="title"
        />
        <input
          className={style.panel}
          type="text"
          placeholder="Author"
          value={inputState.author}
          onChange={changeState}
          name="author"
        />
        <select
          className={style.panel}
          value={inputState.category}
          onChange={changeState}
          name="category"
        >
          <option>Select Category:</option>
          <option>Fiction</option>
          <option>Action</option>
          <option>Crime</option>
        </select>
        <button type="submit" className={style.btn}>
          ADD BOOK
        </button>

        <button type="submit">Add book</button>

      </form>
    </div>
  );
};

export default AddBook;
