// @ts-nocheck
import { Divider, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { ReactElement } from "react"

interface CalouroSummaryProps {
  mirror?: boolean;
  image: string;
  title: any;
  summary: string[] | ReactElement;
  baseBoard: any;
}
function handleDownload(event:  React.ChangeEvent<HTMLSelectElement>) {
    const filePath = event.currentTarget.value;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = "Documento";
    link.click();
  }

export function CalouroSummary({ mirror = false, image, title, summary, baseBoard }: CalouroSummaryProps) {

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
      <Heading as='h2' fontSize={['sm', '2xl']} mb={[1, 10]} backgroundColor='#000000' color='white' p={[5, 10]} borderRadius={["30px", '50px']} textAlign='center'>{title}</Heading>
      {summary.map((paragraph) => (
        <Text color='gray.600'>{paragraph}</Text>
      ))}
      <Heading marginTop={10} fontSize={[15]} mb={[1, 10]} backgroundColor='#66CDAA' color='white' p={[1, 5]} borderRadius={["30px", '50px']} borderWidth={[2]} borderColor='black' textAlign='center' onChange={handleDownload}>{baseBoard}</Heading>
         
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
