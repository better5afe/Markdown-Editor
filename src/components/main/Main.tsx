import { useContext } from 'react';
import { AppCtx } from '../../context/app-ctx';
import BreadcrumbNav from '../subcomponents/breadcrumb/BreadcrumbNav';
import Markdown from '../subcomponents/markdown/Markdown';
import Preview from '../subcomponents/preview/Preview';

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
		>
			<BreadcrumbNav
				preview={appCtx.isPreviewVisible}
				togglePreview={appCtx.togglePreview}
			/>
			<div className='flex h-full'>
				<Markdown preview={appCtx.isPreviewVisible} />
				<Preview preview={appCtx.isPreviewVisible} />
			</div>
		</main>
	);
};

export default Main;
