import Button from '../../reusable/Button';
import IconShowPreview from '../../../assets/icons/icon-components/IconShowPreview';
import IconHidePreview from '../../../assets/icons/icon-components/IconHidePreview';

const BreadcrumbNav = () => {
	const togglePreviewHandler = () => {
		console.log('toggle preview');
	};

	return (
		<section>
			<div>
				<p>Markdown</p>
			</div>
			<div>
				<p>Preview</p>
				<Button className='icon' onClick={togglePreviewHandler}>
					<IconShowPreview />
				</Button>
			</div>
		</section>
	);
};

export default BreadcrumbNav;
