// Redux - это библиотека, которая помогает нам работать с состояниями компонентов
// Redux - это глобальное состояние приложения
// Redux взаимодействует только с теми компонентами, с которыми необходимо не затрагивая остальных в цепочке
// это помогает лучше контролировать отрисовку компонентов.
// Redux работает вне зависимости от структурного дерева проекта.
// Через Redux мы передает только состояния, не propreties.
// @reduxjs/toolkit - это главная библиотека redux.
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import moment from 'moment';

const pageSize = 12;
// Переменная тип объект - изначальное состояние.
const initialState = {
  errorMessage: null,
  totalResults: pageSize,
  searchParams: {
    q: 'crypto, bitcoin',
    from: moment().format('YYYY.MM.DDT00:00:00.000'),
    to: moment().format('YYYY.MM.DDT23:59:59.999'),
    language: 'en',
    searchIn: 'title,description,content',
    pageSize,
    page: 1,
  },
};
// createAction декларирует действие в redux
// это действие мы запускаем, когда хотим изменить состояние
export const setErrorMessage = createAction('setErrorMessage');
export const setPage = createAction('setPage');
export const setTotalResults = createAction('setTotalResults');
export const setSearchParams = createAction('setSearchParams');

// createReducer - это обработчик действия
// здесь мы говорим Redux, что мы хотим сделать этим действием
// в нашем случае и в основном - мы меняем состояние
// action.payload - тут находится новая переданная информация
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
// Здесь мы всё собираем в одно и создаем так называемое хранилише
export const store = configureStore({ reducer });

// Хранилище(store) мы передаем в компонент Provider от react-redux библиотеки и оборачиваем им весь проект.
