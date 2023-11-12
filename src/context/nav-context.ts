import React from 'react';
import { NavCtx } from '../@types/components/component-types';

export const NavContext = React.createContext<NavCtx>({
	isNavOpen: false,
	toggleNav: () => {},
	closeNav: () => {},
});
