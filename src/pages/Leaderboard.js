import { useState, useEffect } from 'react';
import Axios from 'axios';
import { API_URL } from '../assets/utils/API';

import Layout from '../components/UI/Layout';
import main_banner from '../assets/images/banner/Leaderboard/main_banner.png';
import LeaderboardCard from '../components/Leaderboard/LeaderboardCard';
import LeaderboardCardSkeleton from '../components/Leaderboard/LeaderboardCardSkeleton';
import TournamentResult from '../components/Leaderboard/TournamentResult';
import TournamentFilterButton from '../components/Leaderboard/TournamentFilterButton';
import ManageResultModal from '../components/Leaderboard/ManageResultModal';
import { toast } from 'react-toastify';
import FilterButtonSkeleton from '../components/Leaderboard/FilterButtonSkeleton';
import FooterBanner from '../components/UI/FooterBanner';

export default function Leaderboard() {
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTournaments() {
      try {
        setLoading(true);

        const response = await Axios.get(`${API_URL}/tournament/find?withResults=true&page=1&limit=5&sort=_id,asc`);

        setTournaments(response.data);

        setLoading(false);
      } catch (err) {
        setLoading(false);

        toast.error(err, { position: 'top-center', theme: 'colored' });
      }
    }
    fetchTournaments();
  }, []);

  function renderTournamentButton() {
    return tournaments.map((tournament) => (
      <TournamentFilterButton
        key={tournament._id}
        tournament={tournament}
        selectedTournament={selectedTournament}
        setSelectedTournament={setSelectedTournament}
      />
    ));
  }

  function renderTournaments() {
    return tournaments.map((tournament) => (
      <LeaderboardCard key={tournament._id} tournament={tournament} setSelectedTournament={setSelectedTournament} />
    ));
  }

  function renderFilterSkeleton() {
    const elements = [];

    for (let i = 0; i < 6; i++) {
      elements.push(<FilterButtonSkeleton key={i} />);
    }

    return elements;
  }

  function renderCardSkeleton() {
    const elements = [];

    for (let i = 0; i < 6; i++) {
      elements.push(<LeaderboardCardSkeleton key={i} />);
    }

    return elements;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-metaco_bg pt-[75px] flex flex-col items-center">
        <div className="h-96 w-full relative flex flex-col">
          <img src={main_banner} alt="optic" className="h-full w-full object-cover" />
          <div className="inset-0 absolute bg-gradient-to-b from-transparent to-metaco_bg flex flex-col justify-center px-10">
            <div className="flex flex-col mb-5">
              <span className="text-2xl text-white mb-5">Leaderboard</span>
              <span className="text-4xl font-extrabold text-white">
                {selectedTournament ? selectedTournament.title : 'Tournament Results'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <ManageResultModal />
            </div>
          </div>
          <div className="w-full flex px-10 absolute bottom-0 gap-5">
            {loading ? (
              renderFilterSkeleton()
            ) : (
              <>
                <button
                  onClick={() => setSelectedTournament(null)}
                  className="px-6 h-14 rounded-xl bg-gray-600 text-white hover:bg-[#19303F] transition active:scale-95 hover:ring-1 hover:ring-inset hover:ring-sky-700"
                >
                  All Tournaments
                </button>
                {renderTournamentButton()}
              </>
            )}
          </div>
        </div>
        {selectedTournament ? (
          <TournamentResult selectedTournament={selectedTournament} />
        ) : (
          <div className="w-full py-10 px-8 lg:px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {loading ? renderCardSkeleton() : renderTournaments()}
          </div>
        )}
      </div>
      <FooterBanner />
    </Layout>
  );
}
