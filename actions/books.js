import { SET_BOOK, GET_BOOKS } from '../constants/Actions';

export const setBook = (book) => ({
  type: SET_BOOK,
  book
});

export const getBooks = (books) => ({
  type: GET_BOOKS,
  books
});
