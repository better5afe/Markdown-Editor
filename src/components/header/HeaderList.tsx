import DocumentCard from '../reusable/DocumentCard';

const HeaderList = () => {
	return (
		<ul className='flex items-center list-none'>
			<DocumentCard cardType='header' cardTitle='test' documentName='test' />
			<DocumentCard cardType='header' cardTitle='test' documentName='test' />
			<DocumentCard cardType='header' cardTitle='test' documentName='test' />
		</ul>
	);
};

export default HeaderList;
