import { HeadingBar } from "./HeadingBar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Keyboard, Pagination } from "swiper";
import { Image, Link } from "@chakra-ui/react";
import { Headline } from "./Headline";
export function News() {
  return(

    <>
      <HeadingBar title="Notícias"/>
      <Swiper
        slidesPerView={4}
        spaceBetween= {3}
        navigation={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Keyboard, Pagination]}
      >
        <SwiperSlide>
          <Headline
            image="home/News/sbpc.png"
            description="A 75ª reunião anual do SBPC ocorrerá entre os dias 23 a 29 de Julho de 2023."
            link="http://portal.sbpcnet.org.br/eventos/75a-reuniao-anual-da-sbpc"
            linkDescription="Link para o site oficial"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Headline
            image="home/News/PremioCiencia.png"
            description="Estão abertas até dia 05 de julho de 2023 as inscrições para 36ª Edição do Prêmio Paranaense de Ciência e Tecnologia."
            link="https://www.seti.pr.gov.br/premio2023"
            linkDescription="Link para Inscrição"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Headline
            image="home/News/glasses.png"
            description="Confira os periódicos científicos lançados pela UFPR no início de 2023."
            link="https://revistas.ufpr.br/wp/"
            linkDescription="Link de acesso a Biblioteca Digital de Periódicos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Headline
            image="home/News/energia.png"
            description="Processo Inovador da UFPR torna células solares orgânicas mais duravéis e eficientes."
            link="https://ciencia.ufpr.br/portal/confira-os-periodicos-cientificos-lancados-pela-ufpr-no-inicio-de-2023/"
            linkDescription="Link para a notícia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Headline
            image="home/News/pintelect.png"
            description="Propriedade Intelectual e como proteger invenções desenvolvidas na UFPR."
            link="https://spin.ufpr.br/proteja-sua-invencao/"
            linkDescription="Link de acesso do informativo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Headline
            image="home/News/mercosul.png"
            description="A Agência UFPR Internacional torna público o edital para mobilidade acadêmica no âmbito do Programa AUGM."
            link="https://internacional.ufpr.br/portal/2023/04/03/augm-edital-de-mobilidade-saida-no-2o-semestre-de-2023/"
            linkDescription="Link de acesso ao Edital"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
