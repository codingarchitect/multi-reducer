const actions = {
  increment: 'increment',
  decrement: 'decrement',
};

const actionCreators = {
  increment: () => ({ type: actions.increment }),
  decrement: () => ({ type: actions.decrement }),
};

const initialState = 0;

const selectors = {
  count: state => state || initialState,
};

const counter = (state = initialState, action) => {
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
  initialState,
  reducer: counter,
};
