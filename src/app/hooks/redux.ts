import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider';

type AppStore = ReturnType<typeof createReduxStore>
type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>

export const useAppDispatch = (): TypedDispatch<ToolkitStore<StateSchema, AnyAction>> => (
   useDispatch<TypedDispatch<AppStore>>()
);
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
