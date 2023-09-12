import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Abstract } from '../components/Abstract';


export function AboutUs() {
  return (
    <>
      <Abstract title='SOBRE NÓS' image='abstractAboutUs.svg'>
        O Programa de Educação Membro ial (PET) é um programa do governo federal que mantém grupos de educação
        Membro ial em cursos de graduação de universidades de todo o Brasil. Esses grupos, chamados de “grupos PET”
        se orientam, no desenvolvimento de suas atividades, pelo princípio da indissociabilidade entre ensino, pesquisa e extensão.
        O PET propicia aos estudantes participantes, sob a orientação de um  Membro , a realização de atividades extracurriculares
        que complementem a sua formação acadêmica e atendam às necessidades do próprio curso de graduação. O estudante e o professor Membro
        recebem apoio financeiro.
      </Abstract>

      <Flex align='center' direction='row'  px={['0.5rem', '5rem']}justifyContent='flex-start'>
          <Image
            src='/aboutUs/fotoLolis.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            margin='1.5rem'
            ml='1.5rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#F8FD00' fontWeight='bold' fontSize={['xs', '1.5rem']}> Tutor </Text>
          <a href="http://lattes.cnpq.br/6020002287949740"  target="_blank"><Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Prof. Luis Lolis</Text></a>
          <Text color='white' fontWeight='bold' fontSize={['xs', '0.8rem']}> Clique no nome para exibir Currículo/Linkedin </Text>
        </Box>

          <Image
            src='/aboutUs/natali.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            ml='1rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <a href="https://www.linkedin.com/in/n%C3%A1tali-sardi-a8031b218/"  target="_blank"><Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Nátali Sardi</Text></a>
        </Box>

          <Image
            src='/aboutUs/renan.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            ml='1rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <a href="https://www.linkedin.com/in/renan-molina-039a481b6/"  target="_blank"><Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}> Renan Molina</Text></a>
        </Box>

      </Flex>
      <Flex align='center' direction='row'  px={['0.5rem', '5rem']}justifyContent='flex-start'>
          <Image
            src='/aboutUs/MariaP.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            margin='1.5rem'
            ml='1.5rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <a href="https://www.linkedin.com/in/maria-paula-14379b1a8/?trk=contact-info"  target="_blank"><Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Maria Paula</Text></a>
        </Box>

          <Image
            src='/aboutUs/Thais.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            mmargin='1.5rem'
            ml='1.5rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <a href="https://www.linkedin.com/in/tha%C3%ADs-melo-ba29111bb/"  target="_blank"><Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Thaís Celi</Text></a>
        </Box>

          <Image
            src='/aboutUs/pedroH.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            ml='1rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Pedro Henrique</Text>
        </Box>
      </Flex>
      <Flex align='center' direction='row'  px={['0.5rem', '5rem']}justifyContent='flex-start'>

          <Image
            src='/aboutUs/carlos.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            margin='1.5rem'
            ml='1.5rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Carlos Alberto</Text>
        </Box>

          <Image
            src='/aboutUs/RicardoM.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            margin='1.5rem'
            ml='1.5rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <a href="https://www.linkedin.com/in/rickmeira/"  target="_blank"><Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Ricardo Meira</Text></a>
        </Box>

          <Image
            src='/aboutUs/Marina.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            margin='1.5rem'
            ml='1.5rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <a href="https://www.linkedin.com/in/marinavasconceloss/"  target="_blank"><Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Marina Vascon.</Text></a>
        </Box>
      </Flex>
      <Flex align='center' direction='row'  px={['0.5rem', '5rem']}justifyContent='flex-start'>

          <Image
            src='/aboutUs/MariaE.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            margin='1.5rem'
            ml='1.5rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <a href="https://www.linkedin.com/in/maria-negrelli-011094242/"  target="_blank"><Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Maria Eduarda</Text></a>
        </Box>

          <Image
            src='/aboutUs/Flach.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            margin='1.5rem'
            ml='1.5rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <a href="https://www.linkedin.com/in/gustavoflach/"  target="_blank"><Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Gustavo Flach</Text></a>
        </Box>

          <Image
            src='/aboutUs/Stocco.jpeg'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            margin='1.5rem'
            ml='1.5rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Arthur Stocco</Text>
        </Box>
      </Flex>
      <Flex align='center' direction='row'  px={['0.5rem', '5rem']}justifyContent='flex-start'>

          <Image
            src='/aboutUs/LucasVit.png'
            boxSize={['5rem','13rem']}
            borderTopRadius={['1rem', '2rem']}
            borderBottomRadius={['1rem', '3rem']}
            margin='1.5rem'
            ml='1.5rem'
          >
          </Image>

        <Box
          ml='1rem'
          w={['100px','19%']}
          bgGradient="linear(to-r, #000000, #ffd230)"
          p = {['0.5rem', '1rem']}
          borderLeftRadius={'1rem'}
          borderRightRadius={'1rem'}
        >
          <Text color='#ffd230' fontWeight='bold' fontSize={['xs', '1.5rem']}> Membro </Text>
          <a href="https://www.linkedin.com/in/lucasvitkoski/"  target="_blank"><Text color='white' fontWeight='bold' fontSize={['xs', '2rem']}>Lucas Vitkoski </Text></a>
        </Box>

      </Flex>
    </>
  );
}
