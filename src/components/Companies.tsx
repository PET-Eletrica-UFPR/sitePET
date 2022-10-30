import { HeadingBar } from "./HeadingBar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Keyboard, Pagination } from "swiper";
import { Flex, Image } from "@chakra-ui/react";

export function Companies() {
  return(
    <>
    <HeadingBar title="EMPRESAS EM QUE EX-PETIANOS ATUAM"/>
      <Swiper
        
        slidesPerView={4}
        spaceBetween= {15}
        navigation={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Keyboard, Pagination]}
      >
        <SwiperSlide><Image src='home/companies/puma.png' alt="puma" /></SwiperSlide>
        <SwiperSlide><Image src='home/companies/bosch.png' alt="bosch" /></SwiperSlide>
        <SwiperSlide><Image src='home/companies/renault.png' alt="renault" /></SwiperSlide>
        <SwiperSlide><Image src='home/companies/volvo.png' alt="volvo" /></SwiperSlide>
      </Swiper>
    </>
  );
}