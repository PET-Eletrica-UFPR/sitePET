import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface AbstractProps {
  title: string;
  image: string;
  children: ReactNode
}
export function Abstract({title, image, children}: AbstractProps) {
  return(
    <Flex 
      align='center' 
      bgImage= {image}
      bgPosition="center"
      bgRepeat='no-repeat'
      bgSize='100%'
      bgColor='#A8D5FF80'
    >
      <Flex
        direction='column'
        px={20}
        py={10}  
        >
        <Heading as='h1' mr='auto' mb={5} >{title}</Heading>
        <Text fontSize='lg'>
          {children}
        </Text>
      </Flex>

    </Flex>
  )
}