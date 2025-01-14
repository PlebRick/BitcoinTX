import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/wallets":
        return "Wallets & Exchanges";
      case "/transactions":
        return "Transactions";
      case "/reports":
        return "Reports";
      case "/settings":
        return "Settings";
      default:
        return "";
    }
  };

  return (
    <header className="bg-[#0a0a0a] text-[#9a9a9a] p-6 shadow border-b border-gray-700">
      <h1 className="text-lg font-medium">{getPageTitle()}</h1>
    </header>
  );
};

export default Header;
