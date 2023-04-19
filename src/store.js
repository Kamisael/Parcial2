// store/index.js

import { createStore } from 'redux';

const initialState = {
  posts: []
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(postReducer);

export default store;
    