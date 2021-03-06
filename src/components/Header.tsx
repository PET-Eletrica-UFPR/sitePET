import { Flex, Link, Image, HStack } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';


export function Header() {
  return (
    <Flex
    as='header'
    direction='row'
    justify='space-between'
    align='center'
    px={20}
    bg='#0045AD'
    color='#A8A8B3'
    >
      <Flex
      >
        <Image
          src="/Logo.svg"
          alt="logoFace"
          boxSize='120px'
        />

      </Flex>
      <HStack
        spacing={20}
        ml = 'auto'
        mr='auto'
      >

        <Link as={ReactRouterLink} to='/'>Início</Link>
        <Link as={ReactRouterLink} to='/projects'>Projetos</Link>
        <Link as={ReactRouterLink} to='/graduation'>Graduação</Link>
        <Link as={ReactRouterLink} to='/extension'>Extensão</Link>
        <Link as={ReactRouterLink} to='/events'>Eventos</Link>
        <Link as={ReactRouterLink} to='/certificates'>Documentos</Link>
        <Link as={ReactRouterLink} to='/about-us'>Sobre Nós</Link>

      </HStack>
    </Flex>
  );
}
