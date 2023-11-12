import DocumentCard from '../reusable/DocumentCard';

const NavList = () => {
	return (
		<ul className='h-[80%] overflow-y-scroll'>
			<DocumentCard cardType='nav' cardTitle='test' documentName='test' />
			<DocumentCard cardType='nav' cardTitle='test' documentName='test' />
			
		</ul>
	);
};

export default NavList;
