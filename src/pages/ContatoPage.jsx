import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você integraria com um serviço de envio de e-mail (ex: Formspree, Netlify Forms, ou um backend)
    console.log('Dados do formulário de contato:', formData);
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Entre em Contato</h1>
      <p className="text-lg text-center text-gray-700 mb-8">Tem alguma dúvida, sugestão ou gostaria de solicitar um orçamento? Preencha o formulário abaixo ou entre em contato pelos nossos canais diretos.</p>

      <div className="max-w-xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <Mail className="h-8 w-8 text-blue-600 mb-2" />
          <h3 className="text-xl font-semibold text-blue-800">Email</h3>
          <p className="text-gray-700">info@fastgate.com.br</p>
        </div>
        <div className="flex flex-col items-center">
          <Phone className="h-8 w-8 text-blue-600 mb-2" />
          <h3 className="text-xl font-semibold text-blue-800">Telefone</h3>
          <p className="text-gray-700">+55 (11) 98765-4321</p>
        </div>
        <div className="flex flex-col items-center">
          <MapPin className="h-8 w-8 text-blue-600 mb-2" />
          <h3 className="text-xl font-semibold text-blue-800">Endereço</h3>
          <p className="text-gray-700">São Paulo, Brasil</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Envie-nos uma Mensagem</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome Completo</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Assunto</label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Assunto da mensagem"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensagem</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Sua mensagem..."
            rows="5"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar Mensagem
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContatoPage;

