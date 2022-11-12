import {Flex, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export function Carousel() {
  return (
    <Flex>
      <Swiper
        slidesPerView={"auto"}
        navigation={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Keyboard]}
      >
        <SwiperSlide> <Image src='home/members2.png' alt='membros' />  </SwiperSlide>
        <SwiperSlide> <Image src='home/Feira2.png' alt='membros' />  </SwiperSlide>
        <SwiperSlide> <Image src='home/SATEL7.png' alt='membros' />  </SwiperSlide>
        <SwiperSlide> <Image src='home/SIEPE2.png' alt='membros' />  </SwiperSlide>
      </Swiper>
    </Flex>
    
  );
}