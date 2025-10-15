import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';

const TecnologiaPage = ({ posts }) => {
  const tecnologiaPosts = posts.filter(post => post.category === 'Tecnologia');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">Tecnologia Fast Gate</h1>
      <p className="text-lg text-center text-gray-700 mb-12">Explore a inovação e a engenharia de ponta que tornam o Fast Gate um produto único no mercado de portões automáticos premium.</p>

      <section className="mb-12 p-8 bg-blue-50 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">A Inovação All-in-One do Fast Gate</h2>
        <p className="text-lg text-gray-800 mb-6 text-justify">
          O Fast Gate redefine o conceito de portões automáticos com sua tecnologia <strong>All-in-One</strong>, integrando motor, freio e sistema de tração em um único corpo tubular. Esta abordagem inovadora elimina componentes externos volumosos, resultando em um design minimalista e elegante que se harmoniza perfeitamente com a arquitetura de alto padrão.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Velocidade e Silêncio Incomparáveis</h3>
            <p className="text-gray-700 text-justify">
              Experimente a abertura e o fechamento do seu portão até <strong>3 vezes mais rápido</strong> do que os sistemas convencionais, com um funcionamento praticamente silencioso. O Fast Gate oferece conveniência sem perturbações, ideal para residências e estabelecimentos que valorizam a tranquilidade.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Segurança Avançada e Confiabilidade</h3>
            <p className="text-gray-700 text-justify">
              Com um sistema anti-esmagamento original de fábrica e componentes robustos, o Fast Gate garante a máxima segurança para sua família e patrimônio. Sua durabilidade e baixa necessidade de manutenção asseguram um investimento tranquilo e de longo prazo.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-800 text-justify">
          Nossa tecnologia é desenvolvida para oferecer uma experiência premium, combinando funcionalidade superior com uma estética impecável, elevando o padrão de acesso e segurança para o seu imóvel.
        </p>
      </section>

      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Artigos Relacionados à Tecnologia</h2>
      <p className="text-lg text-center text-gray-700 mb-12">Explore os artigos mais recentes sobre a inovação e a tecnologia por trás do Fast Gate.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tecnologiaPosts.length > 0 ? (
          tecnologiaPosts.map(post => (
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
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">Nenhum artigo de tecnologia encontrado ainda.</p>
        )}
      </div>
    </div>
  );
};

export default TecnologiaPage;

