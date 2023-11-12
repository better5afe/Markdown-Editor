import { useContext } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { ModalContext } from '../../context/modal-ctx';
import Button from '../reusable/Button';
import IconDelete from '../../assets/icons/icon-components/IconDelete';
import SaveIcon from '../../assets/icons/icon-save.svg';

const HeaderBtns = () => {
	const modalCtx = useContext(ModalContext);

	let isTablet = useMediaQuery('only screen and (min-width: 768px)');

	const deleteFileHandler = () => {
		modalCtx.openModal();
	};

	return (
		<div className='header__btns flex jutify-center items-center'>
			<Button className='icon' onClick={deleteFileHandler}>
				<IconDelete />
			</Button>
			<Button className='primary' onClick={() => console.log('Save Changes')}>
				<img src={SaveIcon} alt='' className='pointer-events-none' />
				{isTablet && (
					<span className='pointer-events-none ps-[0.7rem]'>Save Changes</span>
				)}
			</Button>
		</div>
	);
};

export default HeaderBtns;
