import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import moment from 'moment';

const pageSize = 12;

const initialState = {
  errorMessage: null,
  totalResults: pageSize,
  searchParams: {
    q: 'Crypto',
    from: moment().format('YYYY.MM.DDT00:00:00.000'),
    to: moment().format('YYYY.MM.DDT23:59:59.999'),
    language: 'en',
    searchIn: 'title,description,content',
    pageSize,
    page: 1,
  },
};

export const setErrorMessage = createAction('setErrorMessage');
export const setPage = createAction('setPage');
export const setTotalResults = createAction('setTotalResults');
export const setSearchParams = createAction('setSearchParams');

const reducer = createReducer(initialState, {
  [setErrorMessage]: (state, action) => {
    state.errorMessage = action.payload;
  },
  [setPage]: (state, action) => {
    state.searchParams.page = action.payload;
  },
  [setTotalResults]: (state, action) => {
    state.totalResults = action.playload;
  },
  [setSearchParams]: (state, action) => {
    state.searchParams = action.payload;
  },
});

export const store = configureStore({ reducer });
