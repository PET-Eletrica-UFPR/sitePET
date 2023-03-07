import { Abstract } from '../components/Abstract';
import { GenericSummary } from '../components/GenericSummary';


const activities = [
  {
    image: '/curs.svg',
    title: <a href="https://www.youtube.com/watch?v=mW_L--v96LU&list=PLpzrwX2yvfYgIhZhsYFU6kcbqVE-kmSoP&ab_channel=PETEl%C3%A9tricaUFPR">CURSOS TÉCNICOS</a>,
    summary: ['Com o objetivo de proporcionar aos alunos de graduação a oportunidade de aprender sobre temas que não são abordados no currículo do curso e também ensinar o uso de ferramentas de desenvolvimento de projeto e métodos que auxiliam no entendimento das matérias e são úteis para a formação do engenheiro, o PET Elétrica oferece cursos técnicos sobre diversos temas conforme o interesse dos alunos.', 'Os cursos são ministrados tanto por alunos integrantes do PET quanto convidados, egressos ou professores, busca-se que os petianos ao ministrar cursos adquiram maior domínio sobre o assunto durante o preparo do material e melhorem suas capacidades didáticas e de relações interpessoais.', 'O PET sempre aceita sugestões de cursos a serem oferecidos e/ou repetidos em semestres diferentes, qualquer ideia é bem vinda, basta entrar em contato conosco através: pet.eletrica.ufpr@gmail.com'],
  },
  {
    image: '/mon.svg',
    title: <a href="https://www.youtube.com/playlist?list=PLpzrwX2yvfYgDrswCs3p2AQKn1-vt4vTp">MONITORIA</a>,
    summary: ['A atividade é composta por monitorias e grupos de estudos a fim de aumentar a compreensão e domínio dos alunos em diversas disciplinas. Os produtos dessa atividade são: aulas ministradas pelos petianos, material didático complementar, com listas de exercícios, e grupos de estudos.'],
  },
];

export function Graduation() {
  return (
    <>
      <Abstract title='SUPORTE A GRADUAÇÃO' image='/abstractSupoGrad.png' >
        O programa PET está intimamente ligado com as atividades ligados ao suporte do meio Acadêmico,
        os projetos exclusivamente ligadas a esse objetivo são:
        semana do calouro, PET Mind, monitorias direcionada PET
        , cursos técnicos, vai com o PET
        , oficina de protótipos
        , mural interativo
        O grupo PET se preocupa com o andamento do curso de Engenharia Elétrica, e, por conta disso,
        as monitorias direcionadas são cuidadosamente preparadas e tem um papel fundamental para a graduação pois ajuda os
        alunos a esclarecerem e revisarem as ideias dadas em sala de aula
      </Abstract>

      {activities.map(({ image, title, summary }, index) => (
        <GenericSummary mirror={index % 2 === 1} image={image} title={title} summary={summary} />
      ))}
    </>
  );
}
