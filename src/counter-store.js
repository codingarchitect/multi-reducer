const actions = {
  increment: 'increment',
  decrement: 'decrement',
};

const actionCreators = {
  increment: () => ({ type: actions.increment }),
  decrement: () => ({ type: actions.decrement }),
};

const initialState = {
  counter: {
    count: 0,
  },
};

const selectors = {
  count: state => (state ? state.counter.count : initialState.counter.count),
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case actions.increment:
      return {
        counter: {
          count: state.counter.count + 1,
        },
      };
    case actions.decrement:
      return {
        counter: {
          count: state.counter.count - 1,
        },
      };
    default:
      break;
  }
  return state;
};

export default {
  actions,
  actionCreators,
  selectors,
  initialState,
  reducer: counter,
};
