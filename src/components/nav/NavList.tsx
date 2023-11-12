import DocumentCard from '../reusable/DocumentCard';

const NavList = () => {
	return (
		<ul className='h-[35vh] overflow-y-scroll md:h-[60vh]'>
			<DocumentCard cardType='nav' cardTitle='test' documentName='test' />
			<DocumentCard cardType='nav' cardTitle='test' documentName='test' />
			
		</ul>
	);
};

export default NavList;
