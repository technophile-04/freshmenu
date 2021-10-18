import { useState } from 'react';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../utils/init-firebase';

const useProvideAuth = () => {
	const [currentUser, setCurrentUser] = useState(null);

	const register = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	return {
		currentUser,
		login,
		register,
	};
};

export default useProvideAuth;
