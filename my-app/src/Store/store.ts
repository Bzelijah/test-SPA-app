import initState from './initState';
import { postReducer } from './Reducers/PostsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

const store = createStore(postReducer, initState, composeWithDevTools());

export default store;
