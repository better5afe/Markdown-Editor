import { useEffect, useContext } from 'react';
import { useTheme } from './hooks/useTheme';
import { NavCtxProvider } from './context/NavCtxProvider';
import { ModalContext } from './context/modal-ctx';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Modal from './components/subcomponents/modal/Modal';

const App = () => {
	const modalCtx = useContext(ModalContext);

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
			{modalCtx.isModalOpen && <Modal />}
		</NavCtxProvider>
	);
};

export default App;
