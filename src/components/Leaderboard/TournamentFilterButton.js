export default function TournamentFilterButton({ tournament, selectedTournament, setSelectedTournament }) {
  return (
    <button
      onClick={() => setSelectedTournament(tournament)}
      className={`hidden md:block w-40 lg:w-44 h-14 rounded-xl ${
        selectedTournament === tournament
          ? 'bg-[#19303F] ring-[2px] ring-inset ring-sky-500'
          : 'bg-gray-600 hover:bg-[#19303F] hover:ring-[2px] hover:ring-inset hover:ring-sky-500'
      } text-white font-semibold text-xs xl:text-sm flex justify-center items-center transition active:scale-95 cursor-pointer`}
    >
      {tournament.title}
    </button>
  );
}
