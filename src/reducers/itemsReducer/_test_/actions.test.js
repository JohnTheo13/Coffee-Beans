import * as actions from '../actions/';
import * as types from '../actionTypes'

describe('actions', () => {
  it('should create an action that fetch failed', () => {
    const expectedAction = { type: types.FAILED_FETCH };
    expect(actions.failedFetch()).toEqual(expectedAction);
  });

  it('should a CLEAR action', () => {
    const type = 'COUNTRY';
    const expectedAction = { type: types.CLEAR_[type] };
    expect(actions.clear(type)).toEqual(expectedAction);
  });

  it('should create an active item change action', () => {
    const name = 'Batavia';
    const expectedAction = {
      type: types.ACTIVE_ITEM_UPDATED,
      payload: name
    };
    expect(actions.activeChanged(name)).toEqual(expectedAction);
  });
});

