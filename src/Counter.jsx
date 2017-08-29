import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from './counter-store';

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

const mapStateToProps = state => ({ count: store.selectors.count(state) });

const mapDispatchToProps =
  dispatch => ({ actions: bindActionCreators(store.actionCreators, dispatch) });

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
