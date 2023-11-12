import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';
import NavBtn from '../nav/NavBtn';
import HeaderBtns from './HeaderBtns';

const Header = () => {
	const navCtx = useContext(NavContext);

	return (
		<header
			className={`h-[5.6rem] w-full flex justify-between pe-[.8rem] bg-black100 md:h-[7.2rem] md:pe-[1.6rem] ${
				navCtx.isNavOpen ? 'translate-x-[250px]' : 'translate-x-0'
			}`}
		>
			<NavBtn />
			<HeaderBtns />
		</header>
	);
};

export default Header;
