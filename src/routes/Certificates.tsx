import { Box, Center, Flex, Heading, Select, Stack, Text } from '@chakra-ui/react';
import { Abstract } from '../components/Abstract';
import * as React from "react";
import { setValues } from 'framer-motion/types/render/utils/setters';


// interface EventProps {
//   event: Event
// }
function handleDownload(event:  React.ChangeEvent<HTMLSelectElement>) {
  const filePath = event.currentTarget.value;
  const link = document.createElement('a');
  link.href = filePath;
  link.download = "Documento";
  link.click();
}

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
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-l, #ffd230, #FFFFFF)"
              ml='5rem'
              borderLeftRadius='1rem'
              color='black'
              textAlign='center'
              onChange={handleDownload}
        
              
            >
              <option selected hidden > 2017 </option>
              <option value="documentos/Ps17.pdf">PS 2017</option>
              <option value="documentos/pla17.pdf"> Planejamento 2017</option>
              <option value="documentos/rel17.pdf">Relatório 2017</option>
              

            </Select>

            <Select 
              variant='flushed'
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-l, #ffd230, #FFFFFF)"
              ml='5rem'
              borderLeftRadius='1rem'
              color='black'
              textAlign='center'
              onChange={handleDownload}
              
            >
              <option selected hidden > 2019 </option>
              <option value="documentos/Ps19.pdf">PS 2019</option>
              <option value="documentos/pla19.pdf"> Planejamento 2019</option>
              <option value="documentos/rel19.pdf">Relatório 2019</option>

            </Select>

            <Select 
              variant='flushed'
             
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-l, #ffd230, #FFFFFF)"
              ml='5rem'
              borderLeftRadius='1rem'
              color='black'
              textAlign='center'
              onChange={handleDownload}
              
            >
              <option selected hidden > 2021 </option>
              <option value="documentos/Ps21.pdf">PS 2021</option>
              <option value="documentos/pla21.pdf"> Planejamento 2021</option>
              <option value="documentos/rel21.pdf">Relatório 2021</option>

            </Select>
          </Stack>

        <Box
          w='100%' 
          bg='#000000' 
          py = '1rem'
          my='2rem'
        >

        </Box>

        <Stack spacing='30rem' direction='row' ml='15rem' mb='5rem'>
            <Select 
              variant='flushed' 
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-r, #ffd230, #FFFFFF)"
              ml='5rem'
              borderLeftRadius='1rem'
              color='black'
              textAlign='center'
              onChange={handleDownload}
            >
              <option selected hidden > 2018 </option>
              <option value="documentos/Ps18.pdf">PS 2018</option>
              <option value="documentos/pla18.pdf"> Planejamento 2018</option>
              <option value="documentos/rel18.pdf">Relatório 2018</option>

            </Select>

            <Select 
              variant='flushed'
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-r, #ffd230, #FFFFFF)"
              ml='5rem'
              borderLeftRadius='1rem'
              color='black'
              textAlign='center'
              onChange={handleDownload}
              
            >
              <option selected hidden > 2020 </option>
              <option value="documentos/Ps20.pdf">PS 2020</option>
              <option value="documentos/pla20.pdf"> Planejamento 2020</option>
              <option value="documentos/rel20.pdf">Relatório 2020</option>

            </Select>

            <Select 
              variant='flushed' 
              fontWeight='bold' 
              fontSize='1.5rem'
              h='4rem' 
              w='10rem' 
              bgGradient="linear(to-r, #ffd230, #FFFFFF)"
              ml='10rem'
              borderLeftRadius='1rem'
              color='black'
              textAlign='center'
              onChange={handleDownload}
              
              
            >
              <option selected hidden > 2022 </option>
              <option value="documentos/Ps22.pdf">PS 2022</option>
              <option value="documentos/pla22.pdf"> Planejamento 2022</option>
              <option value="documentos/rel22.pdf">Relatório 2022</option>
            

            </Select>
          </Stack>
      </Flex>
      
    
    </>
    
  );
}
