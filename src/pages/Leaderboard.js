import { useState } from 'react';

import Layout from '../components/UI/Layout';
import main_banner from '../assets/images/banner/Leaderboard/main_banner.png';
import TimeFilterButton from '../components/Leaderboard/TimeFilterButton';

export default function Leaderboard() {
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <Layout>
      <div className="min-h-screen bg-metaco_bg pt-[75px]">
        <div className="h-96 w-full relative overflow-hidden">
          <img src={main_banner} className="h-full w-full object-cover" />
          <div className="inset-0 absolute bg-gradient-to-b from-transparent to-metaco_bg flex flex-col justify-center px-10">
            <div className="flex flex-col mb-8">
              <span className="text-2xl text-white mb-5">Leaderboard</span>
              <span className="text-4xl font-extrabold text-white">The Champions</span>
            </div>
            <div className="flex items-center gap-6">
              <TimeFilterButton value={'All Time'} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
              <TimeFilterButton value={'This Month'} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
              <TimeFilterButton value={'This Week'} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
            </div>
          </div>
        </div>
        <div className="w-full py-10 px-44 grid grid-cols-3 gap-3">
          <div className="w-full h-96 rounded-lg bg-white"></div>
          <div className="w-full h-96 rounded-lg bg-white"></div>
          <div className="w-full h-96 rounded-lg bg-white"></div>
        </div>
      </div>
    </Layout>
  );
}
