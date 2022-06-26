import { useState, useEffect } from 'react';
import Axios from 'axios';

import DeleteResultModal from './DeleteResultModal';
import CancelDeleteModal from './CancelDeleteModal';
import { toast } from 'react-toastify';
import { API_URL } from '../../assets/utils/API';

function ResultList({ result }) {
  return (
    <div className="w-full h-12 flex items-center text-xs md:text-sm lg:text-lg text-white font-semibold">
      <div className="w-1/6 flex justify-center">
        <span className="font-bold">{result.position}</span>
      </div>
      <div className="w-2/6 flex items-center gap-2 md:gap-3 lg:gap-4">
        {result.team.logo && (
          <div className="h-6 w-6 md:h-8 md:w-8 rounded-lg flex items-center justify-center overflow-hidden">
            <img src={result.team.logo} alt="team_logo" className="h-full object-contain" />
          </div>
        )}
        <span className="truncate">{result.team.name}</span>
      </div>
      <div className="w-2/6 flex justify-center">
        <span className="truncate">{result.team.captain?.name ? result.team.captain.name : 'Captain Name Unavailable'}</span>
      </div>
      <div className="w-1/6 flex justify-center">
        <span>{result.point}</span>
      </div>
    </div>
  );
}

function ResultListSkeleton() {
  return (
    <div className="w-full h-12 flex items-center text-white text-lg font-semibold">
      <div className="w-1/6 flex justify-center">
        <span className="font-bold h-8 w-8 bg-gray-600 rounded-md animate-pulse"></span>
      </div>
      <div className="w-2/6 flex items-center gap-4">
        <div className="h-8 w-11 rounded-md flex items-center justify-center overflow-hidden bg-gray-600 animate-pulse"></div>
        <span className="h-8 w-full bg-gray-600 rounded-md animate-pulse"></span>
      </div>
      <div className="w-2/6 flex justify-center">
        <span className="h-8 w-2/3 bg-gray-600 rounded-md animate-pulse"></span>
      </div>
      <div className="w-1/6 flex justify-center">
        <span className="h-8 w-16 bg-gray-600 rounded-md animate-pulse"></span>
      </div>
    </div>
  );
}

export default function TournamentToDelete({ tournamentId, setSelectedTournamentId }) {
  const [tournament, setTournament] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTournament() {
      try {
        setLoading(true);

        const response = await Axios.get(`${API_URL}/tournament/find/${tournamentId}?withResults=true`);

        setTournament(response.data);

        setLoading(false);
      } catch (err) {
        setLoading(false);

        toast.error(err.message, { position: 'top-center', theme: 'colored' });
      }
    }
    fetchTournament();
  }, [tournamentId]);

  function renderResults() {
    return tournament.results?.map((result) => <ResultList key={result._id} result={result} />);
  }

  function renderSkeleton() {
    const elements = [];

    for (let i = 0; i < 8; i++) {
      elements.push(<ResultListSkeleton key={i} />);
    }

    return elements;
  }

  return (
    <div id="tournament-to-delete" className="w-full flex flex-col items-center">
      <div className="py-8 flex flex-col">
        {loading ? (
          <span className="h-12 w-[330px] md:w-[360px] bg-gray-600 rounded-md animate-pulse"></span>
        ) : (
          <span className="text-xl md:text-2xl text-white font-semibold">{tournament.title}</span>
        )}
      </div>
      <div className="w-full px-4 md:w-3/4 md:px-0 lg:w-2/3 flex flex-col">
        <div className="w-full h-9 flex items-center text-xs md:text-base text-white font-semibold border-b border-gray-300">
          <div className="w-1/6 flex justify-center">
            <span>Position</span>
          </div>
          <div className="w-2/6">
            <span>Team</span>
          </div>
          <div className="w-2/6 flex justify-center">
            <span>Captain</span>
          </div>
          <div className="w-1/6 flex justify-center">
            <span>Points</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 py-4 border-b border-gray-300">{loading ? renderSkeleton() : renderResults()}</div>
        <div className="w-full flex justify-center py-8 gap-5">
          <CancelDeleteModal setSelectedTournamentId={setSelectedTournamentId} />
          <DeleteResultModal tournamentId={tournamentId} />
        </div>
      </div>
    </div>
  );
}
