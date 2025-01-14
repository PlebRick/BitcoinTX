import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const titles: { [key: string]: string } = {
    '/': 'Dashboard',
    '/wallets': 'Wallets & Exchanges',
    '/transactions': 'Transactions',
    '/reports': 'Reports',
    '/settings': 'Settings',
  };

  return (
    <header className="bg-gray-850 fixed top-0 left-64 w-[calc(100%-16rem)] h-16 flex items-center px-6 border-b border-gray-700">
      <h2 className="text-xl font-semibold text-white">{titles[location.pathname] || 'Page'}</h2>
    </header>
  );
};

export default Header;
