import { useState } from 'react';
import Button from '../reusable/Button';
import IconClose from '../../assets/icons/icon-close.svg';
import IconMenu from '../../assets/icons/icon-menu.svg';

const NavBtn = () => {
	// global state replacement:
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavHandler = () => {
		return setIsOpen((prevState) => {
			return !prevState;
		});
	};

	let btnIcon = isOpen ? IconClose : IconMenu;

	return (
		<Button className='nav' onClick={toggleNavHandler} aria='Navigation'>
			<img src={btnIcon} alt='' aria-hidden='true' />
		</Button>
	);
};

export default NavBtn;
