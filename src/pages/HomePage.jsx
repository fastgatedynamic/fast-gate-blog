import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = ({ blogPostsData }) => {
  // Filter articles for featured and recent
  const featuredArticle = blogPostsData[0]; // Assuming the first article is the featured one
  const recentArticles = blogPostsData.slice(1, 4); // Next 3 articles as recent

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      {featuredArticle && (
        <section className="hero-section" style={{ backgroundImage: `url(${featuredArticle.image})` }}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">{featuredArticle.title}</h1>
            <p className="hero-excerpt">{featuredArticle.excerpt}</p>
            <Link to={`/artigo/${featuredArticle.id}`} className="btn-primary">Leia Mais</Link>
          </div>
        </section>
      )}

      {/* Recent Articles Section */}
      <section className="recent-articles-section">
        <h2 className="section-title">Artigos Recentes</h2>
        <div className="articles-grid">
          {recentArticles.map(article => (
            <div key={article.id} className="news-article-card">
              <div className="image-container">
                <img src={article.image} alt={article.title} className="article-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="article-content">
                <span className="news-category-badge">{article.category}</span>
                <h3 className="news-headline"><Link to={`/artigo/${article.id}`}>{article.title}</Link></h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-meta">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-button-container">
          <Link to="/artigos" className="btn-secondary">Ver Todos os Artigos</Link>
        </div>
      </section>

      {/* Placeholder for other sections like categories or popular posts */}
    </div>
  );
};

export default HomePage;

