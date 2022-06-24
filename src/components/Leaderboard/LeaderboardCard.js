function LeaderboardItem({ result }) {
  return (
    <div className="w-full h-16 rounded-xl overflow-hidden flex items-center bg-leaderboard_list text-white">
      <div className="w-[20%] flex justify-center">
        <span>{result.position}</span>
      </div>
      <div className="w-[55%]">
        <span>{result.team_id.name}</span>
      </div>
      <div className="w-[25%] flex justify-center">
        <span>{result.point}</span>
      </div>
    </div>
  );
}

export default function LeaderboardCard({ tournament, setSelectedTournament }) {
  function renderResult() {
    return tournament.results.slice(0, 3).map((result) => <LeaderboardItem key={result._id} result={result} />);
  }

  return (
    <div className="w-full p-3 flex flex-col">
      <div className="w-full h-16 rounded-xl overflow-hidden flex mb-3">
        <div className="w-full h-full bg-leaderboard_list px-5 flex items-center">
          <span className="text-lg text-white font-semibold truncate">{tournament.title}</span>
        </div>
      </div>
      <div className="flex items-center py-1 text-white font-semibold text-lg">
        <div className="w-[20%] flex justify-center">
          <span>Rank</span>
        </div>
        <div className="w-[55%]">
          <span>Team</span>
        </div>
        <div className="w-[25%] flex justify-center">
          <span>Point</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 mb-6">
        {tournament.results.length ? (
          renderResult()
        ) : (
          <div
            style={{ height: `calc((3 * 4rem) + (2 * 8px))` }}
            className="flex items-center justify-center rounded-xl bg-leaderboard_list"
          >
            <span className="text-xl text-white">No results yet!</span>
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setSelectedTournament(tournament);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="w-full h-14 rounded-2xl overflow-hidden text-white flex items-center justify-center ring-1 ring-inset ring-gray-400 hover:bg-gray-400 transition active:scale-95"
      >
        <span>Explore More</span>
      </button>
    </div>
  );
}
