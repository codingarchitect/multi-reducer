/* eslint fp/no-rest-parameters: 0 */
const wrapActionCreator = (actionCreator, id) =>
  (...args) => ({ ...actionCreator(...args), id });

const wrapActionCreators = (actionCreators, id) => ((typeof actionCreators === 'function') ?
  wrapActionCreator(actionCreators, id) :
  Object.keys(actionCreators).reduce((wrappedActionCreators, key) => ({
    ...wrappedActionCreators,
    [key]: wrapActionCreator(actionCreators[key], id),
  }), {}));

export default wrapActionCreators;
