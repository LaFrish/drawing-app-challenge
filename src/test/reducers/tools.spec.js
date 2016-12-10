import { expect } from 'chai'
import expect from 'expect';
import reducer, { defaultState as initialState } from '../../src/reducers';
import { CHANGE_SIZE, CHANGE_COLOR } from '../../src/actions';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState
    );
  });

  it('should handle CHANGE_COLOR', () => {
    expect(reducer(undefined, {
      type: CHANGE_COLOR,
      color: '#ef12af'
    })).toEqual({
      brushColor: '#ef12af',
      brushSize: 28
    });
  });

  it('should handle CHANGE_SIZE', () => {
    expect(reducer(undefined, {
      type: CHANGE_SIZE,
      size: 50
    })).toEqual({
      brushColor: '#ea337d',
      brushSize: 50
    });
  });
});
