import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('expect login loading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
  test('expect login loading without loading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
