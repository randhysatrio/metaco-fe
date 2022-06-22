import { ReactComponent as MetacoLogo } from '../../assets/logo/metaco_logo.svg';
import footer from '../../assets/images/banner/Footer/footer.png';
import { BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[400px] flex items-center justify-center overflow-hidden relative cursor-pointer">
        <img src={footer} className="h-full object-cover scale-105" />
        <div className="flex flex-col absolute">
          <span className="text-4xl text-white font-semibold w-[450px] text-center tracking-wide">Find Latest Esport Event on Metaco</span>
        </div>
      </div>
      <div className="w-full h-20 bg-metaco_bg flex items-center justify-center">
        <div className="h-8 flex items-center justify-center gap-7 w-[30%]">
          <MetacoLogo className="h-full object-contain" />
          <span className="w-44 text-xs text-white text-center">Copyright © Metaco. All Rights Reserved</span>
        </div>
        <div className="flex text-xs font-bold text-gray-400 items-center justify-center gap-4 w-[40%]">
          <span className="hover:text-white transition cursor-pointer">About Us</span>
          <span className="hover:text-white transition cursor-pointer">Careers</span>
          <span className="hover:text-white transition cursor-pointer">Notification Guidelines</span>
        </div>
        <div className="flex items-center justify-end gap-4 w-[30%] pr-14">
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
    </div>
  );
}
