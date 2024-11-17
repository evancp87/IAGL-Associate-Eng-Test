import { FETCH_TODOS, ADD_TODO } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { data: action.payload };
    case ADD_TODO:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
