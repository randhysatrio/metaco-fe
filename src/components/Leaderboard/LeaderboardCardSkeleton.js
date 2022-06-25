function LeaderboardItemSkeleton() {
  return <div className="w-full h-[62px] rounded-xl overflow-hidden flex items-center bg-leaderboard_list animate-pulse"></div>;
}

export default function LeaderboardCardSkeleton() {
  return (
    <div className="w-full p-3 flex flex-col">
      <div className="w-full h-16 rounded-xl overflow-hidden flex mb-3">
        <div className="w-full h-full bg-leaderboard_list animate-pulse"></div>
      </div>
      <div className="flex items-center pb-2 text-white font-semibold text-lg">
        <div className="w-[20%] flex justify-center">
          <span className="h-8 w-12 rounded-lg bg-gray-600 animate-pulse"></span>
        </div>
        <div className="w-[55%] flex px-2">
          <span className="h-8 w-20 rounded-lg bg-gray-600 animate-pulse"></span>
        </div>
        <div className="w-[25%] flex justify-center">
          <span className="h-8 w-12 rounded-lg bg-gray-600 animate-pulse"></span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 mb-6">
        <LeaderboardItemSkeleton />
        <LeaderboardItemSkeleton />
        <LeaderboardItemSkeleton />
      </div>

      <span className="w-full h-14 rounded-2xl bg-leaderboard_list animate-pulse"></span>
    </div>
  );
}
