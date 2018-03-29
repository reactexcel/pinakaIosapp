import { combineReducers } from 'redux';
import { AppNavigator } from '../navigators/AppNavigator';

import nav from './nav';
import user from './user';
import feed from './feed';
import saved from './saved';
import reservation from './reservation';

const AppReducer = combineReducers({
    nav,
    user,
    feed,
    saved,
    reservation
});

export default AppReducer;