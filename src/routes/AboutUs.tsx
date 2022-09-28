import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Abstract } from '../components/Abstract';


export function AboutUs() {
  return (
    <>
      <Abstract title='SOBRE NÓS' image='abstractAboutUs.svg'>
        O Programa de Educação Tutorial (PET) é um programa do governo federal que mantém grupos de educação
        tutorial em cursos de graduação de universidades de todo o Brasil. Esses grupos, chamados de “grupos PET”
        se orientam, no desenvolvimento de suas atividades, pelo princípio da indissociabilidade entre ensino, pesquisa e extensão.
        O PET propicia aos estudantes participantes, sob a orientação de um tutor, a realização de atividades extracurriculares
        que complementem a sua formação acadêmica e atendam às necessidades do próprio curso de graduação. O estudante e o professor tutor
        recebem apoio financeiro.
      </Abstract>

      <Flex align='center' direction='row'  px='5rem' justifyContent='center'>
        <Box 
          bg="#00509D" 
          borderRightRadius = '5rem' 
          borderBottomRadius ='5rem'
          pl='1rem'
          ml='auto'
          margin='1.5rem'
        > 
          <Image 
            src='/aboutUs/fotoLolis.png' 
            boxSize='18rem' 
            borderRightRadius='5rem' 
            borderBottomRadius='5rem'
          >
          </Image>
        </Box>

        <Box 
          ml='5rem'
          w='50%' 
          bgGradient="linear(to-r, #00509D, #FFFFFF)" 
          p = '1rem'
          borderLeftRadius='1rem'
        >
          <Text color='white' fontWeight='bold' fontSize='2rem'>Tutor</Text>
          <Text color='white' fontWeight='bold' fontSize='2rem'>Professor Luis Henrique Assumpção Lolis</Text>
        </Box>
      </Flex>
      
        <Image src='/aboutUs/bodyAbout.svg' w = '100%'></Image>
    </>
  );
}
