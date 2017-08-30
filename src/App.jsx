import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import makeMultiInstanceStore from './multi-instance/make-multi-instance-store';
import counterStore from './counter-store';
import CounterSample from './CounterSample.jsx';

const multiCounterStore = makeMultiInstanceStore(counterStore);
const store = createStore(multiCounterStore.reducer);

const App = () => (
  <Provider store={store}>
    <CounterSample />
  </Provider>
);

export default App;
