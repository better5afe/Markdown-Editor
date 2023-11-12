import { useContext } from 'react';
import { AppCtx } from '../../context/app-ctx';
import Logo from '../../assets/icons/logo.svg';
import Button from '../reusable/Button';
import NavList from './NavList';
import NavThemeToggler from './NavThemeToggler';

const Nav = () => {
	const appCtx = useContext(AppCtx);

	const createDocHandler = () => {
		appCtx.closeNav();
	};

	return (
		<nav
			className={`absolute top-0 left-0 h-full w-[25rem] p-[2.7rem] bg-black200 font-regular ${
				appCtx.isNavOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			<h1 className='mb-[2.7rem] xl:hidden'>
				<img src={Logo} alt='markdown' />
			</h1>
			<h2 className='text-[1.4rem] font-[500] uppercase tracking-[.2rem] text-darkGray100'>
				My documents
			</h2>
			<Button className='primary' onClick={createDocHandler}>
				+ New Document
			</Button>
			<NavList />
			<NavThemeToggler />
		</nav>
	);
};

export default Nav;
