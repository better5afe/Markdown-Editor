interface ChildrenProps {
	children: React.ReactNode;
}

interface ClassNameProps {
	className: string;
}

export interface AriaAttr {
	aria: string;
}

// reusable components

export interface ButtonProps extends ChildrenProps, ClassNameProps, AriaAttr {
	onClick: () => void;
}
