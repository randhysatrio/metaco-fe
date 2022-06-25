import { ReactComponent as MetacoLogo } from '../../assets/logo/metaco_logo.svg';
import { BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="w-full min-h-[80px] bg-metaco_header flex flex-col gap-2 md:flex-row items-center md:justify-center">
      <div className="w-full md:w-[30%] py-4 md:py-0 flex items-center justify-center md:justify-end lg:justify-center gap-6 md:gap-4 lg:gap-7">
        <div className="h-6 lg:h-8 flex items-center justify-center">
          <MetacoLogo className="h-full object-contain" />
        </div>
        <span className="w-32 md:w-28 lg:w-44 text-[11px] lg:text-xs text-white text-center">Copyright © Metaco. All Rights Reserved</span>
      </div>
      <div className="flex text-xs font-bold text-gray-400 items-center justify-center gap-4 w-full md:w-[40%]">
        <span className="hover:text-white transition cursor-pointer">About Us</span>
        <span className="hover:text-white transition cursor-pointer">Careers</span>
        <span className="hover:text-white transition cursor-pointer">Notification Guidelines</span>
      </div>
      <div className="w-full md:w-[30%] py-3 md:py-0 flex items-center justify-center md:justify-end gap-2 lg:gap-4 md:pr-6 xl:pr-14">
        <div className="p-3 text-lg text-white bg-gray-700 hover:bg-gray-500 rounded-full transition cursor-pointer">
          <BsYoutube />
        </div>
        <div className="p-3 text-lg text-white bg-gray-700 hover:bg-gray-500 rounded-full transition cursor-pointer">
          <BsInstagram />
        </div>
        <div className="p-3 text-lg text-white bg-gray-700 hover:bg-gray-500 rounded-full transition cursor-pointer">
          <FaFacebookF />
        </div>
        <div className="p-3 text-lg text-white bg-gray-700 hover:bg-gray-500 rounded-full transition cursor-pointer">
          <BsTwitter />
        </div>
      </div>
    </div>
  );
}
