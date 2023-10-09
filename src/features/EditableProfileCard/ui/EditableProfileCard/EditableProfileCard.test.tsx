import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { $api } from 'shared/api/api';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  firstname: 'admin',
  lastname: 'admin',
  age: '465',
  currency: Currency.USD,
  country: Country.RUSSIA,
  city: 'Moscow',
  username: 'admin213',
  avatar: 'https://i.pinimg.com/originals/b8/2a/fa/b82afac37b6d2405585c69ccf13ee921.jpg',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: profile.id },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  beforeEach(async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
  });

  test('Readonly will change', () => {
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('Clear input on cancel', async () => {
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('');

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'text');
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('text');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
  });

  test('Disable save button if there is at least one empty input', async () => {
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    expect(screen.getByTestId('EditableProfileCardHeader.SaveButton')).toHaveClass('disabled');
  });

  test('Put request should be called', async () => {
    const mockPutReq = jest.spyOn($api, 'put');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
