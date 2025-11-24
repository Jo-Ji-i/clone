import { Link } from 'react-router-dom';

export default function DesktopNav() {
  return (
    <nav className="justify-center hidden w-full gap-10 text-base font-medium md:flex md:gap-x-20 lg:gap-x-20 xl:gap-x-48 shrink-0 ">
      <Link to="/research">Research</Link>
      <Link to="/datalab">DataLab</Link>
      <Link to="/index">Indexes</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
