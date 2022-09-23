/* eslint-disable */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const API =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hXVpsJLSVIbvFzZfu6IZ/books';
const FETCH_BOOK = 'FETCH_BOOK';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = {
  books: [],
};

export const fetchBook = createAsyncThunk(
  FETCH_BOOK,
  async (args, { dispatch }) => {
    const { data } = await axios.get(API);
    const books = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        id: key,
        ...book,
      };
    });
    dispatch({
      type: FETCH_BOOK,
      payload: books,
    });
  }
);

export const addBook = (book) => async (dispatch) => {
  const { data } = await axios.post(API, book);
  dispatch({
    type: ADD_BOOK,
  });
  dispatch(fetchBook());
};
export const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${API}/${id}`);
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return { books: action.payload };
    case ADD_BOOK:
      return { ...state };
    case REMOVE_BOOK:
      return { books: state.books.filter((book) => book.id !== action.id) };
    default:
      return state;
  }
};
