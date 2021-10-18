import React, { createContext } from 'react';
import { useProvideAuth } from '../hooks';

const initialState = {
	currentUser: null,
	login: () => Promise,
	register: () => Promise,
	logout: () => Promise,
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
	const value = useProvideAuth();

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
