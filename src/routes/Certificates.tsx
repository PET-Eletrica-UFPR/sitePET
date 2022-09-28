import { Box, Center, Flex, Heading, Select, Stack, Text } from '@chakra-ui/react';
import { Abstract } from '../components/Abstract';

// TODO: Adicionar links e responsividade
export function Certificates() {
  return (
    <>
    <Abstract title='DOCUMENTOS E CERTIFICADOS' image='/abstractCertificates.png'>
      O Programa PET durante o semestre disponibiliza e promove diversos cursos,
      palestras, seminários, semanas acadêmicas e outros eventos. Todos esses acontecimentos são
      voltados ao ensinamento de novas habilidades, assim como a utilização de ferramentas uteis
      dentro do curso e no mercado de trabalho. Ferramentas de programação, organização, eletrônica,
      entre outras áreas são disponibilizadas, muitas vezes gratuitamente, aos alunos da graduação de
      Engenharia Elétrica da UFPR e possivelmente a outros interessados.
      O grupo PET busca profissionalizar e melhorar o currículos dos alunos da graduação sempre buscando pessoas que
      saibam de assuntos variados para a promoção desses eventos. Professores, engenheiros, técnicos, entre outras profissões
      são convidados, assim como alguns dos próprios petianos que já possuem as habilidades e desejam passar esse conhecimento para frente.
      Para mais informações sobre o histórico do PET com essas aulas, palestras e cursos, assim como atualizações sobre os futuros
      acontecimentos,  busque a aba “Eventos”.
    </Abstract>

      <Center py='2rem' mb='2 rem'>
        <Heading>
          DOCUMENTOS
        </Heading>
      </Center>

      <Flex direction='column'>
          <Stack spacing='30rem' direction='row'>
            <Select 
              variant='flushed'
              placeholder='2017' 
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-l, #00509D, #FFFFFF)"
              ml='5rem'
              borderLeftRadius='1rem'
              color='white'
              textAlign='center'
              
            >
              <option value='option1' disabled >Planejamento</option>
              <option value='option1' disabled >Edital PS</option>

            </Select>

            <Select 
              variant='flushed'
              placeholder='2019' 
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-l, #00509D, #FFFFFF)"
              ml='5rem'
              borderLeftRadius='1rem'
              color='white'
              textAlign='center'
              
            >
              <option value='option1' disabled >Planejamento</option>
              <option value='option1' disabled >Edital PS</option>

            </Select>

            <Select 
              variant='flushed'
              placeholder='2021' 
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-l, #00509D, #FFFFFF)"
              ml='5rem'
              borderLeftRadius='1rem'
              color='white'
              textAlign='center'
              
            >
              <option value='option1' disabled >Planejamento</option>
              <option value='option1' disabled >Edital PS</option>

            </Select>
          </Stack>

        <Box
          w='100%' 
          bg='#00509D' 
          py = '1rem'
          my='2rem'
        >

        </Box>

        <Stack spacing='30rem' direction='row' ml='18rem' mb='5rem'>
            <Select 
              variant='flushed'
              placeholder='2018' 
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-r, #00509D, #FFFFFF)"
              ml='5rem'
              borderLeftRadius='1rem'
              color='white'
              textAlign='center'
              
            >
              <option value='option1' disabled >Planejamento</option>
              <option value='option1' disabled >Edital PS</option>

            </Select>

            <Select 
              variant='flushed'
              placeholder='2020' 
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-r, #00509D, #FFFFFF)"
              ml='5rem'
              borderLeftRadius='1rem'
              color='white'
              textAlign='center'
              
            >
              <option value='option1' disabled >Planejamento</option>
              <option value='option1' disabled >Edital PS</option>

            </Select>

            <Select 
              variant='flushed'
              placeholder='2022' 
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-r, #00509D, #FFFFFF)"
              ml='10rem'
              borderLeftRadius='1rem'
              color='white'
              textAlign='center'
              
            >
              <option value='option1' disabled >Planejamento</option>
              <option value='option1' disabled >Edital PS</option>

            </Select>
          </Stack>
      </Flex>
      
    
    </>
    
  );
}
