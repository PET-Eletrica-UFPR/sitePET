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
        <SwiperSlide>  <Image src='carousel/carou.png'  alt='membros' /> </SwiperSlide>
        <SwiperSlide> <a href="https://siepe2023.ufpr.br/" target='_blank'> <Image src='carousel/carou1.png' alt='membros' /> </a> </SwiperSlide>
        <SwiperSlide> <a href="https://www.instagram.com/stories/highlights/18026408245480650/" target='_blank'> <Image src='carousel/carou2.png' alt='membros' /> </a>  </SwiperSlide>
        <SwiperSlide> <a href="https://www.instagram.com/stories/highlights/18004655836970567/" target='_blank'> <Image src='carousel/carou3.png' alt='membros' /> </a>  </SwiperSlide>
      </Swiper>
    </Flex>

  );
}
