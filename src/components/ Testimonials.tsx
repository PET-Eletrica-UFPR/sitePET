import { Flex } from "@chakra-ui/react";
import { HeadingBar } from "./HeadingBar";
import { Student } from "./Student";

export function Testmonials() {
  return(
    <>
      <HeadingBar title = "Ex-Petianos" />

      <Flex>
        <Student
          image="home/petiana3.png"
          name="Bianca de Oliveira"
          jobName="Intercambista em Grenoble-FR"
          testimonial=
          "Dentro do PET tive a oportunidade de trabalhar e coordenar diversos projetos e atividades e neles pude aprimorar diversas competências. Devido às apresentações em eventos e cursos ministrados aos alunos da graduação pude desenvolver uma facilidade na comunicação, já os conhecimentos obtidos em projetos técnicos me permitiram facilmente progredir na carreira profissional, sendo rapidamente efetivada, mesmo ainda estando na graduação."
        />

        <Student
          image="home/petiano2.png"
          name="Eduardo Jagher"
          jobName="EMC & Hardware developer"
          testimonial=
          "A minha experiência no grupo PET Elétrica foi de aprendizado e crescimento profissional e pessoal. A minha convivência com os demais petianos e interação com os alunos do curso de engenharia elétrica através das atividades do PET proporcionaram meu desenvolvimento como profissional no âmbito das hard skills e soft skills. O PET sempre foi voltado para aprendizado e cooperação. Além do auto desenvolvimento e o apoio entre os membros."
        />

        <Student
          image="home/petiana4.png"
          name="Amanda Passero"
          jobName="Siemens Energy Curitiba"
          testimonial=
          "Ao entrar no PET me vi com várias atividades e responsabilidades em mãos, conheci pessoas, fiz viagens com o grupo, fizemos trocas de conhecimento e de cultura, e pudemos transmitir o nosso conhecimento para a sociedade. E através do PET, sendo coordenadora da Semana Acadêmica de Engenharia Elétrica, consegui meu primeiro estágio, e hoje estagiando na Siemens Energy carrego comigo todo aprendizado que tive no PET."
        />
         <Student
          image="home/joao.png"
          name="João Pedro Turra"
          jobName="Intercambista em Grenoble-FR"
          testimonial=
          "Dentro do PET tive a oportunidade de trabalhar e coordenar diversos projetos e atividades e neles pude aprimorar diversas competências. Devido às apresentações em eventos e cursos ministrados aos alunos da graduação pude desenvolver uma facilidade na comunicação, já os conhecimentos obtidos em projetos técnicos me permitiram facilmente progredir na carreira profissional, sendo rapidamente efetivada, mesmo ainda estando na graduação."
        />
      </Flex>
    </>

  );
}
