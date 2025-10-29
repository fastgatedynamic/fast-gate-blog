import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import '../App.css';

const HomePage = ({ posts }) => {
  return (
    <div className="homepage-container">
      {/* Main Articles Grid */}
      <section className="articles-section">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(article => (
              <Card key={article.id} className="news-article-card flex flex-col overflow-hidden">
                <div className="image-overlay">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                </div>
                <CardHeader className="flex-grow">
                  <Badge className="news-category-badge w-fit mb-2">{article.category}</Badge>
                  <CardTitle className="news-headline"><Link to={`/artigo/${article.id}`}>{article.title}</Link></CardTitle>
                  <CardDescription className="text-gray-600 text-sm mt-2">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="news-meta flex justify-between items-center">
                  <span className="text-sm">{article.author}</span>
                  <span className="text-sm">{article.date} • {article.readTime}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

