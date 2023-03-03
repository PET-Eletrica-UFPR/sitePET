// @ts-nocheck
import { Divider, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { ReactElement } from "react"

interface GenericSummaryProps {
  mirror?: boolean;
  image: string;
  title: string;
  summary: string[] | ReactElement;
}

export function GenericSummary({ mirror = false, image, title, summary }: GenericSummaryProps) {

  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })
  
  let left = null;

  if(!isMobile){
   left = <Image src={image} width={580} height={350} />;
  } 

  const divider = <Divider borderColor='#EBD64C' border= '1px' w={['200px','728px']} my='40px'/>

  const right = (
    <div>
      <Heading as='h2' fontSize={['sm', '2xl']} mb={[1, 10]} backgroundColor='#00509D' color='white' p={[5, 10]} borderRadius={["30px", '50px']} textAlign='center'>{title}</Heading>
      {summary.map((paragraph) => (
        <Text color='gray.600'>{paragraph}</Text>
      ))}    
    </div>
    
  );

  let elements;
  if (mirror) {
    elements = [right , left];
  } else {
    elements = [left, right];
  }

  return (
    <Flex flexDirection='column' align='center'>
      <Flex flexDirection='row' align='start' justify='stretch' m={5} p={5} gap={10} px = {20}>
        {elements}      
      </Flex>
      {divider}
    </Flex>
  );
}
