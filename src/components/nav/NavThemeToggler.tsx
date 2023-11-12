import { NavThemeTogglerProps } from '../../@types/components/component-types';
import IconDarkMode from '../../assets/icons/icon-components/IconDarkMode';
import IconLightMode from '../../assets/icons/icon-components/IconLightMode';

const NavThemeToggler: React.FC<NavThemeTogglerProps> = ({
	theme,
	changeTheme,
}) => {
	const changeThemeHandler = () => {
		theme === 'dark' ? changeTheme('light') : changeTheme('dark');
	};

	return (
		<div className='absolute bottom-[3rem] flex justify-between items-center w-[10.4rem] h-[2.4rem] mt-8'>
			<IconDarkMode className={theme === 'dark' ? 'icon-active' : ''} />
			<button
				className='relative w-[4.8rem] h-full bg-darkGray200 border-none outline-none rounded-[1.45rem] transition-colors duration-300 hover:bg-darkGray100 focus:bg-darkGray100'
				onClick={changeThemeHandler}
			>
				<span
					className={`absolute top-[.6rem] block w-[1.2rem] h-[1.2rem] bg-white rounded-full transition-transform duration-300 ${
						theme === 'dark' ? 'translate-x-[.6rem]' : 'translate-x-[3rem]'
					}`}
				/>
			</button>
			<IconLightMode className={theme === 'light' ? 'icon-active' : ''} />
		</div>
	);
};

export default NavThemeToggler;
