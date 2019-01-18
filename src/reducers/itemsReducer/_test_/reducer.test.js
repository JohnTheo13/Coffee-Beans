import reducer, { initialState } from '../index';
import * as types from '../actionTypes';

describe('items reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ITEMS_FETCHED', () => {
    const list = [{a: 1},{b: 2},{c: [1,2,4]}],
    payload = {
      list, 
      activeList: list,
      countries: ['spain', 'canada', 'netherlands']
    };
    expect(
      reducer(initialState, {
        type: types.ITEMS_FETCHED,
        payload
      })
    ).toEqual({
        ...initialState,
        fetched: true,
        fetching: false,
        ...payload
    });
  });
})