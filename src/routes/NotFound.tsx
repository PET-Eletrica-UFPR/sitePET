import { Flex, Heading, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';


export function NotFound() {
  return (
    <Flex px={10} py={5} direction='column' align='center'>
      <Heading as='h1' mb={5}>Página não encontrada</Heading>
      <Link as={ReactRouterLink} to='/'>Voltar ao início</Link>
    </Flex>
  );
}
