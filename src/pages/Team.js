import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from '../assets/utils/API';

import Layout from '../components/UI/Layout';
import ActivityList from '../components/Team/ActivityList';
import ActivityListSkeleton from '../components/Team/ActivityListSkeleton';
import MemberList from '../components/Team/MemberList';
import MemberListSkeleton from '../components/Team/MemberListSkeleton';
import { toast } from 'react-toastify';
import { ReactComponent as DiamondIcon } from '../assets/images/icons/metaco_diamond.svg';

export default function Team() {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(false);
  const [firstPlaces, setFirstplaces] = useState(0);
  const [topThrees, setTopthrees] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    async function fetchTeam() {
      try {
        setLoading(true);

        const response = await Axios.get(
          `${API_URL}/explorer/team/${id}?withMembers=true&withResults=true&withTopThrees=true&withFirstPlaces=true`
        );

        setTeam(response.data.team);
        setFirstplaces(response.data.firstplaces);
        setTopthrees(response.data.topthrees);

        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) {
        setLoading(false);

        toast.error(err.message, { position: 'top-center', theme: 'colored' });
      }
    }
    fetchTeam();
  }, []);

  function renderActivitySkeleton() {
    const elements = [];

    for (let i = 0; i < 8; i++) {
      elements.push(<ActivityListSkeleton key={i} />);
    }

    return elements;
  }

  function renderMemberListSkeleton() {
    const elements = [];

    for (let i = 0; i < 5; i++) {
      elements.push(<MemberListSkeleton key={i} />);
    }

    return elements;
  }

  function renderActivityList() {
    return team.results?.map((result) => <ActivityList key={result._id} result={result} />);
  }

  function renderMemberList() {
    return team.members?.map((member) => <MemberList key={member._id} member={member} />);
  }

  return (
    <Layout>
      <div className="min-h-screen bg-metaco_bg flex flex-col items-center pt-[75px]">
        <div className="w-full py-10 lg:py-14 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 bg-leaderboard_list">
          <div className="w-28 h-28 md:w-32 md:h-32 lg:h-36 lg:w-36 rounded-full flex items-center justify-center overflow-hidden bg-metaco_header shadow-[0_0_10px_-2px_rgba(158,39,232,0.85)]">
            {team.logo ? (
              <img src={team.logo} alt="team_logo" className="h-full object-cover" />
            ) : (
              <DiamondIcon className="h-full lg:h-[95%] object-cover" />
            )}
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-2">
            <span className="text-white text-2xl font-semibold">{team.name}</span>
            <span className="text-sky-500 text-xl font-bold">{team.totalPoints} POINTS</span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-3 md:gap-5 py-6">
          <div className="text-center">
            <span className="text-xl text-gray-400 font-semibold">Tournament Performance</span>
          </div>
          <div className="w-4/5 md:w-1/2 xl:w-1/3 h-[72px] xl:h-20 rounded-xl border-2 border-sky-500 flex divide-x-[1px] divide-sky-500 py-2 shadow-[inset_0_0_25px_10px_rgba(2,132,199,0.6)]">
            <div className="w-1/3 h-full flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-sky-600">{team.results?.length ? team.results.length : 0}</span>
              <span className="text-xs md:text-sm font-bold text-gray-300 leading-tight">Appearances</span>
            </div>
            <div className="w-1/3 h-full flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-bronze">{topThrees}</span>
              <span className="text-xs md:text-sm font-bold text-gray-300 leading-tight">Top 3s</span>
            </div>
            <div className="w-1/3 h-full flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-amber-400">{firstPlaces}</span>
              <span className="text-xs md:text-sm font-bold text-gray-300 leading-tight">1st Places</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-3 md:gap-5 pb-4 lg:pb-10">
          <div className="w-full text-center">
            <span className="text-gray-400 font-semibold text-xl">Team Members</span>
          </div>

          {loading ? (
            <div className="w-4/5 lg:w-[75%] flex flex-col items-center md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              {renderMemberListSkeleton()}
            </div>
          ) : team.members?.length ? (
            <div className="w-4/5 lg:w-[75%] flex flex-col items-center md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              {renderMemberList()}
            </div>
          ) : (
            <div className="w-4/5 lg:w-[75%] h-32 md:h-48 flex items-center justify-center">
              <span className="text-lg md:text-xl text-white font-semibold">Team Members Unavailable</span>
            </div>
          )}
        </div>
        <div className="w-4/5 md:w-3/4 lg:w-3/5 flex flex-col items-center pb-5">
          <div className="w-full text-center pb-1 mb-2 border-b border-gray-400">
            <span className="text-gray-400 font-semibold text-xl">Latest Activity:</span>
          </div>
          <div className="w-full py-1 flex text-xs md:text-base lg:text-lg text-white font-semibold bg-metaco_header rounded-lg">
            <div className="w-3/5 pl-3">
              <span>Activity</span>
            </div>
            <div className="w-1/5 text-center">
              <span>Date</span>
            </div>
            <div className="w-1/5 text-center">
              <span>Result</span>
            </div>
          </div>
          <div className="w-full flex flex-col items-center py-1 lg:py-2 gap-1">
            {loading ? (
              renderActivitySkeleton()
            ) : team.results?.length ? (
              renderActivityList()
            ) : (
              <div className="w-full h-40 flex items-center justify-center">
                <span className="text-xl text-white font-semibold">This team has no recent activities</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
