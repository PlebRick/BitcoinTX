import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './index.css';

const App = () => {
  return (
    <Router>
      {/* Root container */}
      <div className="flex h-screen bg-gray-800 text-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex flex-col flex-1 ml-64">
          {/* Header */}
          <Header />

          {/* Main content */}
          <main className="p-6 flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<div>Dashboard Content</div>} />
              <Route path="/wallets" element={<div>Wallets & Exchanges Content</div>} />
              <Route path="/transactions" element={<div>Transactions Content</div>} />
              <Route path="/reports" element={<div>Reports Content</div>} />
              <Route path="/settings" element={<div>Settings Content</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
