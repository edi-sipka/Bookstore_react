/* eslint-disable */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOKS = 'FETCH_BOOKS';
const API =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dGG4fOJN0KtR2qngOQAi/books';

const initialState = {
  books: [],
};

export const addBook = (book) => async (dispatch) => {
  try {
    console.log(book);
    const { data } = await axios.post(API, book);
    dispatch({
      type: ADD_BOOK,
    });
    dispatch(fetchBook());
  } catch (error) {
    console.error(error.message);
  }
};

export const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${API}/${id}`);
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

export const fetchBook = createAsyncThunk(
  FETCH_BOOKS,
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
      type: FETCH_BOOKS,
      payload: books,
    });
  }
);

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state };
    case REMOVE_BOOK:
      return { books: state.books.filter((book) => book.id !== action.id) };
    case FETCH_BOOKS:
      return { books: action.payload };
    default:
      return state;
  }
};
