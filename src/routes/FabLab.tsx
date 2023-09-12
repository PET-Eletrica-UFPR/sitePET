import { Abstract } from '../components/Abstract';
import {Flex, Image, Button, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";


export function FabLab() {
    return (
      <>
        <Abstract title='EVENTOS' image='/abstractEvents.png'>
          O FabLab é um projeto dentro do PET que possui Impressoras 3D, Fresadora e Corte a laser para o uso acadêmico. Confira alguns pedidos realizados pelo projeto sob demanda!
        </Abstract>
        <Heading
                as='h2'
                fontSize={["sm",'3xl']}
                w = '100%'
                my="0.5rem"
                backgroundColor='#EBD64C'
                color='#1A202D' p={3}
                textAlign='center'
                  >
                    Nossos projetos
        </Heading>

        <Swiper

        slidesPerView={7}
        spaceBetween= {15}
        navigation={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Keyboard, Pagination]}

      >
        <SwiperSlide><Image src='FabLab/torre.png' alt="torre" /></SwiperSlide>
        <SwiperSlide><Image src='FabLab/bobina.png' alt="bobina" /></SwiperSlide>
        <SwiperSlide><Image src='FabLab/chaveiro.png' alt="chaveiro" /></SwiperSlide>
        <SwiperSlide><Image src='FabLab/torre.png' alt="torre" /></SwiperSlide>
        <SwiperSlide><Image src='FabLab/bobina.png' alt="bobina" /></SwiperSlide>
        <SwiperSlide><Image src='FabLab/chaveiro.png' alt="chaveiro" /></SwiperSlide>
        <SwiperSlide><Image src='FabLab/torre.png' alt="torre" /></SwiperSlide>
        <SwiperSlide><Image src='FabLab/bobina.png' alt="bobina" /></SwiperSlide>
        <SwiperSlide><Image src='FabLab/chaveiro.png' alt="chaveiro" /></SwiperSlide>
        </Swiper>

        <Heading
                as='h2'
                fontSize={["sm",'3xl']}
                w = '100%'
                my="0.5rem"
                backgroundColor='#EBD64C'
                color='#1A202D' p={3}
                textAlign='center'
                  >
                    Se interessou? <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7LBOCGwoh82jiFNly8USwSF1a_Yb40u29GTK9rIWV_0Iqdg/viewform" target="_blank"> <u>Clique aqui para acessar o formulário! </u> </a>
        </Heading>



      </>
    );
  }

