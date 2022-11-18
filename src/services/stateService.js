import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  errorMessage: null,
};

export const setErrorMessage = createAction('setErrorMessage');

const reducer = createReducer(initialState, {
  [setErrorMessage]: (state, action) => {
    state.errorMessage = action.payload;
  },
});

export const store = configureStore({ reducer });
