import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { data: { firstname: 'Kirill', lastname: 'Palkin' } },
    };
    expect(getProfileData(state as StateSchema)).toEqual({
      firstname: 'Kirill',
      lastname: 'Palkin',
    });
  });
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
