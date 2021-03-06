import axios from 'axios';
import { ADD_WORD_SUCCESS, ADD_WORD_FAIL, LOAD_WORDS, DELETE_WORD, WORD_ERROR } from './types';

//Load all words
// load words
export const loadWords = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/words');
    dispatch({
      type: LOAD_WORDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADD_WORD_FAIL,
    });
  }
};

// Add word action
export const addWord = (eng, rus) => async (dispatch) => {
  const word = {
    eng,
    rus,
  };
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify(word);
    const res = await axios.post('/api/words', body, config);
    dispatch({
      type: ADD_WORD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    // ОШИБКА НЕ РАБОТАЕТ!!!!!!!!!!!!
    console.error(err);
  }
};

// Delete word
export const deleteWord = (wordId) => async (dispatch) => {
  try {
    await axios.delete(`/api/words/${wordId}`);

    dispatch({
      type: DELETE_WORD,
      payload: wordId,
    });
  } catch (err) {
    dispatch({
      type: WORD_ERROR,
      paylaod: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
