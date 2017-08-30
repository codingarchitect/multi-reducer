import { bindActionCreators as originalBindActionCreator } from 'redux';

const wrapAction = (action, id) => ({ ...action, meta: { id } });
const wrapDispatch = (dispatch, id) => action => dispatch(wrapAction(action, id));
const bindActionCreators =
  (actionCreators, dispatch, id) => originalBindActionCreator(actionCreators,
    wrapDispatch(dispatch, id));

export default bindActionCreators;
