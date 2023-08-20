import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import myReducers from './components/redux/reducers/combineReducers';
import thunk from 'redux-thunk';

// const applyMiddleware = redux.applyMiddleware;
const store = createStore(myReducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>
);
