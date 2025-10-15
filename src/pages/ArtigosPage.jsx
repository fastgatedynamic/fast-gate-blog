import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';

const ArtigosPage = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Todos os Artigos</h1>
      <p className="text-lg text-center text-gray-700 mb-12">Confira todos os posts do blog do Fast Gate, explorando tecnologia, design, segurança e muito mais.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map(post => (
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
          <p className="col-span-full text-center text-gray-600">Nenhum artigo encontrado ainda.</p>
        )}
      </div>
    </div>
  );
};

export default ArtigosPage;

