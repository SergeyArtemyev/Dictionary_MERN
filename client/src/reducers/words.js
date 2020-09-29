import {
  ADD_WORD_SUCCESS,
  ADD_WORD_FAIL,
  LOAD_WORDS,
  DELETE_WORD,
  WORD_ERROR,
} from '../actions/types';

const initialState = {
  words: [],
  user: null,
  loading: true,
  // НЕ ОЧЕНЬ ПОНЯТНО ЗАЧЕМ ОН НУЖУЕ, ПРОЧЕКАТЬ ПОТОМ
  errors: {},
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
        loading: false,
      };
    case DELETE_WORD:
      return {
        ...state,
        words: state.words.filter((word) => word._id !== payload),
        loading: false,
      };
    case WORD_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    default:
      return state;
  }
}
