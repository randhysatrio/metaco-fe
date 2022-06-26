import default_profile from '../../assets/images/default_profile.png';

export default function MemberList({ member }) {
  return (
    <div
      className={`w-[90%] md:w-full h-14 md:h-52 lg:h-60 rounded-xl ring-[2px] ${
        member.roles === 'CAPTAIN' ? 'ring-emerald-500' : 'ring-metaco_gray_border'
      } bg-metaco_gray flex justify-center md:flex-col`}
    >
      <div className="h-full md:h-2/4 w-[25%] md:w-full flex items-center justify-center">
        <div className="h-10 w-10 md:h-20 lg:h-24 md:w-20 lg:w-24 rounded-full overflow-hidden flex items-center justify-center bg-metaco_header">
          <img src={default_profile} alt="profile" className="h-[95%] object-cover" />
        </div>
      </div>
      <div className="h-full md:h-1/4 w-[50%] md:w-full flex flex-col justify-center md:justify-start md:px-2 lg:px-4">
        <span
          className={`text-xs md:text-sm ${
            member.roles === 'CAPTAIN' ? 'text-emerald-500' : 'text-sky-500'
          } font-semibold leading-snug md:leading-normal`}
        >
          {member.roles}
        </span>
        <span className="text-sm md:text-base lg:text-lg text-gray-200 font-bold truncate">{member.user?.name}</span>
      </div>
      <div className="h-full md:h-1/4 w-[25%] md:w-full flex items-center md:items-start justify-center md:px-2 lg:px-4 md:py-1">
        <span className="text-xs md:text-sm text-white font-bold">{member.user?.coin} COINS</span>
      </div>
    </div>
  );
}
