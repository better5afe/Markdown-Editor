import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/header/Header';

const App = () => {
	const setTheme = useTheme();

	useEffect(() => {
		setTheme();
	}, []);

	return (
		<>
			<Header />
		</>
	);
};

export default App;
