import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { NavCtxProvider } from './context/NavCtxProvider';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => {
	const setTheme = useTheme();

	useEffect(() => {
		setTheme();
	}, []);

	return (
		<NavCtxProvider>
			<div className='relative flex h-screen xxl:w-[2200px] xxl:mx-auto xxl:overflow-hidden xxl:shadow-light dark:xxl:shadow-dark'>
				<Nav />
				<div className='w-full overflow-hidden'>
					<Header />
					<Main />
				</div>
			</div>
		</NavCtxProvider>
	);
};

export default App;
