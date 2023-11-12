import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalCtxProvider } from './context/ModalCtxProvider';

import './index.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<ModalCtxProvider>
		<App />
	</ModalCtxProvider>
);
