import mailReducer, {
  openSendMessage,
  closeSendMessage,
} from './mailSlice';

describe('mail reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(mailReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = mailReducer(initialState, openSendMessage());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual =mailReducer(initialState, closeSendMessage());
    expect(actual.value).toEqual(2);
  });
});
