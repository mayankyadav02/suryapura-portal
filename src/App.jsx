import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { GlobalProviders } from './context/GlobalProviders';

export default function App() {
  return (
    <GlobalProviders>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GlobalProviders>  
  );
}