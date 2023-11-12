import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';

const Nav = () => {
	const navCtx = useContext(NavContext);

	return (
		<nav
			className={`absolute top-0 left-0 h-full w-[25rem] bg-black200 font-regular ${
				navCtx.isNavOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		></nav>
	);
};

export default Nav;
