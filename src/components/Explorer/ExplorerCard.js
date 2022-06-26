import { Link } from 'react-router-dom';

import { ReactComponent as DiamondIcon } from '../../assets/images/icons/metaco_diamond.svg';

export default function ExplorerCard({ type, data }) {
  return (
    <>
      {type === 'teams' ? (
        <div className="w-full h-[240px] rounded-2xl bg-metaco_gray ring-[2px] ring-inset ring-metaco_gray_border flex flex-col">
          <div className="w-full h-2/5 flex items-center justify-center">
            <div className="h-14 w-14 flex items-center justify-center rounded-full overflow-hidden">
              {data.logo ? (
                <img src={data.logo} alt="logo" className="h-full object-cover" />
              ) : (
                <DiamondIcon className="h-full object-cover" />
              )}
            </div>
          </div>
          <div className="w-full h-3/5 flex flex-col items-center justify-between px-5 pb-5">
            <span className="font-bold text-xl text-white truncate max-w-full">{data.name}</span>
            <span className="font-bold text-emerald-300">{data.totalPoints} Points</span>
            <Link to={`/team/${data.id}`}>
              <button className="w-32 lg:w-36 h-10 rounded-lg bg-gradient-to-r from-sky-500 to-blue-400 font-bold text-sm text-white focus:outline-none active:scale-95 transition hover:brightness-110">
                SEE PROFILE
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full h-[240px] rounded-2xl bg-metaco_gray ring-[2px] ring-inset ring-metaco_gray_border flex flex-col">
          <div className="w-full h-2/5 flex items-center justify-center">
            <div className="h-14 w-14 flex items-center justify-center rounded-full overflow-hidden">
              <DiamondIcon className="h-full object-cover" />
            </div>
          </div>
          <div className="w-full h-3/5 flex flex-col items-center justify-between px-5 pb-5">
            <span className="font-bold text-lg text-white truncate max-w-full">{data.ingame_id ? data.ingame_id : 'Name Unavailable'}</span>
            <span className="font-bold text-emerald-300">{data.user?.coin} Coins</span>
            <button className="w-full h-10 rounded-lg bg-gradient-to-r from-sky-500 to-blue-400 font-bold text-sm text-white focus:outline-none active:scale-95 transition hover:brightness-110">
              SEE PROFILE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
