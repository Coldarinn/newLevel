import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';

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

describe('updateProfileData', () => {
  test('success update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(result.payload).toEqual('Не удалось обновить данные');
  });
});
