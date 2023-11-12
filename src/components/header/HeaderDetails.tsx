import Logo from '../../assets/icons/logo.svg';
import HeaderList from './HeaderList';

const HeaderDetails = () => {
	return (
		<div className='flex items-center'>
			<h1 className='hidden xl:block xl:px-[2.4rem]'>
				<img src={Logo} alt='markdown' />
			</h1>
			<HeaderList />
		</div>
	);
};

export default HeaderDetails;
