type VoidFn = () => void;

export interface ChildrenProps {
	children: React.ReactNode;
}

interface ClassNameProps {
	className: string;
}

// context

export interface NavCtx {
	isNavOpen: boolean;
	toggleNav: VoidFn;
	closeNav: VoidFn;
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
