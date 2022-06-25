import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { Link } from 'react-router-dom';

export default function ManageResultModal() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="py-3 px-7 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold active:scale-95 transition"
      >
        Manage Results
      </button>

      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" onClose={() => setShow(false)} className="relative z-[9999] flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="inset-0 fixed bg-black backdrop-blur bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-80 -translate-y-5"
              enterTo="opacity-100 transalate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-80 -translate-y-5"
            >
              <Dialog.Panel className="w-96 bg-metaco_bg rounded-xl relative z-10 flex flex-col px-10">
                <div className="pt-8 pb-4">
                  <span className="text-xl text-white font-semibold">Manage Results</span>
                </div>
                <div className="w-full flex flex-col rounded-xl">
                  <span className="text-white pb-4">What you want to do?</span>
                  <div className="flex flex-col items-center gap-6 py-6 ring-1 ring-inset ring-gray-500 rounded-xl">
                    <Link to="/insert-result">
                      <button className="w-60 h-14 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 active:scale-95 transition hover:brightness-110 hover:shadow-[0_0_10px_-3px_rgba(20,255,55,1)]">
                        <span className="text-lg text-white font-semibold">Insert Result</span>
                      </button>
                    </Link>
                    <Link to="/delete-result">
                      <button className="w-60 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 active:scale-95 transition hover:brightness-110 hover:shadow-[0_0_10px_-3px_rgba(25,190,255,1)]">
                        <span className="text-lg text-white font-semibold">Delete Result</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="pt-5 pb-8 flex justify-center">
                  <button
                    onClick={() => setShow(false)}
                    className="h-12 w-32 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 transition cursor-pointer active:scale-95 transiton text-white font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
