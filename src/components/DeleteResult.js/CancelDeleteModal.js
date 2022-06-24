import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function CancelDeleteModal({ setSelectedTournamentId }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="w-40 h-12 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold active:scale-95 transition focus:outline-none"
      >
        Cancel
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

          <div className="fixed inset-0 z-10 overflow-y-auto">
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
                  <span className="text-white font-semibold mb-5">Cancel Result Delete?</span>
                  <div className="w-full flex items-center justify-center gap-4">
                    <button
                      onClick={() => setShow(false)}
                      className="w-32 h-11 rounded-xl bg-red-500 text-white font-bold hover:brightness-110 active:scale-95 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setSelectedTournamentId('');
                        setShow(false);

                        const element = document.getElementById('select-delete-tournament');

                        element.scrollIntoView({ block: 'center', behavior: 'smooth' });
                      }}
                      className="w-32 h-11 rounded-xl bg-emerald-500 text-white font-bold hover:brightness-110 active:scale-95 transition"
                    >
                      Yes Please
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
