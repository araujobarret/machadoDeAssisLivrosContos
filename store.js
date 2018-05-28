import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import root from '../reducers/root';
import { composeWithDevTools } from 'remote-redux-devtools';

// Connect our store to the reducers
export default function configureStore(initialState) {
  const store = createStore(root, initialState, composeWithDevTools(
    applyMiddleware(thunk)
  ));

  return store;
}
