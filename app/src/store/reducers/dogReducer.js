import { FETCH_DOG_START, FETCH_DOG_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  dog: '',
  error: '',
}

export const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_DOG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dog: action.payload
      }
    default:
      return state;
  }
}