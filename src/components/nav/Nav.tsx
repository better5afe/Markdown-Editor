import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';
import Logo from '../../assets/icons/logo.svg';
import Button from '../reusable/Button';
import NavList from './NavList';
import NavThemeToggler from './NavThemeToggler';

const Nav = () => {
	const navCtx = useContext(NavContext);

	const createDocHandler = () => {
		navCtx.closeNav();
	};

	return (
		<nav
			className={`absolute top-0 left-0 h-full w-[25rem] p-[2.7rem] bg-black200 font-regular ${
				navCtx.isNavOpen ? 'translate-x-0' : '-translate-x-full'
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
