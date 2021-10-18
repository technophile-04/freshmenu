import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/init-firebase';

const useProvideAuth = () => {
	const [currentUser, setCurrentUser] = useState(null);

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	return {
		currentUser,
		login,
	};
};

export default useProvideAuth;
