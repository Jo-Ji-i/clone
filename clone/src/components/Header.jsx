import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-32 border-b border-gray-300">
      <Link to="#">
        <img src={logo} alt="home" className="w-56 ml-10" />
      </Link>
      <nav className="flex justify-around text-lg font-semibold gap-28">
        <Link to="/insights">Insights</Link>
        <Link to="/trends">Quarterly Trends</Link>
        <Link to="/index">Index</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="ml-24 mr-16 text-lg font-semibold"> EN </div>
    </header>
  );
}
