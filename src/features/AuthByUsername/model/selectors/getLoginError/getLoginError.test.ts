import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('expect login error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'Error message',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('Error message');
  });
  test('expect login error without error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
