import { Flex, Heading, Image, Text } from '@chakra-ui/react';

interface GenericSummaryProps {
  mirror?: boolean;
  image: string;
  title: string;
  summary: string[];
}

export function GenericSummary({ mirror = false, image, title, summary }: GenericSummaryProps) {
  const left = <Image src={image} width={580} height={350} />;

  const right = (
    <div>
      <Heading as='h2' fontSize='3xl' mb={10} backgroundColor='#00509D' color='white' p={10} borderRadius='50px' textAlign='center'>{title}</Heading>
      {summary.map((paragraph) => (
        <Text>{paragraph}</Text>
      ))}
    </div>
  );

  let elements;
  if (mirror) {
    elements = [right, left];
  } else {
    elements = [left, right];
  }

  return (
    <Flex flexDirection='row' align='start' justify='stretch' m={5} p={5} borderBottom='solid 2px #EBD64C' gap={10}>
      {elements}
    </Flex>
  );
}
