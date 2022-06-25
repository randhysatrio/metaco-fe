function TournamentResultList({ result }) {
  return (
    <div
      className={`w-full flex items-center h-[70px] text-sm md:text-base lg:text-lg text-white bg-leaderboard_list rounded-2xl ${
        result.position <= 3 ? 'ring-[2px] ring-inset ring-sky-500' : ''
      }`}
    >
      <div className="w-2/12 flex justify-center">
        <span className="font-bold">{result.position}</span>
      </div>
      <div className="w-4/12 flex items-center gap-2 md:gap-4">
        {result.team.logo && (
          <div className="h-6 w-6 md:h-8 md:w-8 flex items-center justify-center rounded-md overflow-hidden">
            <img src={result.team.logo} alt="team_logo" className="h-full object-cover" />
          </div>
        )}

        <span className="truncate">{result.team.name}</span>
      </div>
      <div className="w-4/12 flex justify-center">
        <span className="truncate">{result.team.captain?.name ? result.team.captain.name : 'Captain Name Unavailable'}</span>
      </div>
      <div className="w-2/12 flex justify-center">
        <span>{result.point}</span>
      </div>
    </div>
  );
}

export default function TournamentResult({ selectedTournament }) {
  function renderTournamentResult() {
    return selectedTournament.results.map((result) => <TournamentResultList key={result._id} result={result} />);
  }

  return (
    <div className="min-h-screen w-full px-2 md:w-3/4 md:px-0 flex flex-col items-center py-8">
      {selectedTournament.results.length ? (
        <>
          <div className="w-full py-4 flex text-sm md:text-lg font-semibold text-white">
            <div className="w-2/12 flex justify-center">
              <span>Rank</span>
            </div>
            <div className="w-4/12">
              <span>Team Name</span>
            </div>
            <div className="w-4/12 flex justify-center">
              <span>Captain Name</span>
            </div>
            <div className="w-2/12 flex justify-center">
              <span>Points</span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">{renderTournamentResult()}</div>
        </>
      ) : (
        <div className="w-full h-96 flex items-center justify-center">
          <span className="text-3xl font-semibold text-white">No Results Yet!</span>
        </div>
      )}
    </div>
  );
}
