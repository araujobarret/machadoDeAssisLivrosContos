import { NavigationActions } from 'react-navigation';

import { HOME } from '../constants/Navigation';
import { Navigator } from '../navigation/Navigator';


const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams("Splash"));

const nav = (state = initialState, action) => {
  let newState;

  switch(action.routeName){
    default:
      newState = Navigator.router.getStateForAction(action, state);
    break;
  }
  return newState;
}

export default nav;
