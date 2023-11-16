import { useContext } from 'react';
import { AppCtx } from '../../context/app-ctx';
import BreadcrumbNav from '../subcomponents/breadcrumb/BreadcrumbNav';

const Main = () => {
	const appCtx = useContext(AppCtx);

	const closeNavHandler = () => {
		appCtx.closeNav();
	};

	return (
		<main
			className={`w-full bg-white dark:bg-black300 transition-colors duration-300 ${
				appCtx.isNavOpen ? 'translate-x-[250px]' : 'translate-x-0'
			}`}
			onClick={closeNavHandler}
		>
			<BreadcrumbNav />
		</main>
	);
};

export default Main;
