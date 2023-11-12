import ReactDOM from 'react-dom/client';
import App from './App';
import { AppCtxProvider } from './context/AppCtxProvider';

import './index.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<AppCtxProvider>
		<App />
	</AppCtxProvider>
);
