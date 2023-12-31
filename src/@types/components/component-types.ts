type VoidFn = () => void;

export interface ChildrenProps {
	children: React.ReactNode;
}

export interface ClassNameProps {
	className: string;
}

// context

export type ChangeThemeFn = (theme: string) => void;

export interface AppCtxObj {
	isNavOpen: boolean;
	toggleNav: VoidFn;
	closeNav: VoidFn;
	isModalOpen: boolean;
	openModal: VoidFn;
	closeModal: VoidFn;
	theme: string;
	changeTheme: ChangeThemeFn;
	toggleTheme: VoidFn;
	isPreviewVisible: boolean;
	togglePreview: VoidFn;
}

// reusable components

export interface ButtonProps extends ChildrenProps, ClassNameProps {
	onClick: VoidFn;
}

export interface DocumentCardProps {
	cardType: string;
	cardTitle: string;
	documentName: string;
}

// header

export interface HeaderBtnsProps {
	onDeleteDoc: VoidFn;
}

// navigation

export interface NavBtnProps {
	isNavOpen: boolean;
	onToggleNav: VoidFn;
}

export interface NavThemeTogglerProps {
	theme: string;
	toggleTheme: VoidFn;
}

// modal

export interface ModalProps {
	onCloseModal: VoidFn;
}

export interface BreadcrumbNavProps {
	preview: boolean;
	togglePreview: VoidFn;
}

export interface SectionProps {
	preview: boolean;
}
