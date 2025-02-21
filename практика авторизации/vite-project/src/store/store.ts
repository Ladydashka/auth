import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/Auth/authSlice';

import { useDispatch } from 'react-redux';

const store = configureStore({
	reducer: {
		auth: authSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
