import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Errors } from '@/shared/const/errors';

import { Profile } from '../../../../../entities/Profile/model/types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState());
      const response = await extra.api.put<Profile>(
        `/profile/${formData?.id}`,
        formData,
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(Errors.UPDATE_PROFILE);
    }
  },
);
