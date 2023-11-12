import { useMediaQuery } from '@uidotdev/usehooks';
import Button from '../reusable/Button';
import IconDelete from '../../assets/icons/icon-components/IconDelete';
import SaveIcon from '../../assets/icons/icon-save.svg';

const HeaderBtns = () => {
	let isTablet = useMediaQuery('only screen and (min-width: 768px)');

	return (
		<div className='header__btns flex jutify-center items-center'>
			<Button
				className='icon'
				onClick={() => console.log('Delete file')}
				aria='Delete file'
			>
				<IconDelete />
			</Button>
			<Button
				className='primary'
				onClick={() => console.log('Save Changes')}
				aria='Save changes'
			>
				<img
					src={SaveIcon}
					alt=''
					aria-hidden={true}
					className='pointer-events-none'
				/>
				{isTablet && (
					<span aria-hidden={true} className='pointer-events-none ps-[0.7rem]'>
						Save Changes
					</span>
				)}
			</Button>
		</div>
	);
};

export default HeaderBtns;