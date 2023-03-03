import { Center, Image, Link, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface StudentProps {
  image: string;
  description: ReactNode;
  link: string;
  linkDescription: ReactNode;
}
export function Headline({ image, description, link, linkDescription }: StudentProps) {
  return(
    <Center flexDirection="column" w = {["50px","300px"]} mx = {["2rem","2rem"]}>
      <Image src={image}></Image>
      <Text fontSize={["xs","2xl"]} fontWeight="semibold" color="#A8A8B3" align="center">{description}</Text>
      <Link href={link} color='#00509D' fontSize={["xs", "2xl"]} fontWeight="semibold" isExternal>{linkDescription} </Link>
    </Center>
  );
}