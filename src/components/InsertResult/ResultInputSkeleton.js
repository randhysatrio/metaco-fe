export default function ResultInputSkeleton() {
  return (
    <div className="w-full flex items-center">
      <div className="w-1/5 flex justify-center">
        <span className="h-10 w-8 rounded-lg bg-leaderboard_list animate-pulse"></span>
      </div>
      <div className="w-3/5 flex items-center">
        <span className="h-10 w-11/12 rounded-lg bg-leaderboard_list animate-pulse"></span>
      </div>
    </div>
  );
}
