import { Abstract } from '../components/Abstract';
import { ProjectSummary } from '../components/ProjectSummary';


const projects = [
  {
    image: '/projects/prog.svg',
    title: 'Programação',
    subtitles: ['Participantes: Audric, Betina, Carlos, José Eduardo, Leonardo, Luiz, Maria Eduarda, Maria Paula, Marina, Pedro, Ricardo e Thaís.', 'Coordenador: Ricardo.'],
    summary: ['Visando agregar os principais temas dentro de programação, o projeto une diferentes temas e planejamentos que englobam: desenvolvimento web, desenvolvimento de aplicativos e uso de Big Data. Utilizando linguagens como: Javascript e Python.'],
  },
  {
    image: '/projects/mkt.svg',
    title: 'Marketing',
    subtitles: ['Participantes: Audric, Carlos, Luiz, Marina, Nátali e Ricardo.', 'Coordenador: Carlos.'],
    summary: ['Garantir a divulgação para o meio acadêmico e mesmo fora dele é essencial para alçarmos caminhos maiores para o projeto. O projeto visa a divulgação das nossas atividades, projetos e eventos, sendo responsável pelas redes sociais do PET!'],
  },
  {
    image: '/projects/pie.svg',
    title: 'PIE',
    subtitles: ['Participantes: Audric, Betina, José Eduardo, Maria Eduarda, Maria Paula, Matheus, Nátalia, Paulo, Pedro e Renan Molina.', 'Coordenador: Renan Molina.'],
    summary: ['O PIE junta todos os projetos eletrônicos do PET que possuem interatividade com o público de qualquer forma que seja. Desde jogos visuais como o Genius e o 2048, como projetos eletrônicos com áudio e música. Esses projetos ficam expostos na frente do PET no Departamento de Elétricam e são levados para os eventos!'],
  },
  {
    image: '/projects/flb.svg',
    title: 'Fab Lab',
    subtitles: ['Participantes: Leonardo, Letícia, Luiz, Maria Eduarda, Marina e Renan Molina.', 'Coordenadora: Letícia.'],
    summary: ['O FabLab é um programa cujo objetivo é atender às demandas de alunos e professores que desejam desenvolver projetos utilizando equipamentos de impressão 3D, corte, fresa, e estações de solda. Além disso, tem a intenção de promover cursos e suporte a alunos com desejo de obter conhecimento sobre esses equipamentos, ajudando, assim, a difundir o conhecimento de softwares e máquinas utilizadas na confecção de protótipos e trabalhos, no desenvolvimento de ideias e habilidades pelos estudantes e sociedade.'],
  },
  {
    image: '/projects/iop.svg',
    title: 'IoPET',
    subtitles: ['Participantes: Carlos, José, Leonardo, Letícia, Luiz, Maria Eduarda, Pedro, Renan Molina, Ricardo e Thaís.', 'Coordenador: Luiz.'],
    summary: ['A Internet das Coisas (Internet of Things - IoT) diz respeito ao “ecossistema” tecnológico proporcionado pelos diversos dispositivos conectados na internet, enviando e recebendo dados. O IoT tem sido abordado cada vez com mais frequência devido ao desenvolvimento das cidades inteligentes e das comunicações móveis de quinta geração, 5G. Estudar esse tema dentro da graduação é muito interessante, pois o debate e ensino deste assunto envolvendo os os discentes, têm um grande potencial de gerar inovação. Por ser um conteúdo recente, existem vários estudos sobre o tema, mesmo não sendo formalmente abordado na graduação. Dentro da missão de aprimorar a qualidade do ensino superior e ter uma formação pautada em atividades de excelência, cabe aos petianos estudarem os últimos avanços na área, construir protótipos eletrônicos e disseminar esse conhecimento sob a forma de cursos, palestras, oficinas, seminários e tutoriais.'],
  },
  {
    image: '/projects/mind.svg',
    title: 'Pet Mind',
    subtitles: ['Participantes: Paulo e Thaís.', 'Coordenadora: Thaís.'],
    summary: ['Responsável por promover atividades relacionadas com saúde mental e física. Desde eventos para conscientização até atividades internas que promovam a boa convivência entre os petianos.'],
  },
  {
    image: '/projects/evento.svg',
    title: 'Organização de eventos',
    subtitles: ['Participantes: Betina, Carlos, Luiz, Pedro e Thaís.', 'Coordenadores Batina e Pedro.'],
    summary: ['Eventos junto com o Feirão cuidam dos eventos principais planejados e organizados pelo Pet, é responsável por administrar e coordenar o stand da Engenharia Elétrica em alguns eventos que o PET participa como feira de profissões e a SBPC.'],
  },
  {
    image: '/projects/pss.svg',
    title: 'Processo Seletivo',
    subtitles: ['Participantes: Marina, Matheus, Nátali, Renan Molina e Ricardo.', 'Coordenadora: Marina.'],
    summary: ['Realizado duas vezes ao ano, o processo seletivo visa agregar novos membros, diversificando ideias e trazendo cada vez mais inovação para o grupo. É de suma importância dar a oportunidade de participação do PET aos alunos da graduação a fim de que possam compartilhar e buscar aprendizados a partir da socialização com os demais participantes, acrescentando na vida profissional e pessoal do candidato.'],
  },
  {
    image: '/projects/pip.svg',
    title: 'PIPET',
    subtitles: ['Participantes: Maria Eduarda, Maria Paula, Matheus, Nátali e Paulo.', 'Coordenadora: Maria Paula.'],
    summary: ['O projeto tem como objetivo a promoção do estudo de línguas estrangeiras dos integrantes do grupo PET, com foco na produção de conteúdo midiático e realizações de eventos em outras línguas, a fim de melhorar a oratória dos estudantes. Além disso, são selecionados Dias da Língua Estrangeira, que ocorrem de forma periódica, onde há atividades e jogos em grupo realizados em outras línguas. Ademais, é um projeto voltado, também, a ajudar e preparar alunos que queiram ser intercambistas em outros países, e auxiliar na chegada de alunos do exterior na chegada à UFPR.'],
  },
  {
    image: '/projects/sag.svg',
    title: 'Acolhimento aos recém-ingressos e suporte à graduação',
    subtitles: ['Participantes: Marina, Matheus, Paulo e Renan Molina.', 'Coordenador: Matheus.'],
    summary: ['O ARISAG - Acolhimento aos recém-ingressos e suporte à graduação é responsável pela recepção dos calouros do curso e pelas monitorias das disciplinas com maior índice de retenção. Além disso, o projeto é responsável pelos cursos técnicos ofertados e oficinas de protótipos.'],
  },
  {
    image: '/projects/cgi.svg',
    title: 'Cargos Internos',
    subtitles: ['Participantes: Todos os membros.', 'Coordenadora: Nátali.'],
    summary: ['Responsável pelo gerenciamento da agenda dos petianos assim como do tutor, do uso dos materiais e sala do PET. Além disso, de discussões e diretrizes sobre a missão e os valores do PET.'],
  },
];

