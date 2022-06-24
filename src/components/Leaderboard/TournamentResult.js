function TournamentResultList({ result }) {
  return (
    <div
      className={`w-full flex items-center h-[70px] text-lg text-white bg-leaderboard_list rounded-2xl ${
        result.position <= 3 ? 'ring-[2px] ring-inset ring-sky-500' : ''
      }`}
    >
      <div className="w-2/12 flex justify-center">
        <span className="font-bold">{result.position}</span>
      </div>
      <div className="w-4/12 flex items-center gap-4">
        {result.team_id.logo && (
          <div className="h-8 w-8 flex items-center justify-center rounded-md overflow-hidden">
            <img src={result.team_id.logo} className="h-full object-cover" />
          </div>
        )}

        <span className="truncate">{result.team_id.name}</span>
      </div>
      <div className="w-4/12 flex justify-center">
        <span className="truncate">{result.team_id.captain?.name ? result.team_id.captain.name : 'Captain Name Unavailable'}</span>
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
    <div className="min-h-screen w-3/4 flex flex-col items-center py-8">
      {selectedTournament.results.length ? (
        <>
          <div className="w-full py-4 flex text-lg font-semibold text-white">
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
          <div className="w-full flex flex-col gap-5 my-2">{renderTournamentResult()}</div>
        </>
      ) : (
        <div className="w-full h-96 flex items-center justify-center">
          <span className="text-3xl font-semibold text-white">No Results Yet!</span>
        </div>
      )}
    </div>
  );
}
