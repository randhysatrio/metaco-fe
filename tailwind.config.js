/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        metaco_bg: '#202228',
        metaco_header: '#191B21',
        metaco_gray: '#303030',
        metaco_gray_border: '#3D3D3D',
        metaco_btn_gray: '#303339',
        leaderboard_list: 'rgba(51,53,59,.5)',
        select_bg: '#252525',
        bronze: '#B87333',
        silver: '#C0C0C0',
      },
    },
  },
  plugins: [],
};
