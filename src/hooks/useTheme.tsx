export const useTheme = () => {
	const setTheme = () => {
		let currentTheme;

		const savedTheme = localStorage.getItem('theme');
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
			.matches;

		if (savedTheme === 'dark' || (!savedTheme && systemTheme)) {
			document.documentElement.classList.add('dark');
			currentTheme = 'dark';
			return currentTheme;
		}

		currentTheme = 'light';
		return currentTheme;
	};

	return setTheme;
};
