import { useNavigate } from 'react-router-dom';
import { Fragment, useState, useEffect, useCallback } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { FiMenu } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import { ReactComponent as MetacoLogo } from '../../assets/logo/metaco_logo.svg';

export default function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function SidebarLink({ children, to }) {
    return (
      <span
        onClick={() => {
          navigate(to);
        }}
        className="text-lg text-white font-semibold hover:translate-x-4 transition-all active:scale-95 cursor-pointer"
      >
        {children}
      </span>
    );
  }

  const resizeObserver = useCallback(() => {
    if (window.innerWidth >= 768) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeObserver);

    return () => {
      window.removeEventListener('resize', resizeObserver);
    };
  }, []);

  return (
    <>
      <button onClick={() => setOpen(true)} className="block md:hidden text-2xl text-white active:scale-95 focus:outline-none transition">
        <FiMenu />
      </button>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 flex justify-start items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="-translate-x-1/2"
              enterTo="translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="translate-y-0"
              leaveTo="-translate-x-1/2"
            >
              <Dialog.Panel className="min-h-screen overflow-y-auto w-1/2 sm:w-1/3 bg-metaco_bg flex flex-col items-center px-5 py-7">
                <div className="w-full flex flex-col gap-3 mb-4">
                  <SidebarLink to="/leaderboard">Leaderboard</SidebarLink>

                  <SidebarLink to="/explorer">Explorer</SidebarLink>
                </div>
                <div className="w-full flex flex-col gap-4 mb-auto">
                  <span className="text-lg text-white hover:text-gray-200 active:scale-95 transition cursor-pointer">
                    <BsSearch />
                  </span>
                  <button className="py-2 w-32 rounded-xl text-white font-bold bg-sky-600 hover:bg-sky-700 transition active:scale-95">
                    Connect
                  </button>
                </div>
                <div
                  onClick={() => {
                    setOpen(false);
                    navigate('/');
                  }}
                  className="h-[30px]"
                >
                  <MetacoLogo className="h-full object-contain" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
