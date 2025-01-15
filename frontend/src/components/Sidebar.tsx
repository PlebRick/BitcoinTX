import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#1d1d1d] text-white flex flex-col">
      {/* Branding Section */}
      <div className="p-6 flex items-center border-b border-gray-700">
        {/* Logo with Round Style */}
        <img
          src={logo}
          alt="BitcoinTX Logo"
          className="h-10 w-10 rounded-full mr-3"
        />
        <h1 className="text-2xl font-bold text-[#f9f9f9]">BitcoinTX</h1>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4 flex-1">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-6 py-3 rounded-md hover:bg-[#131313] ${
                  isActive ? "bg-[#131313] font-semibold" : ""
                } text-[#9a9a9a]`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wallets"
              className={({ isActive }) =>
                `block px-6 py-3 rounded-md hover:bg-[#131313] ${
                  isActive ? "bg-[#131313] font-semibold" : ""
                } text-[#9a9a9a]`
              }
            >
              Wallets & Exchanges
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `block px-6 py-3 rounded-md hover:bg-[#131313] ${
                  isActive ? "bg-[#131313] font-semibold" : ""
                } text-[#9a9a9a]`
              }
            >
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `block px-6 py-3 rounded-md hover:bg-[#131313] ${
                  isActive ? "bg-[#131313] font-semibold" : ""
                } text-[#9a9a9a]`
              }
            >
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `block px-6 py-3 rounded-md hover:bg-[#131313] ${
                  isActive ? "bg-[#131313] font-semibold" : ""
                } text-[#9a9a9a]`
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
