import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import { API_URL } from '../assets/utils/API';
import { debounce } from 'throttle-debounce';

import Layout from '../components/UI/Layout';
import ExplorerCard from '../components/Explorer/ExplorerCard';
import ExplorerCardSkeleton from '../components/Explorer/ExplorerCardSkeleton';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import FooterBanner from '../components/UI/FooterBanner';

export default function Explorer() {
  const [type, setType] = useState('teams');
  const [keyword, setKeyword] = useState('');
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(12);
  const [datas, setDatas] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useCallback(
    debounce(1000, (val) => {
      if (val && val.trim() === '') {
        return;
      } else {
        setSearch(val);
        setPage(1);
      }
    }),
    []
  );

  useEffect(() => {
    debouncedSearch(keyword);
  }, [keyword]);

  useEffect(() => {
    async function fetchDatas() {
      try {
        if (!page || page > maxPage) {
          return;
        }

        setLoading(true);

        let response;

        if (type === 'teams') {
          response = await Axios.get(`${API_URL}/explorer/team?search=${search}&limit=${limit}&page=${page}&withResults=true`);
        } else {
          response = await Axios.get(`${API_URL}/explorer/player?search=${search}&limit=${limit}&page=${page}`);
        }

        setDatas(response.data.results);
        setCount(response.data.count);
        setMaxPage(response.data.maxPage);

        setLoading(false);
      } catch (err) {
        setLoading(false);

        toast.error(err, { theme: 'colored', position: 'top-center' });
      }
    }
    fetchDatas();
  }, [type, limit, page, search]);

  function renderSkeleton() {
    const elements = [];

    for (let i = 0; i < limit; i++) {
      elements.push(<ExplorerCardSkeleton key={i} type={type} />);
    }

    return elements;
  }

  function renderDatas() {
    return datas.map((data) => <ExplorerCard key={data._id} type={type} data={data} />);
  }

  return (
    <Layout>
      <div className="min-h-screen pt-[75px] bg-metaco_bg flex flex-col items-center">
        <div className="md:container flex flex-col items-center pt-3">
          <div className="w-full flex items-center gap-2 py-4 px-3 text-sm">
            <span className="text-gray-500">Home</span>
            <span className="text-white">/</span>
            <span className="text-white">Gamer Explorer</span>
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-center gap-6 px-3">
            <div className="w-max relative flex items-center">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="h-10 w-64 md:w-52 lg:w-64 bg-metaco_gray rounded-lg focus:outline-none pl-3 pr-9 text-white placeholder:text-gray-500"
                placeholder="Search"
              />
              <BsSearch className="absolute right-3 text-white focus:outline-none" />
            </div>

            <div>
              <select
                value={limit}
                onChange={(e) => {
                  setLimit(parseInt(e.target.value));
                  setPage(1);
                }}
                className="h-10 w-64 md:w-52 lg:w-64 bg-metaco_gray rounded-lg focus:outline-none px-3 text-white"
              >
                <option value={6}>Show: 6 Items</option>
                <option value={12}>Show: 12 Items</option>
                <option value={18}>Show: 18 Items</option>
              </select>
            </div>
            <button
              onClick={() => {
                setKeyword('');
                setSearch('');
                setPage(1);
                setLimit(12);
              }}
              className="h-10 w-32 bg-metaco_gray rounded-lg text-white active:scale-95 transition"
            >
              Clear
            </button>
          </div>
          <div className="w-full flex justify-center md:justify-start gap-6 px-3 py-5 md:mb-2">
            <button
              onClick={() => {
                setType('teams');
                setKeyword('');
                setSearch('');
                setPage(1);
              }}
              className={`h-10 w-40 rounded-lg ${
                type === 'teams'
                  ? 'bg-sky-600'
                  : 'bg-metaco_btn_gray hover:shadow-[inset_0_0_18px_5px_rgba(14,166,233,1)] hover:ring-1 hover:ring-inset hover:ring-sky-500'
              } text-white font-semibold active:scale-95 transition`}
            >
              Teams
            </button>
            <button
              onClick={() => {
                setType('players');
                setKeyword('');
                setSearch('');
                setPage(1);
              }}
              className={`h-10 w-40 rounded-lg ${
                type === 'players'
                  ? 'bg-sky-600'
                  : 'bg-metaco_btn_gray hover:shadow-[inset_0_0_18px_5px_rgba(2,132,199,1)] hover:ring-1 hover:ring-inset hover:ring-sky-500'
              } text-white font-semibold active:scale-95 transition`}
            >
              Players
            </button>
          </div>
          <div id="explorer-list" className="w-full min-h-[500px] rounded-t-2xl bg-select_bg flex flex-col justify-between">
            <div className="px-6 py-3 flex items-center gap-4">
              <div className="flex text-white gap-1">
                <span>Results:</span>
                <span>{count}</span>
                <span>{type === 'teams' ? 'Teams' : 'Players'}</span>
              </div>
              {search && <span className="text-white font-semibold">Showing results for "{search}"</span>}
            </div>

            {loading ? (
              <div className="w-full px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6 pb-5">
                {renderSkeleton()}
              </div>
            ) : !datas.length && search ? (
              <div className="w-full text-center">
                <span className="text-2xl text-white font-semibold">No results found..</span>
              </div>
            ) : (
              <div className="w-full px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6 pb-5">
                {renderDatas()}
              </div>
            )}

            <div className="w-full py-5 flex items-center justify-center text-white text-lg font-bold gap-3">
              <button
                disabled={page === 1}
                onClick={() => {
                  setPage((prevPage) => parseInt(prevPage) - 1);
                  window.scrollTo({ top: 190, behavior: 'smooth' });
                }}
                className="hover:text-sky-500 active:scale-95 transition disabled:text-gray-600 disabled:active:scale-95 disabled:hover:text-gray-600"
              >
                -
              </button>
              <input
                type="number"
                value={page}
                onChange={(e) => setPage(e.target.value)}
                className="w-10 bg-metaco_gray focus:outline-none rounded-lg text-center text-white font-bold transition cursor-pointer focus:ring-[1px] focus:ring-sky-500"
              />
              <span>of</span>
              <span>{maxPage}</span>
              <button
                disabled={page === maxPage}
                onClick={() => {
                  setPage((prevPage) => parseInt(prevPage) + 1);
                  window.scrollTo({ top: 190, behavior: 'smooth' });
                }}
                className="hover:text-sky-500 active:scale-95 transition disabled:text-gray-600 disabled:active:scale-95 disabled:hover:text-gray-600"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterBanner />
    </Layout>
  );
}
