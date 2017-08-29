import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import multiCounterStore from './multi-counter-store';
import Counter from './Counter.jsx';

const store = createStore(multiCounterStore.reducer);

const App = () => (
  <Provider store={store}>
    <div>
      <Counter id="counter1" />
      <Counter id="counter2" />
    </div>
  </Provider>
);

export default App;
