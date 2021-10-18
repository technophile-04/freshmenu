import React, { createContext } from 'react';
import { useProvideAuth } from '../hooks';

const initialState = {
	currenUser: null,
};

export const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
	const auth = useProvideAuth();

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
