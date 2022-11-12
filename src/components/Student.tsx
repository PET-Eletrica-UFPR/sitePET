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
    <Center flexDirection="column" w = {["100px","300px"]} mx = {["10px","2rem"]}>
      <Image src={image}></Image>
      <Text fontSize={["sm","3xl"]} fontWeight="bold" align="justify">{name}</Text>
      <Text fontSize={["sm", "3xl"]} fontWeight="semibold" color="#A8A8B3" align="center">{jobName}</Text>
      <Text fontSize={["xs", "1xl"]} color="#A8A8B3" align="justify">{testimonial}</Text>
    </Center>
  );
}