import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, } from 'react-redux';
import { createStore } from 'redux';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// 리덕스 개발자 도구 적용
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSTIOM__();

import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './pages/Root';
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
