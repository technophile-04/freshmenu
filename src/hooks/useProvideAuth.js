import { useState } from 'react';

const useProvideAuth = () => {
	const [currentUser, setCurrentUser] = useState(null);

	return {
		currentUser,
	};
};

export default useProvideAuth;
