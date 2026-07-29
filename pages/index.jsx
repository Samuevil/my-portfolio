// index.jsx
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';
import { projects } from '../data/projects';
import { useState } from 'react';

export default function Home() {
  const featuredProjects = projects.slice(0, 4);
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [nomeTouched, setNomeTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [mensagemTouched, setMensagemTouched] = useState(false);
  const NOME_MAX = 60;
  const EMAIL_MAX = 60;
  const MENSAGEM_MAX = 500;
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  

  const isNomeValid = nome.length > 0 && nome.length <= NOME_MAX;
  const isEmailValid = isValidEmail(email) && email.length <= EMAIL_MAX;
  const isMensagemValid = mensagem.length > 0 && mensagem.length <= MENSAGEM_MAX;
  const shouldShowNomeError = nomeTouched && !isNomeValid;
  const shouldShowEmailError = emailTouched && !isEmailValid;
  const shouldShowMensagemError = mensagemTouched && !isMensagemValid;
  const getNomeError = () => {
    if (nome.length === 0) return 'Nome é obrigatório';
    if (nome.length > NOME_MAX) return `Nome deve ter no máximo ${NOME_MAX} caracteres`;
    return '';
  };
  
  const getEmailError = () => {
    if (email.length === 0) return 'E-mail é obrigatório';
    if (!isValidEmail(email)) return 'Digite um e-mail válido (ex: nome@email.com)';
    if (email.length > EMAIL_MAX) return `E-mail deve ter no máximo ${EMAIL_MAX} caracteres`;
    return '';
  };
  
  const getMensagemError = () => {
    if (mensagem.length === 0) return 'Mensagem é obrigatória';
    if (mensagem.length > MENSAGEM_MAX) return `Mensagem deve ter no máximo ${MENSAGEM_MAX} caracteres`;
    return '';
  };
  

  const handleNomeChange = (e) => {
    const value = e.target.value;
    if (value.length <= NOME_MAX) {
      setNome(value);
    }
    setNomeTouched(true);
  };
  
  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (value.length <= EMAIL_MAX) {
      setEmail(value);
    }
    setEmailTouched(true);
  };
  
  const handleMensagemChange = (e) => {
    const value = e.target.value;
    if (value.length <= MENSAGEM_MAX) {
      setMensagem(value);
    }
    setMensagemTouched(true);
  };
  
  
  const handleBlur = (field) => {
    if (field === 'nome') setNomeTouched(true);
    if (field === 'email') setEmailTouched(true);
    if (field === 'mensagem') setMensagemTouched(true);
  };

  return (
    <>
      <Head>
        <title>Lucas Cardoso | Engenheiro de Software</title>
        <meta name="description" content="Portfólio de Lucas Cardoso, engenheiro de software com projetos em React, Next.js e Node.js." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seusite.com/" />
        <meta property="og:title" content="Lucas Cardoso | Engenheiro de Software" />
        <meta property="og:description" content="Portfólio de Lucas Cardoso - Engenheiro de Software. Veja meus projetos." />
        <meta property="og:image" content="/img/profile-samuevil.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lucas Cardoso | Engenheiro de Software" />
        <meta name="twitter:description" content="Portfólio de Lucas Cardoso - Engenheiro de Software." />
      </Head>

      <Header />

      <main className="page-content">
        <section id="inicio" className="hero">
          <div className="hero-copy">
            <p className="hero-greeting">Olá, meu nome é</p>
            <h1 className="hero-title">Lucas Cardoso</h1>
            <p className="hero-subtitle">Sou engenheiro de software em Montes Claros, Brasil.</p>
            <p className="hero-description">Construo aplicações web com React, Next.js e Node.js.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/curriculo/Lucas_Samuel_Desenvolvedor.pdf" download>
                Download CV
              </a>
              <a className="button button-secondary" href="#contato">Entrar em contato</a>
            </div>
          </div>

          <aside className="profile-card">
            <img
              className="avatar-image"
              src="/img/profile-samuevil.jpg"
              alt="Lucas Cardoso - Engenheiro de Software"
            />
          </aside>
        </section>

        <section className="section about-section">
          <div className="about-text">
            <p>
              Desenvolvo aplicações web completas — frontend, backend e banco de dados.
              Trabalho com React, Next.js, Node.js, APIs REST, autenticação e Git.
            </p>
            <p>
              Meus projetos são construídos do zero, com foco em código limpo, 
              arquitetura bem definida e boas práticas de desenvolvimento.
            </p>
            <p>
              Estou sempre em busca de novos desafios e oportunidades para aplicar 
              minhas habilidades na construção de soluções que realmente funcionam.
            </p>
          </div>
        </section>

        <section id="competencias" className="section competencias">
          <h3>Habilidades</h3>
          <Skills />
        </section>

        <section id="projetos" className="section projetos">
          <h3>Projetos</h3>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="view-all-container">
            <Link href="/projetos" className="view-all-btn">
              Ver todos os projetos
              <span className="icon-wrapper">
                <svg 
                  className="icon-default"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
                
                <svg 
                  className="icon-copy"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </Link>
          </div>
        </section>

        <section id="contato" className="section contact-section">
          <h2 className="contact-title">Entre em contato</h2>
          
          <form 
            action="https://formsubmit.co/lucascardoso.contato@outlook.com" 
            method="POST"
            className="contact-form"
            onSubmit={(e) => {
              setNomeTouched(true);
              setEmailTouched(true);
              setMensagemTouched(true);
              
              if (!isNomeValid || !isEmailValid || !isMensagemValid) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos corretamente.');
              }
            }}
          >
            <input type="hidden" name="_subject" value="Nova mensagem do portfólio" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="form-group">
              <label htmlFor="nome">
                Nome
                <span className={`required-asterisk ${shouldShowNomeError ? 'error' : ''} ${isNomeValid && nomeTouched ? 'valid' : ''}`}>
                  *
                </span>
              </label>
              <input 
                type="text" 
                id="nome"
                name="nome" 
                placeholder="Seu nome"
                value={nome}
                onChange={handleNomeChange}
                onBlur={() => handleBlur('nome')}
                className={shouldShowNomeError ? 'error' : ''}
                maxLength={NOME_MAX}
                required 
              />
              {shouldShowNomeError && (
                <span className="error-message">{getNomeError()}</span>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">
                E-mail
                <span className={`required-asterisk ${shouldShowEmailError ? 'error' : ''} ${isEmailValid && emailTouched ? 'valid' : ''}`}>
                  *
                </span>
              </label>
              <input 
                type="email" 
                id="email"
                name="email" 
                placeholder="Seu e-mail"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur('email')}
                className={shouldShowEmailError ? 'error' : ''}
                maxLength={EMAIL_MAX}
                required 
              />
              {shouldShowEmailError && (
                <span className="error-message">{getEmailError()}</span>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="mensagem">
                Mensagem
                <span className={`required-asterisk ${shouldShowMensagemError ? 'error' : ''} ${isMensagemValid && mensagemTouched ? 'valid' : ''}`}>
                  *
                </span>
                <span className={`char-counter ${mensagem.length > MENSAGEM_MAX * 0.8 ? 'warning' : ''} ${mensagem.length === MENSAGEM_MAX ? 'danger' : ''}`}>
                  {mensagem.length}/{MENSAGEM_MAX}
                </span>
              </label>
              <textarea 
                id="mensagem"
                name="mensagem" 
                placeholder="Sua mensagem"
                rows="5"
                value={mensagem}
                onChange={handleMensagemChange}
                onBlur={() => handleBlur('mensagem')}
                className={shouldShowMensagemError ? 'error' : ''}
                maxLength={MENSAGEM_MAX}
                required
              ></textarea>
              {shouldShowMensagemError && (
                <span className="error-message">{getMensagemError()}</span>
              )}
            </div>
            
            <button type="submit" className="button button-primary contact-submit-btn">
              Enviar mensagem
            </button>
          </form>
          
          <div className="contact-linkedin-wrapper">
            <a 
              href="https://www.linkedin.com/in/lucas-samuel-martins-cardoso-5115a7216/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button button-secondary linkedin-btn"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="18" 
                height="18" 
                fill="currentColor"
                className="linkedin-icon"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Entrar em contato pelo LinkedIn
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}