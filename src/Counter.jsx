import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bindActionCreators from './multi-reducer/bind-action-creators';
import store from './multi-counter-store';

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

const mapStateToProps = (state, { id }) => ({ count: store.selectors.count(state, id) });

const mapDispatchToProps =
  (dispatch, { id }) => ({ actions: bindActionCreators(store.actionCreators, dispatch, id) });

const MultiCounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default MultiCounterContainer;
