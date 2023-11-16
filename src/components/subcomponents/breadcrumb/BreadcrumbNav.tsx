import { BreadcrumbNavProps } from '../../../@types/components/component-types';
import Button from '../../reusable/Button';
import IconShowPreview from '../../../assets/icons/icon-components/IconShowPreview';
import IconHidePreview from '../../../assets/icons/icon-components/IconHidePreview';

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({
	preview,
	togglePreview,
}) => {
	const togglePreviewHandler = () => {
		togglePreview();
	};

	return (
		<aside className='flex items-center justify-between px-[1.6rem] bg-lightGray100 text-[1.4rem] font-[500] text-darkGray100 uppercase tracking-[.2rem] dark:bg-black200 dark:text-lightGray300 '>
			{!preview && (
				<div className='py-[1.3rem] md:border-r-[.1rem] md:basis-1/2 border-lightGray200 dark:border-darkGray200'>
					<p>Markdown</p>
				</div>
			)}
			<div
				className={`flex items-center py-[1.3rem] md:justify-between ${
					preview ? 'basis-full justify-between' : 'basis-1/2 justify-end'
				}`}
			>
				<p className={`md:block md:ps-[1.6rem] ${preview ? 'block' : 'hidden'}`}>Preview</p>
				<Button className='icon' onClick={togglePreviewHandler}>
					{preview ? <IconHidePreview /> : <IconShowPreview />}
				</Button>
			</div>
		</aside>
	);
};

export default BreadcrumbNav;
