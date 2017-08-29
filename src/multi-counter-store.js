import counterStore from './counter-store';

const { actions, reducer } = counterStore;

const selectors = {
  count: (state, id) => state[id] || 0,
};

const app = (state = {}, action) => {
  switch (action.type) {
    case actions.increment:
    case actions.decrement:
      return {
        ...state,
        [action.meta.id]: reducer(state[action.meta.id], action),
      };
    default:
      break;
  }
  return state;
};

export default {
  actions,
  selectors,
  reducer: app,
};
