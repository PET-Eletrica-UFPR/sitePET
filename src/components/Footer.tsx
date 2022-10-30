import { Flex, Heading, Text, Image, Link } from '@chakra-ui/react';

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
        <Heading size={["sm", 'md']}>Contato</Heading>
        <Text fontSize={["xs",'sm']} mt={[1, 5]}>Universidade Federal do Paraná</Text>
        <Text fontSize={["xs",'sm']}>Campus Politécnico</Text>
        <Text fontSize={["xs",'sm']}>Av. Cel. Francisco H. dos Santos - Jardim das Américas</Text>
        <Text fontSize={["xs",'sm']} mb={[1, 5]}>Curitiba - PR. 81530-000</Text>
        <Text fontSize={["xs",'sm']}>pet@eletrica.ufpr.br</Text>
      </Flex>
      <Flex
      ml = {["2rem", 'auto']}
      mr = {[0, 20]}
      >
        <Link href='https://pt-br.facebook.com/petengeletricaufpr/' isExternal>
          <Image
            src="/logoFace.png"
            alt="logoFace"
            boxSize='40px'
          />
        </Link>
        
        <Link href='https://www.instagram.com/pet_eletrica/' isExternal>
          <Image
            src="/logoInsta.png"
            alt="logoInsta"
            boxSize='40px'
          />
        </Link>
        
        </Flex>
    </Flex>
  );
}
