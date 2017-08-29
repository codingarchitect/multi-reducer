import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterStore from './counter-store';
import Counter from './Counter.jsx';

const store = createStore(counterStore.reducer);

const App = () => (
  <div>
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>
);

export default App;
