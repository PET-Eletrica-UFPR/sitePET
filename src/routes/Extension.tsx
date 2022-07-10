import { Flex, Heading } from '@chakra-ui/react';
import { Abstract } from '../components/Abstract';
import { GenericSummary } from '../components/GenericSummary';


// TODO: update images
const activities = [
  {
    image: '/logoFace.png',
    title: 'UFPR FÓRMULA',
    summary: ['O UFPR Fórmula é um projeto com a missão de desenvolver membros qualificados e diferenciados para o mercado de trabalho. Para alcançá-la os membros competem na Fórmula SAE Brasil desenvolvendo dois veículos, um a combustão e outro elétrico, gerando inovação, tecnologia e conhecimento, somando isso a gestão de projetos e gerenciamento de equipe.', 'Saiba mais na página do Facebook e na página do Instagram.'],
  },
  {
    image: '/logoFace.png',
    title: 'EQUIPE YAPIRA DE ROBÓTICA UFPR',
    summary: ['A Equipe Yapira de Robótica UFPR é o grupo de extensão com ênfase em robótica da UFPR. O grupo é composto por alunos de diversos cursos, entre eles Engenharia Elétrica, Engenharia Mecânica, Engenharia de Produção e Ciência da Computação. O intuito de tal grupo é participar de competições, como a Winter Challenge, onde o grupo participa com Robôs de Combate, Seguidores de Linha, Sumôs e ArtBot.', 'Saiba mais na página do Facebook e na página do Instagram.'],
  },
  {
    image: '/logoFace.png',
    title: 'ECO OCTANO',
    summary: ['A equipe Eco Octano, formada por estudantes de Engenharia, tem como objetivo desenvolver novas tecnologias para o aumento da eficiência energética em veículos automotores. O grupo é gerenciado pelos próprios estudantes, de modo a desenvolver os integrantes com diversas experiências. A equipe participa da competição Shell Eco-Marathon Brasil, em que os veículos com menor consumo ganham.', 'Saiba mais na página do Facebook e na página do Instagram.'],
  },
  {
    image: '/logoFace.png',
    title: 'EMJEL - Assessoria em Eletroeletrônica',
    summary: ['Somos estudantes de Engenharia Elétrica da Universidade Federal do Paraná (UFPR), a maior do Sul do país, e contamos com o conhecimento técnico adquirido por nossos membros e por nossos professores altamente capacitados, para execução dos nossos serviços de instalações elétricas, desenvolvimento de produtos, eficiência energética e fotovoltaico.', 'A família EMJEL, fundada em 1993, conta com estudantes apaixonados por entregar soluções de qualidade e alinhados com a missão do Movimento Empresa Júnior:'],
  },
  {
    image: '/logoFace.png',
    title: 'UFPR BAJA SAE',
    summary: ['O projeto Baja SAE é um desafio lançado aos estudantes de engenharia que oferece a chance de aplicar na prática os conhecimentos adquiridos em sala de aula, visando sua preparação para o mercado de trabalho. O objetivo é construir um veículo off-road na categoria mini baja.', 'O BAJA americano foi criado na Universidade da Carolina do Sul, Estados Unidos por Dr. John F. Stevens, sendo que a primeira competição ocorreu em 1976. No Brasil, o primeiro evento nacional foi realizado em 1995 e, desde então, o BAJA tornou-se um projeto tradicional das universidades brasileiras.'],
  },
];

export function Extension() {
  return (
    <>
      <Abstract title='EXTENSÃO' image='/abstractExtension.png'>
        Projetos de extensão visam agregar ao estudante uma formação com experiências extra curriculares,
        como comunicação para trabalhos em grupos, gestão de pessoa, competições e etc. Esses projetos de extensão são
        fomentados pela UFPR, além de empresas externas a fim da inovação e capacitação dos estudantes em toda sua formação.
      </Abstract>

      {activities.map(({ image, title, summary }, index) => (
        <GenericSummary mirror={index % 2 === 1} image={image} title={title} summary={summary} />
      ))}
    </>
  );
}
