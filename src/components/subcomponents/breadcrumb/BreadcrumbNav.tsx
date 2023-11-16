import Button from '../../reusable/Button';
import IconShowPreview from '../../../assets/icons/icon-components/IconShowPreview';
import IconHidePreview from '../../../assets/icons/icon-components/IconHidePreview';

const BreadcrumbNav = () => {
	const togglePreviewHandler = () => {
		console.log('toggle preview');
	};

	return (
		<aside className='flex items-center justify-between px-[1.6rem] bg-lightGray100 text-[1.4rem] text-darkGray100 uppercase tracking-[.2rem] dark:bg-black200 dark:text-lightGray300'>
			<div className='py-[1.3rem]'>
				<p>Markdown</p>
			</div>
			<div className='flex items-center justify-between md:basis-1/2 py-[1.3rem] md:ps-[1.6rem] md:border-l-[.1rem] border-lightGray200 dark:border-darkGray200'>
				<p>Preview</p>
				<Button className='icon' onClick={togglePreviewHandler}>
					<IconShowPreview />
				</Button>
			</div>
		</aside>
	);
};

export default BreadcrumbNav;
