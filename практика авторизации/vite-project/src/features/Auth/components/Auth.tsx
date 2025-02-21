import React, { JSX, useState } from 'react';
import { User } from '../type';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import { register } from '../authSlice';

function Auth(): JSX.Element {
	const dispatch = useAppDispatch();
	const auth = useSelector((store: RootState) => store.auth);
	const [formData, setFormData] = useState<User>({
		name: '',
		email: '',
		password: '',
		role: 'user',
	});
	console.log(formData);

	function handleRoleChange(event) {
		setFormData({
			...formData,
			role: event.target.value,
		});
	}

	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(dispatch(register(formData)));
	}

	return (
		<div>
			<h1>Auth</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleInputChange}
				/>
				<input
					type='text'
					name='email'
					value={formData.email}
					onChange={handleInputChange}
				/>
				<input
					type='text'
					name='password'
					value={formData.password}
					onChange={handleInputChange}
				/>
				<select value={formData.role} onChange={handleRoleChange}>
					<option value='user'>Пользователь</option>
					<option value='guide'>Гид</option>
				</select>
				<button type='submit'>Отправить</button>
			</form>
		</div>
	);
}

export default Auth;
