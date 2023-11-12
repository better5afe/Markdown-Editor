import { ButtonProps } from '../../@types/components/component-typs';

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	onClick,
	aria,
}) => {
	let btnClasses;

	switch (className) {
		case 'primary':
			btnClasses =
				'bg-primaryDark rounded-[.4rem] text-white hover:bg-primaryLight focus:bg-primaryLight';
			break;
		case 'nav':
			btnClasses = 'bg-darkGray300 hover:bg-primaryDark focus:bg-primaryDark';
			break;
		case 'icon':
			btnClasses = 'icon';
			break;
		default:
			btnClasses = '';
	}

	return (
		<button
			className={`flex items-center py-3 px-4 outline-none font-regular text-[1.5rem] transition-colors duration-300 ${btnClasses}`}
			onClick={onClick}
			aria-label={aria}
		>
			{children}
		</button>
	);
};

export default Button;
