import { AiFillCheckCircle } from 'react-icons/ai';

export default function ResultInput({ teams, index, results, setResults }) {
  function renderTeams() {
    return teams.map((team) => (
      <option disabled={results.includes(team.id.toString())} key={team._id} value={team.id}>
        {team.name}
      </option>
    ));
  }

  return (
    <div className="w-full flex items-center">
      <div className="w-1/5 flex justify-center">
        <span className="text-xl text-white font-extrabold">{index + 1}</span>
      </div>
      <div className="w-3/5">
        <select
          onChange={(e) => {
            const tempResults = [...results];

            tempResults.splice(index, 1, e.target.value);

            setResults(tempResults);
          }}
          className="w-full h-10 bg-select_bg text-white font-semibold rounded-xl focus:outline-none focus:border-none focus:ring focus:ring-sky-500 transition cursor-pointer px-3 hover:shadow-[0_0_15px_-6px_rgba(25,190,255,1)]"
        >
          <option value={''}>Select Team</option>
          {renderTeams()}
        </select>
      </div>
      {results[index] !== '' && (
        <div className="w-1/5 flex items-center pl-5">
          <AiFillCheckCircle className="text-emerald-400 text-lg" />
        </div>
      )}
    </div>
  );
}
