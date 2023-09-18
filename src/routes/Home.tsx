import { Flex } from '@chakra-ui/react';
import { Testmonials } from '../components/ Testimonials';
import { Carousel } from '../components/Carousel';
import { Companies } from '../components/Companies';
import { News } from '../components/News';
import { PersonalContent } from '../components/PersonalContent';
import { Heading } from "@chakra-ui/react";


export function Home() {

  return (
    <>
      <Flex direction="column" alignItems="center">
      <Heading
                as='h2'
                fontSize={["sm",'3xl']}
                w = '100%'
                my="0.5rem"
                backgroundColor='#EBD64C'
                color='#1A202D' p={3}
                textAlign='center'
                  >
                    Quem somos e o que fazemos
        </Heading>

        <Carousel />
        <Heading
                as='h2'
                fontSize={["sm",'3xl']}
                w = '100%'
                my="0.5rem"
                backgroundColor='#EBD64C'
                color='#1A202D' p={3}
                textAlign='center'
                  >
                    Nossos objetivos
        </Heading>
        <PersonalContent/>
        <Testmonials />
      </Flex>
      <Companies />
      <News />
    </>
  );
}

