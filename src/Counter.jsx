import React from 'react';
import PropTypes from 'prop-types';
import store from './counter-store';
import multiConnect from './multi-reducer/multi-connect';

const Counter = ({ count, actions: { increment, decrement } }) => (<div>
  <button onClick={increment}>+</button>{ count }<button onClick={decrement}>-</button>
</div>);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }).isRequired,
};

const MultiCounterContainer = multiConnect(store.selectors, store.actionCreators)(Counter);

export default MultiCounterContainer;
