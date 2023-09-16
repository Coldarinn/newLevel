import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { form: { firstname: 'Kirill', lastname: 'Palkin' } },
    };
    expect(getProfileForm(state as StateSchema)).toEqual({ firstname: 'Kirill', lastname: 'Palkin' });
  });
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
