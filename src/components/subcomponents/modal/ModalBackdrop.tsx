import { useContext } from 'react';
import { ModalContext } from '../../../context/modal-ctx';

const ModalBackdrop = () => {
	const modalCtx = useContext(ModalContext);

	const closeModalHandler = () => {
		modalCtx.closeModal();
	};

	return (
		<div
			className='absolute inset-0 bg-blackShadow -z-10  dark:bg-whiteShadow'
			onClick={closeModalHandler}
		></div>
	);
};

export default ModalBackdrop;
