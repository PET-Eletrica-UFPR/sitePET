import { Flex } from '@chakra-ui/react';
import { Testmonials } from '../components/ Testimonials';
import { Carousel } from '../components/Carousel';
import { Companies } from '../components/Companies';
import { PersonalContent } from '../components/PersonalContent';



export function Home() {

  return (
    <>
      <Flex direction="column" alignItems="center">
        <Carousel />
        <PersonalContent/>
        <Testmonials />
      </Flex>      
      <Companies />
    </>
  );
}
