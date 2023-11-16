import { useState } from 'react';
import { AppCtx } from './app-ctx';
import {
	ChildrenProps,
	ChangeThemeFn,
} from '../@types/components/component-types';

export const AppCtxProvider: React.FC<ChildrenProps> = ({ children }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [theme, setTheme] = useState('');
	const [isPreviewVisible, setIsPreviewVisible] = useState(false);

	const toggleNavHandler = () => {
		setIsNavOpen((prevState) => {
			return !prevState;
		});
	};

	const closeNavHandler = () => {
		setIsNavOpen(false);
	};

	const openModalHandler = () => {
		setIsModalOpen(true);
	};

	const closeModalHandler = () => {
		setIsModalOpen(false);
	};

	const changeThemeHandler: ChangeThemeFn = (theme) => {
		setTheme(theme);
	};

	const toggleThemeHandler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	const togglePreviewHandler = () => {
		setIsPreviewVisible((prevState) => {
			return !prevState;
		});
	};

	return (
		<AppCtx.Provider
			value={{
				isNavOpen: isNavOpen,
				toggleNav: toggleNavHandler,
				closeNav: closeNavHandler,
				isModalOpen: isModalOpen,
				openModal: openModalHandler,
				closeModal: closeModalHandler,
				theme: theme,
				changeTheme: changeThemeHandler,
				toggleTheme: toggleThemeHandler,
				isPreviewVisible: isPreviewVisible,
				togglePreview: togglePreviewHandler,
			}}
		>
			{children}
		</AppCtx.Provider>
	);
};
