import { fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileActions } from './profileSlice';
import { ProfileSchema } from '../types/profileSchema';

const data: Profile = {
  firstname: 'Kirill',
  lastname: 'Palkin',
  age: '22',
  currency: Currency.EUR,
  country: Country.RUSSIA,
  city: 'Moscow',
  username: 'admin',
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('profileSlice', () => {
  test('setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false, data: undefined, form: data };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({ readonly: true, form: undefined });
  });

  test('updateProfileForm', () => {
    const state: DeepPartial<ProfileSchema> = { form: undefined };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfileForm({ firstname: 'edit' })))
      .toEqual({ form: { firstname: 'edit' } });
  });

  test('fetchProfileData service pending', () => {
    const state: DeepPartial<ProfileSchema> = { error: 'error', isLoading: false };

    expect(profileReducer(state as ProfileSchema, fetchProfileData.pending))
      .toEqual({ error: undefined, isLoading: true });
  });

  test('fetchProfileData service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: true, form: undefined, data: undefined };

    expect(profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(data, '1', '')))
      .toEqual({ data, form: data, isLoading: false });
  });
});
