import { useEffect, useContext } from 'react';
import { AppCtx } from './context/app-ctx';
import { checkMode } from './utils/theme-handler';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Modal from './components/subcomponents/modal/Modal';

const App = () => {
	const appCtx = useContext(AppCtx);

	useEffect(() => {
		const currentTheme = checkMode();

		if (currentTheme === 'light') {
			appCtx.changeTheme('light');
		} else {
			appCtx.changeTheme('dark');
		}
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
