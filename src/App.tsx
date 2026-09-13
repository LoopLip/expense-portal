// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';

import AppLayout from './components/Layout';

import Dashboard from './pages/Dashboard'; 
import CreateReport from './pages/CreateReport';
import ReportDetails from './pages/ReportDetails';

function App() {
  return (
    <ConfigProvider locale={ruRU}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            
            <Route index element={<Dashboard />} />
            
            <Route path="create" element={<CreateReport />} />
            
            <Route path="report/:id" element={<ReportDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;