import { Flex, Heading } from '@chakra-ui/react';
import { Abstract } from '../components/Abstract';
import { GenericSummary } from '../components/GenericSummary';


// TODO: update images
const activities = [
  {
    image: '/logoFace.png',
    title: 'FEIRA DE PROFISSÕES',
    summary: ['A feira de profissões tem a função de mostrar informações sobre todos os cursos de graduação e de ensino profissionalizante disponíveis na instituição, propiciando uma maior interação entre a Universidade e a sociedade. Além disso, são oferecidas palestras sobre orientação profissional e sobre como manter a auto-estima e a tranquilidade no vestibular.', 'Saiba mais na página do Facebook e na página do Instagram.'],
  },
  {
    image: '/logoFace.png',
    title: 'EXPOELÉTRICA',
    summary: ['trata-se de uma feira de exposição da Engenharia Elétrica organizada pelos próprios alunos do curso.O evento que tem como intuito promover as atividades formativas realizadas no curso de Engenharia Elétrica, entre grupos do extensão, grupos de pesquisa, protótipos de alunos e empreendimentos relacionados a área.', 'A feira consiste na apresentação de trabalhos e pesquisas dos diversos grupos de extensão e grupos de pesquisa aos quais o curso de Engenharia Elétrica faz parte, ou poderia ajudar. Nela esses grupos tem a oportunidade de apresentar e demonstrar projetos e pesquisas de forma a incentivar o aluno a não fazer apenas as aulas e obrigações do curso, mas a participar dos diversos grupos extracurriculares e melhorar o seu currículo.'],
  },
  {
    image: '/logoFace.png',
    title: 'SIEPE',
    summary: ['A SIEPE (Semana Integrada de Ensino Pesquisa e Extensão)  é um evento anual que promove e estimula a interação entre docentes, estudantes de graduação, educação profissional, ensino médio, pós-graduação, servidores técnicos, servidoras técnicas e comunidade em geral. Constitui-se em um espaço privilegiado no qual são compartilhados conhecimentos e experiências, mediante a reflexão sobre temas de diversas áreas por intermédio dos trabalhos desenvolvidos em Ensino, Pesquisa e Extensão.'],
  },
  {
    image: '/logoFace.png',
    title: 'SEATEL',
    summary: ['A SEATEL é a Semana de Atualização de Engenharia Elétrica. Ela é a semana acadêmica do curso de Engenharia Elétrica da Universidade Federal do Paraná (UFPR). Abrange os cursos diurno e noturno. Ocorre todos os anos.', 'Contém diversas atividades para ajudar os alunos a se aprimorarem nos conhecimentos, podendo ser de ajuda durante a graduação ou para um futuro trabalho na área. Para aqueles que já tem sua ênfase definida é uma chance de conhecer um pouco sobre as outras ênfases ou se aprofundar um pouco mais na sua.'],
  },
];

export function Events() {
  return (
    <>
      <Abstract title='EVENTOS' image='/abstractEvents.png'>
        O grupo PET participa e elabora diversos eventos dentre eles a feira de profissões, Seatel, Enaf,
        entre muitos outros. Todos esses eventos são ligados a faculdade e muitas vezes aberto a graduação ou até ao público.
        Certos eventos são mais interativos, possibilitando uma interação e coexistência dos petianos com outros mebros da graduação.
        Já outros acontecimentos serão de apenas acesso e visualização pelo público.
      </Abstract>

      {activities.map(({ image, title, summary }, index) => (
        <GenericSummary mirror={index % 2 === 1} image={image} title={title} summary={summary} />
      ))}
    </>
  );
}
