import { useContext } from 'react';
import { AppCtx } from '../../context/app-ctx';
import NavBtn from '../nav/NavBtn';
import HeaderDetails from './HeaderDetails';
import HeaderBtns from './HeaderBtns';

const Header = () => {
	const appCtx = useContext(AppCtx);

	const deleteDocHandler = () => {
		appCtx.openModal();
	};

	return (
		<header
			className={`h-[5.6rem] w-full flex justify-between pe-[.8rem] bg-black100 md:h-[7.2rem] md:pe-[1.6rem] ${
				appCtx.isNavOpen ? 'translate-x-[250px]' : 'translate-x-0'
			}`}
		>
			<div className='flex items-center'>
				<NavBtn isNavOpen={appCtx.isNavOpen} onToggleNav={appCtx.toggleNav} />
				<HeaderDetails />
			</div>
			<HeaderBtns onDeleteDoc={deleteDocHandler} />
		</header>
	);
};

export default Header;