export function Projects() {
  return (
    <>
      <Abstract title='PROJETOS EM ANDAMENTO' image='/abstractProjects.png'>
        O Programa PET é disposto pelo Manual de Orientações Básicas do Programa de Educação Tutorial, do MEC (MOB).
        Segundo o MOB, uma das características do PET é desenvolver ações de caráter interdisciplinar envolvendo a tríade ensino,
        pesquisa e extensão e buscando o contato entre comunidade acadêmica e externa, a fim de promover troca de experiências em processo
        crítico e mútua aprendizagem. Uma das formas de capacitação dos membros do PET Engenharia de Produção é a realização de projetos,
        práticos e teóricos, cujos temas variam entre as diversas áreas da Engenharia de Produção e outras áreas do conhecimento agregadas ao
        curso de Engenharia de Produção da UFSC: Civil, Elétrica e Mecânica.
        Nossos projetos são realizados em parceria com empresas ou organizações e entidades internas da universidade, possibilitando,
        aos membros, oportunidades para aplicar os conhecimentos acadêmicos, estabelecer contato com o futuro ambiente profissional e
        auxiliar as organizações. Além de exercitar a consciência do papel do aluno e universidade no contexto social no qual estão inseridos.
        Os projetos realizados também permitem o contato dos membros com o corpo docente e carreira acadêmica, uma vez que durante ou após a
        realização do projeto existe a possibilidade de transformá-lo em artigo. É responsabilidade do PETiano, segundo o MOB, a publicação
        ou apresentação de um trabalho acadêmico anualmente em eventos de natureza científica. Os artigos publicados pelo PET permitem
        apresentar o trabalho realizado pelo grupo aos que estão de fora do programa, bem como documentar o conhecimento desenvolvido e
        deixá-lo acessível para ser utilizado por outras pessoas
      </Abstract>

      {projects.map(({ image, title, subtitles, summary }) => (
        <ProjectSummary image={image} title={title} subtitles={subtitles} summary={summary} />
      ))}
    </>
  );
}