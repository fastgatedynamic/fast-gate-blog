import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Search, Menu, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Clock, User } from 'lucide-react'
import './App.css'

// Importar o logo do Fast Gate
import FastGateLogo from './assets/fast-gate-logo.png';

// Importar os novos componentes de página
import TecnologiaPage from './pages/TecnologiaPage.jsx';
import ProjetoPage from './pages/ProjetoPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';
import ArtigosPage from './pages/ArtigosPage.jsx';

// Conteúdo dos posts de blog
const blogPostsData = [
  {
    id: 'guia-marketing-digital',
    title: "Guia Completo para Otimizar seu Marketing Digital e Impulsionar o Engajamento Orgânico do Fast Gate",
    excerpt: "No cenário digital atual, a otimização do marketing digital é crucial para qualquer negócio que busca crescer e se conectar com seu público de forma significativa...",
    category: "Marketing Digital",
    date: "14 de Outubro, 2025",
    author: "Dynamic Team",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    content: `
      # Guia Completo para Otimizar seu Marketing Digital e Impulsionar o Engajamento Orgânico do Fast Gate

      No cenário digital atual, a otimização do marketing digital é crucial para qualquer negócio que busca crescer e se conectar com seu público de forma significativa. Para o **Fast Gate**, um produto de luxo destinado a um público de alta renda, essa otimização deve ser ainda mais refinada, focando em estratégias que valorizem a exclusividade, a tecnologia e a experiência premium.

      ## 1. Compreensão Profunda do Público-Alvo (Personas)

      Antes de qualquer ação, é fundamental entender quem é o seu cliente ideal. Para o Fast Gate, estamos falando de indivíduos de alta renda, proprietários de imóveis de luxo, arquitetos, designers de interiores e construtoras de alto padrão. Eles buscam:

      *   **Exclusividade:** Produtos que se destacam pela inovação e design.
      *   **Tecnologia de Ponta:** Soluções inteligentes e eficientes.
      *   **Segurança Avançada:** Proteção para suas propriedades e famílias.
      *   **Design Sofisticado:** Integração harmoniosa com a arquitetura de luxo.
      *   **Serviço de Pós-Venda Impecável:** Suporte e manutenção de alta qualidade.

      Crie personas detalhadas para cada segmento, incluindo seus desafios, objetivos, hábitos de consumo de conteúdo e onde eles buscam informações. Isso guiará toda a sua estratégia de conteúdo.

      ## 2. Estratégia de Pesquisa de Palavras-Chave

      Para atrair tráfego orgânico qualificado, a pesquisa de palavras-chave deve ir além dos termos genéricos. Foque em:

      *   **Palavras-chave de Cauda Longa:** Termos mais específicos que seu público de alta renda usaria, como "portão automático de luxo com tecnologia all-in-one", "segurança residencial alto padrão", "portão silencioso para condomínio de luxo".
      *   **Análise de Concorrência:** Identifique as palavras-chave que seus concorrentes estão utilizando e encontre lacunas onde o Fast Gate pode se destacar.
      *   **Intenção de Busca:** Entenda se o usuário está buscando informações, comparando produtos ou pronto para comprar. Adapte seu conteúdo a cada intenção.

      ## 3. Pilares de Conteúdo e Tópicos

      Organize seu conteúdo em pilares que ressoem com as necessidades e interesses do seu público:

      *   **Tecnologia e Inovação:** Artigos sobre o sistema All-in-One, velocidade, silêncio, integração com automação residencial.
      *   **Design e Arquitetura:** Conteúdo sobre como o Fast Gate complementa projetos de luxo, opções de acabamento e personalização.
      *   **Segurança e Confiabilidade:** Detalhes sobre o sistema anti-esmagamento, durabilidade, garantia e testes de qualidade.
      *   **Experiência do Cliente e Pós-Venda:** Artigos sobre o processo de instalação, suporte técnico, manutenção e depoimentos.
      *   **Cases de Sucesso e Inspiração:** Apresente projetos reais com o Fast Gate, destacando a transformação e o valor agregado.

      ## 4. Formatos de Conteúdo

      Diversifique os formatos para engajar diferentes tipos de público:

      *   **Blog Posts:** Artigos aprofundados como este, com foco em SEO e valor informativo.
      *   **Vídeos:** Demonstrações do produto em ação, entrevistas com arquitetos, depoimentos de clientes.
      *   **Infográficos:** Para explicar conceitos complexos de forma visual e fácil de entender (ex: funcionamento do All-in-One).
      *   **Conteúdo para Redes Sociais:** Pílulas de conteúdo, imagens de alta qualidade, stories interativos.
      *   **E-books/Whitepapers:** Materiais ricos para download, aprofundando em temas específicos (ex: "Guia Completo de Segurança para Imóveis de Luxo").
      *   **Webinars:** Sessões online para arquitetos e construtoras, apresentando o Fast Gate e tirando dúvidas.

      ## 5. Canais de Distribuição Orgânica

      Onde seu público está? Leve o conteúdo até ele:

      *   **Blog da Empresa:** O hub principal do seu conteúdo.
      *   **Redes Sociais:** Instagram (visual, lifestyle), LinkedIn (profissionais, B2B), YouTube (vídeos demonstrativos).
      *   **Email Marketing:** Nutrição de leads com conteúdo exclusivo e ofertas personalizadas.
      *   **Comunidades Online e Fóruns:** Participação ativa em grupos de arquitetura, design e automação residencial.

      ## 6. Táticas de Engajamento

      Incentive a interação e construa uma comunidade:

      *   **CTAs Claros:** Inclua chamadas para ação em todos os conteúdos (ex: "Solicite um Orçamento", "Baixe Nosso Catálogo", "Agende uma Demonstração").
      *   **Interação Ativa:** Responda a comentários, perguntas e mensagens de forma rápida e personalizada.
      *   **Conteúdo Interativo:** Quizzes, enquetes, perguntas e respostas ao vivo.
      *   **Conteúdo Gerado pelo Usuário (UGC):** Incentive clientes a compartilhar suas experiências com o Fast Gate.
      *   **Colaborações Estratégicas:** Parcerias com influenciadores do segmento de luxo, arquitetos e designers.

      ## 7. Calendário Editorial

      Planeje seu conteúdo com antecedência para garantir consistência e relevância. Defina temas mensais, tipos de conteúdo, palavras-chave e canais de distribuição para cada peça.

      ## 8. Análise e Ajuste Constantes

      O marketing digital é um processo contínuo. Monitore KPIs como tráfego orgânico, tempo na página, taxa de rejeição, engajamento social e conversões. Use ferramentas como Google Analytics e Search Console para identificar o que funciona e o que precisa ser ajustado. A otimização constante é a chave para o sucesso a longo prazo.

      Ao implementar este guia completo, o Fast Gate estará posicionado para atrair, engajar e converter seu público de alta renda de forma orgânica, construindo uma marca forte e líder no mercado de portões automáticos de luxo.
    `
  },
  {
    id: 'tecnologia-all-in-one',
    title: "A Revolução All-in-One: Por Que o Fast Gate é o Futuro dos Portões Automáticos de Luxo",
    excerpt: "No universo da arquitetura e do design de alto padrão, cada detalhe importa. A busca por soluções que unam estética, funcionalidade e segurança de forma impecável é constante...",
    category: "Tecnologia",
    date: "12 de Outubro, 2025",
    author: "Equipe Técnica",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    content: `
      # A Revolução All-in-One: Por Que o Fast Gate é o Futuro dos Portões Automáticos de Luxo

      No universo da arquitetura e do design de alto padrão, cada detalhe importa. A busca por soluções que unam estética, funcionalidade e segurança de forma impecável é constante. É nesse cenário que o **Fast Gate** da Dynamic se destaca, apresentando uma inovação que redefine o conceito de portões automáticos de luxo: a tecnologia **All-in-One**.

      ## O Que é a Tecnologia All-in-One do Fast Gate?

      Tradicionalmente, um portão automático é composto por diversos componentes separados: o motor, o sistema de freio, a caixa de redução e o sistema de tração. Essa complexidade não apenas ocupa mais espaço, como também pode gerar mais pontos de falha e exigir manutenções mais frequentes.

      O Fast Gate revoluciona esse paradigma ao integrar todos esses elementos essenciais em um único corpo cilíndrico. Imagine um sistema onde o motor, o freio e o mecanismo de tração operam em perfeita harmonia, compactados e otimizados para desempenho superior. Essa é a essência do All-in-One.

      ## Benefícios Incomparáveis para o Seu Projeto de Luxo

      A integração total dos componentes do Fast Gate não é apenas uma questão de engenharia; ela se traduz em vantagens tangíveis e significativas para proprietários de imóveis de alto padrão, arquitetos e construtoras:

      ### 1. Design Minimalista e Elegante

      Com todos os componentes internos, o Fast Gate elimina a necessidade de caixas externas volumosas e fios expostos. Isso resulta em um design incrivelmente limpo e minimalista, que se integra perfeitamente à estética sofisticada de qualquer projeto arquitetônico de luxo. A beleza da sua fachada é preservada, sem comprometer a funcionalidade.

      ### 2. Instalação Simplificada e Otimizada

      A natureza compacta do sistema All-in-One facilita enormemente o processo de instalação. Menos componentes significam menos tempo de montagem e menor complexidade, resultando em uma instalação mais rápida, precisa e com menos interrupções para o seu projeto.

      ### 3. Desempenho Superior e Silencioso

      A otimização dos componentes integrados permite que o Fast Gate opere com uma eficiência notável. Isso se traduz em uma abertura e fechamento até **3 vezes mais rápidos** do que os portões convencionais, além de um funcionamento **praticamente silencioso**. Para uma residência de alto padrão, onde o conforto e a discrição são valorizados, essa característica é um diferencial inestimável.

      ### 4. Maior Durabilidade e Menor Manutenção

      Com menos peças expostas e um sistema mais coeso, o Fast Gate é inerentemente mais robusto e resistente a intempéries e desgastes. A integração protege os componentes internos, prolongando a vida útil do equipamento e reduzindo a necessidade de manutenção. Isso representa economia a longo prazo e maior tranquilidade para o proprietário.

      ### 5. Segurança Reforçada

      O sistema All-in-One permite uma engenharia mais precisa para os recursos de segurança. O Fast Gate incorpora um sistema **anti-esmagamento original de fábrica**, que detecta obstáculos e reverte o movimento do portão, prevenindo acidentes. Além disso, a robustez do sistema contribui para uma barreira de segurança mais eficaz contra invasões.

      ## O Futuro Já Chegou com o Fast Gate

      O Fast Gate com sua tecnologia All-in-One não é apenas um portão automático; é uma declaração de inovação, design e segurança. Ele atende às demandas do mercado de luxo por soluções que ofereçam performance sem comprometer a estética, e que proporcionem tranquilidade e valorização ao imóvel.
    `
  },
  {
    id: 'velocidade-silencio',
    title: "Velocidade e Silêncio: A Dupla Perfeita do Fast Gate para o Seu Conforto e Segurança",
    excerpt: "Em um mundo onde cada segundo conta e a busca por tranquilidade é constante, o Fast Gate se destaca como a solução ideal para portões automáticos de luxo...",
    category: "Tecnologia",
    date: "10 de Outubro, 2025",
    author: "Equipe Técnica",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1518791841-f7ce2d725a0d?w=800&q=80",
    content: `
      # Velocidade e Silêncio: A Dupla Perfeita do Fast Gate para o Seu Conforto e Segurança

      Em um mundo onde cada segundo conta e a busca por tranquilidade é constante, o **Fast Gate** se destaca como a solução ideal para portões automáticos de luxo. Mais do que um simples mecanismo de entrada e saída, ele oferece uma combinação inigualável de velocidade e silêncio, elevando o padrão de conforto e segurança para residências e condomínios de alto padrão.

      ## A Velocidade que Você Precisa

      Imagine chegar em casa após um longo dia e ter seu portão abrindo e fechando em tempo recorde. O Fast Gate é projetado para operar com uma agilidade impressionante, sendo até **3 vezes mais rápido** que os sistemas convencionais. Essa performance não é apenas uma questão de conveniência; é um fator crucial para a segurança:

      *   **Redução do Tempo de Exposição:** Menos tempo com o portão aberto significa menor vulnerabilidade a acessos indesejados.
      *   **Fluxo Otimizado:** Em condomínios, a rapidez evita filas e congestionamentos, especialmente em horários de pico.
      *   **Conveniência:** A agilidade no acesso proporciona uma experiência mais fluida e agradável para moradores e visitantes.

      ## O Silêncio que Você Valoriza

      Além da velocidade, o Fast Gate se diferencia pelo seu funcionamento **praticamente silencioso**. Em ambientes de luxo, onde o conforto acústico é um diferencial, ruídos excessivos de portões podem ser extremamente indesejados. Graças à sua engenharia All-in-One e componentes otimizados, o Fast Gate opera com um nível de ruído mínimo, garantindo:

      *   **Tranquilidade Residencial:** Sem perturbações sonoras para os moradores, especialmente durante a noite ou em áreas próximas a quartos.
      *   **Discrição:** O funcionamento discreto mantém a elegância e a serenidade do ambiente.
      *   **Bem-estar:** Contribui para um ambiente mais agradável e relaxante, sem o estresse de ruídos mecânicos.

      ## Engenharia por Trás da Performance

      A combinação de velocidade e silêncio no Fast Gate é resultado de um design inovador e da tecnologia All-in-One. Ao integrar motor, freio e sistema de tração em um único corpo, minimizamos atritos e otimizamos a transmissão de energia. Isso não só aumenta a eficiência, mas também reduz drasticamente o ruído e o desgaste dos componentes.

      ## Fast Gate: Conforto, Segurança e Sofisticação

      O Fast Gate redefine o que se espera de um portão automático de luxo. Ele não apenas protege seu patrimônio com a máxima eficiência, mas também eleva a experiência de uso a um novo patamar de conforto e sofisticação. Escolher o Fast Gate é optar por uma solução que entende e atende às suas necessidades de velocidade, segurança e, acima de tudo, tranquilidade.
    `
  },
  {
    id: 'design-arquitetura',
    title: "Design e Arquitetura: Como o Fast Gate Eleva a Estética de Imóveis de Luxo",
    excerpt: "No mundo da arquitetura de alto padrão, cada elemento é cuidadosamente selecionado para complementar a visão estética e funcional de um projeto...",
    category: "Design",
    date: "08 de Outubro, 2025",
    author: "Dynamic Team",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    content: `
      # Design e Arquitetura: Como o Fast Gate Eleva a Estética de Imóveis de Luxo

      No mundo da arquitetura de alto padrão, cada elemento é cuidadosamente selecionado para complementar a visão estética e funcional de um projeto. O portão de entrada, muitas vezes o primeiro ponto de contato visual com a propriedade, desempenha um papel crucial nessa percepção. É aqui que o **Fast Gate** se destaca, não apenas como uma solução de segurança e conveniência, mas como uma peça de design que eleva a estética de imóveis de luxo.

      ## Integração Perfeita com a Arquitetura Moderna

      A beleza do Fast Gate reside em seu design minimalista e na sua capacidade de se integrar harmoniosamente a qualquer estilo arquitetônico. Graças à sua tecnologia All-in-One, que compacta todos os componentes internos, o Fast Gate elimina a necessidade de motores externos volumosos e trilhos aparentes. O resultado é uma silhueta limpa e discreta, que não interfere na linha visual da fachada.

      *   **Estética Limpa:** Sem caixas de motor visíveis ou fiações expostas, o portão se torna uma extensão natural do design da propriedade.
      *   **Personalização:** O Fast Gate pode ser revestido com diversos materiais, como madeira, metal, vidro ou compósitos, permitindo que arquitetos e designers personalizem o acabamento para combinar perfeitamente com a paleta de materiais e o estilo do imóvel.
      *   **Versatilidade:** Sua estrutura adaptável permite a instalação em diferentes tipos de portões, sejam eles deslizantes, pivotantes ou basculantes, mantendo sempre a elegância e a discrição.

      ## O Design que Acompanha a Inovação

      O Fast Gate é um exemplo de como a engenharia pode servir ao design. A funcionalidade avançada do sistema All-in-One não apenas otimiza o desempenho, mas também contribui para a sua estética superior. A ausência de elementos externos desnecessários confere ao portão uma aparência futurista e sofisticada, alinhada às tendências da arquitetura contemporânea.

      *   **Valorização do Imóvel:** Um portão com design impecável e tecnologia de ponta não só melhora a segurança e a conveniência, mas também agrega valor estético e financeiro à propriedade.
      *   **Primeira Impressão:** O portão é o cartão de visitas de um imóvel. O Fast Gate garante uma primeira impressão de modernidade, segurança e bom gosto.
      *   **Harmonia Visual:** A capacidade de personalização e a discrição do sistema permitem que o portão se torne um elemento de destaque positivo, em vez de um componente puramente funcional.

      ## Fast Gate: A Escolha dos Profissionais de Alto Padrão

      Arquitetos e designers de interiores que trabalham com projetos de luxo buscam soluções que não apenas atendam às expectativas de seus clientes, mas que as superem. O Fast Gate oferece essa combinação rara de funcionalidade superior e design excepcional, tornando-o a escolha preferida para quem não abre mão da excelência em cada detalhe.

      Com o Fast Gate, o portão de entrada deixa de ser apenas uma barreira e se transforma em uma declaração de estilo, inovação e segurança, elevando a experiência de viver em um imóvel de luxo.
    `
  },
  {
    id: 'seguranca-confiabilidade',
    title: "Segurança e Confiabilidade Inabaláveis: A Essência do Fast Gate para Sua Tranquilidade",
    excerpt: "Em um mundo onde a segurança é uma prioridade inegociável, o Fast Gate se posiciona como a solução definitiva para a proteção de imóveis de alto padrão...",
    category: "Segurança",
    date: "04 de Outubro, 2025",
    author: "Dynamic Team",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    content: `
      # Segurança e Confiabilidade Inabaláveis: A Essência do Fast Gate para Sua Tranquilidade

      Em um mundo onde a segurança é uma prioridade inegociável, especialmente para imóveis de alto padrão, o **Fast Gate** se posiciona como a solução definitiva para a proteção. Mais do que um portão automático, ele é um sistema robusto e inteligente, projetado para oferecer tranquilidade inabalável e confiabilidade em todas as situações.

      ## Engenharia de Segurança de Ponta

      A segurança do Fast Gate começa em sua concepção. A tecnologia All-in-One, que integra todos os componentes em um único corpo, não apenas otimiza o desempenho, mas também fortalece a estrutura contra tentativas de violação. Cada elemento é pensado para maximizar a proteção:

      ### 1. Sistema Anti-Esmagamento Original de Fábrica

      Um dos recursos mais críticos do Fast Gate é seu sistema anti-esmagamento. Diferente de soluções adaptadas, este é um componente original de fábrica, garantindo precisão e eficácia. Sensores inteligentes detectam qualquer obstáculo no caminho do portão e imediatamente revertem seu movimento, prevenindo acidentes com pessoas, animais ou veículos. Esta funcionalidade é vital para a segurança de famílias e para evitar danos materiais.

      ### 2. Durabilidade e Resistência

      Construído com materiais de alta qualidade e engenharia precisa, o Fast Gate é feito para durar. Sua robustez o torna resistente a intempéries, vandalismo e uso contínuo, mantendo sua integridade estrutural e funcionalidade ao longo do tempo. A confiabilidade do equipamento é um pilar fundamental da segurança que ele oferece.

      ### 3. Mecanismos de Travamento Avançados

      O Fast Gate incorpora mecanismos de travamento que garantem que o portão permaneça firmemente fechado quando não está em uso. Mesmo em caso de falta de energia, o sistema é projetado para manter a segurança, com opções de destravamento manual seguro para emergências.

      ## Confiabilidade em Todas as Condições

      A confiabilidade do Fast Gate se estende além de sua robustez física. Ele é projetado para operar de forma consistente e eficiente, minimizando a necessidade de manutenção e garantindo que esteja sempre pronto para proteger sua propriedade.

      *   **Testes Rigorosos:** Cada unidade passa por testes de qualidade exaustivos para garantir que atenda aos mais altos padrões de desempenho e segurança.
      *   **Manutenção Simplificada:** Graças ao seu design All-in-One, a manutenção é mais simples e menos frequente, garantindo a longevidade do sistema.
      *   **Suporte Técnico Especializado:** A Dynamic oferece suporte técnico qualificado para garantir que qualquer eventualidade seja resolvida rapidamente, mantendo a segurança do seu imóvel ininterrupta.

      ## Fast Gate: A Escolha para a Paz de Espírito

      Escolher o Fast Gate é investir na paz de espírito. É saber que sua propriedade está protegida por uma tecnologia de ponta, com um design que não compromete a segurança e uma confiabilidade que você pode confiar. Para quem busca a máxima proteção e tranquilidade, o Fast Gate é a solução inabalável.
    `
  },
  {
    id: 'experiencia-premium-dynamic',
    title: "Do Projeto à Instalação: A Experiência Premium Dynamic com o Fast Gate",
    excerpt: "Para um produto de luxo como o Fast Gate, a excelência não se limita apenas à tecnologia e ao design. Ela se estende por toda a jornada do cliente...",
    category: "Experiência do Cliente",
    date: "06 de Outubro, 2025",
    author: "Dynamic Team",
    readTime: "13 min",
    image: "https://images.unsplash.com/photo-1582213782179-e0dce38179a8?w=800&q=80",
    content: `
      # Do Projeto à Instalação: A Experiência Premium Dynamic com o Fast Gate

      Para um produto de luxo como o **Fast Gate**, a excelência não se limita apenas à tecnologia e ao design. Ela se estende por toda a jornada do cliente, desde o primeiro contato até o suporte pós-venda. A Dynamic compreende que a experiência é tão crucial quanto o produto em si, e por isso, oferece um serviço premium que garante total satisfação e tranquilidade.

      ## Uma Jornada Personalizada e Sem Preocupações

      A aquisição e instalação de um Fast Gate é um processo que a Dynamic torna simples, transparente e altamente profissional. Nossa abordagem é focada em entender as necessidades individuais de cada cliente e projeto, garantindo uma solução sob medida.

      ### 1. Consultoria Especializada e Planejamento Detalhado

      Tudo começa com uma consultoria aprofundada. Nossa equipe de especialistas trabalha em conjunto com arquitetos, designers e proprietários para entender as especificações do projeto, as expectativas estéticas e as demandas de segurança. Realizamos análises técnicas detalhadas para garantir que o Fast Gate seja a escolha perfeita, considerando fatores como espaço, fluxo e integração com outros sistemas de automação.

      ### 2. Instalação Precisa e Profissional

      A instalação do Fast Gate é realizada por uma equipe de técnicos altamente qualificados e treinados. Dada a tecnologia All-in-One e a precisão do equipamento, cada etapa é executada com o máximo rigor, garantindo que o portão funcione perfeitamente e se integre harmoniosamente à estrutura existente. A atenção aos detalhes durante a instalação é fundamental para a durabilidade e o desempenho do produto.

      ### 3. Suporte Pós-Venda e Manutenção Preventiva

      A Dynamic não apenas instala o Fast Gate; nós garantimos seu funcionamento contínuo. Oferecemos um suporte pós-venda ágil e eficiente, com técnicos prontos para atender a qualquer necessidade. Além disso, programas de manutenção preventiva asseguram a longevidade do equipamento e a máxima performance ao longo dos anos, protegendo seu investimento.

      ### 4. Personalização e Adaptação

      Entendemos que cada projeto é único. Por isso, o Fast Gate oferece opções de personalização que se adaptam às especificações de cada imóvel, desde o acabamento do portão até a integração com sistemas de automação residencial existentes. Nossa equipe trabalha para que o Fast Gate seja uma extensão perfeita do seu estilo de vida e da sua propriedade.

      ## Fast Gate: Mais Que um Produto, Uma Parceria

      A experiência premium Dynamic com o Fast Gate é mais do que a aquisição de um produto de alta tecnologia; é o início de uma parceria baseada na confiança, na excelência e no compromisso com a sua satisfação. Do projeto inicial ao suporte contínuo, estamos ao seu lado para garantir que o Fast Gate supere todas as suas expectativas, proporcionando segurança, beleza e conveniência inigualáveis.
    `
  }
];

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPostsData.find(p => p.id === postId);

  if (!post) {
    return <div className="container mx-auto px-4 py-8 text-center text-red-500">Post não encontrado.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
      <Badge className="bg-green-500 text-white mb-4">{post.category}</Badge>
      <h1 className="text-5xl font-bold text-blue-800 mb-4">{post.title}</h1>
      <p className="text-gray-600 text-lg mb-6">Por {post.author} em {post.date} &bull; {post.readTime}</p>
      <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link to="/artigos" className="mt-8 inline-block text-blue-600 hover:underline">&larr; Voltar para Artigos</Link>
    </div>
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredPosts = blogPostsData.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src={FastGateLogo} alt="Fast Gate Logo" className="h-10" /> {/* Logo do Fast Gate */}
                
              </Link>
            </div>
            
            {/* Navegação Desktop */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-200 transition-colors duration-300">Início</Link>
              <Link to="/artigos" className="hover:text-blue-200 transition-colors duration-300">Artigos</Link>
              <Link to="/tecnologia" className="hover:text-blue-200 transition-colors duration-300">Tecnologia</Link>
              <Link to="/projeto" className="hover:text-blue-200 transition-colors duration-300">Projeto</Link>
              <Link to="/contato" className="hover:text-blue-200 transition-colors duration-300">Contato</Link>
            </nav>

            {/* Botão de Menu Mobile */}
            <div className="md:hidden">
              <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <nav className="md:hidden bg-blue-700 pb-4">
              <div className="flex flex-col items-center space-y-2">
                <Link to="/" className="block text-white hover:text-blue-200 py-2" onClick={() => setIsMenuOpen(false)}>Início</Link>
                <Link to="/artigos" className="block text-white hover:text-blue-200 py-2" onClick={() => setIsMenuOpen(false)}>Artigos</Link>
                <Link to="/tecnologia" className="block text-white hover:text-blue-200 py-2" onClick={() => setIsMenuOpen(false)}>Tecnologia</Link>
                <Link to="/projeto" className="block text-white hover:text-blue-200 py-2" onClick={() => setIsMenuOpen(false)}>Projeto</Link>
                <Link to="/contato" className="block text-white hover:text-blue-200 py-2" onClick={() => setIsMenuOpen(false)}>Contato</Link>
              </div>
            </nav>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-lg shadow-xl p-8 md:p-16 mb-12 flex flex-col md:flex-row items-center justify-between overflow-hidden">
                  <div className="relative z-10 md:w-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-2 rounded-full mb-4 text-sm font-semibold">TECNOLOGIA 100% EXCLUSIVA</Badge>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Fast Gate: Redefinindo o Acesso de Luxo</h1>
                    <p className="text-lg md:text-xl mb-6 opacity-90">Descubra a inovação, segurança e design que transformam seu portão em uma experiência única.</p>
                    <Link to="/projeto">
                      <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                        Conheça o Projeto <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  <div className="relative md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
                    {/* Placeholder para imagem ou animação do Fast Gate */}
                    <div className="w-full h-64 md:h-80 bg-blue-400 rounded-lg flex items-center justify-center text-blue-900 font-semibold text-xl opacity-80">
                      <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80" alt="Fast Gate" className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </section>

                {/* Seção de Destaques */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Por Que Escolher Fast Gate?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <CardTitle className="text-xl font-semibold text-blue-800">3x MAIS RÁPIDO</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>Abertura e fechamento em tempo recorde, otimizando seu tempo e segurança.</CardDescription>
                      </CardContent>
                    </Card>
                    <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <CardTitle className="text-xl font-semibold text-blue-800">100% MAIS SEGURO</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>Sistema anti-esmagamento original de fábrica e tecnologia de ponta para sua proteção.</CardDescription>
                      </CardContent>
                    </Card>
                    <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <CardTitle className="text-xl font-semibold text-blue-800">TUDO EM UM</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>Tecnologia All-in-One: motor, freio e sistema de tração integrados em um único corpo.</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Seção de Artigos Recentes */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Artigos Recentes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(0, 3).map(post => (
                      <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <CardHeader className="flex-grow">
                          <Badge className="bg-green-500 text-white w-fit mb-2">{post.category}</Badge>
                          <CardTitle className="text-xl font-semibold text-blue-800 hover:text-blue-600"><Link to={`/post/${post.id}`}>{post.title}</Link></CardTitle>
                          <CardDescription className="text-gray-600 text-sm mt-2">{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>{post.date} &bull; {post.readTime}</span>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  <div className="text-center mt-8">
                    <Link to="/artigos">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                        Ver Todos os Artigos <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </section>

                {/* Seção de Newsletter */}
                <section className="bg-blue-100 p-8 rounded-lg shadow-md text-center mb-12">
                  <h2 className="text-3xl font-bold text-blue-800 mb-4">Assine Nossa Newsletter</h2>
                  <p className="text-lg text-gray-700 mb-6">Receba as últimas novidades, artigos exclusivos e ofertas especiais do Fast Gate diretamente na sua caixa de entrada.</p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Input type="email" placeholder="Seu melhor e-mail" className="max-w-sm p-3 rounded-lg border-2 border-blue-300 focus:border-blue-500" />
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">Assinar</Button>
                  </div>
                </section>
              </div>
            } />
            <Route path="/post/:postId" element={<BlogPost />} />
            <Route path="/artigos" element={<ArtigosPage posts={blogPostsData} />} />
            <Route path="/tecnologia" element={<TecnologiaPage posts={blogPostsData} />} />
            <Route path="/projeto" element={<ProjetoPage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="mb-4 md:mb-0">
                <img src={FastGateLogo} alt="Fast Gate Logo" className="h-12 mx-auto md:mx-0 mb-2" />
                <p className="text-lg font-bold">Fast Gate</p>
                <p className="text-sm text-gray-400">Redefinindo o Acesso de Luxo</p>
              </div>
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Navegação</h3>
                <ul className="space-y-1">
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Início</Link></li>
                  <li><Link to="/artigos" className="text-gray-400 hover:text-white transition-colors duration-300">Artigos</Link></li>
                  <li><Link to="/tecnologia" className="text-gray-400 hover:text-white transition-colors duration-300">Tecnologia</Link></li>
                  <li><Link to="/projeto" className="text-gray-400 hover:text-white transition-colors duration-300">Projeto</Link></li>
                  <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors duration-300">Contato</Link></li>
                </ul>
              </div>
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Contato</h3>
                <p className="text-gray-400 flex items-center justify-center md:justify-start mb-1"><Mail className="h-4 w-4 mr-2" /> info@fastgate.com.br</p>
                <p className="text-gray-400 flex items-center justify-center md:justify-start mb-1"><Phone className="h-4 w-4 mr-2" /> +55 (11) 98765-4321</p>
                <p className="text-gray-400 flex items-center justify-center md:justify-start"><MapPin className="h-4 w-4 mr-2" /> São Paulo, Brasil</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Siga-nos</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Facebook className="h-6 w-6" /></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Instagram className="h-6 w-6" /></a>
                  {/* Adicione mais ícones de redes sociais conforme necessário */}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 mt-6 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Fast Gate. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

