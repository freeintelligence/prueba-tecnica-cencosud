import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import InvoicesLayout from './pages/invoices/Layout';
import InvoicesCreate from './pages/invoices/Create';

function App() {
  return (
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
  );
}

export default App;
