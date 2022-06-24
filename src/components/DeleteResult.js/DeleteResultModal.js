import Axios from 'axios';
import { API_URL } from '../../assets/utils/API';
import { useNavigate } from 'react-router-dom';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function DeleteResultModal({ tournamentId }) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function deleteHandler() {
    try {
      setLoading(true);

      const response = await Axios.delete(`${API_URL}/tournament/delete/${tournamentId}`);

      setLoading(false);
      toast.success(response.data, { position: 'top-center', theme: 'colored' });
      navigate(-1, { replace: true });
    } catch (err) {
      setLoading(false);
      toast.error(err.message, { position: 'top-center', theme: 'colored' });
    }
  }

  console.log(tournamentId);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="w-40 h-12 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold active:scale-95 transition focus:outline-none"
      >
        Delete Result
      </button>

      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={() => setShow(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-80 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-80 scale-95"
              >
                <Dialog.Panel className="w-[340px] h-40 bg-metaco_bg rounded-xl flex flex-col items-center justify-center">
                  <span className="text-white font-semibold mb-5">Delete This Tournament Result?</span>
                  <div className="w-full flex items-center justify-center gap-4">
                    <button
                      onClick={() => setShow(false)}
                      className="w-32 h-11 rounded-xl bg-red-500 text-white font-bold hover:brightness-110 active:scale-95 transition"
                    >
                      Cancel
                    </button>
                    <button
                      disabled={loading}
                      onClick={deleteHandler}
                      className="w-32 h-11 rounded-xl bg-emerald-600 disabled:bg-emerald-700 text-white font-bold hover:brightness-110 active:scale-95 disabled:hover:brightness-100 disabled:active:scale-100 transition flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <AiOutlineLoading3Quarters className="animate-spin" />
                          Deleting..
                        </>
                      ) : (
                        'Delete It'
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
