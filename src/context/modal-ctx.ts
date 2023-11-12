import React from 'react';
import { ModalCtx } from '../@types/components/component-types';

export const ModalContext = React.createContext<ModalCtx>({
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
});
