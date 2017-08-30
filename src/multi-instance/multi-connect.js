import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import bindActionCreators from './bind-action-creators';

const isPropSelectorsValid = propSelectors => propSelectors && typeof propSelectors === 'object';
const makeMapStateToProps = propSelectors => (state, { id }) =>
  ((isPropSelectorsValid(propSelectors)) ? Object.keys(propSelectors)
      .reduce((newPropSelectors, propName) => ({
        ...newPropSelectors,
        [propName]: createSelector(s => s[id], propSelectors[propName])(state),
      }), {}) : propSelectors);

const isActionCreatorsValid = actionCreators => actionCreators && typeof actionCreators === 'object';
const makeBindActionCreators = actionCreators => (dispatch, { id }) =>
  (isActionCreatorsValid(actionCreators) ?
    ({ actions: bindActionCreators(actionCreators, dispatch, id) }) :
    actionCreators);

const multiConnect = (propSelectors, actionCreators) => componentToConnect =>
  connect(
    makeMapStateToProps(propSelectors),
    makeBindActionCreators(actionCreators))(componentToConnect);

export default multiConnect;
