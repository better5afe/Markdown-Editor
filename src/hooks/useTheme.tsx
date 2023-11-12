export const useTheme = () => {
	let currentTheme;

	const savedTheme = localStorage.getItem('theme');
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

	if (savedTheme === 'dark' || (!savedTheme && systemTheme)) {
		document.documentElement.classList.add('dark');
		currentTheme = 'dark';
	} else {
		currentTheme = 'light';
	}

	return currentTheme;
};
