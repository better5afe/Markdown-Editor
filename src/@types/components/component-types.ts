type VoidFn = () => void;

export interface ChildrenProps {
	children: React.ReactNode;
}

interface ClassNameProps {
	className: string;
}

export interface AriaAttr {
	aria: string;
}

// context

export interface NavCtx {
	isNavOpen: boolean;
	toggleNav: VoidFn;
	closeNav: VoidFn;
}

// reusable components

export interface ButtonProps extends ChildrenProps, ClassNameProps, AriaAttr {
	onClick: VoidFn;
}
