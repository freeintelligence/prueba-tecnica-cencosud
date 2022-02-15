import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import InvoicesLayout from './pages/invoices/Layout';
import InvoicesCreate from './pages/invoices/Create';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function App() {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/invoices"/>}/>

          {/* Invoices routes */}
          <Route path="/invoices" element={<InvoicesLayout/>}>
            <Route index element={<Navigate to="create"/>}/>
            <Route path="create" element={<InvoicesCreate/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
