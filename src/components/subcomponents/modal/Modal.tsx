import ModalMsg from './ModalMsg';

const Modal = () => {
	return (
		<div className='fixed inset-0 flex justify-center items-center bg-blackShadow dark:bg-whiteShadow'>
			<ModalMsg />
		</div>
	);
};

export default Modal;
