/* eslint-disable */

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = [
  {
    author: 'Jacque Ruso',
    title: 'Petar Pan',
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
