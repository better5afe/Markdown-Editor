import { useContext } from 'react';
import { NavContext } from '../../context/nav-context';

const Main = () => {
	const navCtx = useContext(NavContext);

	const closeNavHandler = () => {
		navCtx.closeNav();
	};

	return (
		<main
			className={`w-full bg-white dark:bg-black300 ${
				navCtx.isNavOpen ? 'translate-x-[250px]' : 'translate-x-0'
			}`}
			onClick={closeNavHandler}
		></main>
	);
};

export default Main;
