import makeMultiInstanceSelectors from './make-multi-instance-selectors';

const makeMultiInstanceStore = (store) => {
  const {
    actions,
    actionCreators,
    reducer,
    selectors,
    initialState,
  } = store;

  const isValidAction = action => (!!((action && Object.keys(actions).includes(action.type))));
  const multiInstanceReducer = (state = {}, action) => (isValidAction(action) ? {
    ...state,
    [action.meta.id]: reducer(state[action.meta.id], action),
  } : state);

  return {
    actions,
    actionCreators,
    reducer: multiInstanceReducer,
    selectors: makeMultiInstanceSelectors(selectors, initialState),
    initialState,
  };
};

export default makeMultiInstanceStore;
