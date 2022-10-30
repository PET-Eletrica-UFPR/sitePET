import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeadingProps {
  title: ReactNode;
}
export function HeadingBar({ title }: HeadingProps) {
  return(
    <Heading
        as='h2' 
        fontSize={["sm",'3xl']} 
        w = '100%'
        my="0.5rem" 
        backgroundColor='#00509D' 
        color='white' p={10} 
        textAlign='center'
      >
        {title}
      </Heading>
  );
}