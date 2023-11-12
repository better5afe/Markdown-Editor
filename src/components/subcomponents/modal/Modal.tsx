import { useContext } from 'react';
import { AppCtx } from '../../../context/app-ctx';
import ModalBackdrop from './ModalBackdrop';
import ModalMsg from './ModalMsg';

const Modal = () => {
	const appCtx = useContext(AppCtx);

	return (
		<div className='fixed inset-0 flex justify-center items-center z-20'>
			<ModalBackdrop onCloseModal={appCtx.closeModal} />
			<ModalMsg onCloseModal={appCtx.closeModal} />
		</div>
	);
};

export default Modal;
