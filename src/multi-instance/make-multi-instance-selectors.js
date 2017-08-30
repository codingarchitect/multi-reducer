import { createSelector } from 'reselect';

const isPropSelectorsValid = propSelectors => propSelectors && typeof propSelectors === 'object';

const makeMultiInstanceSelectors = (propSelectors, initialState) =>
((isPropSelectorsValid(propSelectors)) ? Object.keys(propSelectors)
    .reduce((newPropSelectors, propName) => ({
      ...newPropSelectors,
      [propName]: id => createSelector(state => state[id] || initialState, propSelectors[propName]),
    }), {}) : propSelectors);

export default makeMultiInstanceSelectors;
