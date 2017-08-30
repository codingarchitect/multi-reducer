import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import makeMultiInstanceStore from './multi-instance/make-multi-instance-store';
import wrapActionCreators from './multi-instance/wrap-action-creators';

import counterStore from './counter-store';
import Counter from './Counter.jsx';

const multiCounterStore = makeMultiInstanceStore(counterStore, 'ui.widgets.counter');

const counterIds = {
  counter1: 'counter1',
  counter2: 'counter2',
};

const { increment: increment1, decrement: decrement1 } = wrapActionCreators(
  counterStore.actionCreators, counterIds.counter1);
const { increment: increment2, decrement: decrement2 } = wrapActionCreators(
  counterStore.actionCreators, counterIds.counter2);

const actionCreators = {
  increment1, increment2, decrement1, decrement2,
};

const style = {
  border: 'solid 2px blue',
  borderRadius: '10px',
  margin: '10px',
  display: 'inline-block',
  padding: '10px',
};

const CounterSample = ({ counter1, counter2, actions }) => (
  <div>
    <div style={style}>
      <div>Components:</div>
      <Counter id={counterIds.counter1} />
      <Counter id={counterIds.counter2} />
    </div>
    <div style={style}>
      <div>Access from outside the component using redux actions, selectors</div>
      <div>
        Counter1: {counter1} -&nbsp;
        <button onClick={actions.increment1}>Inc</button>
        <button onClick={actions.decrement1}>Dec</button>
      </div>
      <div>
        Counter2: {counter2} -&nbsp;
        <button onClick={actions.increment2}>Inc</button>
        <button onClick={actions.decrement2}>Dec</button>
      </div>
    </div>
  </div>
);

CounterSample.propTypes = {
  counter1: PropTypes.number.isRequired,
  counter2: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    increment1: PropTypes.func.isRequired,
    increment2: PropTypes.func.isRequired,
    decrement1: PropTypes.func.isRequired,
    decrement2: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  counter1: multiCounterStore.selectors.count(counterIds.counter1)(state),
  counter2: multiCounterStore.selectors.count(counterIds.counter2)(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterSample);
