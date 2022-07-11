import { Abstract } from '../components/Abstract';
import { ProjectSummary } from '../components/ProjectSummary';


const projects = [
  {
    image: '/projects/projImageAPPET.svg',
    title: 'APPET',
    subtitles: ['Participantes: José Eduardo, Leonardo, Pietro e Willy', 'Coordenador: João Turra'],
    summary: ['A programação de aplicativos móveis é abordada dentro da ênfase de sistemas eletrônicos embarcados no curso de Eng. Elétrica como disciplina optativa, mostrando a aderência e importância do assunto para o curso. Em adição, temas da atualidade como Internet das Coisas, passam por aplicações móveis com acesso à internet. Esse projeto visa estimular os petianos a aprenderem linguagens de programação e a projetarem aplicativos para plataformas como Android e IOs, com aplicações ou funcionalidade voltada para os grupos PETs, para os alunos da graduação e/ou para aplicações voltadas à acessibilidade. Entre os diversos apontamentos e demandas de aplicativos para o PET, destacam-se algumas frentes: A manutenção e adaptação a uma nova plataforma dos aplicativos APPET-O e Controle Interativo, desenvolvidos no ano anterior; e o desenvolvimento de uma aplicativo móvel que auxiliará na gestão dos eventos realizado pelo grupo PET.'],
  },
  {
    image: '/projects/projImageBigPET.svg',
    title: 'BigPET',
    subtitles: ['Participantes: João Turra, José Eduardo, Leticia e Pietro', 'Coordenador: Leonardo'],
    summary: ['No ano de 2006, Geoffrey Hinton publicou um artigo apresentando como “treinar” uma rede neural (modelo computacional baseado nos neurônios humanos) capaz de conhecer dígitos manuscritos com grande precisão, esta pesquisa, não só fez o que pesquisadores da década anterior consideravam impossível, como também direcionou o foco de grandes companhias e grupos de pesquisas para os tópicos hoje denominados Data Science, Big Data e Machine Learning. Nos anos seguintes, reinventou-se o potencial dos dados, algoritmos inteligentes passaram a reconhecer desde os padrões de fala aos perfis de consumo dos usuários da internet. O projeto Big PET, uma referência ao termo Big Data espera fazer com que membros do grupo PET Engenharia Elétrica possam apreciar e dominar essas técnicas. Apesar da enorme importância que o domínio dessas habilidades tem para a Indústria, o Agronegócio e para a pesquisa, há poucas oportunidades de engajamento com estes conceitos, um maior aprofundamento seria de extrema importância. A existência de um projeto com esse objetivo, não só irá formar recursos humanos altamente capacitados, como também permitirá que tais habilidades sejam transmitidas aos demais membros da comunidade acadêmica.'],
  },
  {
    image: '/projects/projImageDevWeb.svg',
    title: 'Desenvolvimento Web',
    subtitles: ['Participantes: Leonardo, Matheus e Natáli', 'Coordenador: José Eduardo'],
    summary: ['Na atualidade, os meios de comunicação digital são os mais efetivos para a divulgação de eventos e atividades. Nesse contexto, destacam-se, não somente as redes sociais como também os Landing Pages ou sites de entrada. Uma série de serviços e sistemas passam pelo acesso à internet e protocolos associados, fato que evidencia que o Desenvolvimento Web não deve ser negligenciado para a formação completa de um engenheiro. Com isso, o grupo PET trabalha com o desenvolvimento de páginas WEB em prol do departamento, da coordenação, do grupo e outros projetos, que solicitem tal suporte. Atualmente, há diversas atividades do PET que envolvem aplicações WEB, tais como o desenvolvimento de um site para o PET Elétrica, de uma base de dados para o cadastro e certificação de atividades (CUP), e do mural V3. Em síntese, esse projeto coordena o treinamento de petianos para o Desenvolvimento Web e, então, os redireciona para a execução de atividades conforme a demanda.'],
  },
  {
    image: '/projects/projImageIoPET.svg',
    title: 'IoPET',
    subtitles: ['Participantes: Leonardo, Leticia, Pietro e Renan P.', 'Coordenador: Willy'],
    summary: ['A Internet das Coisas (Internet of Things - IoT) diz respeito ao “ecossistema” tecnológico proporcionado pelos diversos dispositivos conectados na internet, enviando e recebendo dados. O IoT tem sido abordado cada vez com mais frequência devido ao desenvolvimento das cidades inteligentes e das comunicações móveis de quinta geração, 5G. Estudar esse tema dentro da graduação é muito interessante, pois o debate e ensino deste assunto envolvendo os os discentes, têm um grande potencial de gerar inovação. Por ser um conteúdo recente, existem vários estudos sobre o tema, mesmo não sendo formalmente abordado na graduação. Dentro da missão de aprimorar a qualidade do ensino superior e ter uma formação pautada em atividades de excelência, cabe aos petianos estudarem os últimos avanços na área, construir protótipos eletrônicos e disseminar esse conhecimento sob a forma de cursos, palestras, oficinas, seminários e tutoriais.'],
  },
  {
    image: '/projects/projImagemagnetizar.svg',
    title: 'Magnetizar',
    subtitles: ['Participantes: Audric, Leonardo e Renan M.', 'Coordenador: Matheus'],
    summary: ['Realizado pelo grupo PET da Engenharia Elétrica da Universidade Federal do Paraná, o Magnetizar consiste em trazer estudantes do ensino médio para conhecer o ambiente universitário, visando o departamento de Engenharia Elétrica. A partir da realização de oficinas de programação e eletricidade básica, o Magnetizar aproxima os estudantes do cotidiano da Engenharia Elétrica, além de ter sua temática sempre relacionada com os conteúdos abordados no Ensino Médio, reforçando e dando um conhecimento a mais para os estudantes.', 'Os estudantes passam um dia no Centro Politécnico, conhecendo o ambiente Universitário e tendo contato com atividades no Laboratório do departamento de Engenharia Elétrica.'],
  },
  {
    image: '/projects/projImageMural.svg',
    title: 'Mural Interativo',
    subtitles: ['Participantes: Audric, Nátali e Renan P.', 'Coordenador: Eduardo'],
    summary: ['A comunicação sempre foi o ponto chave para a existência dos povos e a disseminação do conhecimento, contudo todos os dias somos bombardeados com uma imensa carga de informações. Por esse motivo, se a informação não despertar o interesse do leitor pode se tornar totalmente ineficiente e por não cumprir com sua função principal, informar, torna-se inútil. A partir desse princípio, foi criado o Mural Interativo (Mural V2).', 'O Mural Interativo, construído e mantido pelo grupo PET do departamento de Engenharia Elétrica da Universidade Federal do Paraná, tem por objetivo ser o canal rápido e dinâmico de informações para os alunos e visitantes do bloco de Engenharia Elétrica. O mural possui estrutura em madeira e vidro.'],
  },
  {
    image: '/projects/projImageOficina.svg',
    title: 'Oficina de Protótipos',
    subtitles: ['Participantes: Audric e Letícia: Eduardo', 'Coordenador'],
    summary: ['As oficinas de protótipos do PET Elétrica são um acompanhamento feito no laboratório para a confecção de projetos de eletrônica básica desenvolvidos pelo PET. Estes são divididos em módulos, com oficinas de duração entre uma e duas horas. Busca-se, dessa forma, instigar maior interesse nos calouros, de modo a garantir maior participação na oficina.', 'No início de cada atividade é feita uma revisão teórica juntamente de uma apresentação com os novos conteúdos, necessários para a elaboração de cada prática, a qual é posteriormente elaborada nos laboratórios do curso. Ademais, há a preocupação de que todos os módulos convirjam, para que, quando finalizados, tornem-se um projeto mais complexo e completo.'],
  },
  {
    image: '/projects/projImage3D.svg',
    title: 'Impressora 3D',
    subtitles: ['Participantes: Audric, Eduardo, Letícia, Renan M. e Renan P.', 'Coordenador: Leonardo'],
    summary: ['Muitos dos projetos desenvolvidos no curso de Eng. Elétrica não depende somente da parte elétrica, mas também de uma parte mecânica, seja para fixação das placas de circuitos impressos, ou para elementos eletromecânicos, como braços mecânicos, motores, etc, sobretudo na área de robótica. Umas das soluções para projetos de pequena tiragem e prototipação é a utilização de impressão 3D, que permite criar diferentes projetos mecânicos de baixo custo. No ano de 2020, a universidade recebeu diversas impressoras 3D para atuar no combate à pandemia causada pelo coronavírus, atuando na produção de Face Shields e demais peças como dispensers de álcool em gel ou puxadores de porta com os pés, entre outras. O conhecimento em impressão 3D e a cultura maker são dois pontos que tornam o tema interessante, inclusive pensando na empregabilidade dos egressos de nosso curso.'],
  },
  {
    image: '/projects/projImagePETInt.svg',
    title: 'PET Internacional',
    subtitles: ['Participantes: Lara, Matheus e Nátali', 'Coordenador: Renan P.'],
    summary: ['A iniciativa de criar o “PET Internacional“ surgiu após contato com intercambistas que encontraram as mais diversas dificuldades para se instalar em Curitiba e fazer sua matrícula na UFPR (Universidade Federal do Paraná). Assim, o projeto tem por objetivo auxiliar estudantes de outros países que vêm estudar em nossa universidade, fornecendo suporte no que diz respeito à recepção, moradia, adaptação no campus, interação com estudantes brasileiros, questões administrativas e emissão de documentos para os mesmos.', 'Decidimos criar um manual para centralizar as principais informações que um intercambista que vem estudar na UFPR precisa saber. O manual contêm informações sobre como fazer os documentos necessários (CPF e RNH) e a carteirinha de estudante, como se matricular no curso de português para estrangeiros do Celin, dicas para achar moradia, informações sobre o clima, transporte público, entretenimento e turismo em Curitiba, além de informações gerais sobre a UFPR.'],
  },
  {
    image: '/projects/projImageSeminarios.svg',
    title: 'Seminários PET',
    subtitles: ['Participantes: Todos os Membros: Audric', 'Coordenador'],
    summary: ['Os Seminários PET consistem em apresentações feitas pelos petianos, em língua estrangeira, que abordam temas diversos relacionados à engenharia. Os seminários são abertos a toda a comunidade, que além de ter uma oportunidade de praticar idiomas, também tem contato com temas por vezes não ensinados na graduação. Com as atividades remotas, os seminários passaram de síncronos e presenciais para assíncronos e por vídeo. O espaço dialógico para praticar idiomas ficou para um outro momento, em sessão síncrona online.'],
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
