import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { Errors } from '@/shared/const/errors';
import {
  LOCAL_STORAGE_THEME_KEY,
  USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
import { setFeatureFlags } from '@/shared/lib/features';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.id);
      localStorage.setItem(
        LOCAL_STORAGE_THEME_KEY,
        response.data.jsonSettings?.theme ?? Theme.LIGHT,
      );
      dispatch(userActions.setAuthData(response.data));
      setFeatureFlags(response.data.features);

      return response.data;
    } catch (e) {
      return rejectWithValue(Errors.NO_USER);
    }
  },
);
