import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './src/reducers';
import Todo from './src/components/Todo';

const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;
