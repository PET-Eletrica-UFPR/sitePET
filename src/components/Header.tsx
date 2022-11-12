import { Flex, Link, Image, HStack, useBreakpointValue } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';


export function Header() {

  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  if(isMobile) {
    return(
      <Flex
      as='header'
      direction='row'
      justify='space-between'
      align='center'
      px={["5", "20"]}
      bg='#0045AD'
      color='#A8A8B3'
      w = '100%'
      >
        <Flex
        >
          <Link as={ReactRouterLink} to='/'>
            <Image
            src="/Logo.svg"
            alt="logoFace"
            boxSize='80px'
          />
          </Link>
          

        </Flex>
        <HStack
          spacing={5}
          ml = 'auto'
          mr='auto'
        >

          <Link as={ReactRouterLink} to='/' fontSize={["xs", "2xl"]}>Início</Link>
          <Link as={ReactRouterLink} to='/projects' fontSize={["xs", "2xl"]}>Projetos</Link>
          <Link as={ReactRouterLink} to='/extension' fontSize={["xs", "2xl"]}>Extensão</Link>
          <Link as={ReactRouterLink} to='/about-us' fontSize={["xs", "2xl"]}>Sobre Nós</Link>

        </HStack>
      </Flex>
  )};

  return (
    <Flex
    as='header'
    direction='row'
    justify='space-between'
    align='center'
    px={["5", "20"]}
    bg='#0045AD'
    color='white'
    w = '100%'
    >
      <Flex
      >
        <Link as={ReactRouterLink} to='/'>
          <Image
          src="/Logo.svg"
          alt="logoFace"
          boxSize='120px'
        />
        </Link>
        

      </Flex>
      <HStack
        spacing={["15", "19"]}
        ml = 'auto'
        mr='auto'
      >

        <Link as={ReactRouterLink} to='/' fontSize={["xs", "lg"]}>Início</Link>
        <Link as={ReactRouterLink} to='/projects' fontSize={["xs", "lg"]}>Projetos</Link>
        <Link as={ReactRouterLink} to='/graduation' fontSize={["xs", "lg"]}>Graduação</Link>
        <Link as={ReactRouterLink} to='/extension' fontSize={["xs", "lg"]}>Extensão</Link>
        <Link as={ReactRouterLink} to='/events' fontSize={["xs", "lg"]}>Eventos</Link>
        <Link as={ReactRouterLink} to='/certificates' fontSize={["xs", "lg"]}>Documentos</Link>
        <Link as={ReactRouterLink} to='/about-us' fontSize={["xs", "lg"]}>Sobre Nós</Link>

      </HStack>
    </Flex>
  );
}
