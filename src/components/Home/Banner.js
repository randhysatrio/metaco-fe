import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import banner_1 from '../../assets/images/banner/Home/banner_1.jpg';
import banner_2 from '../../assets/images/banner/Home/banner_2.jpg';
import banner_3 from '../../assets/images/banner/Home/banner_3.jpg';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Banner() {
  const banners = [banner_1, banner_2, banner_3];
  return (
    <div className="w-full h-96 relative">
      <div className="h-full w-32 text-2xl flex items-center justify-end absolute z-20 cursor-pointer prev">
        <FaChevronLeft className="text-gray-200 hover:text-gray-50 transition" />
      </div>
      <div className="h-full w-32 text-2xl flex items-center absolute z-20 right-0 cursor-pointer next">
        <FaChevronRight className="text-gray-200 hover:text-gray-50 transition" />
      </div>
      <Swiper navigation={{ prevEl: '.prev', nextEl: '.next' }} modules={[Navigation]} loop={true} className="h-full w-full">
        {banners.map((banner) => (
          <SwiperSlide className="h-full w-full flex items-center justify-center relative">
            <img src={banner} className="h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-metaco_bg top-[50%]"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
