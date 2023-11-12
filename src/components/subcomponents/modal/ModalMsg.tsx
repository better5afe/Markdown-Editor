import Button from '../../reusable/Button';

const ModalMsg = () => {
	// document name to be changed dynamically

	return (
		<div className='modal w-[34.3rem] p-[2.4rem] bg-white rounded-[.4rem] font-preview dark:bg-black200'>
			<h3 className='text-[2rem] font-bold text-darkGray300 dark:text-white'>
				Delete this document?
			</h3>
			<p className='my-[1.6rem] text-[1.4rem] text-darkGray100 dark:text-lightGray300'>
				Are you sure you want to delete the 'welcome.md' document and its
				contents? This action cannot be reversed.
			</p>
			<Button
				className='primary'
				onClick={() => console.log('Document deleted')}
			>
				Confirm & Delete
			</Button>
		</div>
	);
};

export default ModalMsg;
