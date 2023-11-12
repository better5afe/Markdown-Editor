import { ButtonProps } from '../../@types/components/component-types';

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
	let btnClasses;

	switch (className) {
		case 'primary':
			btnClasses =
				'py-3 px-4  bg-primaryDark rounded-[.4rem] text-white hover:bg-primaryLight focus:bg-primaryLight';
			break;
		case 'nav':
			btnClasses =
				'h-[5.6rem] w-[5.6rem] py-3 px-4  bg-darkGray300 hover:bg-primaryDark focus:bg-primaryDark md:h-[7.2rem] md:w-[7.2rem]';
			break;
		case 'icon':
			btnClasses = 'icon';
			break;
		default:
			btnClasses = '';
	}

	return (
		<button
			className={`flex items-center justify-center outline-none font-regular text-[1.5rem] transition-colors duration-300 ${btnClasses}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
