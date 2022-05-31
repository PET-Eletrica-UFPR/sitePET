import { Flex, Heading, Text } from '@chakra-ui/react';


export function Footer() {
  return (
    <Flex as='footer' flexDirection='column' px={10} py={5}>
      <Heading size='md'>Contato</Heading>
      <Text fontSize='sm' mt={5}>Universidade Federal do Paraná</Text>
      <Text fontSize='sm'>Campus Politécnico</Text>
      <Text fontSize='sm'>Av. Cel. Francisco H. dos Santos - Jardim das Américas</Text>
      <Text fontSize='sm' mb={5}>Curitiba - PR. 81530-000</Text>
      <Text fontSize='sm'>pet@eletrica.ufpr.br</Text>
    </Flex>
  );
}
