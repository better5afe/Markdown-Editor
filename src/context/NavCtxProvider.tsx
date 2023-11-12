import { useState } from 'react';
import { NavContext } from './nav-context';
import { ChildrenProps } from '../@types/components/component-types';

export const NavCtxProvider: React.FC<ChildrenProps> = ({ children }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNavHandler = () => {
		setIsNavOpen((prevState) => {
			return !prevState;
		});
	};

	const closeNavHandler = () => {
		setIsNavOpen(false);
	};

	return (
		<NavContext.Provider
			value={{
				isNavOpen: isNavOpen,
				toggleNav: toggleNavHandler,
				closeNav: closeNavHandler,
			}}
		>
			{children}
		</NavContext.Provider>
	);
};
