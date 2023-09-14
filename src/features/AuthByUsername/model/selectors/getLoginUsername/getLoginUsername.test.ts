import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('expect login username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('username');
  });
  test('expect login username without username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
