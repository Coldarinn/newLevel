import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { error: 'error' },
    };
    expect(getProfileError(state as StateSchema)).toEqual('error');
  });
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
