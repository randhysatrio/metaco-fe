import { useEffect, useState } from 'react';
import Axios from 'axios';
import { API_URL } from '../assets/utils/API';

import Layout from '../components/UI/Layout';
import insert_result_banner from '../assets/images/banner/InsertResult/insert_result_banner.jpg';
import SelectedTournament from '../components/InsertResult/SelectedTournament';
import { toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import FooterBanner from '../components/UI/FooterBanner';

export default function InsertResult() {
  const [tournaments, setTournaments] = useState([]);
  const [selectedTournamentId, setSelectedTournamentId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTournaments() {
      try {
        setLoading(true);

        const response = await Axios.get(`${API_URL}/tournament/find?withResults=true&limit=5&sort=_id,asc`);

        setTournaments(response.data);

        setLoading(false);
      } catch (err) {
        setLoading(false);

        toast.error(err, { position: 'top-center', theme: 'colored' });
      }
    }

    fetchTournaments();
  }, []);

  useEffect(() => {
    if (selectedTournamentId) {
      const element = document.getElementById('insert-result-main');

      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedTournamentId]);

  function renderOptions() {
    return tournaments.map((tournament) => (
      <option
        disabled={tournament.results.length}
        key={tournament._id}
        className="bg-gray-200 text-gray-800 font-semibold disabled:text-gray-400"
        value={tournament.id}
      >
        {tournament.title}
      </option>
    ));
  }

  return (
    <Layout>
      <div className="min-h-screen bg-metaco_bg pt-[75px] flex flex-col items-center">
        <div className="w-full h-96 flex flex-col relative">
          <img src={insert_result_banner} alt="banner" className="h-full w-full object-cover" />
          <div className="inset-0 absolute bg-gradient-to-b from-transparent to-metaco_bg flex flex-col justify-center px-10">
            <div className="flex flex-col">
              <span className="text-2xl text-white mb-5">Manage Results</span>
              <span className="text-4xl font-extrabold text-white">Insert Results</span>
            </div>
          </div>
        </div>
        {!selectedTournamentId ? (
          <div className="w-full flex flex-col items-center justify-center py-5">
            {loading ? (
              <div className="py-10 w-full flex items-center justify-center gap-3 text-white text-2xl font-semibold">
                <AiOutlineLoading3Quarters className="animate-spin" />
                <span>Getting tournaments..</span>
              </div>
            ) : (
              <div className="py-10 w-full flex flex-col items-center justify-center">
                <span className="text-lg md:text-xl text-white font-semibold tracking-widest mb-8">Select Tournament to Insert:</span>
                <select
                  value={selectedTournamentId}
                  onChange={(e) => setSelectedTournamentId(e.target.value)}
                  className={`w-2/3 xl:w-1/2 bg-leaderboard_list border ${
                    selectedTournamentId ? 'border-sky-400' : 'border-gray-400'
                  } rounded-xl focus:outline-none hover:border-sky-400 p-4 text-white font-semibold transition cursor-pointer`}
                >
                  <option className="bg-gray-200 text-gray-400 font-semibold" value={''}>
                    Choose Tournament
                  </option>
                  {renderOptions()}
                </select>
              </div>
            )}
          </div>
        ) : (
          <SelectedTournament tournamentId={selectedTournamentId} />
        )}
      </div>
      <FooterBanner />
    </Layout>
  );
}
