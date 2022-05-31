import { Flex, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';


export function Header() {
  return (
    <Flex as='header' direction='row' justify='space-between' px={20} py={10}>
      <Link as={ReactRouterLink} to='/'>Início</Link>
      <Link as={ReactRouterLink} to='/projects'>Projetos</Link>
      <Link as={ReactRouterLink} to='/graduation'>Graduação</Link>
      <Link as={ReactRouterLink} to='/extension'>Extensão</Link>
      <Link as={ReactRouterLink} to='/events'>Eventos</Link>
      <Link as={ReactRouterLink} to='/certificates'>Documentos</Link>
      <Link as={ReactRouterLink} to='/about-us'>Sobre Nós</Link>
    </Flex>
  );
}
