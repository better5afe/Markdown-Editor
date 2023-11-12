import { useEffect, useContext } from 'react';
import { useTheme } from './hooks/useTheme';
import { AppCtx } from './context/app-ctx';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Modal from './components/subcomponents/modal/Modal';

const App = () => {
	const appCtx = useContext(AppCtx);

	const currentTheme = useTheme();

	useEffect(() => {
		appCtx.changeTheme(currentTheme);
	}, []);

	return (
		<>
			<div className='relative flex h-screen xxl:w-[2200px] xxl:mx-auto xxl:overflow-hidden xxl:shadow-light dark:xxl:shadow-dark'>
				<Nav />
				<div className='w-full overflow-hidden'>
					<Header />
					<Main />
				</div>
			</div>
			{appCtx.isModalOpen && <Modal />}
		</>
	);
};

export default App;
