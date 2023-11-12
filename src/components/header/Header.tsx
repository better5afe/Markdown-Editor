import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';
import NavBtn from '../nav/NavBtn';
import HeaderDetails from './HeaderDetails';
import HeaderBtns from './HeaderBtns';

const Header = () => {
	const navCtx = useContext(NavContext);

	return (
		<header
			className={`h-[5.6rem] w-full flex justify-between pe-[.8rem] bg-black100 md:h-[7.2rem] md:pe-[1.6rem] ${
				navCtx.isNavOpen ? 'translate-x-[250px]' : 'translate-x-0'
			}`}
		>
			<div className='flex items-center'>
				<NavBtn isNavOpen={navCtx.isNavOpen} onToggleNav={navCtx.toggleNav} />
				<HeaderDetails />
			</div>
			<HeaderBtns />
		</header>
	);
};

export default Header;
