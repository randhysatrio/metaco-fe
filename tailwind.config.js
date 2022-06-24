/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        metaco_bg: '#202228',
        metaco_header: '#191B21',
        leaderboard_list: 'rgba(51,53,59,.5)',
        select_bg: '#252525',
      },
    },
  },
  plugins: [],
};
