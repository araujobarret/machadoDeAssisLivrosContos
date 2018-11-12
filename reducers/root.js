import { combineReducers } from 'redux';

import books from './books';

const root = combineReducers({
  books,
});

export default root;
