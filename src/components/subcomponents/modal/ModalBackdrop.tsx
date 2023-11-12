import { ModalProps } from '../../../@types/components/component-types';

const ModalBackdrop: React.FC<ModalProps> = ({ onCloseModal }) => {
	const closeModalHandler = () => {
		onCloseModal();
	};

	return (
		<div
			className='absolute inset-0 bg-blackShadow -z-10  dark:bg-whiteShadow'
			onClick={closeModalHandler}
		></div>
	);
};

export default ModalBackdrop;
