import { ADD_WORD_SUCCESS, ADD_WORD_FAIL, LOAD_WORDS } from '../actions/types';

const initialState = {
  words: [],
  user: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_WORDS:
      return {
        ...state,
        words: payload.words,
        user: payload._id,
        loading: false,
      };
    case ADD_WORD_SUCCESS:
      return {
        ...state,
        words: [payload, ...state.words],
        loading: false,
      };
    case ADD_WORD_FAIL:
      return {
        ...state,
        words: [],
        loading: true,
      };
    default:
      return state;
  }
}
