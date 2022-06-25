import { useState, useEffect } from 'react';
import Axios from 'axios';
import { API_URL } from '../../assets/utils/API';

import InsertResultModal from './InsertResultModal';
import CancelInsertModal from './CancelInsertModal';
import ResultInput from './ResultInput';
import ResultInputSkeleton from './ResultInputSkeleton';
import { toast } from 'react-toastify';

export default function SelectedTournament({ tournamentId }) {
  const [tournament, setTournament] = useState({});
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTournament() {
      try {
        setLoading(true);
        const response = await Axios.get(`${API_URL}/tournament/find/${tournamentId}?withTeams=true`);

        setTournament(response.data);
        setResults(new Array(response.data.teams.length).fill(''));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error(err.message, { position: 'top-center', theme: 'colored' });
      }
    }
    fetchTournament();
  }, [tournamentId]);

  function renderResult() {
    return tournament.teams?.map((team, index) => (
      <ResultInput key={team._id} index={index} teams={tournament.teams} results={results} setResults={setResults} />
    ));
  }

  function renderSkeleton() {
    const elements = [];

    for (let i = 0; i < 8; i++) {
      elements.push(<ResultInputSkeleton key={i} />);
    }

    return elements;
  }

  return (
    <div id="insert-result-main" className="w-full min-h-[400px] bg-metaco_bg flex flex-col items-center py-12">
      <div className="w-2/3 xl:w-1/2 flex flex-col items-center pt-6 pb-11">
        {loading ? (
          <span className="w-[70%] h-11 bg-leaderboard_list rounded-lg animate-pulse"></span>
        ) : (
          <span className="text-3xl font-semibold text-white">{tournament.title}</span>
        )}
      </div>
      <div className="w-2/3 xl:w-1/2 h-9 flex items-center border-b border-gray-200">
        <div className="w-1/5 flex justify-center">
          <span className="text-white font-bold">Position</span>
        </div>
        <div className="w-4/5">
          <span className="text-white font-bold">Team</span>
        </div>
      </div>
      <div className="w-2/3 xl:w-1/2 flex flex-col gap-5 py-5 border-b border-gray-200">{loading ? renderSkeleton() : renderResult()}</div>
      <div className="w-2/3 xl:w-1/2 flex justify-center py-5 gap-6">
        <CancelInsertModal />
        <InsertResultModal tournamentId={tournament.id} results={results} />
      </div>
    </div>
  );
}
