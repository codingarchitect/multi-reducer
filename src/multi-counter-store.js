import counterStore from './counter-store';

const {
  actions,
  actionCreators,
  reducer,
  selectors: counterSelectors,
  initialState,
} = counterStore;

const selectors = {
  count: (state, id) => counterSelectors.count(state[id]) || initialState,
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
  actionCreators,
  selectors,
  reducer: app,
};
