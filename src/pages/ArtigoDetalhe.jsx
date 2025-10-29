import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../App.css';

const ArtigoDetalhe = ({ posts }) => {
  const { id } = useParams();
  const article = posts.find(post => post.id === id);

  if (!article) {
    return <div className="article-detail-container container mx-auto px-4 py-12 max-w-4xl">Artigo não encontrado.</div>;
  }

  return (
    <div className="article-detail-container container mx-auto px-4 py-12 max-w-4xl">
      <div className="article-header">
        <img src={article.image} alt={article.title} className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg" />
        <div className="article-header-content">
          <span className="news-category-badge bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">{article.category}</span>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mt-4">{article.title}</h1>
          <p className="text-gray-500 text-sm mt-2 flex items-center space-x-4">
            Por {article.author} em {article.date} &bull; {article.readTime}
          </p>
        </div>
      </div>
      <div className="prose prose-lg max-w-none mt-8 text-gray-700">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
      <div className="back-to-articles">
        <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out mt-8">Voltar para a Página Principal</Link>
      </div>
    </div>
  );
};

export default ArtigoDetalhe;

