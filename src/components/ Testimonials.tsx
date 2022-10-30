import { Flex } from "@chakra-ui/react";
import { HeadingBar } from "./HeadingBar";
import { Student } from "./Student";

export function Testmonials() {
  return(
    <>
      <HeadingBar title = "DEPOIMENTO DE EX PETIANOS" />

      <Flex>
        <Student 
          image="home/petiano1.png" 
          name="Bianca de Oliveira" 
          jobName="Intercambista em Grenoble-FR" 
          testimonial= 
          "Dentro do PET tive a oportunidade de trabalhar e coordenar diversos projetos e atividades e neles pude aprimorar diversas competências. Devido às apresentações em eventos e cursos ministrados aos alunos da graduação pude desenvolver uma facilidade na comunicação, já os conhecimentos obtidos em projetos técnicos me permitiram facilmente progredir na carreira profissional, sendo rapidamente efetivada, mesmo ainda estando na graduação."
        />

        <Student 
          image="home/petiano1.png" 
          name="Bianca de Oliveira" 
          jobName="Intercambista em Grenoble-FR" 
          testimonial= 
          "Dentro do PET tive a oportunidade de trabalhar e coordenar diversos projetos e atividades e neles pude aprimorar diversas competências. Devido às apresentações em eventos e cursos ministrados aos alunos da graduação pude desenvolver uma facilidade na comunicação, já os conhecimentos obtidos em projetos técnicos me permitiram facilmente progredir na carreira profissional, sendo rapidamente efetivada, mesmo ainda estando na graduação."
        />

        <Student 
          image="home/petiano1.png" 
          name="Bianca de Oliveira" 
          jobName="Intercambista em Grenoble-FR" 
          testimonial= 
          "Dentro do PET tive a oportunidade de trabalhar e coordenar diversos projetos e atividades e neles pude aprimorar diversas competências. Devido às apresentações em eventos e cursos ministrados aos alunos da graduação pude desenvolver uma facilidade na comunicação, já os conhecimentos obtidos em projetos técnicos me permitiram facilmente progredir na carreira profissional, sendo rapidamente efetivada, mesmo ainda estando na graduação."
        />
      </Flex>
    </>

  );
}