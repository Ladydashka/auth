import { createSlice } from '@reduxjs/toolkit';
import { StateAuth } from './type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: StateAuth = {
	user: null,
	isAuthenticated: false,
	loading: false,
	error: null,
};

export const register = createAsyncThunk(
	'auth/register',
	async (
		userData: { name: string; email: string; password: string },
		{ rejectWithValue }
	) => {
		try {
			const response = await axios.post(
				' http://localhost:8000/api/auth/sign-up',
				userData
			);
			return response.data;
		} catch (error) {
			if (error.response && error.response.data) {
				return rejectWithValue(error.response.data.message);
			}
			return rejectWithValue('Регистрация не удалась');
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout(state) {
			state.user = null;
			state.isAuthenticated = false;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
				state.isAuthenticated = true;
			})
			.addCase(register.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
