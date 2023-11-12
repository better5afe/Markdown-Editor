import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';

const App = () => {
	const setTheme = useTheme();

	useEffect(() => {
		setTheme();
	}, []);

	return <></>;
};

export default App;
