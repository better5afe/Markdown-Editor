import ModalBackdrop from './ModalBackdrop';
import ModalMsg from './ModalMsg';

const Modal = () => {
	return (
		<div className='fixed inset-0 flex justify-center items-center z-20'>
			<ModalBackdrop />
			<ModalMsg />
		</div>
	);
};

export default Modal;
