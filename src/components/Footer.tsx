import { Flex, Heading, Text, Image } from '@chakra-ui/react';

export function Footer() {
  return (
    <Flex
      as='footer'
      align='center'
      bg='#C4C4C4'
      px={20}
      py={10}
    >
      <Flex flexDirection='column'  >
        <Heading size='md'>Contato</Heading>
        <Text fontSize='sm' mt={5}>Universidade Federal do Paraná</Text>
        <Text fontSize='sm'>Campus Politécnico</Text>
        <Text fontSize='sm'>Av. Cel. Francisco H. dos Santos - Jardim das Américas</Text>
        <Text fontSize='sm' mb={5}>Curitiba - PR. 81530-000</Text>
        <Text fontSize='sm'>pet@eletrica.ufpr.br</Text>
      </Flex>
      <Flex
      ml = 'auto'
      mr = {20}
      >
        <Image
          src="./public/logoFace.png"
          alt="logoFace"
          boxSize='40px'
        />
        <Image
          src="./public/logoInsta.png"
          alt="logoInsta"
          boxSize='40px'
        />
        </Flex>
    </Flex>
  );
}
