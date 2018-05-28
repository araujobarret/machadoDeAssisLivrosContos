import { combineReducers } from 'redux';

import files from './files';

const root = combineReducers({
  files,
});

export default root;
