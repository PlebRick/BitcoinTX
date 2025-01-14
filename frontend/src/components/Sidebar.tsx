import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 fixed top-0 left-0 w-64 h-full flex flex-col py-6 px-4">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <span className="text-yellow-400 text-3xl font-bold">B</span>
        </div>
        <h1 className="text-2xl font-bold text-white">BitcoinTX</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg ${
              isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/wallets"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg ${
              isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`
          }
        >
          Wallets & Exchanges
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg ${
              isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`
          }
        >
          Transactions
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg ${
              isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`
          }
        >
          Reports
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg ${
              isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`
          }
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
