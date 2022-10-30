import { Center, Flex, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface StudentProps {
  image: string;
  name: ReactNode;
  jobName: ReactNode;
  testimonial: ReactNode;
}
export function Student({ image, name, jobName, testimonial }: StudentProps) {
  return(
    <Center flexDirection="column" w = "300px" mx = "2rem">
      <Image src={image}></Image>
      <Text fontSize="3xl" fontWeight="bold">{name}</Text>
      <Text fontSize="2xl" fontWeight="semibold" color="#A8A8B3" align="center">{jobName}</Text>
      <Text fontSize="1xl" color="#A8A8B3" align="center">{testimonial}</Text>
    </Center>
  );
}