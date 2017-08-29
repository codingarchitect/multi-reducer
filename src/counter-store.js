const actions = {
  increment: 'increment',
  decrement: 'decrement',
};

const actionCreators = {
  increment: () => ({ type: actions.increment }),
  decrement: () => ({ type: actions.decrement }),
};

const selectors = {
  count: (state, id) => state[id] || 0,
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case actions.increment:
      return state + 1;
    case actions.decrement:
      return state - 1;
    default:
      break;
  }
  return state;
};

export default {
  actions,
  actionCreators,
  selectors,
  reducer: counter,
};
