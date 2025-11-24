import { Link } from 'react-router-dom';
import logo from '../../assets/etc/logo.svg';

export default function Logo() {
  return (
    <Link to="#">
      <img src={logo} alt="home" className="w-40 md:w-48" />
    </Link>
  );
}
