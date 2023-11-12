import { useContext } from 'react';
import { ModalContext } from '../../../context/modal-ctx';
import ModalBackdrop from './ModalBackdrop';
import ModalMsg from './ModalMsg';

const Modal = () => {
	const modalCtx = useContext(ModalContext);

	return (
		<div className='fixed inset-0 flex justify-center items-center z-20'>
			<ModalBackdrop onCloseModal={modalCtx.closeModal} />
			<ModalMsg onCloseModal={modalCtx.closeModal} />
		</div>
	);
};

export default Modal;
