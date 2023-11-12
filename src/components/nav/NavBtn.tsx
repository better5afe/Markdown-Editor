import { NavBtnProps } from '../../@types/components/component-types';
import Button from '../reusable/Button';
import IconClose from '../../assets/icons/icon-close.svg';
import IconMenu from '../../assets/icons/icon-menu.svg';

const NavBtn: React.FC<NavBtnProps> = ({ isNavOpen, onToggleNav }) => {
	let btnIcon = isNavOpen ? IconClose : IconMenu;

	return (
		<Button className='nav' onClick={onToggleNav}>
			<img src={btnIcon} alt='' />
		</Button>
	);
};

export default NavBtn;
