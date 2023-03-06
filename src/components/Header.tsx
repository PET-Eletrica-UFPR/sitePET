import { Flex, Link, Image, HStack, useBreakpointValue } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { NavLink, NavLinkProps } from 'react-router-dom';


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
      bg='#000000'
      color='#A8A8B3'
      w = '100%'
      >
        <Flex
        >
          <Link as={ReactRouterLink} to='/'>
            <Image
            src="/logoptt.svg"
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
    bg='#000000'
    color='white'
    w = '100%'
    >
      <Flex
      >
        <Link as={ReactRouterLink} to='/'>
          <Image
          src="/logoptt.svg"
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

        <NavLink style={({ isActive }) => ({ color: isActive ? '#ffd230' : '#ffd230', fontWeight: isActive ? 'Bold' : 'Normal', })} to="/">Inicio </NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive ? '#ffd230' : '#ffd230', fontWeight: isActive ? 'Bold' : 'Normal', })} to='/projects'>Projetos</NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive ? '#ffd230' : '#ffd230', fontWeight: isActive ? 'Bold' : 'Normal', })} to='/graduation' >Graduação</NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive ? '#ffd230' : '#ffd230', fontWeight: isActive ? 'Bold' : 'Normal', })} to='/extension' >Extensão</NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive ? '#ffd230' : '#ffd230', fontWeight: isActive ? 'Bold' : 'Normal', })} to='/events' >Eventos</NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive ? '#ffd230' : '#ffd230', fontWeight: isActive ? 'Bold' : 'Normal', })} to='/certificates' >Documentos</NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive ? '#ffd230' : '#ffd230', fontWeight: isActive ? 'Bold' : 'Normal', })} to='/about-us' >Sobre Nós</NavLink>
      </HStack>
    </Flex>
  );
}
