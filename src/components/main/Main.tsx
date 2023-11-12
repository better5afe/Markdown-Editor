import { useContext } from 'react';
import { AppCtx } from '../../context/app-ctx';

const Main = () => {
	const appCtx = useContext(AppCtx);

	const closeNavHandler = () => {
		appCtx.closeNav();
	};

	return (
		<main
			className={`w-full bg-white dark:bg-black300 ${
				appCtx.isNavOpen ? 'translate-x-[250px]' : 'translate-x-0'
			}`}
			onClick={closeNavHandler}
		></main>
	);
};

export default Main;
