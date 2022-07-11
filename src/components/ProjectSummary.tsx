import { Container, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface ProjectSummaryProps {
  image: string;
  title: string;
  subtitles: string[];
  summary: string[];
}

export function ProjectSummary({ image, title, subtitles, summary }: ProjectSummaryProps) {
  return (
    <Flex flexDirection='row' align='start' justify='stretch' m={5} p={5} px = {20}>
      <Image src={image} mr={20} width={330} height={180} />
      <div>
        <Heading as='h2' fontSize='2xl' mb={2}>{title}</Heading>
        {subtitles.map((subtitle) => (
          <Heading as='h3' fontSize='xl' fontWeight='normal' mb={2}>{subtitle}</Heading>
        ))}
        {summary.map((paragraph) => (
          <Text color='gray.600'>{paragraph}</Text>
        ))}
        
        <Divider borderColor='#EBD64C' border= '1px' w='728px' mt='40px'/>
      </div>
    </Flex>
  )
}
