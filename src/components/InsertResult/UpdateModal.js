import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from '../../assets/utils/API';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { toast } from 'react-toastify';

export default function UpdateModal({ tournamentId, results }) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function updateHandler() {
    try {
      setLoading(true);

      const response = await Axios.post(`${API_URL}/tournament/result/${tournamentId}`, { results });

      toast.success(response.data, { position: 'top-center', theme: 'colored' });

      setLoading(false);

      navigate(-1, { replace: true });
    } catch (err) {
      setLoading(false);

      toast.error(err.message, { position: 'top-center', theme: 'colored' });
    }
  }

  return (
    <>
      <button
        onClick={() => setShow(true)}
        disabled={results?.includes('')}
        className="w-40 h-11 rounded-lg bg-gradient-to-r from-sky-600 to-blue-500 disabled:brightness-75 text-white font-bold active:scale-95 disabled:active:scale-100 transition focus:outline-none"
      >
        Insert Result
      </button>

      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setShow(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[340px] h-40 bg-metaco_bg rounded-xl flex flex-col items-center justify-center">
                  <span className="text-white font-semibold mb-5">Insert This Results?</span>
                  <div className="w-full flex items-center justify-center gap-4">
                    <button
                      onClick={() => setShow(false)}
                      className="w-32 h-11 rounded-xl bg-red-500 text-white font-bold hover:brightness-110 active:scale-95 transition"
                    >
                      Hold On
                    </button>
                    <button
                      onClick={updateHandler}
                      className="w-32 h-11 rounded-xl bg-emerald-500 text-white font-bold hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <AiOutlineLoading3Quarters className="animate-spin" />
                          Loading..
                        </>
                      ) : (
                        'Insert It'
                      )}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
