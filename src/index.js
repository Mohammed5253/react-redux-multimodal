import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import custreducers from './_reducers/reducers'
import thunk from 'redux-thunk';

const composeEnhancers =  
  typeof window === 'object' &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose);


function configureStore() {  
    const middlewares = [];
    const store = createStore(
        custreducers,composeEnhancers(applyMiddleware(...middlewares,thunk)),
      // {},
      // composeEnhancers(applyMiddleware(...middlewares))
    );
    return store;
  }
const store = configureStore();
// const store = createStore(custreducers,applyMiddleware(thunk));


ReactDOM.render(
<Provider store={store}>
 <App/> 
 </Provider>, document.getElementById('root'));
registerServiceWorker();
