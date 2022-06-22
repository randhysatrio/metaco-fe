import { Link } from 'react-router-dom';

import { ReactComponent as MetacoLogo } from '../../assets/logo/metaco_logo.svg';
import { BsSearch } from 'react-icons/bs';

export default function Header() {
  return (
    <div className="w-full h-[75px] bg-metaco_header flex items-center justify-between lg:px-12 fixed top-0 z-[9999]">
      <Link to="/">
        <div className="h-[50px]">
          <MetacoLogo className="h-full object-contain" />
        </div>
      </Link>

      <div className="flex items-center font-bold gap-10">
        <Link to="/leaderboard">
          <span className="text-gray-400 hover:text-white cursor-pointer transition active:scale-95">Leaderboard</span>
        </Link>

        <span className="text-gray-400 hover:text-white cursor-pointer transition active:scale-95">Explorer</span>
        <BsSearch className="text-white cursor-pointer transition active:scale-95 text-lg" />
        <button className="py-2 px-7 rounded-xl text-white font-bold bg-sky-600 hover:bg-sky-700 transition active:scale-95">
          Connect
        </button>
      </div>
    </div>
  );
}
