import { useState, useEffect } from 'react';
import Axios from 'axios';
import { API_URL } from '../assets/utils/API';

import Layout from '../components/UI/Layout';
import delete_result_banner from '../assets/images/banner/DeleteResult/delete_result_banner.png';
import TournamentToDelete from '../components/DeleteResult.js/TournamentToDelete';
import { toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import FooterBanner from '../components/UI/FooterBanner';

export default function DeleteResult() {
  const [tournaments, setTournaments] = useState([]);
  const [selectedTournamentId, setSelectedTournamentId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTournaments() {
      try {
        setLoading(true);

        const response = await Axios.get(`${API_URL}/tournament/find?withResults=true&sort=_id,asc`);

        setTournaments(response.data);

        setLoading(false);
      } catch (err) {
        setLoading(false);

        toast.error(err.message, { position: 'top-center', theme: 'colored' });
      }
    }
    fetchTournaments();
  }, []);

  useEffect(() => {
    if (selectedTournamentId) {
      const element = document.getElementById('tournament-to-delete');

      element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedTournamentId]);

  function renderTournaments() {
    return tournaments.map((tournament) => (
      <option
        disabled={!tournament.results.length}
        key={tournament._id}
        value={tournament.id}
        className="bg-gray-200 disabled:text-gray-400 text-gray-700 font-semibold"
      >
        {tournament.title}
      </option>
    ));
  }

  return (
    <Layout>
      <div className="min-h-screen bg-metaco_bg pt-[75px] flex flex-col">
        <div className="w-full h-96 relative">
          <img src={delete_result_banner} alt="delete_banner" className="h-full w-full object-cover" />
          <div className="inset-0 absolute px-10 bg-gradient-to-b from-transparent to-metaco_bg flex flex-col justify-center">
            <div className="flex flex-col">
              <span className="text-2xl text-white mb-5">Manage Results</span>
              <span className="text-4xl font-extrabold text-white">Delete Results</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center py-10">
          {loading ? (
            <div className="w-full py-10 flex items-center justify-center gap-2 text-xl lg:text-2xl text-white font-semibold">
              <AiOutlineLoading3Quarters className="animate-spin" />
              <span>Getting tournaments..</span>
            </div>
          ) : (
            <div id="select-delete-tournament" className="w-full flex flex-col items-center py-5">
              <span className="font-semibold text-xl lg:text-2xl text-white tracking-widest mb-7">Select Tournament to Delete</span>
              <select
                disabled={selectedTournamentId}
                value={selectedTournamentId}
                onChange={(e) => setSelectedTournamentId(e.target.value)}
                className={`w-2/3 xl:w-1/2 bg-leaderboard_list border border-gray-400 disabled:border-sky-400 disabled:bg-gray-500 disabled:bg-opacity-70 rounded-xl focus:outline-none hover:border-sky-400 p-4 text-white font-semibold transition cursor-pointer disabled:cursor-default`}
              >
                <option value="" className="bg-gray-200 disabled:text-gray-400 text-gray-700 font-semibold">
                  Select Tournament
                </option>
                {renderTournaments()}
              </select>
            </div>
          )}
          {selectedTournamentId && (
            <TournamentToDelete tournamentId={selectedTournamentId} setSelectedTournamentId={setSelectedTournamentId} />
          )}
        </div>
      </div>
      <FooterBanner />
    </Layout>
  );
}
