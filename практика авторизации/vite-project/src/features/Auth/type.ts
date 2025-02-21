export type User = {
	name: string;
	email: string;
	password: string;
	role: string;
};

export type UserAndId = User & { id: number };

export type StateAuth = {
	user: null | User;
	isAuthenticated: boolean;
	loading: boolean;
	error: string | null;
};
