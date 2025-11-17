import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-4 mb-6 border-b">
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/insights">Insights</Link>
        <Link to="/trends">Quarterly Trends</Link>
        <Link to="/index">Index</Link>
        <Link to="/about">About</Link>
      </nav>
    </footer>
  );
}
