import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/stateService';
import { BrowserRouter } from 'react-router-dom';

// document.getElementById - берёт HTML element с id root из DOM (Document Object Model).
// DOM это вся структура в HTML и JS объекте.
// DOM хранится в глобальной переменной под названием 'document'.

// ReactDOM это вспомогательный пакет React для взаимодействия с обычным DOM.
// createRoot создает главную директорию для запуска всего приложения.

const root = ReactDOM.createRoot(document.getElementById('root'));
// render - это функция отрисовки React компонентов.
// Отрисовка означает обработку компонента и переход из JSX или React элемента в чистый DOM.
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
