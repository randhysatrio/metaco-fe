import { Link } from 'react-router-dom';

import { ReactComponent as MetacoLogo } from '../../assets/logo/metaco_logo.svg';
import { BsSearch } from 'react-icons/bs';
import Sidebar from './Sidebar';

export default function Header() {
  return (
    <div className="w-screen h-[75px] bg-metaco_header flex items-center justify-between px-3 md:px-8 lg:px-12 fixed top-0 z-[100]">
      <Link to="/">
        <div className="h-[30px] lg:h-[50px]">
          <MetacoLogo className="h-full object-contain" />
        </div>
      </Link>

      <Sidebar />

      <div className="hidden md:flex items-center font-bold gap-5 lg:gap-10">
        <Link to="/leaderboard">
          <span className="text-gray-400 hover:text-white cursor-pointer transition active:scale-95">Leaderboard</span>
        </Link>

        <Link to="/explorer">
          <span className="text-gray-400 hover:text-white cursor-pointer transition active:scale-95">Explorer</span>
        </Link>
        <BsSearch className="text-white cursor-pointer transition active:scale-95 text-lg" />
        <button className="py-2 md:px-5 lg:px-7 rounded-xl text-white font-bold bg-sky-600 hover:bg-sky-700 transition active:scale-95">
          Connect
        </button>
      </div>
    </div>
  );
}
