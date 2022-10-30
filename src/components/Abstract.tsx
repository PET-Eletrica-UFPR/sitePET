import { Flex, Heading, Image, Text, useBreakpointValue} from '@chakra-ui/react';
import { ReactNode } from 'react';

// TODO: Width bug
interface AbstractProps {
  title: string;
  image: string;
  children: ReactNode;
}
export function Abstract({title, image, children}: AbstractProps) {

  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  if(isMobile){
    return(
      <Flex
        h={["auto", '400px']}
        bgColor='#A8D5FF80'
      >
        <Flex
          direction='column'
          px={20}
          py={10}
          >
          <Heading as='h1' fontSize={["xs", 'lg']} mr='auto' mb={5} >{title}</Heading>
          <Text fontSize={["xs", 'lg']} color='gray.600'>
            {children}
          </Text>
        </Flex>
      </Flex>
    )
  }
  return(
    <Flex
      h={["auto", '400px']}
      
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
        <Heading as='h1' fontSize={["xs", 'lg']} mr='auto' mb={5} >{title}</Heading>
        <Text fontSize={["xs", 'lg']} color='gray.600'>
          {children}
        </Text>
      </Flex>
    </Flex>
  )
}
