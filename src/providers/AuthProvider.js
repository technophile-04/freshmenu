import React, { createContext } from 'react';
import { useProvideAuth } from '../hooks';

const initialState = {
	currenUser: null,
	login: () => Promise,
	register: () => Promise,
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
	const value = useProvideAuth();

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
