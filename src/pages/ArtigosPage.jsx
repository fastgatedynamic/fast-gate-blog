import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';

const ArtigosPage = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16 fade-in-up">
        <h1 className="text-5xl font-bold mb-4">Todos os Artigos</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Confira todos os posts do blog do Fast Gate, explorando tecnologia, design, segurança e muito mais.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map(post => (
            <Card key={post.id} className="news-article-card flex flex-col overflow-hidden">
              <div className="image-overlay">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              </div>
              <CardHeader className="flex-grow">
                <Badge className="news-category-badge w-fit mb-2">{post.category}</Badge>
                <CardTitle className="news-headline"><Link to={`/post/${post.id}`}>{post.title}</Link></CardTitle>
                <CardDescription className="text-gray-600 text-sm mt-2">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="news-meta flex justify-between items-center">
                <span>{post.author}</span>
                <span>{post.date} &bull; {post.readTime}</span>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">Nenhum artigo encontrado ainda.</p>
        )}
      </div>
    </div>
  );
};

export default ArtigosPage;

