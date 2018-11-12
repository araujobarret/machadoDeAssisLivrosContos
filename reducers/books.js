import { SET_BOOK, GET_BOOKS } from '../constants/Actions';

const initialState = {
  books: null,
  search: '',
};

const books = (state = initialState, action) => {
  switch(action.type){
    case GET_BOOKS:
      return Object.assign({}, state, { books: action.books.books });
    case SET_BOOK:
      return Object.assign({}, state, { book: action.book });
    default:
      return state;
    break;
  }
}

export default books;
