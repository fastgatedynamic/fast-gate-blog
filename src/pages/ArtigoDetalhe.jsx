import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../App.css';

const ArtigoDetalhe = ({ blogPostsData }) => {
  const { id } = useParams();
  const article = blogPostsData.find(post => post.id === id);

  if (!article) {
    return <div className="article-detail-container container mx-auto px-4 py-12 max-w-4xl">Artigo não encontrado.</div>;
  }

  return (
    <div className="article-detail-container container mx-auto px-4 py-12 max-w-4xl">
      <div className="article-header">
        <img src={article.image} alt={article.title} className="article-detail-image" />
        <div className="article-header-content">
          <span className="news-category-badge">{article.category}</span>
          <h1 className="article-detail-title">{article.title}</h1>
          <p className="article-detail-meta">
            Por {article.author} em {article.date} &bull; {article.readTime}
          </p>
        </div>
      </div>
      <div className="article-content-body">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
      <div className="back-to-articles">
        <Link to="/" className="btn-secondary">Voltar para a Página Principal</Link>
      </div>
    </div>
  );
};

export default ArtigoDetalhe;

