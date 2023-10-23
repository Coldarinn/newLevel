import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/features';

import { initAuthData } from '../services/initAuthData';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  isLoading: false,
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initAuthData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        initAuthData.fulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.authData = payload;
          setFeatureFlags(payload.features);
          state._inited = true;
          state.isLoading = false;
        },
      )
      .addCase(initAuthData.rejected, (state) => {
        state._inited = true;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
