import { createRoot } from 'react-dom/client';
import { MaxUI } from '@maxhub/max-ui';
import '@maxhub/max-ui/dist/styles.css';
import App from './App.tsx';


const Root = () => (
    <MaxUI>
        <App />
    </MaxUI>
)

createRoot(document.getElementById('root')!).render(<Root />);
