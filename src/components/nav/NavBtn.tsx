import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';
import Button from '../reusable/Button';
import IconClose from '../../assets/icons/icon-close.svg';
import IconMenu from '../../assets/icons/icon-menu.svg';

const NavBtn = () => {
    const navCtx = useContext(NavContext);
    
	const toggleNavHandler = () => {
		navCtx.toggleNav();
	};

	let btnIcon = navCtx.isNavOpen ? IconClose : IconMenu;

	return (
		<Button className='nav' onClick={toggleNavHandler}>
			<img src={btnIcon} alt=''/>
		</Button>
	);
};

export default NavBtn;
