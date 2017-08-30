import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import makeMultiInstanceStore from './multi-instance/make-multi-instance-store';
import counterStore from './counter-store';
import CounterSample from './CounterSample.jsx';

const multiCounterStore = makeMultiInstanceStore(counterStore, 'ui.widgets.counter');

const reducer = combineReducers({
  ui: combineReducers({
    widgets: combineReducers({
      counter: multiCounterStore.reducer,
    }),
  }),
});

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <CounterSample />
  </Provider>
);

export default App;
