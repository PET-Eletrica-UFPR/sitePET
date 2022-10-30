import { Center, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function PersonalContent() {
  return(
    <Flex w = "100%">
    <Image src='home/PetFade.png' w = "50%"></Image>
        <Center 
          bgImg='home/PetHistory.png' 
          w = "51%"
          bgSize="100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Text
            fontSize={["xs", "2xl"]}
            fontWeight="bold"
            color='gray.600'
            align="center"
          >
            O Programa de Educação Tutorial (PET) compromete-se fundamentalmente em aprimorar os cursos de graduação. Trabalha com quatro vertentes principais que são: Ensino, Cultura, Pesquisa e Extensão e forma cidadãos que aprendem a trabalhar em equipe, a irradiar para os demais colegas o espírito de liderança e o compromisso com a geração de conhecimento para a solução dos mais diversos problemas.
          </Text>
        </Center>
      </Flex>
  );
}