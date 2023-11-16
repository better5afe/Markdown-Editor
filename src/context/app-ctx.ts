import React from 'react';
import { AppCtxObj } from '../@types/components/component-types';

export const AppCtx = React.createContext<AppCtxObj>({
	isNavOpen: false,
	toggleNav: () => {},
	closeNav: () => {},
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
	theme: '',
	changeTheme: (theme) => {},
	toggleTheme: () => {},
	isPreviewVisible: false,
	togglePreview: () => {},
});
