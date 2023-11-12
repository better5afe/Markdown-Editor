import { useState } from 'react';
import { ModalContext } from './modal-ctx';
import { ChildrenProps } from '../@types/components/component-types';

export const ModalCtxProvider: React.FC<ChildrenProps> = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModalHandler = () => {
		setIsModalOpen(true);
	};

	const closeModalHandler = () => {
		setIsModalOpen(false);
	};

	return (
		<ModalContext.Provider
			value={{
				isModalOpen: isModalOpen,
				openModal: openModalHandler,
				closeModal: closeModalHandler,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
