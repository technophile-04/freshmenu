import { useEffect, useState } from 'react';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import { auth } from '../utils/init-firebase';

const useProvideAuth = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const register = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logInWithGoogle = () => {
		const provider = new GoogleAuthProvider();

		return signInWithPopup(auth, provider);
	};

	const logout = () => {
		return signOut(auth);
	};

	return {
		currentUser,
		login,
		register,
		logout,
		logInWithGoogle,
	};
};

export default useProvideAuth;
